var burgerBtn = document.querySelector(".burger-btn");
var mainNav = document.querySelector(".main-nav");
var window = window.matchMedia("(min-width: 768px)");

burgerBtn.classList.remove("burger-btn--no-js");


burgerBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--close");
})

if (window.matchMedia("(max-width: 768px)").matches) {
  mainNav.classList.add("main-nav--close");
}
