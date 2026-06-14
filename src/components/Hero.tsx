import { stats } from "../data";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <span className="hero__badge">
          <span className="hero__badge-dot" /> Now taking on new partners
        </span>

        <h1 className="hero__title">
          We engineer <span className="hero__title-accent">intelligent business</span>.
        </h1>

        <p className="hero__lead">
          Inveenta designs and builds enterprise solutions on the Microsoft Power Platform — turning
          complex, manual operations into governed, scalable systems engineered for optimization,
          scalability, and performance, so your team spends less time fighting tools and more time
          doing the work that matters.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Start a project <Icon name="arrow" className="btn__icon" />
          </a>
          <a href="#services" className="btn btn-ghost">
            See what we do
          </a>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="hero__panel-body">
            <div className="hero__panel-side">
              <div className="hero__chip is-active" />
              <div className="hero__chip" />
              <div className="hero__chip" />
              <div className="hero__chip" />
            </div>
            <div className="hero__panel-main">
              <div className="hero__cards">
                {stats.map((s) => (
                  <div className="hero__stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero__graph">
                <div style={{ height: "42%" }} />
                <div style={{ height: "66%" }} />
                <div style={{ height: "54%" }} />
                <div style={{ height: "80%" }} />
                <div style={{ height: "72%" }} />
                <div style={{ height: "95%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
