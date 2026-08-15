/**
 * The ground the opening sequence is drawn on: a topographic contour field.
 *
 * Drawn, not photographed — it extends the brand guideline's own topo
 * language, weighs nothing, and is deterministic, so the same plate renders
 * on every load and every machine.
 *
 * Three things keep it from reading as a template gradient: depth (near
 * contours are crisp, far ones dissolve), emission (the accent contours glow
 * rather than merely being coloured), and grain — flat gradients band
 * visibly on real panels, and the noise is what dithers them out.
 */

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

/** Near / mid / far. The far band is blurred, the way a long lens sees it. */
const BANDS = [
  { blur: 2.4, from: 0, to: 14, opacity: 0.5 },
  { blur: 0.8, from: 14, to: 28, opacity: 0.8 },
  { blur: 0, from: 28, to: LINES, opacity: 1 },
];

export default function FilmBackdrop() {
  return (
    <>
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
          {BANDS.map((b, i) => (
            <filter key={i} id={`bd-b${i}`} x="-5%" y="-20%" width="110%" height="140%">
              <feGaussianBlur stdDeviation={b.blur} />
            </filter>
          ))}
        </defs>

        {BANDS.map((band, bi) => (
          <g key={bi} opacity={band.opacity} filter={band.blur ? `url(#bd-b${bi})` : undefined}>
            {Array.from({ length: band.to - band.from }, (_, k) => {
              const i = band.from + k;
              const lit = LIT.has(i);
              return (
                <g key={i}>
                  {/* the accent contour emits: a blurred twin under the line */}
                  {lit && (
                    <path
                      d={contour(i, LINES)}
                      fill="none"
                      stroke="var(--green)"
                      strokeWidth="3"
                      opacity="0.4"
                      filter="url(#bd-glow)"
                      vectorEffect="non-scaling-stroke"
                    />
                  )}
                  <path
                    d={contour(i, LINES)}
                    fill="none"
                    stroke={lit ? "var(--green)" : "currentColor"}
                    strokeWidth={lit ? 1.5 : 1}
                    opacity={lit ? 0.78 : 0.16 + (i / LINES) * 0.32}
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              );
            })}
          </g>
        ))}
      </svg>
      <span className="bd__grain" aria-hidden="true" />
    </>
  );
}
