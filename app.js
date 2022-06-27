const mobileMenu = document.querySelector(".mobile-menu");
const OpenMenu = document.querySelector(".hamburger");
const CloseMenu = document.querySelector(".close_mobile_menu");


function OpenHamburger() {
    mobileMenu.classList.toggle("open-menu");
    mobileMenu.style.display = 'block';

}

function CloseHamburger() {
    mobileMenu.classList.remove("open-menu");
    mobileMenu.style.display = 'none';
}

OpenMenu.addEventListener('click', OpenHamburger);
CloseMenu .addEventListener('click', CloseHamburger);
