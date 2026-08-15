/**
 * The ground the opening sequence is drawn on.
 *
 * Candidates live side by side so they can be compared in place; append
 * ?bg=topo|field|fuse|grid|photo to the home page to switch.
 *
 * Three things separate these from a template gradient: depth (near
 * contours are crisp, far ones dissolve), emission (the accent contour
 * glows rather than just being coloured), and grain — flat gradients band
 * visibly on real displays, and the noise is what stops them looking cheap.
 */
export type Backdrop = "topo" | "field" | "fuse" | "grid" | "photo";

/** Deterministic — the same plate renders on every load and every machine. */
function contour(index: number, total: number) {
  const w = 1440;
  const step = 36;
  const t = index / total;
  /* lines crowd toward the lower right, the way contours crowd on a slope */
  const base = 90 + t * 1020;
  const amp = 24 + Math.sin(t * 3.1) * 52 + t * 46;
  const wave = 0.0029 + t * 0.0014;
  const phase = index * 0.58;

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

const LINES = 40;
/** The two contours that carry the accent. */
const LIT = new Set([13, 22]);

/**
 * Contours in three depth bands. The far band is blurred and dim, the near
 * band crisp — the same trick a long lens plays, and the reason this reads
 * as a photographed space rather than a pattern.
 */
function Contours({ glow }: { glow: boolean }) {
  const bands: { blur: number; from: number; to: number; opacity: number }[] = [
    { blur: 2.4, from: 0, to: 14, opacity: 0.5 },
    { blur: 0.8, from: 14, to: 28, opacity: 0.8 },
    { blur: 0, from: 28, to: LINES, opacity: 1 },
  ];

  return (
    <svg
      className="bd bd--topo"
      viewBox="0 0 1440 1100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="bd-glow" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        {bands.map((b, i) => (
          <filter key={i} id={`bd-b${i}`} x="-5%" y="-20%" width="110%" height="140%">
            <feGaussianBlur stdDeviation={b.blur} />
          </filter>
        ))}
      </defs>

      {bands.map((band, bi) => (
        <g key={bi} opacity={band.opacity} filter={band.blur ? `url(#bd-b${bi})` : undefined}>
          {Array.from({ length: band.to - band.from }, (_, k) => {
            const i = band.from + k;
            const lit = LIT.has(i);
            return (
              <g key={i}>
                {/* the accent contour emits: a blurred twin under the line */}
                {lit && glow && (
                  <path
                    d={contour(i, LINES)}
                    fill="none"
                    stroke="var(--green)"
                    strokeWidth="3"
                    opacity="0.45"
                    filter="url(#bd-glow)"
                    vectorEffect="non-scaling-stroke"
                  />
                )}
                <path
                  d={contour(i, LINES)}
                  fill="none"
                  stroke={lit ? "var(--green)" : "currentColor"}
                  strokeWidth={lit ? 1.5 : 1}
                  opacity={lit ? 0.82 : 0.16 + (i / LINES) * 0.32}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            );
          })}
        </g>
      ))}
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

export default function FilmBackdrop({ variant }: { variant: Backdrop }) {
  if (variant === "photo") return <span className="bd__grain" aria-hidden="true" />;
  if (variant === "grid") return <Grid />;

  return (
    <>
      {/* the bloom sits under the drawing in fuse, and is the whole plate in field */}
      {(variant === "field" || variant === "fuse") && (
        <span className="bd bd--bloom" aria-hidden="true" />
      )}
      {(variant === "topo" || variant === "fuse") && <Contours glow={variant === "fuse"} />}
      <span className="bd__grain" aria-hidden="true" />
    </>
  );
}
