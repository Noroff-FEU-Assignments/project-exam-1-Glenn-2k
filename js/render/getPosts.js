import { fetchData } from "../data/fetchApi.js";

fetchData().then((posts) => {
  posts.forEach((post) => {
    renderPosts(post); // Call renderPosts for each post
  });
});

export async function renderPosts(posts) {
  console.log(typeof posts);
  const cardContainer = document.querySelector(".blogCardContainer");
  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("carouselCard");

    const title = document.createElement("h3");
    title.textContent = post.title.rendered;
    title.classList.add("carouselCardTitle");

    card.appendChild(title);
    cardContainer.appendChild(card);
  });
}
