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

        <div className="industries__grid">
          {industries.map((ind) => (
            <Link to={lp(`/industries/${ind.slug}`)} className="industry-card reveal" key={ind.name}>
              <img
                className="industry-card__img"
                src={asset(`img/${ind.image}.jpg`)}
                alt={ind.name}
                loading="lazy"
              />
              <div className="industry-card__overlay" />
              <div className="industry-card__body">
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
