import { productsList } from "./data";

export function renderProducts() {
  const catalogList = document.querySelector(".catalog__list");
  if (!catalogList) return;

  catalogList.innerHTML = productsList
    .map(
      (product) => `
    <li class="product-card">
      <div class="product-card__header">
        <span class="product-card__mark">NEW!</span>
       
 <svg class="product-card__favorites-icon">
  <use href="sprite.svg#heart"></use>
</svg>
      </div>
      <div class="product-card__content">
        <img src="${product.imageUrl}" alt="${product.name}" class="product-card__content_image" />
        <h4 class="product-card__content_collection-name">${product.collectionName}</h4>
        <h3 class="product-card__content_product-name">${product.name}</h3>
        <div class="product-card__content_price-container">
          <span class="product-card__content_price">${product.price} ₽</span>
          <span class="product-card__content_old-price">${product.oldPrice} ₽</span>
        </div>
      </div>
    </li>
  `
    )
    .join("");
}
