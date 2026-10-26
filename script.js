// Animate sections when they appear on screen
const revealItems = document.querySelectorAll(".reveal");
const skillCards = document.querySelectorAll(".skill-card");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealItems.forEach((item) => {
    revealObserver.observe(item);
});

// Make skill-card progress lines animate when the cards appear
skillCards.forEach((card) => {
    revealObserver.observe(card);
});

// Add a small shadow to the navbar after scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Highlight the navigation link for the current section
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );
            });
        }
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach((section) => {
    sectionObserver.observe(section);
});

// Close the mobile menu after selecting a section
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const menu = document.querySelector("#navbarMenu");
        if (menu.classList.contains("show") && window.bootstrap) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
