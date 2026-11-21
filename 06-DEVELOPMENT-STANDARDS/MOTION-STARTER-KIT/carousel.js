/* Motion Starter Kit — native scroll-snap carousel controls, no dependencies.
   Swipe and native scrolling remain available; buttons are an additional input method. */
(() => {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    if (!track) return;

    const slides = [...track.querySelectorAll(".motion-carousel__slide, [data-carousel-slide]")];
    if (!slides.length) return;

    let frameRequested = false;

    const getNearestIndex = () => {
      const trackLeft = track.getBoundingClientRect().left;
      let nearest = 0;
      let smallestDistance = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          nearest = index;
        }
      });
      return nearest;
    };

    const update = () => {
      const currentIndex = getNearestIndex();
      if (previous) previous.disabled = currentIndex <= 0;
      if (next) next.disabled = currentIndex >= slides.length - 1;
      if (status) status.textContent = `Item ${currentIndex + 1} de ${slides.length}`;
      frameRequested = false;
    };

    const scheduleUpdate = () => {
      if (frameRequested) return;
      frameRequested = true;
      window.requestAnimationFrame(update);
    };

    const goTo = (index) => {
      const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
      const left = slides[safeIndex].getBoundingClientRect().left
        - track.getBoundingClientRect().left
        + track.scrollLeft;
      track.scrollTo({ left, behavior: "smooth" });
      scheduleUpdate();
    };

    previous?.addEventListener("click", () => goTo(getNearestIndex() - 1));
    next?.addEventListener("click", () => goTo(getNearestIndex() + 1));
    track.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    update();
  });
})();
