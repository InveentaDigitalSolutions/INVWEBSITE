import { Link } from "react-router-dom";
import { company } from "../data";
import Seo from "./Seo";

function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="section legal-page">
      <div className="container legal-page__inner">
        <Link to="/" className="legal-page__back">
          ← Back to home
        </Link>
        <h1>{title}</h1>
        <div className="legal-page__body">{children}</div>
      </div>
    </main>
  );
}

// NOTE: These are starting templates. Have them reviewed by legal counsel and
// complete the bracketed details before relying on them publicly.
export function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy — Inveenta" description="How Inveenta handles your data." />
      <LegalLayout title="Privacy Policy">
        <p>
          This Privacy Policy explains how {company.legalName} ("Inveenta", "we") handles personal
          data collected through this website.
        </p>
        <h2>Data we collect</h2>
        <p>
          When you use the contact form we collect the name, email address, company and message you
          provide, so that we can respond to your enquiry. We do not collect this information for any
          other purpose.
        </p>
        <h2>How we use it</h2>
        <p>
          We use your details solely to reply to you and discuss a potential engagement. We do not
          sell your data. If a third-party form provider is used to deliver submissions, your data is
          processed by that provider only to transmit your message.
        </p>
        <h2>Retention</h2>
        <p>We keep enquiry data only as long as needed to handle your request and any follow-up.</p>
        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data at any time by
          emailing <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
        <h2>Contact</h2>
        <p>
          {company.legalName} · <a href={`mailto:${company.email}`}>{company.email}</a>
          <br />
          <em>[Registered address and any supervisory-authority details to be added.]</em>
        </p>
      </LegalLayout>
    </>
  );
}

export function Imprint() {
  return (
    <>
      <Seo title="Imprint — Inveenta" description="Legal information for Inveenta." />
      <LegalLayout title="Imprint">
        <p>Information in accordance with applicable disclosure requirements.</p>
        <h2>Company</h2>
        <p>
          {company.legalName}
          <br />
          <em>[Registered address — to be completed]</em>
          <br />
          <em>[Company registration number — to be completed]</em>
        </p>
        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <h2>Represented by</h2>
        <p>Santiago García Ruiz</p>
        <h2>Responsible for content</h2>
        <p>
          Santiago García Ruiz · <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </LegalLayout>
    </>
  );
}
