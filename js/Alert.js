class Alert {
  constructor(msg, classList) {
    this.msg = msg;
    this.classList = classList;
    this.content = document.createElement('div');
    this.render();
  }
  render() {
    this.content.innerHTML = `
    <p>${this.msg}</p>
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
  }
}