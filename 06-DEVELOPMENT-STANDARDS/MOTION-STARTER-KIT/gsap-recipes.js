/* Optional advanced motion recipes.
   Requires GSAP + ScrollTrigger installed in the client project.
   Import initGSAPRecipes(root) from the app and call its cleanup on unmount. */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initGSAPRecipes(root = document) {
  const media = gsap.matchMedia();
  const select = (selector) => gsap.utils.toArray(selector, root);

  // General reveal, stagger, SVG draw and image-mask recipes.
  media.add("(prefers-reduced-motion: no-preference)", () => {
    select("[data-gsap-reveal]").forEach((element) => {
      gsap.fromTo(element,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true
          }
        }
      );
    });

    select("[data-gsap-stagger]").forEach((container) => {
      const children = [...container.children];
      if (!children.length) return;
      gsap.fromTo(children,
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 84%",
            once: true
          }
        }
      );
    });

    select("[data-gsap-svg-draw]").forEach((svg) => {
      svg.querySelectorAll("path, line, polyline").forEach((path) => {
        try {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: svg,
              start: "top 85%",
              once: true
            }
          });
        } catch {
          // Unsupported SVG geometry remains static.
        }
      });
    });

    select("[data-gsap-image-reveal]").forEach((element) => {
      gsap.fromTo(element,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.05,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true
          }
        }
      );
    });
  });

  // Pin, parallax and scroll-controlled horizontal scenes stay desktop-only.
  // Mobile retains the normal document flow / native horizontal scrolling.
  media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
    select("[data-gsap-parallax]").forEach((element) => {
      const amount = Number.parseFloat(element.dataset.gsapParallax) || -12;
      gsap.to(element, {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: element.closest("[data-gsap-parallax-section]") || element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    select("[data-gsap-pin-section]").forEach((section) => {
      const pinned = section.querySelector("[data-gsap-pin]");
      if (!pinned) return;
      gsap.to(pinned, {
        y: 0,
        scrollTrigger: {
          trigger: section,
          pin: pinned,
          start: "top top",
          end: () => `+=${Math.max(240, section.offsetHeight - window.innerHeight * 0.45)}`,
          pinSpacing: true,
          scrub: false,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    });

    select("[data-gsap-horizontal]").forEach((viewport) => {
      const track = viewport.querySelector("[data-gsap-horizontal-track]");
      if (!track) return;
      const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      if (getDistance() <= 0) return;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: viewport,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    });
  });

  return () => media.revert();
}
