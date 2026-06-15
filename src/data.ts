// Single source of truth for site content.

export const company = {
  name: "inveenta",
  legalName: "Inveenta S.A.",
  tagline: "engineering intelligent business",
  // Web3Forms access key — form submissions are delivered privately to the
  // inbox registered with this key; the email address never appears in code.
  formAccessKey: "06fdea02-a200-4c9e-b7a9-eac653fc169c",
};

export const nav = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/#about" },
];

// The three brand pillars — each tied to a concrete outcome.
export const pillars = [
  {
    title: "Optimization",
    outcome: "Less manual effort, more output",
    body: "We strip the manual steps, waiting and double-entry out of how work flows — so the same team gets more done with less effort.",
  },
  {
    title: "Scalability",
    outcome: "Built once, runs at any size",
    body: "Architected so the system that serves ten users serves ten thousand — no rebuild, no migration, no surprises as you grow.",
  },
  {
    title: "Performance",
    outcome: "Seconds-fast, solid under load",
    body: "Reports that load in seconds and apps that hold up under real data and real load — speed your team and customers actually feel.",
  },
];

// Why Inveenta — the differentiators vs. an agency / big SI.
export const whyPoints = [
  {
    icon: "flow",
    title: "One team, end to end",
    body: "Architecture, development and analysis in one place — no hand-offs, and nothing lost between the people who plan the solution and the people who build it.",
  },
  {
    icon: "lock",
    title: "You own everything",
    body: "The code, the data and the solution are yours, hosted wherever you need — no lock-in, no black box, and no dependence on us to keep it running.",
  },
  {
    icon: "gauge",
    title: "Weeks, not quarters",
    body: "Iterative delivery puts a working first version in your hands in weeks — so you course-correct early, before it gets expensive.",
  },
];

