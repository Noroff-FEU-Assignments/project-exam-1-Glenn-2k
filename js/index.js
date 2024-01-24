// import { hamburgerToggle } from "./ui/toggleMobileNav";

// hamburgerToggle();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// console.log(navMenu);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  console.log(navMenu.classList);
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
  }
});

// console.log(hamburgerToggle);
