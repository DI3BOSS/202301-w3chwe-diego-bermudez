import HeaderComponent from "./components/Component/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";

const mainContainer = new PageComponent(document.querySelector(".root"));
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();
