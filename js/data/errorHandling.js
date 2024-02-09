export function displayError() {
  const errorMessage = document.getElementById("errorText");
  errorMessage.textContent =
    "Oops! Something went wrong. Please try again later.";
  errorMessage.style.display = "block";
}
