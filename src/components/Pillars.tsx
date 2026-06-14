import { pillars } from "../data";

// The three brand pillars, rendered on the dark navy theme from the identity sheet.
export default function Pillars() {
  return (
    <section className="pillars">
      <div className="container">
        <div className="pillars__grid">
          {pillars.map((p, i) => (
            <div className="pillar" key={p.title}>
              <span className="pillar__num">0{i + 1}</span>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
