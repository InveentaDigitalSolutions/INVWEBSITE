import { whyPoints } from "../data";
import Icon from "./Icon";

export default function Why() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Inveenta</span>
          <h2>The difference is who you're actually working with.</h2>
          <p>
            Most builds get lost in the gap between strategy, delivery and handover — between the
            people who scope it and the people who write it. We close that gap.
          </p>
        </div>
        <div className="why__grid">
          {whyPoints.map((w) => (
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
