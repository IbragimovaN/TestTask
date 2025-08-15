import "../css/reset.scss";
import "../css/base.scss";
import "../css/header.scss";
import "../css/first-screen.scss";
import "../css/catalog.scss";
import "../css/collections.scss";
import "../css/products-card.scss";
import "../css/collection-card.scss";
import "../css/slider-indicatot.scss";
import "../css/button.scss";
import "../css/callback-form.scss";
import "../css/hover-menu.scss";
import { renderNavMenu } from "./renderNavMenu";
import { renderProducts } from "./renderProducts";
import { renderCollections } from "./renderCollections";
import { initCarousel } from "./slider";
import { openAllList } from "./openAllList";
import { initCallbackForm } from "./initialCallbackForm";
import { initHoverMenu } from "./renderHoverMenu";
import { handleHeaderScroll } from "./handleHeaderScroll";

renderNavMenu();
renderProducts();
renderCollections();
openAllList();
initCallbackForm();
initHoverMenu();
handleHeaderScroll();

setTimeout(() => {
  initCarousel();
}, 100);
