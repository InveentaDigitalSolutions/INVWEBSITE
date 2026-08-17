import { useC } from "../i18n/LocaleContext";

/**
 * Where we operate, drawn as the stack it is.
 *
 * Governance is a pillar down the left, spanning every layer, because that is
 * what it does — one model, holding all four. As a band underneath it read as
 * a footnote; rotated down a 54px gutter it was unreadable. As a column with
 * the layers connected into it, the drawing states the relationship without
 * needing a sentence to explain it.
 */
export default function Layers() {
  const { layers } = useC();

  return (
    <section className="section layers" id="architecture">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{layers.eyebrow}</span>
          <h2>{layers.h2}</h2>
          <p>{layers.p}</p>
        </div>

        <div className="stack">
          {/* the pillar: one governance model, holding every layer */}
          <aside className="pillar">
            <h3 className="pillar__label">{layers.governanceLabel}</h3>
            <ul className="pillar__items">
              {layers.governanceItems.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p className="pillar__note">{layers.governanceNote}</p>
          </aside>

          <div className="stack__body">
            <span className="stack__colhead" aria-hidden="true">
              {layers.agentsLabel}
            </span>

            <ol className="stack__rows">
              {layers.rows.map((row) => (
                <li className={`slab${row.focus ? " is-focus" : ""}`} key={row.id}>
                  <div className="slab__layer">
                    <h3 className="slab__name">
                      {row.name}
                      {row.focus && <span className="slab__focus">{layers.focusLabel}</span>}
                    </h3>
                    <p className="slab__items">{row.items}</p>
                  </div>
                  {/* the tie from the layer to the agent working it */}
                  <span className="slab__tie" aria-hidden="true" />
                  <p className="slab__agent">{row.agent}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="stack__note">{layers.note}</p>
      </div>
    </section>
  );
}
