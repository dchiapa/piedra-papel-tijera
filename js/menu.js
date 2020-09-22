let btnHamburger = document.querySelector(".header--hamburger");
btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("not-active");
  btnHamburger.classList.toggle("active");
});
