import { useLocation, useNavigate } from "react-router-dom";
import { locales, localeNames, localePath, isLocale } from "../i18n/config";
import { useLocale } from "../i18n/LocaleContext";

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
  const base = basePath(pathname);

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-switch__btn ${l === current ? "is-active" : ""}`}
          aria-current={l === current ? "true" : undefined}
          onClick={() => {
            navigate(localePath(l, base) + hash);
            onPick?.();
          }}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}
