import Component from "../Component/Component.js";

class CardComponent extends Component {
  image: string;
  name: string;
  id: number;
  type: string;

  constructor(parentElement: Element) {
    super(parentElement, "pokedex--card card-list--card card", "li");
  }

  getPokeInfo = async (number: number) => {
    const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";
    const responseFromPokeApi = await fetch(`${pokeApiUrl}${number}`);
    const pokemonInformation = (await responseFromPokeApi.json()) as Record<
      string,
      any
    >;
    this.image = pokemonInformation.sprites.versions["generation-v"][
      "black-white"
    ].animated.front_default as string;
    this.name = pokemonInformation.name as string;
    this.id = pokemonInformation.id as number;
    this.type = pokemonInformation.types[0].type.name as string;

    this.render();
  };

  render() {
    super.render();
    const imageHeight = "50%";
    const imageWidth = "50%";
    this.domElement.innerHTML = `
    <img src="${this.image}" 
      class="card--pokemon-image
      width="${imageWidth}" 
      height="${imageHeight}"
      alt="animation of ${this.name}">

    <h2 class="card--pokemon-name">${this.name}</h3>
    <div class="card--pokemon-info"><span class="card--pokemon-id">#${this.id}</span> 
    <span class="card--pokemon-type">Type: ${this.type}</span> </div>`;

    this.domElement.classList.add(`pokemon-type-${this.type}`);
  }
}

export default CardComponent;
