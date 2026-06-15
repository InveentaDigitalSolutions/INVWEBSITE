import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { industries, solutions } from "../data";
import { useReveal } from "../useReveal";
import CardGrid from "./CardGrid";
import Icon from "./Icon";
import Seo from "./Seo";
import { asset } from "../asset";

export default function IndustryPage() {
  useReveal();
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);
  const jsonLd = useMemo(
    () =>
      industry
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://inveenta.com/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Industries",
                item: "https://inveenta.com/#industries",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: industry.name,
                item: `https://inveenta.com/industries/${industry.slug}`,
              },
            ],
          }
        : undefined,
    [industry],
  );
  if (!industry) return <Navigate to="/" replace />;

  // Order follows the industry's own solutions list (not the global order).
  const related = industry.solutions
    .map((title) => solutions.find((s) => s.title === title))
    .filter((s): s is (typeof solutions)[number] => Boolean(s));

  return (
    <main className="industry-page">
      <Seo title={`${industry.name} — Inveenta`} description={industry.intro} jsonLd={jsonLd} />
      {/* Hero */}
      <section className="ip-hero on-dark">
        <img className="ip-hero__img" src={asset(`img/${industry.image}.jpg`)} alt="" />
        <div className="ip-hero__overlay" />
        <div className="container ip-hero__inner">
          <nav className="ip-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#industries">Industries</Link>
            <span>/</span>
            <span className="ip-breadcrumb__current">{industry.name}</span>
          </nav>
          <span className="eyebrow">Industry</span>
          <h1 className="ip-hero__title">{industry.name}</h1>
          <p className="ip-hero__lead">{industry.intro}</p>
          <a href={asset("/#contact")} className="btn btn-primary">
            Talk to us <Icon name="arrow" className="btn__icon" />
          </a>
        </div>
      </section>

      {/* Challenges */}
      <section className="section ip-challenges">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Where the friction is</span>
            <h2>Challenges we hear in {industry.name.toLowerCase()}.</h2>
          </div>
          <ul className="ip-challenge-list">
            {industry.challenges.map((c) => (
              <li className="ip-challenge reveal" key={c}>
                <Icon name="check" className="ip-challenge__icon" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we'd approach it */}
      <section className="section ip-approach">
        <div className="container ip-approach__inner">
          <div className="ip-approach__text">
            <span className="eyebrow">How we'd approach it</span>
            <p>{industry.approach}</p>
          </div>
          <div className="ip-approach__stat">
            <strong>{industry.stat.value}</strong>
            <span>{industry.stat.label}</span>
          </div>
        </div>
      </section>

      {/* Related solutions */}
      <section className="section solutions" id="solutions">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we build</span>
            <h2>Solutions for {industry.name.toLowerCase()}.</h2>
            <p>
              The use-cases most relevant here — each one custom-fitted to your data and process.
              Select any to go deeper.
            </p>
          </div>
          <CardGrid items={related} idPrefix={`ind-${industry.slug}`} />
          <p className="solutions__note">
            <Link to="/#solutions">See all solutions</Link> · or{" "}
            <a href={asset("/#contact")}>tell us what you're trying to solve</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
