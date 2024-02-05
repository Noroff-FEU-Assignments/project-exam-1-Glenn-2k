import { fetchSpecific } from "../data/fetchApi.js";

const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const postId = params.get("id");

async function specificDataHandler() {
  const posts = await fetchSpecific(postId);
  postHandler(posts);
}

specificDataHandler();

export async function specificPost(postHandler) {
  const specificContainer = document.querySelector(".specificBlogSection");
  const specificHeading = document.createElement("h2");
  specificHeading.textContent = postHandler.title.rendered;
  specificHeading.classList.add("headingSpecific");

  const blogDate = document.createElement("p");
  blogDate.classList.add("blogDate");

  specificContainer.appendChild(blogDate);
  specificContainer.appendChild(specificHeading);
}
