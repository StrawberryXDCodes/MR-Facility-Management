// ===========================================
// MR Facility Management Services
// script.js
// ===========================================

// Sticky Navbar Shadow
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

// ===========================================
// Scroll To Top Button
// ===========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===========================================
// Smooth Scrolling
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ===========================================
// Contact Form
// ===========================================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your enquiry has been received. We will contact you shortly.");

        form.reset();

    });

}

// ===========================================
// Active Navigation
// ===========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================================
// Counter Animation
// ===========================================

const counters = document.querySelectorAll(".stats h2");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const text = counter.innerText;

        const number = parseInt(text);

        if (isNaN(number)) return;

        let count = 0;

        const speed = Math.ceil(number / 100);

        const update = () => {

            count += speed;

            if (count < number) {

                counter.innerText = count + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = text;

            }

        };

        update();

    });

}

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        startCounters();
    }

});

// ===========================================
// Gallery Hover Effect
// ===========================================

document.querySelectorAll(".gallery-img").forEach(image => {

    image.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    image.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});

// ===========================================
// Fade Animation
// ===========================================

const cards = document.querySelectorAll(
    ".service-card, .feature-box, .industry-card, .testimonial-box"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// ===========================================
// Current Year in Footer (Optional)
// ===========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===========================================
// End of File
// ===========================================