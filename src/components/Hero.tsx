import { useEffect, useRef, useState } from "react";
import { useC } from "../i18n/LocaleContext";
import { asset } from "../asset";

const MOTION_Q = "(prefers-reduced-motion: reduce)";
/** Matches the breakpoint where the hero stops being a full-height stage. */
const WIDE_Q = "(min-width: 861px)";

/**
 * Phones get the poster, not the film: the download is the most expensive
 * thing on the page and the film's type is barely legible at that size.
 * Reduced-motion gets the poster everywhere.
 */
function filmWanted() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(WIDE_Q).matches && !window.matchMedia(MOTION_Q).matches;
}

/**
 * The brand film is the hero. It carries its own typography — wordmark,
 * eyebrow, headline — so nothing is overlaid on top of it. The headline and
 * lead still ship as real text for search engines and screen readers.
 */
export default function Hero() {
  const { hero } = useC();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFilm, setShowFilm] = useState(filmWanted);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const apply = () => setShowFilm(filmWanted());
    const queries = [MOTION_Q, WIDE_Q].map((q) => window.matchMedia(q));
    queries.forEach((q) => q.addEventListener("change", apply));
    apply();
    return () => queries.forEach((q) => q.removeEventListener("change", apply));
  }, []);

  function toggleMotion() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  }

  return (
    <section className="hero hero--film on-dark" id="top">
      <h1 className="visually-hidden">{hero.titleLines.join(" ")}</h1>
      <p className="visually-hidden">{hero.lead}</p>

      <div className="hero__film">
        {!showFilm ? (
          <img
            className="hero__frame"
            src={asset("video/teaser-poster.jpg")}
            alt={hero.filmAlt}
          />
        ) : (
          <video
            ref={videoRef}
            className="hero__frame"
            poster={asset("video/teaser-poster.jpg")}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={hero.filmAlt}
          >
            <source src={asset("video/inveenta-teaser.mp4")} type="video/mp4" />
          </video>
        )}
      </div>

      {showFilm && (
        <button
          type="button"
          className="hero__motion"
          onClick={toggleMotion}
          aria-label={paused ? hero.playMotion : hero.pauseMotion}
        >
          <span className="hero__motion-glyph" aria-hidden="true">
            {paused ? (
              <svg viewBox="0 0 12 12" width="12" height="12">
                <path d="M2.5 1.5 10 6l-7.5 4.5z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" width="12" height="12">
                <rect x="2.5" y="1.5" width="2.6" height="9" fill="currentColor" />
                <rect x="6.9" y="1.5" width="2.6" height="9" fill="currentColor" />
              </svg>
            )}
          </span>
          <span className="hero__motion-label">
            {paused ? hero.playMotion : hero.pauseMotion}
          </span>
        </button>
      )}

      <a className="hero__scroll" href="#solutions" aria-label={hero.scrollCue}>
        <span aria-hidden="true">{hero.scrollCue}</span>
        <span className="hero__scroll-rule" aria-hidden="true" />
      </a>
    </section>
  );
}
