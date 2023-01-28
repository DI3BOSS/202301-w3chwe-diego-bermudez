import Component from "../Component/Component.js";

class CardComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex--card card-list--card", "li");
  }

  render() {
    super.render();
    const pokedexLogo =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/25.gif";
    const logoHeight = "100%";
    const logoWidth = "100%";
    this.domElement.innerHTML = `<img src="${pokedexLogo}" with="${logoWidth}" height="${logoHeight}">
    <h2> Pikachu </h3>`;
  }
}

export default CardComponent;
