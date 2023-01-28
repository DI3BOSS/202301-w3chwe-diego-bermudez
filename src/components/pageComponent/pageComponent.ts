import Component from "../Component/Component.js";

const pokedexContainer: HTMLElement = document.querySelector(".root")!;

class PageComponent extends Component {
  constructor() {
    super(pokedexContainer, "podex", "main");
  }
}

export default PageComponent;
