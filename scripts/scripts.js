const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


var frmvalidator  = new Validator("newsLetterForm");
frmvalidator.addValidation("subscriberName","req","Please provide your name");
frmvalidator.addValidation("subscriberEmail","req","Please provide your email");
frmvalidator.addValidation("subscriberEmail","email","Please enter a valid email address");