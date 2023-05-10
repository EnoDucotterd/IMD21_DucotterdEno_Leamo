var openBurger = document.querySelector(".header-nav");

var trigger = document.querySelector(".header-burger");

var activateBurger = function () {
  openBurger.classList.toggle("is-active");
};

trigger.addEventListener("click", activateBurger);

var openMockup = document.querySelector(".product-range");

var slidder = document.querySelector(".button");

var activateMockup = function () {
  openMockup.classList.toggle(".is-slipped");
};

slidder.addEventListener("click", activateMockup);
