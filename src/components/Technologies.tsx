import { techGroups, type Tech } from "../data";
import { asset } from "../asset";

function Tile({ t }: { t: Tech }) {
  return (
    <div className="tech-tile" title={t.name}>
      <span className="tech-tile__badge">
        <img src={asset(`logos/${t.logo}.svg`)} alt={`${t.name} logo`} loading="lazy" />
      </span>
      <span className="tech-tile__name">{t.name}</span>
    </div>
  );
}

export default function Technologies() {
  const all = techGroups.flatMap((g) => g.items);
  const mid = Math.ceil(all.length / 2);
  const rows = [all.slice(0, mid), all.slice(mid)];

  return (
    <section className="section technology" id="technology">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Technology</span>
          <h2>The stack behind every build.</h2>
          <p>
            Deep, deliberate expertise across the platforms, clouds and tools we build on — so the
            right technology is chosen for the job, not the other way around.
          </p>
        </div>
      </div>

      <div className="tech-marquee">
        {rows.map((row, r) => (
          <div className={`tech-track ${r === 1 ? "tech-track--right" : ""}`} key={r}>
            {/* duplicated once for a seamless loop */}
            {[...row, ...row].map((t, i) => (
              <Tile t={t} key={`${t.name}-${i}`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
