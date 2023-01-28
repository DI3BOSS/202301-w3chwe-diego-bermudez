import Component from "../Component/Component.js";

class CardListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex--card-list card-list", "ul");
  }
}

export default CardListComponent;
