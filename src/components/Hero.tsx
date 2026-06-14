import { stats } from "../data";
import Icon from "./Icon";
import CountUp from "./CountUp";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="hero on-dark" id="top">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="hero__beam" aria-hidden="true" />
      <div className="hero__texture" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__top">
          <div className="hero__content">
            <span className="hero__kicker">
              <span className="hero__kicker-dot" aria-hidden="true" />
              engineering intelligent business
            </span>

            <h1 className="hero__title">
              Run leaner.
              <br />
              Scale faster.
              <br />
              Perform better.
            </h1>

            <p className="hero__lead">
              Inveenta designs and builds custom enterprise software that turns complex, manual
              operations into governed, scalable systems — engineered around how your business
              actually works.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn-primary">
                Start a project <Icon name="arrow" className="btn__icon" />
              </a>
              <a href="#solutions" className="btn btn-ghost-light">
                Explore solutions
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <HeroVisual />
          </div>
        </div>

        <dl className="hero__kpis">
          {stats.map((s) => (
            <div className="kpi" key={s.label}>
              <dd className="kpi__figure">
                <CountUp value={s.value} />
              </dd>
              <dt className="kpi__label">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
