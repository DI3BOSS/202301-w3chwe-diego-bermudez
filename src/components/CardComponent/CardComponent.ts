import Component from "../Component/Component.js";
import type { CardComponentStructure } from "../types.js";

class CardComponent extends Component {
  image: string;
  name: string;

  constructor(parentElement: Element) {
    super(parentElement, "pokedex--card card-list--card", "li");
  }

  getPokeInfo = async (number: number) => {
    const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(`${pokeApiUrl}${number}`);
    const pokemonImage = (await response.json()) as Record<string, any>;
    this.image = pokemonImage.sprites.versions["generation-v"]["black-white"]
      .animated.front_default as string;
    this.name = pokemonImage.name as string;

    this.render();
  };

  render() {
    super.render();
    const logoHeight = "50%";
    const logoWidth = "50%";
    this.domElement.innerHTML = `<img src="${this.image}" with="${logoWidth}" height="${logoHeight}">
    <h2>${this.name}</h3>`;
  }
}

export default CardComponent;
