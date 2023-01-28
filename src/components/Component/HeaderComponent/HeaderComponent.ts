import Component from "../Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex--header header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `<h1></h1>`;
  }
}

export default HeaderComponent;
