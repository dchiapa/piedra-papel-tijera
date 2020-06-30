class Menu {
  constructor() {
    this.menu = document.querySelector('#site-nav');
    this.menuToggle = document.querySelector('#menu-toggle');
    this.menuReglas = document.querySelector('#menuInfo');
    this.menuReset = document.querySelector('#menuReset');
  }
  cambioMenu() {
    this.menu = document.querySelector('#site-nav');
    this.menuToggle = document.querySelector('#menu-toggle');
    this.menu.classList.toggle('site-nav-open');
    this.menuToggle.classList.toggle('menu-open');
  }
  reset(e) {
    e.preventDefault();
    console.log('reset');
  }
  reglas(e) {
    e.preventDefault();
    console.log('reglas');
  }
}

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