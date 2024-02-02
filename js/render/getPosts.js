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



    function renderPosts(posts) {
      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        renderPost(post);
      }
    }
    




export async function renderPost(posts) {
  console.log(typeof posts);
  const cardContainer = document.querySelector(".blogCardContainer");
  const card = document.createElement("div");
  card.classList.add("carouselCard", "alignCenter", "blogCardMargin");


  const featuredMedia = posts._embedded?.['wp:featuredmedia']?.[0]?.source_url;

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
      excerpt.textContent = posts.excerpt.rendered;
      excerpt.classList.add("carouselCardText");

      card.appendChild(cardContent);
      cardContent.appendChild(title);
      cardContent.appendChild(excerpt);    
  cardContainer.appendChild(card);
}

