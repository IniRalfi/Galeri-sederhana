document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const homeLink = document.querySelector('.nav-links ul li a');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    homeLink.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });
});