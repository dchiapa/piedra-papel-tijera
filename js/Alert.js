class Alert {
  constructor(msg, classList) {
    this.msg = msg;
    this.classList = classList;
    this.content = document.createElement('div');
    this.render();
  }
  render() {
    this.content.innerHTML = `
    <p class="${this.classList}">${this.msg}</p>
    <span class="alertBtn">Ok</span>
    `;
    this.content.classList.add('alertContainer');
    document.querySelector('body').appendChild(this.content);
  }
  action() {
    this.content = document.querySelector('.alertContainer');
    document.querySelector('body').removeChild(this.content);
  }
}