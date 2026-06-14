// Single source of truth for site content.

export const company = {
  name: "inveenta",
  legalName: "Inveenta S.A.",
  tagline: "engineering intelligent business",
  email: "santiago.garciaruiz@inveenta.com",
};

export const nav = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Technology", href: "/#technology" },
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

// Shared shape for both capabilities (disciplines) and solutions (use-cases).
export type Offering = {
  icon: string;
  title: string;
  short: string;
  detail: string;
  experience: string[];
};

// CAPABILITIES — the disciplines / "how we work" (horizontal).
export const capabilities: Offering[] = [
  {
    icon: "chart",
    title: "Data & Business Intelligence",
    short: "Decision-ready insight on data models that stay correct as they grow.",
    detail:
      "We turn scattered, denormalized sources into governed dimensional models, then surface them through clear, fast Power BI — KPI bands, heatmaps and drill-through that decision-makers actually trust. Designed model-first, so the numbers hold up as the data grows.",
    experience: [
      "Multi-page Power BI dashboards with KPI bands and heatmaps",
      "Star-schema models rebuilt from denormalized exports",
      "DAX measures and time-intelligence",
      "Clickable mock-ups aligned with stakeholders before build",
    ],
  },
  {
    icon: "forecast",
    title: "Forecasting & Predictive Analytics",
    short: "Turn your history into a credible view of what's coming next.",
    detail:
      "Demand, cost, capacity or risk — forecasting and predictive models grounded in your own data, with assumptions made explicit and accuracy you can monitor over time. Surfaced through dashboards and alerts so the forecast actually drives decisions.",
    experience: [
      "Trend and scenario modeling on operational data",
      "Early-warning and risk indicators in dashboards",
      "Accuracy monitoring built into reporting",
      "Planning scenarios for capacity and demand",
    ],
  },
  {
    icon: "grid",
    title: "Application Development",
    short: "Governed business apps and portals on Power Apps, Power Pages & Dataverse.",
    detail:
      "Canvas and model-driven apps, plus Power Pages portals for the people outside your four walls — architecture chosen deliberately, data model and keys designed up front, environments and ALM aligned to enterprise governance. Reusable components and consistent UI within the platform's rendering model.",
    experience: [
      "A portfolio of six Power Apps within one enterprise account",
      "Dataverse models with composite and alternate keys",
      "Power Pages portals and external-facing sites",
      "Reusable components, HTML/SVG controls and in-app branding",
    ],
  },
  {
    icon: "flow",
    title: "Process Automation",
    short: "Approvals, orchestration and integrations that run without anyone chasing them.",
    detail:
      "Power Automate flows that replace manual handoffs — approvals, notifications, scheduled jobs and system-to-system integration — built to be observable and resilient, with environment-variable and connection failures debugged so they don't fail silently.",
    experience: [
      "Orchestration and approval flows",
      "Early-warning and notification automation",
      "System-to-system integration via connectors and APIs",
      "Debugging of environment-variable and connection failures",
    ],
  },
  {
    icon: "sparkle",
    title: "AI & Agents",
    short: "Copilot Studio agents and intelligent automation that cut manual effort.",
    detail:
      "Conversational and task agents scoped to your enterprise data and processes, plus automation of the repetitive, error-prone workflows that quietly drain teams — surfacing information where work already happens, with measurable friction reduction.",
    experience: [
      "Copilot Studio agents scoped to enterprise data",
      "Automation of repetitive, error-prone workflows",
      "Integrations across SharePoint, Dataverse, Azure & cloud",
      "Measurable reduction in manual effort",
    ],
  },
  {
    icon: "database",
    title: "Integration & Data Engineering",
    short: "Clean, connected data flowing between the systems you already use.",
    detail:
      "Power Query (M) dataflows that handle deduplication, trimming, ISO-week logic and null propagation, feeding dimensional models — plus the connectors and glue between SharePoint, Dataverse, SQL, Azure, Google Cloud and SAP so data moves without copy-paste.",
    experience: [
      "Power Query (M) dataflows with dedup and ISO-week logic",
      "Dimensional models derived from denormalized sources",
      "Connector and API integrations across systems",
      "SharePoint consolidation replacing fragmented lists",
    ],
  },
  {
    icon: "lock",
    title: "Governance & Security",
    short: "Role-based access, audit trails and ALM that stand up to scrutiny.",
    detail:
      "Security and governance built in from day one, not bolted on — row- and object-level access, audit trails, and environment, connection and ALM configuration aligned to enterprise practice. Data handling designed for regulated environments where access and traceability are reviewed.",
    experience: [
      "Role-based and object-level access models",
      "Environment, connection and ALM governance",
      "Audit trails and data-handling controls",
      "Solution and environment-variable management",
    ],
  },
];

