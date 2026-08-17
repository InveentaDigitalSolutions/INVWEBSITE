// Every URL the site answers on, with the head each one should ship.
//
// GitHub Pages has no SPA rewrite: an unknown path falls through to 404.html
// and is served with a 404 status. The router then renders the right view, so
// people see the right page — but crawlers see "not found" and drop the URL.
// Every route except "/" was affected, which is both other languages and all
// twelve industry pages.
//
// The fix is to emit a real index.html at each path, carrying that route's
// title, description, canonical and hreflang. The values here must mirror what
// the route's <Seo> sets at runtime, so the served head and the rendered head
// agree.
import { locales, defaultLocale, localePath, type Locale } from "./i18n/config";
import { getContent } from "./i18n";

export type PageMeta = {
  /** URL path, e.g. "/de/industries/automotive" */
  path: string;
  lang: Locale;
  title: string;
  description: string;
  /** locale-neutral path, used to build the hreflang set */
  basePath: string;
};

export function pages(): PageMeta[] {
  const out: PageMeta[] = [];

  for (const locale of locales) {
    const c = getContent(locale);

    out.push({
      path: localePath(locale, "/"),
      basePath: "/",
      lang: locale,
      title: c.seo.homeTitle,
      description: c.seo.homeDescription,
    });

    for (const industry of c.industries) {
      const base = `/industries/${industry.slug}`;
      out.push({
        path: localePath(locale, base),
        basePath: base,
        lang: locale,
        // matches IndustryPage: `${industry.name} — Inveenta`
        title: `${industry.name} — Inveenta`,
        description: industry.intro || c.seo.industryDescriptionFallback,
      });
    }

    out.push({
      path: localePath(locale, "/privacy"),
      basePath: "/privacy",
      lang: locale,
      title: c.seo.privacyTitle,
      description: "How Inveenta handles your data.",
    });

    out.push({
      path: localePath(locale, "/imprint"),
      basePath: "/imprint",
      lang: locale,
      title: c.seo.imprintTitle,
      description: "Legal information for Inveenta.",
    });
  }

  return out;
}

export { locales, defaultLocale, localePath };
export type { Locale };
