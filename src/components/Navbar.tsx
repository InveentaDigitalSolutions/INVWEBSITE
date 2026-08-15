import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useC, useLp } from "../i18n/LocaleContext";
import { isLocale } from "../i18n/config";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { asset } from "../asset";

export default function Navbar() {
  const { nav, cta } = useC();
  const lp = useLp();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The page is dark throughout, so the bar is transparent by default and
  // only lays down its plate once you've scrolled off the opening film.
  const seg = pathname.replace(/^\/+|\/+$/g, "");
  const onFilm = seg === "" || isLocale(seg);
  const ghost = onFilm && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Localised home-anchor href: home path for the active locale + the hash.
  const anchor = (href: string) => asset(lp("/") + href.substring(href.indexOf("#")));

  return (
    <header
      className={`nav ${ghost ? "nav--ghost" : "nav--solid"} ${scrolled ? "nav--scrolled" : ""}`}
    >
      <div className="container nav__inner">
        <a href={asset(lp("/"))} className="nav__brand" onClick={() => setOpen(false)} aria-label="inveenta home">
          <Logo size="sm" variant="light" className="logo--word" />
          <Logo size="sm" variant="light" compact className="logo--compact" />
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {nav.map((item) => (
            <a key={item.href} href={anchor(item.href)} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <LanguageSwitcher onPick={() => setOpen(false)} />
          <a href={anchor("/#contact")} className="btn btn-outline nav__cta" onClick={() => setOpen(false)}>
            {cta.getInTouch}
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
