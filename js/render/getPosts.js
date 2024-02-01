export function renderPosts(postData) {
  const cardContainer = document.querySelector(".carouselCard");
  const card = document.createElement("div");
  card.classList.add("carouselCard");

  //   const test = document.querySelector(".headingBlogs");

  const title = document.createElement("h3");
  title.textContent = postData.title.rendered;
  title.classList.add("carouselCardTitle");

  card.append(title);
  cardContainer.append(card);
}
