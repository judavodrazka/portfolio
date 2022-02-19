const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;

const body = document.querySelector("body");
const header = document.querySelector("header");
const navbar = document.querySelector("nav");
const main = document.querySelector("main");
const mainNavLinks = document.querySelector(".main-nav-links");
const hamburgerToggle = document.querySelector(".hamburger-menu-toggle");

console.log(viewportHeight);
header.style.height = `${viewportHeight}px`;
// header.setAttribute("height", `${viewportHeight}px`);

const options = {
  root: null, // it is the viewport
  threshold: 0,
  rootMargin: "-5px",
};

hamburgerToggle.addEventListener("click", () => {
  mainNavLinks.classList.toggle("opened");
  hamburgerToggle.classList.toggle("opened");
  navbar.classList.toggle("opened");
  mainNavLinks.classList.toggle("closed");
});
