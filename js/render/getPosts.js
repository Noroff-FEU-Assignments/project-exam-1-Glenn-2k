import { fetchData } from "../data/fetchApi.js";
import { displayError } from "../data/errorHandling.js";
import { showLoading } from "../data/loading.js";
import { hideLoading } from "../data/loading.js";

export async function dataHandler() {
  showLoading();
  try {
    const posts = await fetchData();
    renderPosts(posts);
  } catch (error) {
    console.error(error);
    displayError();
  } finally {
    hideLoading();
  }
}

// dataHandler();

function renderPosts(posts) {
  try {
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      renderPost(post);
    }
  } catch (error) {
    console.error(error);
  } finally {
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

// VIEW MORE POSTS BUTTON //

export async function viewMorePosts() {
  showLoading();
  try {
    let currentOffset = 9;

    document
      .getElementById("viewMorePostsbtn")
      .addEventListener("click", async () => {
        const additionalPosts = await fetchData(4, currentOffset);
        renderPosts(additionalPosts);
        currentOffset += additionalPosts.length;

        if (additionalPosts.length < 4) {
          document.getElementById("viewMorePostsbtn").style.display = "none";
        }
      });
  } catch (error) {
    console.error(error);
    displayError();
  } finally {
    hideLoading();
  }
}