// Shared shape for both capabilities (disciplines) and solutions (use-cases).
export type Offering = {
  icon: string;
  title: string;
  short: string;
  detail: string;
  experience: string[];
  image?: string; // optional photo (filename in /public/img) — used on solution cards
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
    image: "sol-transport",
    title: "Transport Management",
    short: "Multimodal transport tracking — road, rail and sea, end to end.",
    detail:
      "Transport tracking across road, rail and sea, with multi-state workflows, composite- and alternate-key data models, orchestration flows and operational dashboards — built to keep complex movement of goods visible and accountable.",
    experience: [
      "Multi-state transport tracking (incl. a 24-state rail workflow)",
      "Composite and alternate-key Dataverse models",
      "Power Automate orchestration and notifications",
      "Operational dashboards for logistics teams",
    ],
  },
  {
    icon: "shield",
    image: "sol-quality",
    title: "Quality Management",
    short: "Traceable quality tracking and mobile inspection for regulated environments.",
    detail:
      "Defect and quality-tracking applications with audit trails, role-based access and data-quality controls — plus mobile inspection with barcode and QR scanning that captures structured data in the field. Designed for automotive and logistics contexts where traceability and data integrity are non-negotiable.",
    experience: [
      "Defect and quality tracking in regulated automotive contexts",
      "Mobile inspection with barcode & QR scanning",
      "Audit trails, role-based access and data-quality controls",
      "Photo and evidence capture synced to Dataverse — replacing paper checklists",
    ],
  },
  {
    icon: "bolt",
    image: "sol-software",
    title: "Software Maturity Tracking",
    short: "Track software updates and release maturity across high-voltage systems.",
    detail:
      "A tracking solution for the software inside high-voltage systems — versions, update status and maturity level across every component and supplier, in one governed view. So engineering and quality teams always know what's released, what's still in test, and what's mature enough to ship.",
    experience: [
      "Version and update tracking across HV components and ECUs",
      "Maturity-level status from in-development to release-ready",
      "Supplier-spanning visibility in a single governed model",
      "Early-warning flags on components lagging the release plan",
    ],
  },
  {
    icon: "ticket",
    image: "sol-ticketing",
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
    image: "sol-project",
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
    image: "sol-monitoring",
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
    image: "sol-tco",
    title: "Cost & TCO",
    short: "Total-cost-of-ownership and cost models your stakeholders can trust.",
    detail:
      "Cost and total-cost-of-ownership models that turn cost drivers into clear, comparable scenarios, with documented logic and exportable reports — so commercial decisions rest on transparent numbers rather than a black-box spreadsheet.",
    experience: [
      "Person-day effort and role-based pricing models",
      "Scenario and cost comparison",
      "Documented, exportable calculations",
    ],
  },
  {
    icon: "merge",
    image: "sol-pmi",
    title: "Post-Merger Integration",
    short: "A digital solution to plan, track and steer the integration of two organizations into one.",
    detail:
      "A digital solution for post-merger integration (PMI) — workstreams, milestones, synergies and risks across the combining organizations in one governed view. So integration leads can steer the programme, track value capture, and flag what's slipping before it costs the deal.",
    experience: [
      "Workstream and milestone tracking across both organizations",
      "Synergy and value-capture monitoring against targets",
      "Risk and dependency flags with early warnings",
      "Consolidated reporting for steering committees",
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
  approach: string;
  stat: { value: string; label: string };
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
    approach:
      "We start at the traceability gaps — the records that break under audit — model the data so every part and approval is accountable, then wire reporting on top so the line and the boardroom read from the same numbers.",
    stat: { value: "100%", label: "Auditable records, by design" },
    solutions: [
      "Quality Management",
      "Software Maturity Tracking",
      "Transport Management",
      "Monitoring & Controlling",
      "Cost & TCO",
    ],
  },
  {
    slug: "logistics",
    image: "logistics",
    name: "Logistics & Transport",
    body: "Transport tracking and operational visibility across complex, multi-party supply chains.",
    intro:
      "Goods move across many hands and many systems. We make the movement visible — state by state — and surface the exceptions before they turn into delays, so operations teams act on signals, not surprises.",
    challenges: [
      "Visibility across multi-party supply chains",
      "Complex, multi-state transport workflows",
      "Manual status chasing and re-keying",
      "Operational reporting that lags reality",
    ],
    approach:
      "We map the movement of goods state by state across every party and system, build the tracking model that holds it together, and push exceptions to operations the moment something drifts — so teams act on signals, not status calls.",
    stat: { value: "3", label: "Transport modes unified — road, rail & sea" },
    solutions: ["Transport Management", "Monitoring & Controlling", "Quality Management", "Project Management"],
  },
  {
    slug: "finance",
    image: "finance",
    name: "Finance & Controlling",
    body: "Controlling, reporting and cost-transparency tools that stand up to commercial scrutiny.",
    intro:
      "Controlling and commercial teams need numbers they can defend. We build the cost-transparency, monitoring and reporting tools that replace black-box spreadsheets with transparent, governed figures.",
    challenges: [
      "Cost transparency and TCO across the business",
      "Monthly look-back instead of live signals",
      "Spreadsheet-bound, black-box calculations",
      "Governance and access under review",
    ],
    approach:
      "We replace the black-box spreadsheet with documented, governed cost and controlling models — every driver and assumption made explicit — then surface them through reporting that turns a monthly look-back into a live, defensible signal.",
    stat: { value: "0", label: "Black-box spreadsheets left behind" },
    solutions: [
      "Post-Merger Integration",
      "Monitoring & Controlling",
      "Cost & TCO",
      "Project Management",
      "Ticket Systems",
    ],
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
    approach:
      "We connect the shop floor to the office — mobile inspection and quality capture that replaces paper, feeding the same models that drive controlling — and design for adoption first, so the people on the floor actually want to use it.",
    stat: { value: "3×", label: "Faster from floor data to decision" },
    solutions: ["Quality Management", "Project Management", "Monitoring & Controlling", "Cost & TCO"],
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
      { name: "Power Pages", logo: "powerpages" },
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
      { name: "Microsoft Fabric", logo: "fabric" },
      { name: "SQL Server", logo: "sql" },
      { name: "SharePoint", logo: "sharepoint" },
    ],
  },
  {
    group: "Enterprise & cloud",
    items: [
      { name: "SAP", logo: "sap" },
      { name: "Snowflake", logo: "snowflake" },
      { name: "Databricks", logo: "databricks" },
      { name: "Google", logo: "google" },
      { name: "Google Cloud", logo: "googlecloud" },
    ],
  },
  {
    group: "AI, dev & tools",
    items: [
      { name: "Claude", logo: "claude" },
      { name: "OpenAI", logo: "openai" },
      { name: "React", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Azure DevOps", logo: "azuredevops" },
      { name: "Jira", logo: "jira" },
      { name: "VS Code", logo: "vscode" },
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Obsidian", logo: "obsidian" },
    ],
  },
  {
    group: "Languages & query",
    items: [
      { name: "Python", logo: "python" },
      { name: "SQL", logo: "sql" },
      { name: "DAX", logo: "dax" },
      { name: "Power Fx", logo: "powerfx" },
      { name: "Power Query (M)", logo: "powerquery" },
      { name: "PAC CLI", logo: "paccli" },
      { name: "HTML / SVG", logo: "html5" },
    ],
  },
];

export const stats = [
  { value: "7", label: "Core expertise" },
  { value: "150+", label: "Built solutions" },
  { value: "3×", label: "Faster delivery" },
  { value: "100%", label: "Custom-built" },
];
