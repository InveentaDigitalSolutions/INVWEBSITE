import { useEffect } from "react";

// Adds `is-in` to `.reveal` elements as they enter view.
// Fail-safe: content is visible without JS, elements already in view reveal
// immediately, and a safety timeout guarantees nothing stays hidden.
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const revealAll = () => els.forEach((e) => e.classList.add("is-in"));

    if (!("IntersectionObserver" in window) || els.length === 0) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("is-in"); // already on screen
      } else {
        io.observe(el);
      }
    });

    // Safety net — never leave anything invisible.
    const safety = window.setTimeout(revealAll, 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
}
