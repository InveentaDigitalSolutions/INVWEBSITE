import { useEffect } from "react";

// Sets the document title, meta description and (optionally) a JSON-LD block
// per route, client-side. The JSON-LD node is tagged so it can be cleaned up
// on unmount / route change.
export default function Seo({
  title,
  description,
  jsonLd,
}: {
  title: string;
  description?: string;
  jsonLd?: object;
}) {
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
  }, [title, description]);

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
