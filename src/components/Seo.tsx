import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { locales, localePath, defaultLocale, isLocale } from "../i18n/config";

const ORIGIN = "https://inveenta.com";

// Locale-neutral path ("/de/industries/x" -> "/industries/x").
function basePath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (isLocale(parts[0])) parts.shift();
  return "/" + parts.join("/");
}

function upsertLink(rel: string, attrs: Record<string, string>) {
  const selector = `link[rel="${rel}"]${attrs.hreflang ? `[hreflang="${attrs.hreflang}"]` : ""}`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    el.setAttribute("data-seo", "");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

// Sets per-route title, description, canonical, og:url, hreflang alternates
// and an optional JSON-LD block — all client-side, SPA-safe.
export default function Seo({
  title,
  description,
  jsonLd,
}: {
  title: string;
  description?: string;
  jsonLd?: object;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
      }
      m.setAttribute("content", description);
    }

    const base = basePath(pathname);
    const canonical = `${ORIGIN}${pathname.replace(/\/+$/, "") || "/"}`;

    upsertLink("canonical", { href: canonical });
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonical);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    if (description)
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);

    // hreflang alternates — one per locale, plus x-default (English).
    locales.forEach((l) => upsertLink("alternate", { hreflang: l, href: `${ORIGIN}${localePath(l, base)}` }));
    upsertLink("alternate", { hreflang: "x-default", href: `${ORIGIN}${localePath(defaultLocale, base)}` });
  }, [title, description, pathname]);

  useEffect(() => {
    if (!jsonLd) return;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-route-jsonld", "");
    el.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(el);
    return () => {
      el.remove();
    };
  }, [jsonLd]);

  return null;
}
