// Variables
const usuario = document.querySelector('.usuario');
const IA = document.querySelector('.IA');
const jugadaUsuario = usuario.querySelector('img');
const jugadaIA = IA.querySelector('img');
const elijeUsuario = document.querySelector('#opciones');
const puntajeUsuario = document.querySelector('#puntosUsuario').firstChild;
const puntajeIA = document.querySelector('#puntosIA').firstChild;


let puntosUsuario = 0;
let puntosIA = 0;
let eleccionUsuario;
let eleccionIA;
let imgIA = '';
let imgUsuario = '';
let ganador = '';

// EventListeners
elijeUsuario.addEventListener('click', seleccionUsuario);
menuToggle.addEventListener('click', cambioMenu);
menuReglas.addEventListener('click', verReglas);
menuReset.addEventListener('click', reset);

// Funciones
/*          Menu          */


/*          App          */

function seleccionUsuario(e) {
  e.stopPropagation();
  elijeUsuario.removeEventListener('click', seleccionUsuario);
  switch (e.target.id) {
    case 'usuPiedra':
      eleccionUsuario = 0;
      break;
    case 'usuPapel':
      eleccionUsuario = 1;
      break;
    case 'usuTijera':
      eleccionUsuario = 2;
      break;
  }
  eleccionIA = seleccionIA();
  juego(eleccionIA, eleccionUsuario);
}
function seleccionIA() {
  eleccionIA = Math.floor(Math.random() * (3 - 0)) + 0;
  return eleccionIA;
}

function juego(eleccionIA, eleccionUsuario) {
  if (eleccionIA == eleccionUsuario) {
    ganador = 'Empate';
  } else if ((eleccionUsuario == 0 && eleccionIA == 1) || (eleccionUsuario == 1 && eleccionIA == 2) || (eleccionUsuario == 2 && eleccionIA == 0)) {
    puntosIA++;
    ganador = 'Gana IA';
  } else if ((eleccionUsuario == 0 && eleccionIA == 2) || (eleccionUsuario == 1 && eleccionIA == 0) || (eleccionUsuario == 2 && eleccionIA == 1)) {
    puntosUsuario++;
    ganador = 'Gana Usuario';
  }
  switch (eleccionIA) {
    case 0:
      imgIA = './img/piedra.png';
      break;
    case 1:
      imgIA = './img/papel.png';
      break;
    case 2:
      imgIA = './img/tijera.png';
      break;
  }
  switch (eleccionUsuario) {
    case 0:
      imgUsuario = './img/piedra.png';
      break;
    case 1:
      imgUsuario = './img/papel.png';
      break;
    case 2:
      imgUsuario = './img/tijera.png';
      break;
  }
  setTimeout((imgIA, imgUsuario) => {
    puntajeIA.nodeValue = puntosIA;
    puntajeUsuario.nodeValue = puntosUsuario;
    jugadaIA.setAttribute('src', imgIA);
    jugadaUsuario.setAttribute('src', imgUsuario);
    alert(ganador);
  }, 1500, imgIA, imgUsuario);
}
