import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { locales, localeNames, localeLabels, localePath, isLocale, type Locale } from "../i18n/config";
import { useLocale } from "../i18n/LocaleContext";
import Icon from "./Icon";

// Strip any locale prefix to get the locale-neutral path ("/de/industries/x" -> "/industries/x").
function basePath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (isLocale(parts[0])) parts.shift();
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({ onPick }: { onPick?: () => void }) {
  const current = useLocale();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const base = basePath(pathname);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (l: Locale) => {
    navigate(localePath(l, base) + hash);
    setOpen(false);
    onPick?.();
  };

  return (
    <div className={`lang ${open ? "is-open" : ""}`} ref={ref}>
      <button
        type="button"
        className="lang__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="globe" className="lang__globe" />
        <span>{localeNames[current]}</span>
        <Icon name="chevron" className="lang__chev" />
      </button>

      {open && (
        <ul className="lang__menu" role="listbox" aria-label="Language">
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === current}
                className={`lang__opt ${l === current ? "is-active" : ""}`}
                onClick={() => choose(l)}
              >
                <span className="lang__dot" />
                {localeLabels[l]}
                <span className="lang__code">{localeNames[l]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
