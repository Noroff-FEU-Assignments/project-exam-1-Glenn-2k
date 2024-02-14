export async function searchBar() {
  const inputElement = document.getElementById("searchInput");
  inputElement.addEventListener("keyup", function () {
    var value = this.value.toLowerCase();
    const containers = document.querySelectorAll(".carouselCard");
    containers.forEach(function (container) {
      const text = container.textContent.toLowerCase();
      if (text.indexOf(value) > -1) {
        container.style.display = "";
      } else {
        container.style.display = "none";
      }
    });
  });
}
