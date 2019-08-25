var burgerBtn = document.querySelector(".burger-btn");
var mainNav = document.querySelector(".main-nav");
var window = window.matchMedia("(min-width: 768px)");

burgerBtn.classList.remove("burger-btn--no-js");

burgerBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--close");
  burgerBtn.classList.toggle("burger-btn--cross");
  mainNav.classList.toggle("show-menu");
})

if (window.matchMedia("(max-width: 767px)").matches) {
  mainNav.classList.add("main-nav--close");
} else {
    mainNav.classList.remove("main-nav--close")
}
