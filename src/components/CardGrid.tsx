import { useState } from "react";
import type { Offering } from "../data";
import Icon from "./Icon";

// Shared expandable card grid, used by both Capabilities and Solutions.
export default function CardGrid({ items, idPrefix }: { items: Offering[]; idPrefix: string }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="solutions__grid">
      {items.map((s, i) => {
        const isOpen = open === s.title;
        return (
          <article
            key={s.title}
            className={`solution-card reveal ${isOpen ? "is-open" : ""}`}
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <button
              className="solution-card__head"
              onClick={() => setOpen(isOpen ? null : s.title)}
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-${s.title}`}
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
              <div className="solution-card__detail" id={`${idPrefix}-${s.title}`}>
                <p className="solution-card__body">{s.detail}</p>
                <span className="solution-card__label">What we've delivered</span>
                <ul className="solution-card__list">
                  {s.experience.map((e) => (
                    <li key={e}>
                      <Icon name="check" className="solution-card__check" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
