import Icon from "./Icon";
import { asset } from "../asset";

const points = [
  "Architecture, development and analysis in one team",
  "Built for regulated, enterprise-grade delivery",
  "Fluent in German, English, Spanish and Italian",
  "You own the code and the data",
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__copy">
          <span className="eyebrow">About</span>
          <h2>One partner for the whole build.</h2>
          <p>
            Inveenta is a senior engineering practice that pairs solution architecture, hands-on
            development and business analysis in one place — the people who run discovery also write
            the code. We design systems that hold up under real data and real scrutiny, and stay
            close while they grow.
          </p>
          <p>
            Delivery is built for regulated, enterprise environments — automotive, logistics and
            finance — and runs in German, English, Spanish or Italian, from the first question to
            the final handover.
          </p>
          <ul className="about__points">
            {points.map((p) => (
              <li key={p}>
                <Icon name="check" className="about__check" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="about__media reveal">
          <img src={asset("img/about.jpg")} alt="Inveenta at work" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
