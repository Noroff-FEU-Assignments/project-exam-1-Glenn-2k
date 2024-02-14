export async function hamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const hamburgerRotate = hamburger.querySelector(".HamburgerPins");

  hamburger.addEventListener("click", (event) => {
    hamburger.classList.toggle("active");
    hamburgerRotate.classList.toggle("rotate");
    navMenu.classList.toggle("hidden");

    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      hamburger.classList.remove("active");
      hamburgerRotate.classList.remove("rotate");
      navMenu.classList.add("hidden");
    }
  });
}
