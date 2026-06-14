// Single source of truth for site content.
// Swap these values to update copy across the whole site.

export const company = {
  name: "inveenta",
  legalName: "Inveenta S.A.",
  tagline: "engineering intelligent business",
  email: "santiago.garciaruiz@inveenta.com",
};

export const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "Approach", href: "#approach" },
];

// Industries served, each paired with a photo in /public/img.
export const industries = [
  {
    image: "automotive",
    name: "Automotive",
    body: "Traceable, data-quality-first solutions for OEMs and suppliers — where every record has to hold up.",
  },
  {
    image: "logistics",
    name: "Logistics & Rail",
    body: "Transport tracking and operational visibility across complex, multi-party supply chains.",
  },
  {
    image: "finance",
    name: "Finance",
    body: "Controlling, reporting and cost-transparency tools that stand up to commercial scrutiny.",
  },
  {
    image: "manufacturing",
    name: "Manufacturing",
    body: "Quality, inspection and process tools that connect the shop floor to the people who run it.",
  },
];

// How an engagement runs — shown in the Approach section.
export const process = [
  {
    step: "01",
    title: "Discovery",
    body: "Structured sessions with business and technical stakeholders to pin down scope, data sources and success criteria — before committing to an architecture.",
  },
  {
    step: "02",
    title: "Architecture & estimate",
    body: "A target architecture with a clear recommendation, then a phased delivery plan with person-day estimates and a transparent, role-based pricing model.",
  },
  {
    step: "03",
    title: "Iterative build",
    body: "Delivery in increments, validating data models and UI with clickable prototypes so stakeholders see progress and can course-correct early.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Documented work packages, data structures and flows, so the solution stays maintainable long after the engagement ends.",
  },
];

// The three brand pillars from the identity.
export const pillars = [
  {
    title: "Optimization",
    body: "We remove the friction in how work flows — cutting manual steps, waste, and waiting so every process runs lean.",
  },
  {
    title: "Scalability",
    body: "Systems designed to grow with you. What handles ten users handles ten thousand, without a rebuild.",
  },
  {
    title: "Performance",
    body: "Fast where it counts. We engineer for speed and reliability your team and customers can feel.",
  },
];

export type Solution = {
  icon: string;
  title: string;
  short: string;
  detail: string;
  capabilities: string[];
  tech: string[];
};

