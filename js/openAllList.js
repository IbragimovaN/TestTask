export function openAllList() {
  document.addEventListener("click", (e) => {
    const catalogBtn = e.target.closest("#productsBtn");
    const collectionBtn = e.target.closest("#collectionBtn");

    if (catalogBtn) {
      toggleViewMode(".catalog", "новинки", catalogBtn);
    } else if (collectionBtn) {
      toggleViewMode(".collection", "коллекции", collectionBtn);
    }
  });
}

function toggleViewMode(sectionClass, text, button) {
  const section = document.querySelector(sectionClass);
  if (!section) return;

  section.classList.toggle(`${sectionClass.slice(1)}_list-view`);

  if (section.classList.contains(`${sectionClass.slice(1)}_list-view`)) {
    button.innerHTML = `Свернуть ${text} <img src="./images/icons/arrow-up.svg" alt="стрелка">`;
  } else {
    button.innerHTML = `Все ${text} <img src="./images/icons/arrow.svg" alt="стрелка">`;
  }
}
