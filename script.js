const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger-menu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const dimmer = document.querySelector(".dimmer");

function toggle() {
    if (navbar.classList.contains ("showNavbar")) {
        navbar.classList.remove("showNavbar");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        dimmer.style.display = "none";              

    } else {
        navbar.classList.add("showNavbar");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        dimmer.style.display = "block";
    }
}

burger.addEventListener("click", toggle);
