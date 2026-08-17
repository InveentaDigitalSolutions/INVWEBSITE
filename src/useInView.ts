import { useEffect, useRef, useState } from "react";

/**
 * True while the element is on screen.
 *
 * Replaces the pinned-scroll scene index: a section animates because the
 * reader reached it, not because the page took their scroll away. Without
 * IntersectionObserver everything simply counts as visible, so content is
 * never stranded un-animated.
 */
export function useInView<T extends HTMLElement>(threshold = 0.35, rootMargin = "0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView] as const;
}
