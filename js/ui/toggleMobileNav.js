export async function hamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburger.classList.toggle("rotate");
    console.log(navMenu.classList);
    if (navMenu.classList.contains("hidden")) {
      navMenu.classList.remove("hidden");
    } else {
      navMenu.classList.add("hidden");
    }
  });
}
