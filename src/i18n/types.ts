// Full content shape for one locale. Language-neutral fields (icons, image
// filenames, logo slugs, ids, step numbers) are identical across locales;
// everything else is translated.

export type Offering = {
  id: string; // stable, language-neutral key (used for cross-references)
  icon: string;
  title: string;
  short: string;
  detail: string;
  experience: string[];
  image?: string;
};

export type Industry = {
  slug: string; // language-neutral, used in the URL
  image: string;
  name: string;
  body: string;
  intro: string;
  challenges: string[];
  approach: string;
  stat: { value: string; label: string };
  solutions: string[]; // references Offering.id values
};

export type Tech = { name: string; logo: string };

export type SiteContent = {
  tagline: string;
  nav: { label: string; href: string }[];
  cta: { getInTouch: string; contact: string };

  hero: {
    kicker: string;
    titleLines: string[];
    lead: string;
    primary: string;
    ghost: string;
  };
  heroVisual: {
    live: string;
    overview: string;
    status: string;
    kpis: { value: string; label: string }[];
  };
  stats: { value: string; label: string }[];

  pillars: { title: string; outcome: string; body: string }[];

  showcase: { eyebrow: string; h2: string; p: string };

  solutionsSection: { eyebrow: string; h2: string; p: string; note: string; noteLink: string };
  solutions: Offering[];

  capabilitiesSection: { eyebrow: string; h2: string; p: string };
  capabilities: Offering[];

  industriesSection: { eyebrow: string; h2: string; p: string; explore: string };
  industries: Industry[];

  why: { eyebrow: string; h2: string; p: string; points: { icon: string; title: string; body: string }[] };

  about: { eyebrow: string; h2: string; p1: string; p2: string; points: string[]; imgAlt: string };

  approach: { eyebrow: string; h2: string; p: string; steps: { step: string; title: string; body: string }[] };

  technology: { eyebrow: string; h2: string; p: string; groups: { group: string; items: Tech[] }[] };

  contact: {
    eyebrow: string;
    h2: string;
    p: string;
    labels: { name: string; email: string; company: string; optional: string; message: string };
    placeholders: { name: string; email: string; company: string; message: string };
    errors: { name: string; email: string; emailInvalid: string; message: string; submit: string };
    success: { title: string; body: string; again: string };
    submit: { idle: string; sending: string };
    subject: string;
  };

  footer: { tagline: string; contact: string; privacy: string; imprint: string };

  cardGrid: { whatWeBuilt: string; open: string; close: string };

  industryPage: {
    label: string;
    breadcrumbHome: string;
    breadcrumbIndustries: string;
    talkToUs: string;
    challengesEyebrow: string;
    challengesH2: string; // includes {name}
    approachEyebrow: string;
    solutionsEyebrow: string;
    solutionsH2: string; // includes {name}
    solutionsP: string;
    note: string;
    seeAll: string;
    tellUs: string;
  };

  seo: {
    homeTitle: string;
    homeDescription: string;
    industryDescriptionFallback: string;
    privacyTitle: string;
    imprintTitle: string;
  };
};
