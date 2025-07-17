// Audio and Preloader
var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

// Settings Toggle
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// Toggle Visual Mode
function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (el) {
        el.classList.toggle("invertapplied");
    });
}

// Hamburger Menu Toggle
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");

    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Hide Menu by LI Click
function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");

    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Active Tab Scroll Highlight
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(current)) li.classList.add("activeThismobiletab");
    });

    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(current)) li.classList.add("activeThistab");
    });
});

// Back To Top Button
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

// Disable Right Click on Images
document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") e.preventDefault();
}, false);

const windowResize = () => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("resize", windowResize);
