function element(selector) {
  return document.querySelector(`${selector}`);
}
let btnHamburger = element(".header--hamburger");
let menuContainer = element(".header--menu");
btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("not-active");
  btnHamburger.classList.toggle("active");
  menuContainer.classList.toggle("not-active");
  menuContainer.classList.toggle("active");
});
