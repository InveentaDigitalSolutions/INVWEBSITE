import { useC, useLp } from "../i18n/LocaleContext";
import CardGrid from "./CardGrid";

export default function Solutions() {
  const { solutionsSection, solutions } = useC();
  const lp = useLp();
  return (
    <section className="section solutions" id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{solutionsSection.eyebrow}</span>
          <h2>{solutionsSection.h2}</h2>
          <p>{solutionsSection.p}</p>
        </div>
        <CardGrid items={solutions} idPrefix="sol" />
        <p className="solutions__note">
          {solutionsSection.note} <a href={`${lp("/")}#contact`}>{solutionsSection.noteLink}</a>.
        </p>
      </div>
    </section>
  );
}
