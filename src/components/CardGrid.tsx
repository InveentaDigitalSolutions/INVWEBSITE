import { useState } from "react";
import type { Offering } from "../i18n/types";
import { useC } from "../i18n/LocaleContext";
import Icon from "./Icon";
import { asset } from "../asset";

// Shared expandable card grid, used by both Capabilities and Solutions.
export default function CardGrid({ items, idPrefix }: { items: Offering[]; idPrefix: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const { cardGrid } = useC();

  return (
    <div className="solutions__grid">
      {items.map((s) => {
        const isOpen = open === s.id;
        return (
          <article
            key={s.id}
            className={`solution-card ${s.image ? "has-photo" : ""} ${isOpen ? "is-open" : ""}`}
          >
            {s.image && (
              <span className="solution-card__photo" aria-hidden="true">
                <img src={asset(`img/${s.image}.jpg`)} alt="" loading="lazy" />
              </span>
            )}
            <button
              className="solution-card__head"
              onClick={() => setOpen(isOpen ? null : s.id)}
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-${s.id}`}
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
              <div className="solution-card__detail" id={`${idPrefix}-${s.id}`}>
                <p className="solution-card__body">{s.detail}</p>
                <span className="solution-card__label">{cardGrid.whatWeBuilt}</span>
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
