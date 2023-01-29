import CardComponent from "./components/PokemonCardComponent/PokemonCardComponent.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/pageComponent.js";

const mainContainer = new PageComponent(document.querySelector(".root"));
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();

const cardListComponent = new CardListComponent(mainContainer.domElement);
cardListComponent.render();

const numberOfPokeCardsByPage = 20;
let cardIndexInPage = 0;
const renderPokeCardsById = new Array(numberOfPokeCardsByPage).fill("");

renderPokeCardsById.forEach(async () => {
  await new CardComponent(cardListComponent.domElement).getPokeInfo(
    cardIndexInPage++
  );
});
