import { formValidator } from "./pages/contact.js";
import { BASE_URL } from "./data/constants.js";
import { fetchData } from "./data/fetchApi.js";
import { dataHandler } from "./render/getPosts.js";
import { fetchSpecific } from "./data/fetchApi.js";
import { specificDataHandler } from "./render/getPost.js";

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
    break;
  case "/blogspecific/index.html":
    specificDataHandler();
    break;
  case "/blogs/index.html":
    dataHandler();
    break;
  case "/contact/index.html":
    formValidator();
    break;
  default:
    break;
}
