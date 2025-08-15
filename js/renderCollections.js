import { collectionsList } from "./data";

export function renderCollections() {
  const collectionList = document.querySelector(".collection__list");
  if (!collectionList) return;

  collectionList.innerHTML = collectionsList
    .map(
      (collection) => `
    <li class="collection-card">
    <h4 class="collection-card__subtitle">Коллекция</h4>
    <h3 class="collection-card__title">${collection.name}</h3>
     <img src="${collection.imageUrl}" alt="${collection.name}" class="collection-card__image" />
    <button class="collection-card__button">-></button>
 
    </li>
  `
    )
    .join("");
}
