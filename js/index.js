import { formValidator } from "./pages/contact.js";
import { BASE_URL } from "./data/constants.js";
import { fetchData } from "./data/fetchApi.js";
import { dataHandler } from "./render/getPosts.js";
import { fetchSpecific } from "./data/fetchApi.js";
import { specificDataHandler } from "./render/getPost.js";
import { carouselHandler } from "./ui/carousel.js";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  console.log(navMenu.classList);
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
  }
});

switch (window.location.pathname) {
  case "/":
  case "/index.html":
    carouselHandler();
    break;
  case "/blogspecific/index.html":
  case "/blogspecific/":
  case "/blogspecific":
    specificDataHandler();
    break;
  case "/blogs/index.html":
  case "/blogs/":
  case "/blogs":
    dataHandler();
    break;
  case "/contact/index.html":
  case "/contact/":
  case "/contact":
    formValidator();
    break;
  default:
    console.log("404 - not found");
    break;
}

const slider = document.querySelector(".carouselWrapper");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // The number 3 determines the sensitivity of the drag
  slider.scrollLeft = scrollLeft - walk;
});
