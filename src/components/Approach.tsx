import { asset } from "../asset";
import { useC } from "../i18n/LocaleContext";

export default function Approach() {
  const { approach } = useC();
  return (
    <section className="section approach" id="approach">
      <div className="container approach__grid">
        <div className="approach__intro">
          <span className="eyebrow">{approach.eyebrow}</span>
          <h2>{approach.h2}</h2>
          <p>{approach.p}</p>
          <img
            className="approach__img"
            src={asset("img/team.jpg")}
            alt={approach.eyebrow}
            loading="lazy"
          />
        </div>

        <ol className="approach__steps">
          {approach.steps.map((p) => (
            <li className="approach-step reveal" key={p.step}>
              <span className="approach-step__num">{p.step}</span>
              <div className="approach-step__body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
