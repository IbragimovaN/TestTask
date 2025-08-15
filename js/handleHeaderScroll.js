export function handleHeaderScroll() {
  const header = document.querySelector(".header");
  const firstScreen = document.querySelector(".first-screen");

  if (!header || !firstScreen) return;

  window.addEventListener("scroll", function () {
    const firstScreenTop = firstScreen.getBoundingClientRect().top;

    if (firstScreenTop <= header.offsetHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
