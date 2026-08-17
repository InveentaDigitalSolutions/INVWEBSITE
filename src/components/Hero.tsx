import { useEffect, useRef, useState } from "react";
import { useC } from "../i18n/LocaleContext";
import FilmBackdrop from "./FilmBackdrop";
import { useScenePlay, clamp, media } from "../useScenePlay";

const MOTION_Q = "(prefers-reduced-motion: reduce)";
/** Below this the film unpins and plays as ordinary stacked sections. */
const WIDE_Q = "(min-width: 861px)";

/** Title · thesis · integration. The two number scenes moved out to "The
    shift", where they get a panel each instead of a moment each. */
const SCENES = 3;

/**
 * The opening film.
 *
 * The brand film's narrative — fragmented systems become one orchestrated
 * system, and here is what that is worth — is rebuilt as a pinned scroll
 * sequence: real type, real SVG, translated, selectable, and a fraction of
 * the 4 MB the mp4 costs. The mp4 itself stays one click away.
 *
 * Pinning is a wide-viewport, motion-allowed affordance only. Everywhere
 * else the same scenes render stacked and static, in order, with no
 * scroll hijacking — the story survives, the mechanism doesn't.
 */
export default function Hero() {
  const { hero, film } = useC();
  const railRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(() => media(WIDE_Q) && !media(MOTION_Q));
  const [scene, setScene] = useState(0);
  /* Scroll position within the film, 0..1 — drives the backdrop drift only.
     The scenes' own animations run on a clock, not on this. */
  const [travelled, setTravelled] = useState(0);

  useEffect(() => {
    const apply = () => setPinned(media(WIDE_Q) && !media(MOTION_Q));
    const qs = [MOTION_Q, WIDE_Q].map((q) => window.matchMedia(q));
    qs.forEach((q) => q.addEventListener("change", apply));
    return () => qs.forEach((q) => q.removeEventListener("change", apply));
  }, []);

  useEffect(() => {
    /* Unpinned, every scene renders drawn — nothing to track, no listener. */
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
        setTravelled(done);
        setScene(Math.min(SCENES - 1, Math.floor(done * SCENES)));
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

  /** Stacked, every scene is live at once; pinned, only the one on screen. */
  const live = (i: number) => (pinned ? scene === i : true);

  return (
    <section className={`film ${pinned ? "film--pinned" : "film--flat"}`} id="top">
      <div
        className="film__rail"
        ref={railRef}
        style={pinned ? { height: `${SCENES * 100}vh` } : undefined}
      >
        <div className="film__stage">
          {/* --film-p drifts the ground across the whole sequence, so the
              backdrop belongs to the film rather than sitting behind it */}
          <div
            className="film__bg"
            aria-hidden="true"
            style={{ "--film-p": pinned ? travelled : 0 } as React.CSSProperties}
          >
            <FilmBackdrop />
          </div>

          <div className="film__scenes">
            <TitleScene on={live(0)} hero={hero} />
            <Scene on={live(1)} name="thesis">
              <p className="film__eyebrow">{film.thesis.eyebrow}</p>
              <p className="film__thesis">
                {film.thesis.line} <em>{film.thesis.emphasis}</em>
              </p>
            </Scene>
            <Scene on={live(2)} name="wire">
              <Integration data={film.integration} on={live(2)} />
            </Scene>
          </div>

          {pinned && (
            <div className="film__hud" aria-hidden="true">
              <span className="film__cue">{hero.scrollCue}</span>
              <span className="film__ticks">
                {Array.from({ length: SCENES }, (_, i) => (
                  <span key={i} className={i === scene ? "is-on" : undefined} />
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Scene({
  on,
  name,
  children,
}: {
  on: boolean;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`film__scene film__scene--${name}${on ? " is-on" : ""}`}>
      <div className="film__inner">{children}</div>
    </div>
  );
}

/* ---- Scene 1: the title card ---- */
function TitleScene({ on, hero }: { on: boolean; hero: ReturnType<typeof useC>["hero"] }) {
  return (
    <div className={`film__scene film__scene--title${on ? " is-on" : ""}`}>
      <div className="film__inner">
        <p className="film__eyebrow">{hero.kicker}</p>
        <h1 className="film__title">{hero.titleLines.join(" ")}</h1>
        <p className="film__lead">{hero.lead}</p>
        <div className="film__actions">
          <a className="btn btn-primary" href="#contact">
            {hero.primary}
          </a>
          <a className="btn btn-ghost" href="#solutions">
            {hero.ghost}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---- Scene 3: fragmented systems resolve into one orchestrated stack ---- */
function Integration({
  data,
  on,
}: {
  data: ReturnType<typeof useC>["film"]["integration"];
  on: boolean;
}) {
  const p = useScenePlay(on, 1400);
  return (
    <div className="wire">
      <p className="film__eyebrow">{data.eyebrow}</p>
      <div className="wire__body">
        <ul className="wire__from" style={{ "--p": p } as React.CSSProperties}>
          <li className="wire__from-label">{data.fromLabel}</li>
          {data.fragmented.map((f, i) => (
            <li key={f} style={{ "--i": i } as React.CSSProperties}>
              {f}
            </li>
          ))}
        </ul>

        <svg
          className="wire__link"
          viewBox="0 0 120 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[18, 46, 74, 100, 126, 154, 182].map((y, i) => (
            /* pathLength normalises every curve to 1 so the whole fan draws
               in step regardless of how far each one has to travel */
            <path
              key={y}
              d={`M0 ${y} C 62 ${y}, 58 100, 120 100`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1 - clamp(p * 1.3 - i * 0.04)}
            />
          ))}
        </svg>

        <div className="wire__to" style={{ "--p": p } as React.CSSProperties}>
          <p className="wire__hub">{data.hub}</p>
          {data.layers.map((l, i) => (
            <div className="wire__layer" key={l.label} style={{ "--i": i } as React.CSSProperties}>
              <span className="wire__layer-label">{l.label}</span>
              <span className="wire__cells">
                {l.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="wire__caption">{data.caption}</p>
    </div>
  );
}
