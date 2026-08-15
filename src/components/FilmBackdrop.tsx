/**
 * The ground the opening sequence is drawn on.
 *
 * Candidates live side by side so they can be compared in place; append
 * ?bg=topo|grid|field|photo to the home page to switch. The default is the
 * one we ship.
 */
export type Backdrop = "topo" | "grid" | "field" | "photo";

/** Deterministic — the same plate renders on every load and every machine. */
function contour(index: number, total: number) {
  const w = 1440;
  const step = 40;
  const t = index / total;
  /* lines crowd toward the lower right, the way contours crowd on a slope */
  const base = 120 + t * 980;
  const amp = 26 + Math.sin(t * 3.1) * 54 + t * 42;
  const wave = 0.0031 + t * 0.0013;
  const phase = index * 0.62;

  let d = "";
  for (let x = -step; x <= w + step; x += step) {
    const y =
      base +
      Math.sin(x * wave + phase) * amp +
      Math.sin(x * wave * 2.3 + phase * 1.7) * amp * 0.22;
    d += `${d ? "L" : "M"}${x} ${y.toFixed(1)}`;
  }
  return d;
}

/** Topographic contour field — the brand's own topo language, drawn. */
function Topo() {
  const lines = 34;
  return (
    <svg
      className="bd bd--topo"
      viewBox="0 0 1440 1100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {Array.from({ length: lines }, (_, i) => {
        /* two contours carry the accent, the rest recede */
        const lit = i === 11 || i === 19;
        return (
          <path
            key={i}
            d={contour(i, lines)}
            fill="none"
            stroke={lit ? "var(--green)" : "currentColor"}
            strokeWidth={lit ? 1.6 : 1}
            opacity={lit ? 0.75 : 0.2 + (i / lines) * 0.34}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

/** Instrument grid — fine rules, heavier every fifth, measurement ticks. */
function Grid() {
  return (
    <div className="bd bd--grid" aria-hidden="true">
      <span className="bd__fine" />
      <span className="bd__coarse" />
      <svg className="bd__ticks" viewBox="0 0 1440 900" preserveAspectRatio="none">
        {Array.from({ length: 24 }, (_, i) => (
          <line
            key={i}
            x1={i * 60}
            y1="0"
            x2={i * 60}
            y2={i % 4 === 0 ? 18 : 9}
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <line x1="0" y1="0" x2="1440" y2="0" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

/** Light field — depth with no literal subject at all. */
function Field() {
  return <div className="bd bd--field" aria-hidden="true" />;
}

export default function FilmBackdrop({ variant }: { variant: Backdrop }) {
  if (variant === "topo") return <Topo />;
  if (variant === "grid") return <Grid />;
  if (variant === "field") return <Field />;
  return null;
}
