import { solutions } from "../data";
import CardGrid from "./CardGrid";

export default function Solutions() {
  return (
    <section className="section solutions" id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we build</span>
          <h2>Solutions, ready to make your own.</h2>
          <p>
            Productized use-cases we've delivered before — each one custom-fitted to your data and
            process, and mapped to the industries we work in.
          </p>
        </div>
        <CardGrid items={solutions} idPrefix="sol" />
        <p className="solutions__note">
          Don't see your exact use case? Every engagement is custom —
          <a href="#contact"> tell us what you're trying to solve</a>.
        </p>
      </div>
    </section>
  );
}
