var openBurger = document.querySelector(".header-nav");

var trigger = document.querySelector(".header-burger");

var activateBurger = function () {
  openBurger.classList.toggle("is-active");
};

trigger.addEventListener("click", activateBurger);
