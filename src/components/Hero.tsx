import { useC } from "../i18n/LocaleContext";
import Icon from "./Icon";
import CountUp from "./CountUp";
import { asset } from "../asset";

export default function Hero() {
  const { hero, stats } = useC();
  return (
    <section className="hero on-dark" id="top">
      <span className="hero__media photo" aria-hidden="true">
        <img className="hero__bg" src={asset("img/hero-bg.jpg")} alt="" />
      </span>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <span className="hero__kicker">
          <span className="hero__kicker-rule" aria-hidden="true" />
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

        <div className="hero__foot">
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
