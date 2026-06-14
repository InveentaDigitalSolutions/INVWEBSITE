import { services } from "../data";
import Icon from "./Icon";

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Everything you need to engineer and run great software.</h2>
          <p>
            From the first prototype to the thousandth user, we cover the full lifecycle so you can
            focus on your business instead of your tooling.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-card__icon">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
