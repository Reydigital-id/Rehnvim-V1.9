// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#searchBox");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// ketika menu diklik

// klik diluar sidebar
const hm = document.querySelector("#menu");
const sb = document.querySelector("#search-btn");
const sc = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const modal = document.querySelector("#itemModal");
const modalButtons = document.querySelectorAll(".item-detail-btn");

modalButtons.forEach((btn) => {
    btn.onclick = (e) => {
      modal.style.display = "flex";
      e.preventDefault();
    };
})


// klik tombol close
document.querySelector(".close-icon").onclick = (e) => {
  modal.style.display = "none";
  e.preventDefault();
};

// diluar modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
