const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger-menu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const shadow = document.querySelector(".shadow");

function toggle() {
    if (navbar.classList.contains ("showNavbar")) {
        navbar.classList.remove("showNavbar");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        

    } else {
        navbar.classList.add("showNavbar");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        
    }
}

burger.addEventListener("click", toggle);