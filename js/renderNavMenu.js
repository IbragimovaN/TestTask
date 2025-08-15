import { navItems } from "./data";
export function renderNavMenu() {
  const navContainer = document.querySelector(".header__nav");
  if (!navContainer) return;

  navContainer.innerHTML = `
    <ul class="header__nav-list">
      ${navItems
        .map(
          (item) => `
        <li class="header__nav-item">
          <a href="${item.href}" class="header__nav-link">${item.text}</a>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
}
