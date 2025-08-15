export function initCarousel() {
  const carousel = document.querySelector(".catalog__container");
  const slides = document.querySelectorAll(".product-card");
  const indicatorBars = document.querySelectorAll(".slider-indicator__bar");

  if (!carousel || !slides.length) return;

  carousel.addEventListener("scroll", () => {
    const scrollPos = carousel.scrollLeft;
    const slideWidth = slides[0].offsetWidth;
    const currentSlideIndex = Math.round(scrollPos / slideWidth);

    const indicatorIndex = currentSlideIndex % indicatorBars.length;

    indicatorBars.forEach((bar, i) => {
      bar.classList.toggle(
        "slider-indicator__bar_active",
        i === indicatorIndex
      );
    });
  });

  updateIndicator(0);
}

export function updateIndicator(index) {
  const indicatorBars = document.querySelectorAll(".slider-indicator__bar");

  const indicatorIndex = index % indicatorBars.length;

  indicatorBars.forEach((bar, i) => {
    bar.classList.toggle("slider-indicator__bar_active", i === indicatorIndex);
  });
}
