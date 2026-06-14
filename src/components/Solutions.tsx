import { useState } from "react";
import { solutions } from "../data";
import Icon from "./Icon";

export default function Solutions() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section solutions" id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we build</span>
          <h2>Custom solutions, engineered end to end.</h2>
          <p>
            Fourteen solution types, one approach: governed, scalable systems built around your real
            workflows — never off-the-shelf. Select any solution to go deeper.
          </p>
        </div>

        <div className="solutions__grid">
          {solutions.map((s, i) => {
            const isOpen = open === i;
            return (
              <article
                key={s.title}
                className={`solution-card ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="solution-card__head"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`sol-${i}`}
                >
                  <span className="solution-card__icon">
                    <Icon name={s.icon} />
                  </span>
                  <span className="solution-card__heading">
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                  </span>
                  <span className="solution-card__toggle" aria-hidden="true">
                    <Icon name={isOpen ? "minus" : "plus"} />
                  </span>
                </button>

                {isOpen && (
                  <div className="solution-card__detail" id={`sol-${i}`}>
                    <p className="solution-card__body">{s.detail}</p>
                    <span className="solution-card__label">What's included</span>
                    <ul className="solution-card__list">
                      {s.capabilities.map((c) => (
                        <li key={c}>
                          <Icon name="check" className="solution-card__check" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <p className="solutions__note">
          Don't see your exact use case? Every engagement is custom —
          <a href="#contact"> tell us what you're trying to solve</a>.
        </p>
      </div>
    </section>
  );
}
