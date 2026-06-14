import { company } from "../data";
import Icon from "./Icon";

const points = [
  "Engineered around how your team actually works, not a rigid template",
  "Clear pricing and timelines — no surprises mid-project",
  "Code and data you own, hosted wherever you need it",
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__copy">
          <span className="eyebrow">Our approach</span>
          <h2>We make the complicated parts of your business feel simple.</h2>
          <p className="about__lead">
            Most teams don't need more software — they need software that fits. {company.name} is a
            senior engineering team that designs and builds systems around your real workflows, then
            stays close while they grow with you.
          </p>
          <ul className="about__list">
            {points.map((p) => (
              <li key={p}>
                <Icon name="check" className="about__check" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <aside className="about__aside">
          <blockquote className="about__quote">
            “They shipped something usable in three weeks that replaced a process we'd struggled with
            for years. It just works.”
            <footer>
              <strong>Operations Lead</strong>
              <span>Early partner</span>
            </footer>
          </blockquote>
        </aside>
      </div>
    </section>
  );
}
