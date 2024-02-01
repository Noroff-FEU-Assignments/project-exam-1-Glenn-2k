import { fetchData } from "../data/fetchApi.js";

async function dataHandler() {
  //   await fetchData().then((posts) => {
  //     posts.forEach((post) => {
  //       renderPosts(post);
  //     });
  //   });
  const posts = await fetchData();
  renderPosts(posts);
}

dataHandler();

export async function renderPost(posts) {
  console.log(typeof posts);
  const cardContainer = document.querySelector(".blogCardContainer");
  const card = document.createElement("div");
  card.classList.add("carouselCard");

  const title = document.createElement("h3");
  title.textContent = posts.title.rendered;
  title.classList.add("carouselCardTitle");

  card.appendChild(title);
  cardContainer.appendChild(card);
}

function renderPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    renderPost(post);
  }
}
