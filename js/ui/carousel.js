import { fetchData } from "../data/fetchApi.js";

export async function carouselHandler() {
  const posts = await fetchData();
  renderPosts(posts);
}

// dataHandler();

function renderPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    renderPost(post);
  }
}

function renderPost(posts) {
  const cardContainer = document.querySelector(".carouselWrapper");
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

export async function carousel() {
  const carouselSection = document.querySelector(".carouselSection");

  const btnLeft = document.createElement("div");
  btnLeft.classList.add("leftArrow");

  const btnLeftIcon = document.createElement("img");
  btnLeftIcon.src = "./images/right-arrow.png";
  btnLeftIcon.alt = "left arrow";
  btnLeftIcon.classList.add("leftArrowIcon");
  btnLeftIcon.classList.add("arrows");
  btnLeftIcon.id = "arrowLeft";

  const btnRight = document.createElement("div");
  btnRight.classList.add("rightArrow");

  const btnRightIcon = document.createElement("img");
  btnRightIcon.src = "./images/right-arrow.png";
  btnRightIcon.alt = "right arrow";
  btnRightIcon.classList.add("rightArrowIcon");
  btnRightIcon.classList.add("arrows");
  btnRightIcon.id = "arrowRight";

  btnRight.appendChild(btnRightIcon);
  btnLeft.appendChild(btnLeftIcon);
  carouselSection.appendChild(btnRight);
  carouselSection.appendChild(btnLeft);
}

export async function arrows() {
  const arrowLeft = document.getElementById("arrowLeft");
  const arrowRight = document.getElementById("arrowRight");
  const slider = document.querySelector(".carouselWrapper");

  // Amount of scroll per click
  const scrollAmount = 300;

  arrowLeft.addEventListener("click", () => {
    // Scrolls the slider left by subtracting the scroll amount
    slider.scrollLeft -= scrollAmount;
  });

  arrowRight.addEventListener("click", () => {
    // Scrolls the slider right by adding the scroll amount
    slider.scrollLeft += scrollAmount;
  });
}
