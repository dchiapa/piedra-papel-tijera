class Alert {
  render(msg, classList) {
    this.content = document.createElement('div');
    this.msg = msg;
    this.classList = classList;
    this.content.innerHTML = `
    <p class="alertParrafo">${this.msg}</p>
    <span class="alertBtn">Ok</span>
    `;
    this.classList.forEach(classes => {
      this.content.classList.add(classes);
    });
    document.querySelector('body').appendChild(this.content);
  }
  action() {
    this.content = document.querySelector('.alertContainer');
    document.querySelector('body').removeChild(this.content);
    juego.jugadaBot.setAttribute('src', './img/vacio.png');
    juego.jugadaUsuario.setAttribute('src', './img/vacio.png');
    juegoUsuario.addEventListener('click', juego.usuario);
  }
}