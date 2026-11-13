/* Motion Starter Kit — vanilla JS, no dependencies.
   Load with defer. In frameworks, initialize/cleanup within the component lifecycle. */
(() => {
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  // Progressive enhancement only after this script executes.
  document.documentElement.classList.add("motion-ready");

  const revealItems = [...document.querySelectorAll("[data-motion]")];
  const svgItems = [...document.querySelectorAll("[data-motion-svg-draw]")];

  const showAll = () => {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    svgItems.forEach((item) => item.classList.add("is-drawn"));
  };

  if (reduceMotion || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    revealItems.forEach((item) => revealObserver.observe(item));

    const svgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-drawn");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    svgItems.forEach((svg) => {
      const paths = svg.querySelectorAll("path, line, polyline");
      paths.forEach((path) => {
        try {
          const length = path.getTotalLength();
          path.style.strokeDasharray = String(length);
          path.style.strokeDashoffset = String(length);
        } catch {
          // Unsupported SVG geometry: keep the graphic visible without drawing animation.
        }
      });
      svgObserver.observe(svg);
    });
  }

  // Accessible tabs: each root [data-tabs] owns its tabs and panels.
  document.querySelectorAll("[data-tabs]").forEach((root) => {
    const tabs = [...root.querySelectorAll('[role="tab"][data-tab]')];
    const panels = [...root.querySelectorAll('[role="tabpanel"][data-tab-panel]')];
    if (!tabs.length || !panels.length) return;

    const activate = (tab, moveFocus = false) => {
      const selectedId = tab.dataset.tab;
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.tabPanel !== selectedId;
      });
      if (moveFocus) tab.focus();
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        const currentIndex = tabs.indexOf(tab);
        let nextIndex = currentIndex;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % tabs.length;
        else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") nextIndex = 0;
        else if (event.key === "End") nextIndex = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(tabs[nextIndex], true);
      });
    });

    const initiallySelected = tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0];
    activate(initiallySelected);
  });

  // Explicit marquee pause/resume control. Reduced-motion users get a static track.
  document.querySelectorAll("[data-marquee]").forEach((marquee) => {
    const toggle = marquee.querySelector("[data-marquee-toggle]");
    if (!toggle) return;

    if (reduceMotion) {
      marquee.classList.add("is-paused");
      toggle.setAttribute("aria-pressed", "true");
      toggle.textContent = "Movimento reduzido";
      toggle.disabled = true;
      return;
    }

    toggle.addEventListener("click", () => {
      const paused = marquee.classList.toggle("is-paused");
      toggle.setAttribute("aria-pressed", String(paused));
      toggle.textContent = paused
        ? (toggle.dataset.resumeLabel || "Retomar movimento")
        : (toggle.dataset.pauseLabel || "Pausar movimento");
    });
  });

  // Contextual WhatsApp links. Use only client-approved phone/message values.
  document.querySelectorAll("a[data-whatsapp-cta]").forEach((link) => {
    const phone = (link.dataset.phone || "").replace(/\D/g, "");
    const message = link.dataset.message || "";
    if (!phone) return; // Keep original href if no approved number is supplied.
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
})();
