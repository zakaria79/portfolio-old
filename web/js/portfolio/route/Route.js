export default class Route {
  constructor(page) {
    this.name = page.name;
    this.title = page.title;
    this.stateObj = {};
    this.titleElt = document.querySelector('#title');
    this.element = document.querySelector('#' + page.name);
    this.buttons = document.querySelectorAll('.' + page.name + 'Button');
    this.activeButton = this.buttons[0];
  }


  changePage() {
    this.element.hidden = true;
    this.buttons[0].classList.remove('active');
  }

  render() {
    this.element.hidden = false;
    this.buttons[0].classList.add('active');
    this.element.classList.remove('hide_page');
    this.titleElt.textContent = this.title;
    this.stateObj.pageName = this.name;
  }

  pushState() {
    window.history.pushState(this.stateObj, 'nextPage', this.name);
  }

  fadeOut() {
    this.element.classList.add('hide_page');
  }
}
