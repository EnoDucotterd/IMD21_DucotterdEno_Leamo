var openBurger = document.querySelector(".header-nav");

var trigger = document.querySelector(".header-burger");

var activateBurger = function () {
  openBurger.classList.toggle("is-active");
};

openBurger.addEventListener("click", activateBurger);

trigger.addEventListener("click", activateBurger);

var rotateBurger = document.querySelector(".rotation");

var rotater = document.querySelector(".rotation");

var activateRotate = function () {
  rotateBurger.classList.toggle("is-rotated");
};

rotater.addEventListener("click", activateRotate);

openBurger.addEventListener("click", activateRotate);

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
