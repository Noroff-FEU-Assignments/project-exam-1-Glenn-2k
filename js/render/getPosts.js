import { fetchData } from "../data/fetchApi.js";
import { fetchMoreData } from "../data/fetchApi.js";

export async function dataHandler() {
  const posts = await fetchData();
  renderPosts(posts);
}

// export async function dataHandler() {
//   const posts = await fetchMoreData();
//   renderPosts(posts);
// }

// dataHandler();

function renderPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    renderPost(post);
  }
}

function renderPost(posts) {
  const cardContainer = document.querySelector(".blogCardContainer");
  const card = document.createElement("div");
  card.classList.add("carouselCard", "alignCenter", "blogCardMargin");

  const featuredMedia = posts._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const img = document.createElement("img");
  img.src = featuredMedia;
  img.alt = posts.title.rendered;
  img.classList.add("carouselImage");
  card.append(img);

  const cardContent = document.createElement("div");
  cardContent.classList.add("carouselCardContent");

  const title = document.createElement("h3");
  title.textContent = posts.title.rendered;
  title.classList.add("carouselCardTitle");

  const excerpt = document.createElement("p");
  excerpt.innerHTML = posts.excerpt.rendered;
  excerpt.classList.add("carouselCardText");

  const readMore = document.createElement("a");
  readMore.textContent = "Read more";
  readMore.href = `/blogspecific/index.html?id=${posts.id}`;
  readMore.classList.add("carouselButton");

  card.appendChild(cardContent);
  cardContent.appendChild(title);
  cardContent.appendChild(excerpt);
  cardContent.appendChild(readMore);
  cardContainer.appendChild(card);
}
