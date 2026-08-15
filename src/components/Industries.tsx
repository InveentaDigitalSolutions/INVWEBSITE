import { Link } from "react-router-dom";
import { useC, useLp } from "../i18n/LocaleContext";
import Icon from "./Icon";
import { asset } from "../asset";

export default function Industries() {
  const { industriesSection, industries } = useC();
  const lp = useLp();
  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{industriesSection.eyebrow}</span>
          <h2>{industriesSection.h2}</h2>
          <p>{industriesSection.p}</p>
        </div>

      </div>

      {/* full-bleed: the crops run to the screen edge, not the text column */}
      <div className="bleed">
        <div className="industries__grid">
          {industries.map((ind, i) => (
            <Link to={lp(`/industries/${ind.slug}`)} className="industry-card reveal" key={ind.name}>
              <span className="industry-card__media photo" aria-hidden="true">
                <img src={asset(`img/${ind.image}.jpg`)} alt="" loading="lazy" />
              </span>
              <div className="industry-card__overlay" />
              <div className="industry-card__body">
                <span className="industry-card__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{ind.name}</h3>
                <p>{ind.body}</p>
                <span className="industry-card__cta">
                  {industriesSection.explore} <Icon name="arrow" className="industry-card__arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
