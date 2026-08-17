import { useEffect, useRef, useState } from "react";
import { useC } from "../i18n/LocaleContext";
import { useScenePlay, clamp, media } from "../useScenePlay";

const MOTION_Q = "(prefers-reduced-motion: reduce)";
const WIDE_Q = "(min-width: 861px)";

/** Adoption · what autonomy removes · what it returns. */
const PANELS = 3;

/**
 * The numbers, as a horizontal run.
 *
 * These used to flash past inside the opening film, where the reader's scroll
 * speed decided whether a figure was ever seen. Given their own section they
 * hold: the section pins, the track moves sideways as you scroll, and each
 * panel animates on its own clock once it arrives — so a figure always
 * completes and stays completed.
 *
 * Narrow viewports and prefers-reduced-motion get the same panels stacked
 * vertically, with no pinning and no sideways movement.
 */
export default function TheShift() {
  const { film, shiftSection } = useC();
  const railRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(() => media(WIDE_Q) && !media(MOTION_Q));
  const [panel, setPanel] = useState(0);

  useEffect(() => {
    const apply = () => setPinned(media(WIDE_Q) && !media(MOTION_Q));
    const qs = [MOTION_Q, WIDE_Q].map((q) => window.matchMedia(q));
    qs.forEach((q) => q.addEventListener("change", apply));
    return () => qs.forEach((q) => q.removeEventListener("change", apply));
  }, []);

  useEffect(() => {
    if (!pinned) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rail = railRef.current;
        if (!rail) return;
        const travel = rail.offsetHeight - window.innerHeight;
        const done = clamp(-rail.getBoundingClientRect().top / travel);
        setPanel(Math.min(PANELS - 1, Math.floor(done * PANELS)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pinned]);

  const live = (i: number) => (pinned ? panel === i : true);
  /* Snap a panel at a time rather than tracking scroll continuously: a
     continuous slide leaves two half-panels on screen for most of the run.
     The CSS transition does the travelling. */
  const shift = pinned ? panel * (100 / PANELS) : 0;

  return (
    <section
      className={`shiftsec ${pinned ? "shiftsec--pinned" : "shiftsec--flat"}`}
      id="shift"
      aria-label={shiftSection.h2}
    >
      <div
        className="shiftsec__rail"
        ref={railRef}
        style={pinned ? { height: `${PANELS * 100}vh` } : undefined}
      >
        <div className="shiftsec__stage">
          <div className="container shiftsec__head">
            <span className="eyebrow">{shiftSection.eyebrow}</span>
            <h2>{shiftSection.h2}</h2>
          </div>

          <div
            className="shiftsec__track"
            style={
              pinned
                ? ({
                    width: `${PANELS * 100}%`,
                    "--panels": PANELS,
                    transform: `translate3d(-${shift}%, 0, 0)`,
                  } as React.CSSProperties)
                : undefined
            }
          >
            <Panel on={live(0)}>
              <Adoption data={film.shift} on={live(0)} />
            </Panel>
            <Panel on={live(1)}>
              <Ladder data={film.outcome} on={live(1)} />
            </Panel>
            <Panel on={live(2)}>
              <Payback data={film.outcome} on={live(2)} />
            </Panel>
          </div>

          {pinned && (
            <div className="shiftsec__hud" aria-hidden="true">
              <span className="shiftsec__ticks">
                {Array.from({ length: PANELS }, (_, i) => (
                  <span key={i} className={i === panel ? "is-on" : undefined} />
                ))}
              </span>
            </div>
          )}
        </div>
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
