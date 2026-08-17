import { useEffect, useState } from "react";

const MOTION_Q = "(prefers-reduced-motion: reduce)";

/** How long a scene's figures take to arrive, once the scene is on screen. */
export const PLAY_MS = 1150;

export const clamp = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
/** Decelerating — figures arrive quickly, then settle. */
export const ease = (p: number) => 1 - (1 - p) ** 3;

export function media(q: string) {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(q).matches;
}

/**
 * Plays a scene's animation on its own clock.
 *
 * Tying figures to scroll position meant the reader's scroll speed decided
 * whether they ever saw a number: stop halfway through and "40%" sits frozen
 * at "17%", which is not a fact about anything. Scroll decides WHICH scene is
 * on screen; once it is, the scene animates itself to completion and holds.
 */
export function useScenePlay(active: boolean, duration = PLAY_MS) {
  const [v, setV] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start = 0;

    if (!active) {
      raf = requestAnimationFrame(() => setV(0));
      return () => cancelAnimationFrame(raf);
    }

    if (media(MOTION_Q)) {
      raf = requestAnimationFrame(() => setV(1));
      return () => cancelAnimationFrame(raf);
    }

    const tick = (t: number) => {
      if (!start) start = t;
      const p = clamp((t - start) / duration);
      setV(ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, duration]);

  return v;
}
