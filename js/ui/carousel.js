import { displayError } from "../data/errorHandling.js";
import { fetchData } from "../data/fetchApi.js";
import { showLoading } from "../data/loading.js";
import { hideLoading } from "../data/loading.js";

export async function carouselHandler() {
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

function renderPosts(posts) {
  showLoading();
  try {
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      renderPost(post);
    }
  } catch (error) {
    console.error(error);
    displayError();
  } finally {
    hideLoading();
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
  const cardContainer = document.querySelector(".carouselWrapper");
  const flexContainer = document.createElement("div");

  flexContainer.classList.add("flex");

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
  flexContainer.appendChild(btnLeft);
  flexContainer.appendChild(cardContainer);
  flexContainer.appendChild(btnRight);

  carouselSection.appendChild(flexContainer);
}

export async function arrows() {
  const arrowLeft = document.getElementById("arrowLeft");
  const arrowRight = document.getElementById("arrowRight");
  const slider = document.querySelector(".carouselWrapper");

  const scrollAmount = 300;

  arrowLeft.addEventListener("click", () => {
    slider.scrollLeft -= scrollAmount;
  });

  arrowRight.addEventListener("click", () => {
    slider.scrollLeft += scrollAmount;
  });
}

export function sliderFunction() {
  const slider = document.querySelector(".carouselWrapper");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  });
}
