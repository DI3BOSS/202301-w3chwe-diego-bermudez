import Component from "../Component/Component.js";

class FooterComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex--footer footer", "footer");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `<button class="next"> <span>more pokémon</span> <span>︾</span> </button>`;
  }
}

export default FooterComponent;
