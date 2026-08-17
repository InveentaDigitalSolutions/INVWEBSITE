import { useC } from "../i18n/LocaleContext";

/**
 * Where we operate, as a stack.
 *
 * The maturity ladder above says how far an operation has come; this says
 * which parts of it we build. Agents run alongside every layer rather than
 * sitting on top of one, and governance runs the full height — both are
 * properties of the whole stack, not a feature of any single layer.
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
          <div className="stack__labels" aria-hidden="true">
            <span className="stack__colhead">{layers.agentsLabel}</span>
          </div>

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
                <p className="slab__agent">{row.agent}</p>
              </li>
            ))}
          </ol>

          {/* One governance model, applied to everything above. Spanning the
              full width says "all four layers" far better than rotated type
              down the side did — that was unreadable, and never said why it
              was vertical. */}
          <div className="stack__gov">
            <span className="stack__gov-label">{layers.governanceLabel}</span>
            <span className="stack__gov-items">
              {layers.governanceItems.map((g) => (
                <span key={g}>{g}</span>
              ))}
            </span>
            <p className="stack__gov-note">{layers.governanceNote}</p>
          </div>
        </div>

        <p className="stack__note">{layers.note}</p>
      </div>
    </section>
  );
}
