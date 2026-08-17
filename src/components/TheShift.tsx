import { useEffect, useRef, useState } from "react";
import { useC } from "../i18n/LocaleContext";
import { useScenePlay, clamp } from "../useScenePlay";

/** Adoption · what autonomy removes · how fast it returns. */
const PANELS = 3;

/**
 * The numbers, as a carousel the reader drives.
 *
 * This pinned the page and moved sideways on the reader's scroll, which is
 * the same problem the opening had: scrolling stopped doing what scrolling
 * does. It is a plain horizontal scroller now — swipe, drag, arrow keys or
 * the buttons — so the gesture is one people already know and the page
 * underneath never stops behaving.
 */
export default function TheShift() {
  const { film, shiftSection } = useC();
  const trackRef = useRef<HTMLDivElement>(null);
  const [panel, setPanel] = useState(0);

  /* which panel is in front, read from the scroller rather than from the page */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const width = el.clientWidth || 1;
        setPanel(clamp(el.scrollLeft / (width * (PANELS - 1))) * (PANELS - 1));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const index = Math.round(panel);
  const go = (to: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: clamp(to / (PANELS - 1)) * (PANELS - 1) * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="shiftsec" id="shift">
      <div className="container shiftsec__head">
        <span className="eyebrow">{shiftSection.eyebrow}</span>
        <h2>{shiftSection.h2}</h2>
      </div>

      <div className="shiftsec__scroller" ref={trackRef} tabIndex={0} aria-label={shiftSection.h2}>
        <Panel on={index === 0}>
          <Adoption data={film.shift} on={index === 0} />
        </Panel>
        <Panel on={index === 1}>
          <Ladder data={film.outcome} on={index === 1} />
        </Panel>
        <Panel on={index === 2}>
          <Payback data={film.outcome} on={index === 2} />
        </Panel>
      </div>

      <div className="container shiftsec__controls">
        <span className="shiftsec__dots">
          {Array.from({ length: PANELS }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === index ? "is-on" : undefined}
              aria-label={`${i + 1} / ${PANELS}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </span>
        <span className="shiftsec__arrows">
          <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label={shiftSection.prev}>
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === PANELS - 1}
            aria-label={shiftSection.next}
          >
            &#8594;
          </button>
        </span>
      </div>
    </section>
  );
}

function Panel({ on, children }: { on: boolean; children: React.ReactNode }) {
  return (
    <div className={`shiftsec__panel${on ? " is-on" : ""}`}>
      <div className="shiftsec__inner">{children}</div>
    </div>
  );
}
/* ---- 1: how many applications are turning ---- */
function Adoption({ data, on }: { data: ReturnType<typeof useC>["film"]["shift"]; on: boolean }) {
  const p = useScenePlay(on);
  const lit = Math.round(data.figure * p);
  return (
    <div className="shift">
      <p className="film__eyebrow">{data.eyebrow}</p>
      <div className="shift__head">
        <span className="shift__year">{data.year}</span>
        <span className="shift__unit">{data.unit}</span>
      </div>
      <div className="shift__grid" aria-hidden="true">
        {Array.from({ length: 100 }, (_, i) => (
          <span key={i} className={i < lit ? "is-on" : undefined} />
        ))}
      </div>
      <p className="shift__read">
        <strong>{lit}%</strong>
        <span>{data.note}</span>
      </p>
    </div>
  );
}

/* ---- 2: the ladder out of manual work ---- */
function Ladder({ data, on }: { data: ReturnType<typeof useC>["film"]["outcome"]; on: boolean }) {
  const p = useScenePlay(on, 1500);
  const top = data.steps[data.steps.length - 1].value;
  return (
    <div className="outcome">
      <p className="film__eyebrow">{data.eyebrow}</p>
      <div className="outcome__body">
        <div className="outcome__ladder">
          {data.steps.map((s, i) => {
            /* each rung completes in its own quarter of the panel */
            const share = clamp((p - i / data.steps.length) * data.steps.length);
            return (
              <div
                className="rung"
                key={s.label}
                style={{ "--h": `${s.value}%` } as React.CSSProperties}
              >
                <span className="rung__value">{Math.round(s.value * share)}%</span>
                <span className="rung__label">{s.label}</span>
                <span className="rung__bar" style={{ transform: `scaleX(${share})` }} />
              </div>
            );
          })}
          <span className="outcome__axis">{data.axis}</span>
        </div>
        <div className="outcome__read">
          <strong>{Math.round(top * p)}%</strong>
          <span>{data.note}</span>
        </div>
      </div>
    </div>
  );
}

/* ---- 3: what it gives back ---- */
function Payback({ data, on }: { data: ReturnType<typeof useC>["film"]["outcome"]; on: boolean }) {
  const p = useScenePlay(on, 900);
  return (
    <div className="payback" style={{ "--p": p } as React.CSSProperties}>
      <p className="film__eyebrow">{data.paybackEyebrow}</p>
      <ul className="payback__list">
        {data.proof.map((pr, i) => (
          <li key={pr.label} style={{ "--i": i } as React.CSSProperties}>
            <strong>{pr.value}</strong>
            <span>{pr.label}</span>
          </li>
        ))}
      </ul>
      <p className="payback__note">{data.paybackNote}</p>
    </div>
  );
}