// Solution catalogue — every solution is custom-built on the Microsoft Power Platform.
export const solutions: Solution[] = [
  {
    icon: "chart",
    title: "Business Intelligence",
    short: "Decision-ready insight built on data models that stay correct as they grow.",
    detail:
      "We turn scattered, denormalized sources into governed dimensional models and translate them into reporting decision-makers actually trust. The model is designed first — so the numbers hold up as the data grows — then surfaced through clear, fast Power BI.",
    capabilities: [
      "Star-schema dimensional modeling",
      "DAX measures & time-intelligence",
      "Performance-conscious model logic",
      "Documentation & enablement",
    ],
    tech: ["Power BI", "DAX", "Power Query", "Dataverse"],
  },
  {
    icon: "grid",
    title: "Enterprise Solutions",
    short: "Governed business applications on Power Apps & Dataverse, architected to scale.",
    detail:
      "Canvas and model-driven applications where the architecture is chosen deliberately, not by default. We design the data model, relationships and keys up front, and align environments and ALM to enterprise governance so the solution holds up in production.",
    capabilities: [
      "Canvas & model-driven apps",
      "Dataverse data modeling & keys",
      "Environment & ALM governance",
      "Reusable UI components",
    ],
    tech: ["Power Apps", "Power Fx", "Dataverse", "SharePoint"],
  },
  {
    icon: "database",
    title: "Data Analytics",
    short: "Clean, trustworthy data — prepared, modeled, and ready to report on.",
    detail:
      "The unglamorous work that makes everything downstream correct. Power Query (M) dataflows handle null propagation, trimming, deduplication, ISO-week logic and source filtering, feeding star-schema models built from denormalized sources.",
    capabilities: [
      "Power Query (M) dataflows",
      "Cleansing & deduplication",
      "ISO-week & date logic",
      "Dimensional model design",
    ],
    tech: ["Power Query", "Dataverse", "Power BI"],
  },
  {
    icon: "sparkle",
    title: "AI Solutions",
    short: "Copilot Studio agents and intelligent automation that cut manual effort.",
    detail:
      "Conversational and task agents scoped to your enterprise data and processes, plus automation of the repetitive, error-prone workflows that quietly drain teams — surfacing information where work already happens, with measurable friction reduction.",
    capabilities: [
      "Copilot Studio agents",
      "Enterprise data grounding",
      "Intelligent workflow automation",
      "Azure & cloud integration",
    ],
    tech: ["Copilot Studio", "Power Automate", "Azure"],
  },
  {
    icon: "gauge",
    title: "Reporting Dashboards",
    short: "Multi-page dashboards leaders actually use.",
    detail:
      "KPI bands, funnel charts, supplier and status heatmaps, and drill-through navigation — aligned with stakeholders through clickable mock-ups before a single measure is written, so the final report matches how people really make decisions.",
    capabilities: [
      "KPI bands & scorecards",
      "Funnel & heatmap visuals",
      "Drill-through navigation",
      "Prototype-first design",
    ],
    tech: ["Power BI", "DAX", "Power Query"],
  },
  {
    icon: "pulse",
    title: "Monitoring & Controlling",
    short: "Early-warning logic that flags problems before they escalate.",
    detail:
      "Status monitoring with thresholds and early-warning automation that pushes exceptions to the people who can act, the moment something drifts — turning controlling from a monthly look-back into a live signal.",
    capabilities: [
      "KPI & threshold monitoring",
      "Early-warning automation",
      "Exception notifications",
      "Controlling reports",
    ],
    tech: ["Power Automate", "Power BI", "Dataverse"],
  },
  {
    icon: "shield",
    title: "Quality Management",
    short: "Traceable quality tracking built for regulated environments.",
    detail:
      "Defect and quality-tracking applications with audit trails, role-based access and data-quality controls — designed for automotive and logistics contexts where traceability and data integrity are non-negotiable.",
    capabilities: [
      "Defect & issue tracking",
      "Audit trails",
      "Data-quality controls",
      "Role-based access",
    ],
    tech: ["Power Apps", "Dataverse", "Power Automate"],
  },
  {
    icon: "truck",
    title: "Transport Management",
    short: "Logistics and rail-transport tracking, end to end.",
    detail:
      "Transport tracking solutions with multi-state workflows, composite- and alternate-key data models, orchestration flows and operational dashboards — built to keep complex movement of goods visible and accountable.",
    capabilities: [
      "Transport state workflows",
      "Composite / alternate-key models",
      "Orchestration flows",
      "Operational dashboards",
    ],
    tech: ["Power Apps", "Dataverse", "Power Automate", "Power BI"],
  },
  {
    icon: "ticket",
    title: "Ticket Systems",
    short: "Issue and request tracking that fits your process — not the other way around.",
    detail:
      "Custom ticketing applications with status lifecycles, assignment and routing, notifications and SLA reporting. No rigid off-the-shelf constraints: the workflow mirrors how your team actually triages and resolves.",
    capabilities: [
      "Configurable status lifecycles",
      "Assignment & routing",
      "Notifications & escalations",
      "SLA reporting",
    ],
    tech: ["Power Apps", "Power Automate", "Dataverse"],
  },
  {
    icon: "calculator",
    title: "TCO Tools",
    short: "Total-cost-of-ownership models your stakeholders can trust.",
    detail:
      "Calculation tools that turn cost drivers into clear, comparable scenarios, with documented logic and exportable reports — so commercial decisions rest on transparent numbers rather than a black-box spreadsheet.",
    capabilities: [
      "Cost-driver modeling",
      "Scenario comparison",
      "Documented calculation logic",
      "Exportable reports",
    ],
    tech: ["Power Apps", "Power Fx", "Power BI"],
  },
  {
    icon: "tasks",
    title: "Project Management",
    short: "Project tracking across types, with milestones and early warnings.",
    detail:
      "Project-tracking solutions spanning multiple project types, with milestone visualization, early-warning automation and report exports — giving portfolio owners a single, current view instead of a stack of status emails.",
    capabilities: [
      "Multi-type project tracking",
      "Milestone visualization",
      "Early-warning automation",
      "Report exports",
    ],
    tech: ["Power Apps", "Power Automate", "Dataverse"],
  },
  {
    icon: "trophy",
    title: "Gamification",
    short: "Leaderboards and engagement mechanics that drive real adoption.",
    detail:
      "Points, achievements and leaderboard applications built within Power Apps, designed to lift participation and turn a tool people have to use into one they want to — adoption being the difference between software that ships and software that sticks.",
    capabilities: [
      "Leaderboards & scoring",
      "Points & achievements",
      "Engagement analytics",
      "Custom branded UI",
    ],
    tech: ["Power Apps", "Power Fx", "Dataverse"],
  },
  {
    icon: "scan",
    title: "Inspection Tools",
    short: "Mobile inspection apps with built-in barcode and QR scanning.",
    detail:
      "Inspection and audit applications with scan functionality that capture structured data in the field — barcodes, QR codes, photos and evidence — and sync it straight into Dataverse, replacing paper checklists and re-keying.",
    capabilities: [
      "Barcode & QR scanning",
      "Structured field capture",
      "Photo & evidence attach",
      "Dataverse sync",
    ],
    tech: ["Power Apps", "Dataverse", "Power Automate"],
  },
];

// Technology stack, grouped for the Technology section.
// `logo` is the filename (without extension) in /public/logos.
export type Tech = { name: string; logo: string };

export const techGroups: { group: string; items: Tech[] }[] = [
  {
    group: "Microsoft Power Platform",
    items: [
      { name: "Power Platform", logo: "powerplatform" },
      { name: "Power Apps", logo: "powerapps" },
      { name: "Power Automate", logo: "powerautomate" },
      { name: "Power BI", logo: "powerbi" },
      { name: "Copilot Studio", logo: "copilot" },
      { name: "Dataverse", logo: "dataverse" },
    ],
  },
  {
    group: "Microsoft cloud & data",
    items: [
      { name: "Microsoft", logo: "microsoft" },
      { name: "Azure", logo: "azure" },
      { name: "Microsoft Foundry", logo: "foundry" },
      { name: "SQL Server", logo: "sql" },
      { name: "SharePoint", logo: "sharepoint" },
    ],
  },
  {
    group: "Enterprise & cloud",
    items: [
      { name: "SAP", logo: "sap" },
      { name: "Google", logo: "google" },
      { name: "Google Cloud", logo: "googlecloud" },
      { name: "VS Code", logo: "vscode" },
    ],
  },
];

// Skills without a standard product logo — listed as a caption.
export const techAlso = ["DAX", "Power Fx", "Power Query (M)", "PAC CLI", "HTML / SVG"];

export const stats = [
  { value: "13+", label: "Solution types" },
  { value: "3×", label: "Faster delivery" },
  { value: "3", label: "Working languages" },
  { value: "100%", label: "Custom-built" },
];
