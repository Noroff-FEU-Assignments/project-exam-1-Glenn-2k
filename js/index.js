import { validateForm } from "./pages/contact.js";
import { BASE_URL } from "./data/constants.js";
import { fetchData } from "./data/fetchApi.js";
import { renderPost } from "./render/getPosts.js";
import { fetchSpecific } from "./data/fetchApi.js";

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
