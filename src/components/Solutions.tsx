import { useMemo, useState } from "react";
import { solutions, solutionCategories } from "../data";
import Icon from "./Icon";

const categoryOf = (title: string) =>
  solutionCategories.find((c) => c.titles.includes(title))?.name ?? "Other";

export default function Solutions() {
  const [open, setOpen] = useState<string | null>(null);
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return solutions.filter((s) => {
      const inCat = active === "All" || categoryOf(s.title) === active;
      const inText =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.short.toLowerCase().includes(q) ||
        s.detail.toLowerCase().includes(q) ||
        s.experience.some((e) => e.toLowerCase().includes(q));
      return inCat && inText;
    });
  }, [active, query]);

  // When showing everything (no search, "All"), group by category for structure.
  const grouped = active === "All" && !query.trim();
  const groups = grouped
    ? solutionCategories.map((c) => ({
        name: c.name,
        items: filtered.filter((s) => categoryOf(s.title) === c.name),
      }))
    : [{ name: "", items: filtered }];

  const renderCard = (s: (typeof solutions)[number]) => {
    const isOpen = open === s.title;
    return (
      <article key={s.title} className={`solution-card ${isOpen ? "is-open" : ""}`}>
        <button
          className="solution-card__head"
          onClick={() => setOpen(isOpen ? null : s.title)}
          aria-expanded={isOpen}
          aria-controls={`sol-${s.title}`}
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
          <div className="solution-card__detail" id={`sol-${s.title}`}>
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
  };

  return (
    <section className="section solutions" id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we build</span>
          <h2>Custom solutions, engineered end to end.</h2>
          <p>
            Fifteen solution types across four families — governed, scalable systems built around
            your real workflows. Filter by area or search to find what fits.
          </p>
        </div>

        <div className="sol-controls">
          <div className="sol-search">
            <Icon name="search" className="sol-search__icon" />
            <input
              type="search"
              placeholder="Search solutions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search solutions"
            />
          </div>
          <div className="sol-chips" role="tablist" aria-label="Solution categories">
            {["All", ...solutionCategories.map((c) => c.name)].map((c) => (
              <button
                key={c}
                className={`sol-chip ${active === c ? "is-active" : ""}`}
                onClick={() => setActive(c)}
                role="tab"
                aria-selected={active === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="sol-empty">No solutions match “{query}”. Try another term.</p>
        ) : (
          groups.map((g) =>
            g.items.length === 0 ? null : (
              <div className="sol-group" key={g.name || "flat"}>
                {g.name && <h4 className="sol-group__title">{g.name}</h4>}
                <div className="solutions__grid">{g.items.map(renderCard)}</div>
              </div>
            )
          )
        )}

        <p className="solutions__note">
          Don't see your exact use case? Every engagement is custom —
          <a href="#contact"> tell us what you're trying to solve</a>.
        </p>
      </div>
    </section>
  );
}
