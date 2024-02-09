import { fetchSpecific } from "../data/fetchApi.js";
import { displayError } from "../data/errorHandling.js";
import { showLoading } from "../data/loading.js";
import { hideLoading } from "../data/loading.js";

const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const postId = params.get("id");

export async function specificDataHandler() {
  showLoading();
  try {
    const posts = await fetchSpecific(postId);
    specificPost(posts);
  } catch (error) {
    console.error(error);
    displayError();
  } finally {
    hideLoading();
  }
}

export async function specificPost(post) {
  const specificContainer = document.querySelector(".specificBlogSection");
  const specificHeading = document.createElement("h2");
  specificHeading.textContent = post.title.rendered;
  specificHeading.classList.add("headingSpecific");

  const blogDate = document.createElement("time");
  const postDate = new Date(post.date);
  blogDate.textContent = postDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  blogDate.classList.add("blogDate");

  const specificBlogText = document.createElement("div");
  specificBlogText.innerHTML = post.content.rendered;
  specificBlogText.classList.add("blogContent");

  specificContainer.appendChild(specificHeading);
  specificContainer.appendChild(blogDate);
  specificContainer.appendChild(specificBlogText);

  specificContainer.querySelectorAll(".blogContent img").forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      const modal = document.getElementById("imgModal");
      const modalImg = document.getElementById("modalImg");
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });

  function titleHandler() {
    document.title = `CabinCrafts | ${post.title.rendered}`;
  }

  titleHandler();

  // CLOSING THE MODAL
  const modal = document.getElementById("imgModal");
  const span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
