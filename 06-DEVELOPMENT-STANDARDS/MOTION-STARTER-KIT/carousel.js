/* Native scroll-snap carousel controls. Swipe/native scroll remain available. */
(() => {
  const activeRoots = new WeakMap();

  function initCarousels(root = document) {
    activeRoots.get(root)?.();
    const cleanups = [];
    const addListener = (target, type, fn, options) => {
      target.addEventListener(type, fn, options);
      cleanups.push(() => target.removeEventListener(type, fn, options));
    };
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    root.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const track = carousel.querySelector("[data-carousel-track]");
      const previous = carousel.querySelector("[data-carousel-prev]");
      const next = carousel.querySelector("[data-carousel-next]");
      const status = carousel.querySelector("[data-carousel-status]");
      if (!track) return;

      const slides = Array.from(track.querySelectorAll(".motion-carousel__slide, [data-carousel-slide]"));
      if (!slides.length) return;

      let frameRequested = false;
      let currentIndex = -1;

      const nearestIndex = () => {
        const edge = track.getBoundingClientRect().left;
        let nearest = 0;
        let distance = Number.POSITIVE_INFINITY;
        slides.forEach((slide, index) => {
          const current = Math.abs(slide.getBoundingClientRect().left - edge);
          if (current < distance) { distance = current; nearest = index; }
        });
        return nearest;
      };

      const update = () => {
        const nextIndex = nearestIndex();
        if (nextIndex !== currentIndex) {
          currentIndex = nextIndex;
          if (status) status.textContent = "Item " + (currentIndex + 1) + " de " + slides.length;
        }
        if (previous) previous.disabled = currentIndex <= 0;
        if (next) next.disabled = currentIndex >= slides.length - 1;
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
          - track.getBoundingClientRect().left + track.scrollLeft;
        track.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
        scheduleUpdate();
      };

      addListener(track, "scroll", scheduleUpdate, { passive: true });
      addListener(window, "resize", scheduleUpdate, { passive: true });
      if (previous) addListener(previous, "click", () => goTo(nearestIndex() - 1));
      if (next) addListener(next, "click", () => goTo(nearestIndex() + 1));
      update();
    });

    const cleanup = () => {
      cleanups.forEach((remove) => remove());
      if (activeRoots.get(root) === cleanup) activeRoots.delete(root);
    };
    activeRoots.set(root, cleanup);
    return cleanup;
  }

  window.MotionCarousel = {
    init: initCarousels,
    destroy(root = document) { activeRoots.get(root)?.(); }
  };
  initCarousels(document);
})();
