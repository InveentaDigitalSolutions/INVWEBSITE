import { Link } from "react-router-dom";
import { company, nav } from "../data";
import Logo from "./Logo";
import { asset } from "../asset";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="footer on-dark">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href={asset("/")} aria-label="inveenta home">
            <Logo size="lg" variant="light" withTagline />
          </a>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={asset(item.href)}>
              {item.label}
            </a>
          ))}
          <a href={asset("/#contact")}>Contact</a>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {company.legalName} — Optimization · Scalability · Performance
        </span>
        <div className="footer__legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/imprint">Imprint</Link>
        </div>
      </div>
    </footer>
  );
}
