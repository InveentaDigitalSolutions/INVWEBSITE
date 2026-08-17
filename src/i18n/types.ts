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
    scrollCue: string;
  };
  stats: { value: string; label: string }[];

  /* "The shift" — the figures, given their own horizontal section rather
     than a moment inside the opening film. */
  shiftSection: { eyebrow: string; h2: string };

  /* The opening sequence. Each key is one pinned scene; the numbers are
     language-neutral but their labels are not. */
  film: {
    thesis: {
      eyebrow: string;
      line: string; // sentence up to the emphasis
      emphasis: string; // the two words that land in lime
    };
    integration: {
      eyebrow: string;
      fromLabel: string;
      fragmented: string[];
      hub: string;
      layers: { label: string; items: string[] }[];
      caption: string;
    };
    shift: {
      eyebrow: string;
      year: string;
      unit: string;
      figure: number; // percent, counted up on scroll
      note: string;
    };
    outcome: {
      eyebrow: string;
      steps: { label: string; value: number }[];
      axis: string;
      note: string;
      proof: { value: string; label: string }[];
      paybackEyebrow: string;
      paybackNote: string;
    };
  };

  solutionsSection: { eyebrow: string; h2: string; p: string; note: string; noteLink: string };
  solutions: Offering[];

  /* The maturity ladder the work is organised on — the same one the opening
     film draws. Each stage names the Offering ids delivered at that level, so
     the argument leads and the delivered work stands under it as evidence. */
  stages: {
    id: string;
    title: string;
    short: string;
    detail: string;
    /** references Offering.id values in `solutions` */
    solutions: string[];
  }[];

  /* Where we operate: the stack, with agents acting across every layer and
     governance running the full height of it. */
  layers: {
    eyebrow: string;
    h2: string;
    p: string;
    agentsLabel: string;
    governanceLabel: string;
    governanceItems: string[];
    governanceNote: string;
    focusLabel: string;
    rows: { id: string; name: string; items: string; agent: string; focus?: boolean }[];
    note: string;
  };

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
