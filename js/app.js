
let menu = new Menu();
let menuBtn = document.querySelector('#menu-toggle');
let menuReset = document.querySelector('#menuReset');
let menuReglas = document.querySelector('#menuReglas');
menuBtn.addEventListener('click', menu.cambioMenu);
menuReset.addEventListener('click', e => {
  menu.reset(e);
  menu.cambioMenu(e);
});
menuReglas.addEventListener('click', e => {
  menu.reglas(e);
  menu.cambioMenu(e);
});