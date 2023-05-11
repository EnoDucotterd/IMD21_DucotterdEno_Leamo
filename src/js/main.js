var openBurger = document.querySelector(".header-nav");

var trigger = document.querySelector(".header-burger");

var activateBurger = function () {
  openBurger.classList.toggle("is-active");
};

trigger.addEventListener("click", activateBurger);

var rotateBurger = document.querySelector(".header-burger");

var rotater = document.querySelector(".header-Burger");

var activateRotate = function () {
  rotateBurger.classList.toggle("is-rotated");
};

rotater.addEventListener("click", activateRotate);

// var openMockups = document.querySelector(".product-range");

// var reveal = document.querySelector(".button");

// var mockupsrevealed = function () {
//   openMockups.classList.toggle("is-revealed");
// };

// reveal.addEventListener("click", mockupsrevealed);

var buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  var id = button.dataset.products;
  var productRange = document.getElementById(id);
  button.addEventListener("click", () => {
    productRange.classList.toggle("is-revealed");
  });
});
