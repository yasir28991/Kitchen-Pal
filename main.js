import { products } from "./database/data.js";

let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector(".shopping-cart");
let loginForm = document.querySelector(".login-form");
let navBar = document.querySelector(".navbar");
const searchInput = document.getElementById("search-box");
const clearBtn = document.getElementById("clear-search");

let searchBtn = document.getElementById("search-btn");
let cartBtn = document.getElementById("cart-btn");
let loginBtn = document.getElementById("login-btn");
let menuBtn = document.getElementById("menu-btn");

// Determine rating stars
const generateRatingStars = rating => {
  let html = "";
  const fullStars = Math.floor(rating);
   // Number of full stars
  const halfStars = rating % 1 !== 0 ? 1 : 0; 
  // Number of half-stars (either 0 or 1)
  const emptyStars = 5 - fullStars - halfStars;
   // Number of empty stars
  for (let i = 0; i < fullStars; i++) {
    html += '<i class="fas fa-star"></i>'; 
    // Add a full star
  }
  if (halfStars > 0) {
    html += '<i class="fas fa-star-half"></i>'; 
    // Add a half-star if needed
  }
  for (let i = 0; i < emptyStars; i++) {
    html += '<i class="far fa-star"></i>'; 
    // Add an empty star
  }
  return html;
};


// variables for products
let productContainerOne = document.getElementById("product-container-one");
// render the products
function render() {
  products.forEach(product => {
    productContainerOne.innerHTML += `
  <div class="swiper-slide box">
    <img src="/Images/${product.img}" alt="p-1" />
    <h3>${product.name}</h3>
    <div class="price">${product.price}</div>
    <div class="rating">
      ${generateRatingStars(product.rating)}
    </div>
    <a href="#" class="btn">Add to cart</a>
  </div>
  `
  })
}

render()


// UI Code

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navBar.classList.remove("active");
};

cartBtn.onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navBar.classList.remove("active");
};

loginBtn.onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navBar.classList.remove("active");
};

menuBtn.onclick = () => {
  navBar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.addEventListener("scroll", () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navBar.classList.remove("active");
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// clear search Button
searchInput.addEventListener("input", () => {
  clearBtn.style.display = searchInput.value ? "block" : "none";
});

clearBtn.addEventListener("click", (e) => {
  searchInput.value = "";
  clearBtn.style.display = "none";
  e.preventDefault();
});
