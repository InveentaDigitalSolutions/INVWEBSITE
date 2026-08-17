import { useEffect, useRef, useState } from "react";
import { useC } from "../i18n/LocaleContext";
import { useScenePlay, clamp, media } from "../useScenePlay";
import { useInView } from "../useInView";
import type { SiteContent } from "../i18n/types";

type PanelData = SiteContent["shiftSection"]["panels"][number];

/**
 * Where the market is going, and why most of it fails.
 *
 * Three beats: the wave is arriving on a date, almost everyone attempting it
 * gets nothing back, and the prize is enormous. That sequence sets up the
 * section after it — the failure is in implementation, which is precisely
 * what we sell.
 *
 * A carousel the reader drives: swipe, drag, keyboard or the buttons. It used
 * to pin the page and move sideways on scroll, which stopped scrolling from
 * doing what scrolling does.
 */
const DWELL_MS = 6500;

export default function TheShift() {
  const { shiftSection } = useC();
  const trackRef = useRef<HTMLDivElement>(null);
  const [sectionRef, inView] = useInView<HTMLElement>(0.3);
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);
  const count = shiftSection.panels.length;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setIndex(Math.round(el.scrollLeft / (el.clientWidth || 1)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const go = (to: number) => {
    const el = trackRef.current;
    if (!el) return;
    /* wraps, so the run keeps cycling while it plays itself */
    const target = (to + count) % count;
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  };

  /* Advances itself while on screen, and stops the moment the reader takes
     over — hover, focus or a control. Never runs under reduced motion. */
  useEffect(() => {
    if (!inView || held || media("(prefers-reduced-motion: reduce)")) return;
    const el = trackRef.current;
    if (!el) return;
    const id = window.setInterval(() => {
      const at = Math.round(el.scrollLeft / (el.clientWidth || 1));
      el.scrollTo({ left: ((at + 1) % count) * el.clientWidth, behavior: "smooth" });
    }, DWELL_MS);
    return () => window.clearInterval(id);
  }, [inView, held, count]);

  return (
    <section
      className="shiftsec"
      id="shift"
      ref={sectionRef}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <div className="container shiftsec__head">
        <span className="eyebrow">{shiftSection.eyebrow}</span>
        <h2>{shiftSection.h2}</h2>
      </div>

      <div className="shiftsec__scroller" ref={trackRef} tabIndex={0} aria-label={shiftSection.h2}>
        {shiftSection.panels.map((panel, i) => (
          <div className={`shiftsec__panel${i === index ? " is-on" : ""}`} key={panel.id}>
            <div className="shiftsec__inner">
              <Stat panel={panel} on={i === index} />
            </div>
          </div>
        ))}
      </div>

      <div className="container shiftsec__controls">
        <span className="shiftsec__dots">
          {shiftSection.panels.map((panel, i) => (
            <button
              key={panel.id}
              type="button"
              className={i === index ? "is-on" : undefined}
              aria-label={`${i + 1} / ${count}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </span>
        <span className="shiftsec__arrows">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={shiftSection.prev}
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={shiftSection.next}
          >
            &#8594;
          </button>
        </span>
      </div>
    </section>
  );
}

function Stat({ panel, on }: { panel: PanelData; on: boolean }) {
  const p = useScenePlay(on, 1200);
  const shown = (panel.value * p).toFixed(panel.decimals);

  return (
    <div className={`stat stat--${panel.id}`}>
      <p className="film__eyebrow">{panel.eyebrow}</p>

      <Visual id={panel.id} p={p} />

      <p className="stat__figure">
        {panel.prefix}
        {shown}
        {panel.suffix}
      </p>
      <p className="stat__statement">{panel.statement}</p>
      <p className="stat__note">{panel.note}</p>
    </div>
  );
}

/** A different reading of the same idea per panel — repeating the grid three
    times would make three distinct facts look like one chart. */
function Visual({ id, p }: { id: string; p: number }) {
  if (id === "wave") {
    const lit = Math.round(40 * p);
    return (
      <div className="stat__grid" aria-hidden="true">
        {Array.from({ length: 100 }, (_, i) => (
          <span key={i} className={i < lit ? "is-on" : undefined} />
        ))}
      </div>
    );
  }

  if (id === "reality") {
    /* one in twenty returns anything — the single lit cell is the point */
    return (
      <div className="stat__ratio" aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className={i === 0 && p > 0.5 ? "is-on" : undefined} />
        ))}
      </div>
    );
  }

  return (
    <div className="stat__bar" aria-hidden="true">
      <span style={{ transform: `scaleX(${clamp(p)})` }} />
    </div>
  );
}
