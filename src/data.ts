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
  experience: string[];
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
    experience: [
      "Multi-page Power BI dashboards for an automotive logistics programme",
      "Star-schema models rebuilt from denormalized exports",
      "Supplier and status analytics with drill-through",
      "DAX time-intelligence and KPI bands",
    ],
    tech: ["Power BI", "DAX", "Power Query", "Dataverse"],
  },
  {
    icon: "grid",
    title: "Enterprise Solutions",
    short: "Governed business applications on Power Apps & Dataverse, architected to scale.",
    detail:
      "Canvas and model-driven applications where the architecture is chosen deliberately, not by default. We design the data model, relationships and keys up front, and align environments and ALM to enterprise governance so the solution holds up in production.",
    experience: [
      "A portfolio of six Power Apps within one enterprise account",
      "Dataverse models with composite and alternate keys",
      "SharePoint consolidation replacing fragmented multi-list designs",
      "Canvas and model-driven apps across automotive & logistics",
    ],
    tech: ["Power Apps", "Power Fx", "Dataverse", "SharePoint"],
  },
  {
    icon: "database",
    title: "Data Analytics",
    short: "Clean, trustworthy data — prepared, modeled, and ready to report on.",
    detail:
      "The unglamorous work that makes everything downstream correct. Power Query (M) dataflows handle null propagation, trimming, deduplication, ISO-week logic and source filtering, feeding star-schema models built from denormalized sources.",
    experience: [
      "Power Query (M) dataflows with dedup, trimming and ISO-week logic",
      "Dimensional models derived from denormalized sources",
      "Data-quality clean-up feeding enterprise reporting",
      "Source filtering and null-propagation handling",
    ],
    tech: ["Power Query", "Dataverse", "Power BI"],
  },
  {
    icon: "sparkle",
    title: "AI Solutions",
    short: "Copilot Studio agents and intelligent automation that cut manual effort.",
    detail:
      "Conversational and task agents scoped to your enterprise data and processes, plus automation of the repetitive, error-prone workflows that quietly drain teams — surfacing information where work already happens, with measurable friction reduction.",
    experience: [
      "Copilot Studio agents scoped to enterprise data",
      "Automation of repetitive, error-prone workflows",
      "Integrations across SharePoint, Dataverse, Azure & Google Cloud",
      "Measurable reduction in manual effort",
    ],
    tech: ["Copilot Studio", "Power Automate", "Azure"],
  },
  {
    icon: "forecast",
    title: "Forecasting & Predictive Models",
    short: "Turn your history into a credible view of what's coming next.",
    detail:
      "Demand, cost, capacity or risk — we build forecasting and predictive models grounded in your own data, with assumptions made explicit and accuracy you can monitor over time. Surfaced through dashboards and alerts so the forecast actually drives decisions.",
    experience: [
      "Trend and scenario modeling on operational data",
      "Early-warning and risk indicators in dashboards",
      "Accuracy monitoring built into reporting",
      "Planning scenarios for capacity and demand",
    ],
    tech: ["Power BI", "Power Query", "Azure"],
  },
  {
    icon: "gauge",
    title: "Reporting Dashboards",
    short: "Multi-page dashboards leaders actually use.",
    detail:
      "KPI bands, funnel charts, supplier and status heatmaps, and drill-through navigation — aligned with stakeholders through clickable mock-ups before a single measure is written, so the final report matches how people really make decisions.",
    experience: [
      "KPI bands, funnel charts and supplier/status heatmaps",
      "Drill-through navigation across multi-page reports",
      "Clickable mock-ups aligned with stakeholders before build",
      "Executive reporting for portfolio oversight",
    ],
    tech: ["Power BI", "DAX", "Power Query"],
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
    tech: ["Power Automate", "Power BI", "Dataverse"],
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
    tech: ["Power Apps", "Dataverse", "Power Automate"],
  },
  {
    icon: "truck",
    title: "Transport Management",
    short: "Logistics and rail-transport tracking, end to end.",
    detail:
      "Transport tracking solutions with multi-state workflows, composite- and alternate-key data models, orchestration flows and operational dashboards — built to keep complex movement of goods visible and accountable.",
    experience: [
      "Rail-transport tracking with a 24-state workflow",
      "Composite and alternate-key Dataverse models",
      "Power Automate orchestration and notifications",
      "Operational dashboards for logistics teams",
    ],
    tech: ["Power Apps", "Dataverse", "Power Automate", "Power BI"],
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
    tech: ["Power Apps", "Power Automate", "Dataverse"],
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
    tech: ["Power Apps", "Power Fx", "Power BI"],
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
    tech: ["Power Apps", "Power Automate", "Dataverse"],
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
    tech: ["Power Apps", "Power Fx", "Dataverse"],
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
    tech: ["Power Apps", "Dataverse", "Power Automate"],
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
    tech: ["Dataverse", "Power Platform", "Azure"],
  },
];

// Solution categories — used for the filter chips on the Solutions section.
export const solutionCategories: { name: string; titles: string[] }[] = [
  {
    name: "Analytics & BI",
    titles: [
      "Business Intelligence",
      "Data Analytics",
      "Reporting Dashboards",
      "Forecasting & Predictive Models",
    ],
  },
  {
    name: "Apps & Automation",
    titles: [
      "Enterprise Solutions",
      "AI Solutions",
      "Ticket Systems",
      "Project Management",
      "Gamification",
    ],
  },
  {
    name: "Operations",
    titles: ["Monitoring & Controlling", "Transport Management", "TCO Tools"],
  },
  {
    name: "Quality & Governance",
    titles: ["Quality Management", "Inspection Tools", "Governance & Security"],
  },
];

// Technology stack, grouped for the Technology section.
// `logo` is the filename (without extension) in /public/logos.
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
  { value: "15+", label: "Solution types" },
  { value: "3×", label: "Faster delivery" },
  { value: "3", label: "Working languages" },
  { value: "100%", label: "Custom-built" },
];
