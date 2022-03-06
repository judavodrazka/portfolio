const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;

const body = document.querySelector("body");
const header = document.querySelector("header");
const navbar = document.querySelector("nav");
const main = document.querySelector("main");
const mainNavLinks = document.querySelector(".main-nav-links");
const navLinks = document.querySelectorAll(".main-nav-links>li>a");
const hamburgerToggle = document.querySelector(".hamburger-menu-toggle");

const articles = document.querySelectorAll(".skill-article");

if (viewportWidth <= 600) {
  header.classList.add("mobile");
}

articles.forEach((articlesItem) => {
  articlesItem.addEventListener("click", () => {
    articlesItem.classList.toggle("clicked");
  });
});

// header.style.height = `${viewportHeight}px`;
// header.setAttribute("height", `${viewportHeight}px`);

const options = {
  root: null, // it is the viewport
  threshold: 0,
  rootMargin: "-5px",
};

const toggleOpenedClass = () => {
  mainNavLinks.classList.toggle("opened");
  hamburgerToggle.classList.toggle("opened");
  navbar.classList.toggle("opened");
};

hamburgerToggle.addEventListener("click", () => {
  toggleOpenedClass();
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    toggleOpenedClass();
  });
});
