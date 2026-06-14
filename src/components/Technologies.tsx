import { techGroups, techAlso } from "../data";
import { asset } from "../asset";

export default function Technologies() {
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

        <div className="tech-groups">
          {techGroups.map((g) => (
            <div className="tech-group reveal" key={g.group}>
              <span className="tech-group__title">{g.group}</span>
              <div className="tech-group__items">
                {g.items.map((t) => (
                  <div className="tech-tile" key={t.name} title={t.name}>
                    <span className="tech-tile__badge">
                      <img src={asset(`logos/${t.logo}.svg`)} alt={`${t.name} logo`} loading="lazy" />
                    </span>
                    <span className="tech-tile__name">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="tech-also">
          <span>Also fluent in</span>
          {techAlso.map((t) => (
            <span className="tech-also__tag" key={t}>
              {t}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
