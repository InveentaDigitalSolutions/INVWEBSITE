import { useC } from "../i18n/LocaleContext";
import Icon from "./Icon";

export default function Why() {
  const { why } = useC();
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{why.eyebrow}</span>
          <h2>{why.h2}</h2>
          <p>{why.p}</p>
        </div>
        <div className="why__grid">
          {why.points.map((w) => (
            <div className="why__item" key={w.title}>
              <span className="why__icon">
                <Icon name={w.icon} />
              </span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
