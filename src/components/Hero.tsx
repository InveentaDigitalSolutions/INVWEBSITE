import { useEffect, useRef, useState } from "react";
import { useC } from "../i18n/LocaleContext";
import FilmBackdrop from "./FilmBackdrop";
import { useScenePlay, clamp } from "../useScenePlay";
import { useInView } from "../useInView";

/**
 * The opening.
 *
 * This used to pin and take the scroll away for three viewport-heights.
 * People scrolled, the page refused to move, and a fair number concluded it
 * was broken — the affordance never gets found, because the confusion lands
 * first. The scenes are ordinary full-height sections now: the page scrolls
 * the way every page scrolls, and each scene animates when the reader
 * actually reaches it.
 *
 * The drawn backdrop stays behind all three via a sticky layer, so the
 * sequence keeps its continuity without owning anyone's scroll.
 */
export default function Hero() {
  const { hero, film } = useC();
  const rootRef = useRef<HTMLElement>(null);
  const [drift, setDrift] = useState(0);

  /* Parallax only — the page still scrolls normally; the ground just moves
     a little slower than the type in front of it. */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = rootRef.current;
        if (!el) return;
        const travel = el.offsetHeight - window.innerHeight;
        if (travel <= 0) return;
        setDrift(clamp(-el.getBoundingClientRect().top / travel));
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
  }, []);

  return (
    <section className="film" id="top" ref={rootRef}>
      {/* the wrapper spans exactly this section; a sticky element cannot be
          carried outside its containing block, which keeps the backdrop from
          painting over whatever follows */}
      <div className="film__bgwrap" aria-hidden="true">
        <div className="film__bg" style={{ "--film-p": drift } as React.CSSProperties}>
          <FilmBackdrop />
        </div>
      </div>

      <div className="film__scenes">
        <TitleScene hero={hero} />

        <Scene name="thesis">
          {(on) => (
            <>
              <p className={`film__eyebrow${on ? " is-in" : ""}`}>{film.thesis.eyebrow}</p>
              <p className={`film__thesis${on ? " is-in" : ""}`}>
                {film.thesis.line} <em>{film.thesis.emphasis}</em>
              </p>
            </>
          )}
        </Scene>

        <Scene name="wire">{(on) => <Integration data={film.integration} on={on} />}</Scene>
      </div>
    </section>
  );
}

/** A scene animates once it is genuinely on screen. */
function Scene({
  name,
  children,
}: {
  name: string;
  children: (on: boolean) => React.ReactNode;
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  return (
    <div className={`film__scene film__scene--${name}${inView ? " is-on" : ""}`} ref={ref}>
      <div className="film__inner">{children(inView)}</div>
    </div>
  );
}

/* ---- Scene 1: the title card. Always drawn — it is above the fold. ---- */
function TitleScene({ hero }: { hero: ReturnType<typeof useC>["hero"] }) {
  return (
    <div className="film__scene film__scene--title is-on">
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
