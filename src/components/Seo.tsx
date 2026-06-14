import { useEffect } from "react";

// Sets the document title and meta description per route (client-side).
export default function Seo({ title, description }: { title: string; description?: string }) {
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
  return null;
}
