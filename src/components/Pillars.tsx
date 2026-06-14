import { pillars } from "../data";

// The three brand pillars, on a light surface with the green square as the spark.
export default function Pillars() {
  return (
    <section className="pillars">
      <div className="container">
        <div className="pillars__grid">
          {pillars.map((p) => (
            <div className="pillar reveal" key={p.title}>
              <span className="pillar__mark" aria-hidden="true" />
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
