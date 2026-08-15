import { useState } from "react";
import type { Offering } from "../i18n/types";
import { useC } from "../i18n/LocaleContext";
import Icon from "./Icon";
import { asset } from "../asset";

// Abstract capability plates live in public/img/cap/*.svg and are keyed by id.
const isAbstract = (image: string) => image.startsWith("cap-");

// Shared editorial index list, used by Capabilities, Solutions and IndustryPage.
// Rows sit on hairline rules and use the full width when collapsed. Opening a row
// reveals its detail — and, when the offering has one, its visual alongside the copy.
export default function CardGrid({
  items,
  idPrefix,
  showDelivered,
}: {
  items: Offering[];
  idPrefix: string;
  /** Surfaces the delivered-work count on the closed row — evidence that we
      have actually built this, without making the reader click to find out. */
  showDelivered?: boolean;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const { cardGrid } = useC();

  return (
    <div className="index">
      {items.map((s, i) => {
        const isOpen = open === s.id;
        return (
          <article key={s.id} className={`irow ${isOpen ? "is-open" : ""}`}>
            <button
              className="irow__head"
              onClick={() => setOpen(isOpen ? null : s.id)}
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-${s.id}`}
            >
              <span className="irow__n">{String(i + 1).padStart(2, "0")}</span>
              <span className="irow__t">
                {s.title}
                {showDelivered && s.experience.length > 0 && (
                  <em className="irow__count">
                    {s.experience.length} {cardGrid.delivered}
                  </em>
                )}
              </span>
              <span className="irow__d">{s.short}</span>
              <span className="irow__a" aria-hidden="true">
                <Icon name={isOpen ? "minus" : "plus"} />
              </span>
            </button>

            {isOpen && (
              <div className={`irow__detail ${s.image ? "has-photo" : ""}`} id={`${idPrefix}-${s.id}`}>
                <div className="irow__copy">
                  <p className="irow__body">{s.detail}</p>
                  <span className="irow__label">{cardGrid.whatWeBuilt}</span>
                  <ul className="irow__list">
                    {s.experience.map((e) => (
                      <li key={e}>
                        <Icon name="check" className="irow__check" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                {s.image &&
                  // Abstract brand plates (capabilities) render as-is; photos get the duotone grade.
                  (isAbstract(s.image) ? (
                    <span className="irow__img irow__img--plate" aria-hidden="true">
                      <img src={asset(`img/cap/${s.image}.svg`)} alt="" loading="lazy" />
                    </span>
                  ) : (
                    <span className="irow__img photo" aria-hidden="true">
                      <img src={asset(`img/${s.image}.jpg`)} alt="" loading="lazy" />
                    </span>
                  ))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
