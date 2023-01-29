import CardComponent from "./components/PokemonCardComponent/PokemonCardComponent.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/pageComponent/pageComponent.js";
import FooterComponent from "./components/FooterComponent/FooterComponent.js";

const mainContainer = new PageComponent(document.querySelector(".root"));
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();

const cardListComponent = new CardListComponent(mainContainer.domElement);
cardListComponent.render();

const numberOfPokeCardsByPage = 20;
let cardIndexInPage = 1;
const renderPokeCardsById = new Array(numberOfPokeCardsByPage).fill("");

renderPokeCardsById.forEach(async () => {
  await new CardComponent(cardListComponent.domElement).getPokeInfo(
    cardIndexInPage++
  );
});

const footerContainer = new FooterComponent(mainContainer.domElement);
footerContainer.render();

const nextPage = document.querySelector(".next");

nextPage.addEventListener("click", () => {
  document.querySelector(".pokedex--card");
  new Array(numberOfPokeCardsByPage).fill("").forEach(async () => {
    await new CardComponent(cardListComponent.domElement).getPokeInfo(
      cardIndexInPage++
    );
  });
});
