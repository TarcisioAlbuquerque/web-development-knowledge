/* Motion Starter Kit — vanilla JS with cleanup support.
   Classic script: auto-initializes document. Frameworks may call MotionStarterKit.init(root). */
(() => {
  const activeRoots = new WeakMap();

  function initMotion(root = document) {
    const previousCleanup = activeRoots.get(root);
    if (previousCleanup) previousCleanup();

    const doc = root.nodeType === 9 ? root : root.ownerDocument;
    const view = doc.defaultView || window;
    const scope = root.nodeType === 9 ? doc.documentElement : root;
    const cleanups = [];
    const observers = [];
    const addListener = (target, eventName, handler, options) => {
      target.addEventListener(eventName, handler, options);
      cleanups.push(() => target.removeEventListener(eventName, handler, options));
    };
    const all = (selector) => Array.from(root.querySelectorAll(selector));

    scope.classList.add("motion-ready");

    const revealItems = all("[data-motion]");
    const svgItems = all("[data-motion-svg-draw]");
    const showAll = () => {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      svgItems.forEach((item) => item.classList.add("is-drawn"));
    };

    if (!("IntersectionObserver" in view)) {
      showAll();
    } else {
      const revealObserver = new view.IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      observers.push(revealObserver);
      revealItems.forEach((item) => revealObserver.observe(item));

      const svgObserver = new view.IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-drawn");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.2 });
      observers.push(svgObserver);
      svgItems.forEach((svg) => {
        svg.querySelectorAll("path, line, polyline").forEach((path) => {
          try {
            const length = path.getTotalLength();
            path.style.strokeDasharray = String(length);
            path.style.strokeDashoffset = String(length);
          } catch {
            // Unsupported geometry remains visible without draw animation.
          }
        });
        svgObserver.observe(svg);
      });
    }

    all("[data-tabs]").forEach((tabsRoot) => {
      const tabs = Array.from(tabsRoot.querySelectorAll('[role="tab"][data-tab]'));
      const panels = Array.from(tabsRoot.querySelectorAll('[role="tabpanel"][data-tab-panel]'));
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
        addListener(tab, "click", () => activate(tab));
        addListener(tab, "keydown", (event) => {
          const index = tabs.indexOf(tab);
          let nextIndex = index;
          if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
          else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
          else if (event.key === "Home") nextIndex = 0;
          else if (event.key === "End") nextIndex = tabs.length - 1;
          else return;
          event.preventDefault();
          activate(tabs[nextIndex], true);
        });
      });
      activate(tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0]);
    });

    all("[data-marquee]").forEach((marquee) => {
      const toggle = marquee.querySelector("[data-marquee-toggle]");
      if (!toggle) return;

      const setPaused = (paused) => {
        marquee.classList.toggle("is-paused", paused);
        toggle.setAttribute("aria-pressed", String(paused));
        toggle.textContent = paused
          ? (toggle.dataset.resumeLabel || "Retomar movimento")
          : (toggle.dataset.pauseLabel || "Pausar movimento");
      };
      addListener(toggle, "click", () => setPaused(!marquee.classList.contains("is-paused")));
    });

    const videos = all("video[data-viewport-video]");
    const videoStates = new Map();
    videos.forEach((video) => {
      video.muted = true;
      video.playsInline = true;
      video.controls = true;
      videoStates.set(video, false);
    });

    if (videos.length && "IntersectionObserver" in view) {
      const videoObserver = new view.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          videoStates.set(video, entry.isIntersecting);
          if (entry.isIntersecting) {
            const attempt = video.play();
            if (attempt && typeof attempt.catch === "function") {
              attempt.catch(() => { video.controls = true; });
            }
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.35 });
      observers.push(videoObserver);
      videos.forEach((video) => videoObserver.observe(video));
    }

    all("a[data-whatsapp-cta]").forEach((link) => {
      const phone = (link.dataset.phone || "").replace(/\D/g, "");
      const message = link.dataset.message || "";
      if (!phone) return;
      link.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });

    const cleanup = () => {
      observers.forEach((observer) => observer.disconnect());
      cleanups.forEach((remove) => remove());
      scope.classList.remove("motion-ready");
      if (activeRoots.get(root) === cleanup) activeRoots.delete(root);
    };
    activeRoots.set(root, cleanup);
    return cleanup;
  }

  window.MotionStarterKit = {
    init: initMotion,
    destroy(root = document) {
      activeRoots.get(root)?.();
    }
  };

  initMotion(document);
})();
