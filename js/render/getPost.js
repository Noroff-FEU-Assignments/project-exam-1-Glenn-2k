import { fetchSpecific } from "../data/fetchApi.js";

const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const postId = params.get("id");

export async function specificDataHandler() {
  const posts = await fetchSpecific(postId);
  specificPost(posts);
  console.log(posts);
}

// specificDataHandler();

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
}