// SOLUTIONS — concrete, productized use-cases ("what we build"). Mapped to industries.
export const solutions: Offering[] = [
  {
    icon: "truck",
    title: "Transport Management",
    short: "Logistics and rail-transport tracking, end to end.",
    detail:
      "Transport tracking with multi-state workflows, composite- and alternate-key data models, orchestration flows and operational dashboards — built to keep complex movement of goods visible and accountable.",
    experience: [
      "Rail-transport tracking with a 24-state workflow",
      "Composite and alternate-key Dataverse models",
      "Power Automate orchestration and notifications",
      "Operational dashboards for logistics teams",
    ],
  },
  {
    icon: "shield",
    title: "Quality Management",
    short: "Traceable quality tracking built for regulated environments.",
    detail:
      "Defect and quality-tracking applications with audit trails, role-based access and data-quality controls — designed for automotive and logistics contexts where traceability and data integrity are non-negotiable.",
    experience: [
      "Defect and quality tracking in regulated automotive contexts",
      "Audit trails and role-based access",
      "Data-quality controls protecting traceability",
      "Goods-out and inspection workflows",
    ],
  },
  {
    icon: "scan",
    title: "Inspection Tools",
    short: "Mobile inspection apps with built-in barcode and QR scanning.",
    detail:
      "Inspection and audit applications with scan functionality that capture structured data in the field — barcodes, QR codes, photos and evidence — and sync it straight into Dataverse, replacing paper checklists and re-keying.",
    experience: [
      "A document-scanning app with barcode capture",
      "Structured field capture syncing to Dataverse",
      "Photo and evidence attachment",
      "Replacing paper checklists and re-keying",
    ],
  },
  {
    icon: "ticket",
    title: "Ticket Systems",
    short: "Issue and request tracking that fits your process — not the other way around.",
    detail:
      "Custom ticketing applications with status lifecycles, assignment and routing, notifications and SLA reporting. No rigid off-the-shelf constraints: the workflow mirrors how your team actually triages and resolves.",
    experience: [
      "Defect-notification and request-tracking apps",
      "Status lifecycles with assignment and routing",
      "Automated notifications and escalations",
      "Status reporting for stakeholders",
    ],
  },
  {
    icon: "tasks",
    title: "Project Management",
    short: "Project tracking across types, with milestones and early warnings.",
    detail:
      "Project-tracking solutions spanning multiple project types, with milestone visualization, early-warning automation and report exports — giving portfolio owners a single, current view instead of a stack of status emails.",
    experience: [
      "A project-tracking tool spanning four project types",
      "Milestone visualization and early-warning automation",
      "Requirement specs and phased delivery plans",
      "Report exports for portfolio owners",
    ],
  },
  {
    icon: "pulse",
    title: "Monitoring & Controlling",
    short: "Early-warning logic that flags problems before they escalate.",
    detail:
      "Status monitoring with thresholds and early-warning automation that pushes exceptions to the people who can act, the moment something drifts — turning controlling from a monthly look-back into a live signal.",
    experience: [
      "Early-warning automation flagging status drift",
      "Exception notifications via Power Automate",
      "Controlling reports across parallel workstreams",
      "Threshold-based KPI monitoring",
    ],
  },
  {
    icon: "calculator",
    title: "TCO Tools",
    short: "Total-cost-of-ownership models your stakeholders can trust.",
    detail:
      "Calculation tools that turn cost drivers into clear, comparable scenarios, with documented logic and exportable reports — so commercial decisions rest on transparent numbers rather than a black-box spreadsheet.",
    experience: [
      "Person-day effort and role-based pricing models",
      "Scenario and cost comparison tooling",
      "Documented, exportable calculations",
    ],
  },
  {
    icon: "trophy",
    title: "Gamification",
    short: "Leaderboards and engagement mechanics that drive real adoption.",
    detail:
      "Points, achievements and leaderboard applications built within Power Apps, designed to lift participation and turn a tool people have to use into one they want to — adoption being the difference between software that ships and software that sticks.",
    experience: [
      "Leaderboard and gamification apps in Power Apps",
      "Points and achievement mechanics to lift adoption",
      "Custom in-app branding and UI",
      "Tool-discovery and knowledge apps",
    ],
  },
];

