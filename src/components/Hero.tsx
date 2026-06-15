import { useC } from "../i18n/LocaleContext";
import Icon from "./Icon";
import CountUp from "./CountUp";
import HeroVisual from "./HeroVisual";
import { asset } from "../asset";

export default function Hero() {
  const { hero, stats } = useC();
  return (
    <section className="hero on-dark" id="top">
      <img className="hero__bg" src={asset("img/hero-bg.jpg")} alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__aurora" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__top">
          <div className="hero__content">
            <span className="hero__kicker">
              <span className="hero__kicker-dot" aria-hidden="true" />
              {hero.kicker}
            </span>

            <h1 className="hero__title">
              {hero.titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < hero.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="hero__lead">{hero.lead}</p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn-primary">
                {hero.primary} <Icon name="arrow" className="btn__icon" />
              </a>
              <a href="#solutions" className="btn btn-ghost-light">
                {hero.ghost}
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
