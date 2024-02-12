export async function hamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const hamburgerRotate = hamburger.querySelector(".HamburgerPins");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerRotate.classList.toggle("rotate");
    navMenu.classList.toggle("hidden");
  });
}
