import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex--header header", "header");
  }

  render() {
    super.render();
    const pokedexLogo = "img/pokedex_logo_mobile.png";
    this.domElement.innerHTML = `<img src="${pokedexLogo}" with="277" height="50" alt="Pokedex by di3boss" class="main-title">`;
  }
}

export default HeaderComponent;
