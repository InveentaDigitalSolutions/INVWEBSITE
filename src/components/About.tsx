import Icon from "./Icon";
import { asset } from "../asset";
import { useC } from "../i18n/LocaleContext";

export default function About() {
  const { about } = useC();
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__copy">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.h2}</h2>
          <p>{about.p1}</p>
          <p>{about.p2}</p>
          <ul className="about__points">
            {about.points.map((p) => (
              <li key={p}>
                <Icon name="check" className="about__check" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="about__media reveal">
          <img src={asset("img/about.jpg")} alt={about.imgAlt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
