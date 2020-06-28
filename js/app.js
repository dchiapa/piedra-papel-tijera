// Variables
const usuario = document.querySelector('.usuario');
const IA = document.querySelector('.IA');
const jugadaUsuario = usuario.querySelector('img');
const jugadaIA = IA.querySelector('img');
const elijeUsuario = document.querySelector('#opciones');
const puntajeUsuario = document.querySelector('#puntosUsuario').firstChild;
const puntajeIA = document.querySelector('#puntosIA').firstChild;
const menu = document.getElementById('site-nav');
const menuToggle = document.getElementById('menu-toggle');
const menuReglas = document.querySelector('#menuInfo');
const menuReset = document.querySelector('#menuReset');

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
function alert(msg) {
  let contenedor = document.createElement('div');
  contenedor.innerHTML = `
  <p class="alertParrafo">${msg}</p>
  <span class="alertBtn">Ok</span>
  `;
  contenedor.classList.add('alertContainer');
  document.querySelector('body').appendChild(contenedor);
  let btn = contenedor.querySelector('.alertBtn');
  btn.addEventListener('click', e => {
    document.querySelector('body').removeChild(contenedor);
    jugadaIA.setAttribute('src', './img/vacio.png');
    jugadaUsuario.setAttribute('src', './img/vacio.png');
    elijeUsuario.addEventListener('click', seleccionUsuario);
  });
}

/*          Menu          */
function cambioMenu() {
  menu.classList.toggle('site-nav-open');
  menuToggle.classList.toggle('menu-open');
};
function verReglas(e) {
  e.preventDefault();
  cambioMenu();
  let container = document.createElement('div');
  container.classList.add('alertContainer', 'reglasContainer');
  container.innerHTML = `
    <h2>Reglas de juego</h2>
    <ul>
      <li>
        <p class="reglassParrafo">Los jugadores elijen el elemento, sin que el oponente lo vea, y luego se muestran juntos,
de modo que pueda verse el elemento que cada uno ha elegido:</p>
        <ul>        
          <li>Piedra: un puño cerrado.</li>
          <li>Papel: todos los dedos extendidos, con la palma de la mano de lado.</li>
          <li>Tijera: dedos índice y medio extendidos y separados formando una "V".</li>
        </ul>
      </li>
      <li>
        <p>El objetivo es vencer al oponente seleccionando el arma que gana, 
según las siguientes reglas:</p>
        <ul>
          <li>La piedra aplasta la tijera (Gana la piedra).</li>
          <li>La tijera corta el papel (Gana la tijera).</li>
          <li>El papel envuelve la piedra (Gana el papel).</li>
          <li>En caso de empate (que dos jugadores elijan el mismo elemento), se juega otra vez.</li>
        </ul>
      </li>
    </ul>
    <span class="alertBtn reglasBtn">Ok</span>
  `;
  document.querySelector('body').appendChild(container);
  container.querySelector('.reglasBtn').addEventListener('click', e => {
    document.querySelector('body').removeChild(container);
  });
}
function reset(e) {
  e.preventDefault();
  cambioMenu();
  puntosUsuario = 0;
  puntosIA = 0;
  puntajeIA.nodeValue = puntosIA;
  puntajeUsuario.nodeValue = puntosUsuario;
  jugadaIA.setAttribute('src', './img/vacio.png');
  jugadaUsuario.setAttribute('src', './img/vacio.png');
}

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
