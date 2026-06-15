import type { CSSProperties } from "react";

// A stylised "intelligent operation" dashboard — KPIs, a live bar chart and a
// trend line — to show the kind of system Inveenta builds (not a real product).
const bars = [44, 60, 52, 74, 58, 86, 70, 92];

export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="dash__glow" />
      <div className="dash">
        <div className="dash__top">
          <span className="dash__live">
            <span className="dash__livedot" /> live
          </span>
          <span className="dash__title">operations overview</span>
          <span className="dash__dots">
            <i />
            <i />
            <i />
          </span>
        </div>

        <div className="dash__kpis">
          <div className="dash__kpi">
            <strong>−40%</strong>
            <span>Manual work</span>
          </div>
          <div className="dash__kpi dash__kpi--accent">
            <strong>5×</strong>
            <span>ROI</span>
          </div>
          <div className="dash__kpi">
            <strong>98%</strong>
            <span>On-time</span>
          </div>
        </div>

        <div className="dash__chart">
          <div className="dash__bars">
            {bars.map((h, i) => (
              <span
                key={i}
                className="dash__bar"
                style={{ "--h": `${h}%`, animationDelay: `${i * 0.14}s` } as CSSProperties}
              />
            ))}
          </div>
          <svg className="dash__spark" viewBox="0 0 260 70" preserveAspectRatio="none" fill="none">
            <polyline
              className="dash__sparkline"
              points="0,52 37,44 74,48 111,30 148,36 185,18 222,26 260,8"
              stroke="#b7da4c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle className="dash__sparkdot" cx="260" cy="8" r="3.5" fill="#b7da4c" />
          </svg>
        </div>

        <div className="dash__status">
          <span className="dash__statusdot" /> All systems on track
        </div>
      </div>
    </div>
  );
}
