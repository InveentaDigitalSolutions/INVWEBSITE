import { useEffect, useState } from "react";
import { nav } from "../data";
import Logo from "./Logo";
import { asset } from "../asset";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always solid white for guaranteed readability; gains a shadow on scroll.
  return (
    <header className={`nav nav--solid ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href={asset("/")} className="nav__brand" onClick={() => setOpen(false)} aria-label="inveenta home">
          <Logo size="sm" variant="dark" className="logo--word" />
          <Logo size="sm" variant="dark" compact className="logo--compact" />
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {nav.map((item) => (
            <a key={item.href} href={asset(item.href)} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={asset("/#contact")} className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>
            Get in touch
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
