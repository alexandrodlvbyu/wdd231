document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰ Menu";
    toggleButton.classList.add("nav-toggle");
    
    nav.prepend(toggleButton);
    
    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("open");
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});