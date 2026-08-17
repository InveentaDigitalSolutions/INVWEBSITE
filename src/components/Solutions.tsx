import { useC, useLp } from "../i18n/LocaleContext";
import CardGrid from "./CardGrid";

/**
 * The work, organised on the maturity ladder the opening film draws:
 * digitalize, orchestrate, autonomize.
 *
 * A flat list of twelve tools read as the argument — twelve tracking systems,
 * which is digitalization, not autonomy. Here the stage carries the argument
 * and the delivered work sits underneath it as evidence. Nothing is hidden:
 * every solution still has its row and its record, one level down.
 */
export default function Solutions() {
  const { solutionsSection, solutions, stages } = useC();
  const lp = useLp();

  return (
    <section className="section solutions" id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{solutionsSection.eyebrow}</span>
          <h2>{solutionsSection.h2}</h2>
          <p>{solutionsSection.p}</p>
        </div>

        <ol className="stages">
          {stages.map((stage, i) => {
            /* keep the authored order of the stage's list, not the catalogue's */
            const items = stage.solutions
              .map((id) => solutions.find((s) => s.id === id))
              .filter((s): s is (typeof solutions)[number] => Boolean(s));

            return (
              <li className="stage reveal" key={stage.id}>
                <div className="stage__head">
                  <span className="stage__n">{String(i + 1).padStart(2, "0")}</span>
                  <div className="stage__intro">
                    <h3 className="stage__title">{stage.title}</h3>
                    <p className="stage__short">{stage.short}</p>
                  </div>
                  <p className="stage__detail">{stage.detail}</p>
                </div>

                <CardGrid items={items} idPrefix={`sol-${stage.id}`} />
              </li>
            );
          })}
        </ol>

        <p className="solutions__note">
          {solutionsSection.note} <a href={`${lp("/")}#contact`}>{solutionsSection.noteLink}</a>.
        </p>
      </div>
    </section>
  );
}
