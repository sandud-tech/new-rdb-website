
// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#siteNav");

if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {

        siteNav.classList.toggle("open");

        const isOpen = siteNav.classList.contains("open");

        navToggle.setAttribute("aria-expanded", isOpen);

    });
}

// Automatic footer year
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
