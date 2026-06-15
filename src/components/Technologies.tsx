import type { Tech } from "../i18n/types";
import { useC } from "../i18n/LocaleContext";
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
  const { technology } = useC();
  const all = technology.groups.flatMap((g) => g.items);
  const mid = Math.ceil(all.length / 2);
  const rows = [all.slice(0, mid), all.slice(mid)];

  return (
    <section className="section technology" id="technology">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{technology.eyebrow}</span>
          <h2>{technology.h2}</h2>
          <p>{technology.p}</p>
        </div>
      </div>

      <div className="tech-marquee">
        {rows.map((row, r) => (
          <div className={`tech-track ${r === 1 ? "tech-track--right" : ""}`} key={r}>
            {[...row, ...row].map((t, i) => (
              <Tile t={t} key={`${t.name}-${i}`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
