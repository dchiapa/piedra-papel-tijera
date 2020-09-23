function element(selector) {
  return document.querySelector(`${selector}`);
}
let btnHamburger = element(".header--hamburger");
let menuContainer = element(".header--menu");
btnHamburger.addEventListener("click", () => {
  if (
    !btnHamburger.classList.contains("active") &&
    !btnHamburger.classList.contains("not-active")
  ) {
    btnHamburger.classList.add("active");
    menuContainer.classList.add("active");
    return;
  }
  if (btnHamburger.classList.contains("active")) {
    btnHamburger.classList.remove("active");
    btnHamburger.classList.add("not-active");
    menuContainer.classList.remove("active");
    menuContainer.classList.add("not-active");
    return;
  } else {
    btnHamburger.classList.toggle("not-active");
    btnHamburger.classList.toggle("active");
    menuContainer.classList.toggle("not-active");
    menuContainer.classList.toggle("active");
    return;
  }
});
