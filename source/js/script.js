var burgerBtn = document.querySelector(".burger-btn");
var mainNav = document.querySelector(".main-nav");

burgerBtn.classList.remove("burger-btn--no-js");
mainNav.classList.add("main-nav--close");

burgerBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--close");
})
