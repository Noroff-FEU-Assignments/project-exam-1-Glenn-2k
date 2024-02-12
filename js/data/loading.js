export async function showLoading() {
  const loadingVisible = document.getElementById("loading");
  loadingVisible.style.display = "flex";
}

export async function hideLoading() {
  const loadinginvisible = document.getElementById("loading");
  loadinginvisible.style.display = "none";
}
