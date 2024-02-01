// import { validateForm } from "./pages/contact.js";
import { BASE_URL } from "./data/constants.js";
import { fetchData } from "./data/fetchApi.js";
import { renderPosts } from "./render/getPosts.js";

renderPosts();

// async function router() {
//   switch (location.pathname) {
//     case "/":
//       await fetchData();
//       break;
//     case "/contact/":
//       validateForm();
//       break;
//     case "/blogs/":
//       renderPosts();
//       try {
//         };
//       } catch (error) {
//         console.log(error);
//       }
//       console.log("blogs");
//       break;
//     default:
//       console.log("404");
//   }
// }

// const posts = await fetchData();
// posts.forEach = (post) => {
//   console.log(post);
//   renderPosts(post);
// };

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  console.log(navMenu.classList);
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
  }
});
