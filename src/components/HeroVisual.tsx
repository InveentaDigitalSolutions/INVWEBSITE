// Animated focal graphic: data · systems · people converging on one
// intelligent operation (the green brand node).
export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <svg className="hv__svg" viewBox="0 0 440 400" fill="none">
        <defs>
          <radialGradient id="hvGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b7da4c" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#b7da4c" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* glow behind the centre node */}
        <circle cx="220" cy="205" r="86" fill="url(#hvGlow)" className="hv-glow" />

        {/* connecting lines */}
        <g stroke="rgba(231,234,239,0.28)" strokeWidth="1.25">
          <line className="hv-line hv-flow" x1="220" y1="205" x2="78" y2="86" />
          <line className="hv-line hv-flow" x1="220" y1="205" x2="372" y2="104" />
          <line className="hv-line hv-flow" x1="220" y1="205" x2="128" y2="330" />
          <line className="hv-line hv-flow" x1="220" y1="205" x2="362" y2="306" />
        </g>

        {/* sparks travelling from each node into the centre */}
        <g>
          <circle className="hv-spark hv-spark--a" cx="220" cy="205" r="3.4" fill="#b7da4c" />
          <circle className="hv-spark hv-spark--b" cx="220" cy="205" r="3.4" fill="#dbfc52" />
          <circle className="hv-spark hv-spark--c" cx="220" cy="205" r="3.4" fill="#b7da4c" />
          <circle className="hv-spark hv-spark--d" cx="220" cy="205" r="3.4" fill="#dbfc52" />
        </g>

        {/* slow dashed ring */}
        <circle
          className="hv-ring"
          cx="220"
          cy="205"
          r="58"
          stroke="rgba(183,218,76,0.35)"
          strokeWidth="1.25"
          strokeDasharray="3 9"
        />

        {/* outer nodes + labels */}
        <g className="hv-node hv-node--a">
          <circle cx="78" cy="86" r="8" fill="rgba(255,255,255,0.1)" stroke="rgba(231,234,239,0.5)" />
          <circle cx="78" cy="86" r="3" fill="#b7da4c" />
          <text x="78" y="62" className="hv-label">Data</text>
        </g>
        <g className="hv-node hv-node--b">
          <circle cx="372" cy="104" r="8" fill="rgba(255,255,255,0.1)" stroke="rgba(231,234,239,0.5)" />
          <circle cx="372" cy="104" r="3" fill="#e7eaef" />
          <text x="372" y="80" className="hv-label">Systems</text>
        </g>
        <g className="hv-node hv-node--c">
          <circle cx="128" cy="330" r="8" fill="rgba(255,255,255,0.1)" stroke="rgba(231,234,239,0.5)" />
          <circle cx="128" cy="330" r="3" fill="#e7eaef" />
          <text x="128" y="356" className="hv-label">People</text>
        </g>
        <g className="hv-node hv-node--d">
          <circle cx="362" cy="306" r="8" fill="rgba(255,255,255,0.1)" stroke="rgba(231,234,239,0.5)" />
          <circle cx="362" cy="306" r="3" fill="#e7eaef" />
          <text x="362" y="332" className="hv-label">Processes</text>
        </g>

        {/* centre brand node */}
        <circle className="hv-pulse" cx="220" cy="205" r="17" fill="none" stroke="#b7da4c" strokeWidth="1.5" />
        <circle cx="220" cy="205" r="15" fill="#16243b" stroke="#b7da4c" strokeWidth="2" />
        <circle cx="220" cy="205" r="5.5" fill="#b7da4c" />
      </svg>
    </div>
  );
}
