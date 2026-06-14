import { Link } from "react-router-dom";
import { company, nav } from "../data";
import Logo from "./Logo";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="footer on-dark">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="/" aria-label="inveenta home">
            <Logo size="lg" variant="light" withTagline />
          </a>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <span className="footer__links-head">Navigate</span>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={`mailto:${company.email}`}>{company.email}</a>
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
