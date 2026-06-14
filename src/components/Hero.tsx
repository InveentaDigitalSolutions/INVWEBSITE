import { stats } from "../data";
import Icon from "./Icon";
import Motif from "./Motif";

export default function Hero() {
  return (
    <section className="hero on-dark" id="top">
      <div className="hero__texture" aria-hidden="true" />
      <div className="container hero__inner">
        <Motif className="hero__motif" />

        <h1 className="hero__title">
          We engineer
          <br />
          intelligent business.
        </h1>

        <p className="hero__lead">
          Inveenta designs and builds enterprise solutions on the Microsoft Power Platform — turning
          complex, manual operations into governed, scalable systems engineered for optimization,
          scalability and performance.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Start a project <Icon name="arrow" className="btn__icon" />
          </a>
          <a href="#solutions" className="btn btn-ghost-light">
            Explore solutions
          </a>
        </div>

        <dl className="hero__kpis">
          {stats.map((s) => (
            <div className="kpi" key={s.label}>
              <dd className="kpi__figure">{s.value}</dd>
              <dt className="kpi__label">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