// Industries served — each maps to the solutions most relevant to it.
export type Industry = {
  slug: string;
  image: string;
  name: string;
  body: string;
  intro: string;
  challenges: string[];
  solutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "automotive",
    image: "automotive",
    name: "Automotive",
    body: "Traceable, data-quality-first solutions for OEMs and suppliers — where every record has to hold up.",
    intro:
      "From OEMs to tier-N suppliers, automotive runs on traceability. We build the tools that keep every part, process and approval auditable — and the reporting that makes that data usable on the line and in the boardroom.",
    challenges: [
      "Traceability and data quality under audit",
      "Fragmented systems across plants and suppliers",
      "Manual quality and inspection processes",
      "Reporting that can't keep up with the line",
    ],
    solutions: ["Quality Management", "Transport Management", "Inspection Tools", "Monitoring & Controlling"],
  },
  {
    slug: "logistics",
    image: "logistics",
    name: "Logistics & Rail",
    body: "Transport tracking and operational visibility across complex, multi-party supply chains.",
    intro:
      "Goods move across many hands and many systems. We make the movement visible — state by state — and surface the exceptions before they turn into delays, so operations teams act on signals, not surprises.",
    challenges: [
      "Visibility across multi-party supply chains",
      "Complex, multi-state transport workflows",
      "Manual status chasing and re-keying",
      "Operational reporting that lags reality",
    ],
    solutions: ["Transport Management", "Monitoring & Controlling", "Inspection Tools", "Project Management"],
  },
  {
    slug: "finance",
    image: "finance",
    name: "Finance",
    body: "Controlling, reporting and cost-transparency tools that stand up to commercial scrutiny.",
    intro:
      "Controlling and commercial teams need numbers they can defend. We build the cost-transparency, monitoring and reporting tools that replace black-box spreadsheets with transparent, governed figures.",
    challenges: [
      "Cost transparency and TCO across the business",
      "Monthly look-back instead of live signals",
      "Spreadsheet-bound, black-box calculations",
      "Governance and access under review",
    ],
    solutions: ["Monitoring & Controlling", "TCO Tools", "Project Management", "Ticket Systems"],
  },
  {
    slug: "manufacturing",
    image: "manufacturing",
    name: "Manufacturing",
    body: "Quality, inspection and process tools that connect the shop floor to the people who run it.",
    intro:
      "The shop floor generates data the office can't see. We connect the two — quality, inspection and process tools that turn floor activity into decisions, and that people actually want to use.",
    challenges: [
      "Paper checklists and manual re-keying",
      "Quality and defect traceability",
      "Disconnected shop-floor and office systems",
      "Low adoption of new tools",
    ],
    solutions: ["Quality Management", "Inspection Tools", "Monitoring & Controlling", "Gamification"],
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

// Technology stack, grouped for the Technology section.
export type Tech = { name: string; logo: string };

export const techGroups: { group: string; items: Tech[] }[] = [
  {
    group: "Power Platform",
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
    ],
  },
  {
    group: "AI, dev & tools",
    items: [
      { name: "Claude", logo: "claude" },
      { name: "OpenAI", logo: "openai" },
      { name: "Obsidian", logo: "obsidian" },
      { name: "VS Code", logo: "vscode" },
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
    ],
  },
];

// Skills without a standard product logo — listed as a caption.
export const techAlso = ["DAX", "Power Fx", "Power Query (M)", "PAC CLI", "HTML / SVG"];

export const stats = [
  { value: "7", label: "Core capabilities" },
  { value: "8", label: "Built solutions" },
  { value: "3", label: "Working languages" },
  { value: "100%", label: "Custom-built" },
];
