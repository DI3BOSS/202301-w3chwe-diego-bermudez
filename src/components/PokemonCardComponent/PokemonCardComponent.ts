import Component from "../Component/Component.js";

class CardComponent extends Component {
  image: string;
  name: string;

  constructor(parentElement: Element) {
    super(parentElement, "pokedex--card card-list--card card", "li");
  }

  getPokeInfo = async (number: number) => {
    const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";
    const responseFromPokeApi = await fetch(`${pokeApiUrl}${number}`);
    const pokemonImage = (await responseFromPokeApi.json()) as Record<
      string,
      any
    >;
    this.image = pokemonImage.sprites.versions["generation-v"]["black-white"]
      .animated.front_default as string;
    this.name = pokemonImage.name as string;

    this.render();
  };

  render() {
    super.render();
    const imageHeight = "50%";
    const imageWidth = "50%";
    this.domElement.innerHTML = `
    <img src="${this.image}" 
      class="card--pokemon-image
      with="${imageWidth}" 
      height="${imageHeight}"
      alt="animation of ${this.name}">

    <h2 class="card--pokemon-name">${this.name}</h3>`;
  }
}

export default CardComponent;
