import { useEffect, useRef, useState } from "react";
import { useC } from "../i18n/LocaleContext";
import { asset } from "../asset";
import FilmBackdrop, { type Backdrop } from "./FilmBackdrop";

/** Ship default; ?bg= lets us compare candidates in place. */
const BACKDROPS = ["topo", "grid", "field", "photo"] as const;
const DEFAULT_BACKDROP: Backdrop = "topo";

function chosenBackdrop(): Backdrop {
  if (typeof window === "undefined") return DEFAULT_BACKDROP;
  const q = new URLSearchParams(window.location.search).get("bg");
  return (BACKDROPS as readonly string[]).includes(q ?? "") ? (q as Backdrop) : DEFAULT_BACKDROP;
}

const MOTION_Q = "(prefers-reduced-motion: reduce)";
/** Below this the film unpins and plays as ordinary stacked sections. */
const WIDE_Q = "(min-width: 861px)";

/** Title · thesis · integration · shift · outcome. */
const SCENES = 5;

function media(q: string) {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(q).matches;
}

const clamp = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
/** Ease so a scene settles before the next one starts pulling. */
const ease = (p: number) => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);

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
  const [p, setP] = useState(0); // progress within the active scene, 0..1
  const [backdrop] = useState(chosenBackdrop);

  useEffect(() => {
    const apply = () => setPinned(media(WIDE_Q) && !media(MOTION_Q));
    const qs = [MOTION_Q, WIDE_Q].map((q) => window.matchMedia(q));
    qs.forEach((q) => q.addEventListener("change", apply));
    return () => qs.forEach((q) => q.removeEventListener("change", apply));
  }, []);

  useEffect(() => {
    /* Unpinned, scene/p are ignored entirely — every scene renders drawn —
       so there is nothing to reset and no listener to attach. */
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
        const at = done * SCENES;
        const idx = Math.min(SCENES - 1, Math.floor(at));
        setScene(idx);
        setP(clamp(at - idx));
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

  /** In stacked mode every scene is fully drawn; pinned, only the live one. */
  const at = (i: number) => (pinned ? (scene === i ? ease(p) : scene > i ? 1 : 0) : 1);

  return (
    <section className={`film ${pinned ? "film--pinned" : "film--flat"}`} id="top">
      <div
        className="film__rail"
        ref={railRef}
        style={pinned ? { height: `${SCENES * 100}vh` } : undefined}
      >
        <div className="film__stage">
          <div className={`film__bg film__bg--${backdrop}`} aria-hidden="true">
            {backdrop === "photo" && <img src={asset("img/hero-bg.jpg")} alt="" />}
            <FilmBackdrop variant={backdrop} />
          </div>

          <div className="film__scenes">
            <TitleScene on={pinned ? scene === 0 : true} hero={hero} />
            <Scene on={pinned ? scene === 1 : true} name="thesis">
              <p className="film__eyebrow">{film.thesis.eyebrow}</p>
              <p className="film__thesis">
                {film.thesis.line} <em>{film.thesis.emphasis}</em>
              </p>
            </Scene>
            <Scene on={pinned ? scene === 2 : true} name="wire">
              <Integration data={film.integration} p={at(2)} />
            </Scene>
            <Scene on={pinned ? scene === 3 : true} name="shift">
              <Shift data={film.shift} p={at(3)} />
            </Scene>
            <Scene on={pinned ? scene === 4 : true} name="outcome">
              <Outcome data={film.outcome} p={at(4)} />
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
  p,
}: {
  data: ReturnType<typeof useC>["film"]["integration"];
  p: number;
}) {
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

/* ---- Scene 4: 100 applications, 40 of them turning ---- */
function Shift({ data, p }: { data: ReturnType<typeof useC>["film"]["shift"]; p: number }) {
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

/* ---- Scene 5: the ladder out of manual work ---- */
function Outcome({ data, p }: { data: ReturnType<typeof useC>["film"]["outcome"]; p: number }) {
  const top = data.steps[data.steps.length - 1].value;
  return (
    <div className="outcome">
      <p className="film__eyebrow">{data.eyebrow}</p>
      <div className="outcome__body">
        <div className="outcome__ladder">
          {data.steps.map((s, i) => {
            /* each rung completes in its own quarter of the scene */
            const share = clamp((p - i / data.steps.length) * data.steps.length);
            return (
              <div className="rung" key={s.label} style={{ "--h": `${s.value}%` } as React.CSSProperties}>
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
      <ul className="outcome__proof">
        {data.proof.map((pr) => (
          <li key={pr.label}>
            <strong>{pr.value}</strong>
            <span>{pr.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
