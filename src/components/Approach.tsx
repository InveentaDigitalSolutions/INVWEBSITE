import { process } from "../data";
import { asset } from "../asset";

export default function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="container approach__grid">
        <div className="approach__intro">
          <span className="eyebrow">Approach</span>
          <h2>One team, from the first question to the final handover.</h2>
          <p>
            Most engagements need three things they rarely find in one place: architecture that holds
            up under real data, development that ships, and stakeholder communication that keeps the
            technical and business sides aligned. We do all three — and run discovery, design and
            delivery in German, English, Spanish or Italian.
          </p>
          <img className="approach__img" src={asset("img/team.jpg")} alt="Working session" loading="lazy" />
        </div>

        <ol className="approach__steps">
          {process.map((p) => (
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
