export function displayErrorMessage(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = "toast-message";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fade-out"); // Use CSS to fade out
    toast.addEventListener("transitionend", () => toast.remove());
  }, 3000);
}
