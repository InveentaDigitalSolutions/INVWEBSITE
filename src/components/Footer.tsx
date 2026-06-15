import { Link } from "react-router-dom";
import { company } from "../data";
import { useC, useLp } from "../i18n/LocaleContext";
import Logo from "./Logo";
import { asset } from "../asset";

export default function Footer() {
  const { nav, footer } = useC();
  const lp = useLp();
  const year = 2026;
  const anchor = (href: string) => asset(lp("/") + href.substring(href.indexOf("#")));

  return (
    <footer className="footer on-dark">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href={asset(lp("/"))} aria-label="inveenta home">
            <Logo size="lg" variant="light" withTagline />
          </a>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={anchor(item.href)}>
              {item.label}
            </a>
          ))}
          <a href={anchor("/#contact")}>{footer.contact}</a>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {company.legalName} — {footer.tagline}
        </span>
        <div className="footer__legal">
          <Link to={lp("/privacy")}>{footer.privacy}</Link>
          <Link to={lp("/imprint")}>{footer.imprint}</Link>
        </div>
      </div>
    </footer>
  );
}
