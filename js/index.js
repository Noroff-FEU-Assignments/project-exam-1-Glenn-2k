import { formValidator } from "./pages/contact.js";
import { BASE_URL } from "./data/constants.js";
import { fetchData } from "./data/fetchApi.js";
import { dataHandler, viewMorePosts } from "./render/getPosts.js";
import { fetchSpecific } from "./data/fetchApi.js";
import { specificDataHandler } from "./render/getPost.js";
import {
  carouselHandler,
  carousel,
  arrows,
  sliderFunction,
} from "./ui/carousel.js";

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
    carousel();
    arrows();
    sliderFunction();
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
    viewMorePosts();
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
