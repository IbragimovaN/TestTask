import { hoverMenuList } from "./data";

export function initHoverMenu() {
  const hoverMenu = document.querySelector(".hover-menu");
  const navItems = document.querySelectorAll(".header__nav-item");

  if (!hoverMenu || !navItems.length) return;

  hoverMenu.innerHTML = `
    <ul class="hover-menu__list">
      ${hoverMenuList
        .map(
          (item) => `
        <li class="hover-menu__item" data-id="${item.id}">
          ${item.name}
        </li>
      `
        )
        .join("")}
    </ul>
  `;

  hoverMenu.classList.add("hover-menu_none");

  navItems.forEach((navItem) => {
    navItem.addEventListener("mouseenter", () => {
      hoverMenu.classList.remove("hover-menu_none");
    });

    navItem.addEventListener("mouseleave", () => {
      hoverMenu.classList.add("hover-menu_none");
    });
  });

  hoverMenu.addEventListener("mouseenter", () => {
    hoverMenu.classList.remove("hover-menu_none");
  });

  hoverMenu.addEventListener("mouseleave", () => {
    hoverMenu.classList.add("hover-menu_none");
  });
}
