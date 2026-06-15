import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useC, useLp } from "../i18n/LocaleContext";
import { useReveal } from "../useReveal";
import CardGrid from "./CardGrid";
import Icon from "./Icon";
import Seo from "./Seo";
import { asset } from "../asset";

export default function IndustryPage() {
  useReveal();
  const { slug } = useParams();
  const { industries, solutions, industryPage } = useC();
  const lp = useLp();
  const industry = industries.find((i) => i.slug === slug);

  const jsonLd = useMemo(
    () =>
      industry
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: industryPage.breadcrumbHome, item: `https://inveenta.com${lp("/")}` },
              { "@type": "ListItem", position: 2, name: industryPage.breadcrumbIndustries, item: `https://inveenta.com${lp("/")}#industries` },
              { "@type": "ListItem", position: 3, name: industry.name, item: `https://inveenta.com${lp(`/industries/${industry.slug}`)}` },
            ],
          }
        : undefined,
    [industry, lp, industryPage],
  );
  if (!industry) return <Navigate to={lp("/")} replace />;

  // Order follows the industry's own solutions list (referenced by id).
  const related = industry.solutions
    .map((id) => solutions.find((s) => s.id === id))
    .filter((s): s is (typeof solutions)[number] => Boolean(s));

  return (
    <main className="industry-page" id="main">
      <Seo title={`${industry.name} — Inveenta`} description={industry.intro} jsonLd={jsonLd} />
      {/* Hero */}
      <section className="ip-hero on-dark">
        <img className="ip-hero__img" src={asset(`img/${industry.image}.jpg`)} alt="" />
        <div className="ip-hero__overlay" />
        <div className="container ip-hero__inner">
          <nav className="ip-breadcrumb" aria-label="Breadcrumb">
            <Link to={lp("/")}>{industryPage.breadcrumbHome}</Link>
            <span>/</span>
            <Link to={`${lp("/")}#industries`}>{industryPage.breadcrumbIndustries}</Link>
            <span>/</span>
            <span className="ip-breadcrumb__current">{industry.name}</span>
          </nav>
          <span className="eyebrow">{industryPage.label}</span>
          <h1 className="ip-hero__title">{industry.name}</h1>
          <p className="ip-hero__lead">{industry.intro}</p>
          <a href={asset(`${lp("/")}#contact`)} className="btn btn-primary">
            {industryPage.talkToUs} <Icon name="arrow" className="btn__icon" />
          </a>
        </div>
      </section>

      {/* Challenges */}
      <section className="section ip-challenges">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{industryPage.challengesEyebrow}</span>
            <h2>{industryPage.challengesH2.replace("{name}", industry.name)}</h2>
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
            <span className="eyebrow">{industryPage.approachEyebrow}</span>
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
            <span className="eyebrow">{industryPage.solutionsEyebrow}</span>
            <h2>{industryPage.solutionsH2.replace("{name}", industry.name)}</h2>
            <p>{industryPage.solutionsP}</p>
          </div>
          <CardGrid items={related} idPrefix={`ind-${industry.slug}`} />
          <p className="solutions__note">
            <Link to={`${lp("/")}#solutions`}>{industryPage.seeAll}</Link> ·{" "}
            <a href={asset(`${lp("/")}#contact`)}>{industryPage.tellUs}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
