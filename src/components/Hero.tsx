import { stats } from "../data";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero on-dark" id="top">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="hero__texture" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="hero__kicker">
          <span className="hero__kicker-dot" aria-hidden="true" />
          engineering intelligent business
        </span>

        <h1 className="hero__title">
          Complex operations,
          <br />
          made simple.
        </h1>

        <p className="hero__lead">
          Inveenta designs and builds custom enterprise software — turning complex, manual
          operations into governed, scalable systems engineered for optimization, scalability and
          performance.
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
