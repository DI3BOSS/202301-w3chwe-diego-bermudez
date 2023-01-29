import CardComponent from "./components/CardComponent/CardComponent.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/pageComponent.js";

const mainContainer = new PageComponent(document.querySelector(".root"));
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();

const cardListComponent = new CardListComponent(mainContainer.domElement);
cardListComponent.render();

const cardComponent = new CardComponent(cardListComponent.domElement);
await cardComponent.getPokeInfo(1);
