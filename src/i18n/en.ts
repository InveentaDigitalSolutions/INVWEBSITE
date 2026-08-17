import type { SiteContent } from "./types";

const en: SiteContent = {
  tagline: "engineering intelligent business",
  nav: [
    { label: "Expertise", href: "/#expertise" },
    { label: "Industries", href: "/#industries" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Technology", href: "/#technology" },
    { label: "About", href: "/#about" },
  ],
  cta: { getInTouch: "Get in touch", contact: "Contact" },

  hero: {
    kicker: "Data Autonomy",
    titleLines: ["The next generation of enterprise software."],
    lead: "Systems that don't just report your operations — they run them. AI built into the core, not bolted on, for the large-scale processes no product was built to handle.",
    primary: "Start a project",
    ghost: "Explore solutions",
    scrollCue: "Scroll",
  },
  film: {
    thesis: {
      eyebrow: "The problem we build against",
      line: "Most operations do not need more software. They need what they already run to act",
      emphasis: "as one.",
    },
    integration: {
      eyebrow: "From fragmented to orchestrated",
      fromLabel: "What you run today",
      fragmented: [
        "ERP",
        "Spreadsheets",
        "File shares",
        "Databases",
        "Tickets",
        "Email",
        "Paper forms",
      ],
      hub: "AI / Agents",
      layers: [
        { label: "Optimized", items: ["Monitor", "Forecast", "Decide"] },
        { label: "Automated", items: ["Route", "Approve", "Notify"] },
        { label: "Digitalized", items: ["Capture", "Model", "Govern"] },
      ],
      caption: "One flow. One record. Agents on top of it.",
    },
    shift: {
      eyebrow: "The shift, in numbers",
      year: "2026",
      unit: "100 enterprise applications",
      figure: 40,
      note: "will embed task-specific AI agents.",
    },
    outcome: {
      eyebrow: "What autonomy takes out",
      steps: [
        { label: "Manual", value: 0 },
        { label: "Digitalized", value: 30 },
        { label: "Automated", value: 55 },
        { label: "Orchestrated", value: 74 },
      ],
      axis: "Time saved vs manual baseline",
      note: "less time on the same process, end to end.",
      proof: [
        { value: "2.2 h", label: "saved per person, per day" },
        { value: "5.1 months", label: "to pay back the build" },
      ],
    },
  },
  stats: [
    { value: "7", label: "Areas of expertise" },
    { value: "3", label: "Regulated sectors" },
    { value: "100%", label: "Custom-built" },
    { value: "0", label: "Vendor lock-in" },
  ],



  solutionsSection: {
    eyebrow: "What we build",
    h2: "Custom systems, built around your problem.",
    p: "A sample of what we've built — each one custom-made for a client's data, process and constraints. Your solution starts from your problem, not from a shelf.",
    note: "Don't see your exact use case? Every engagement is custom —",
    noteLink: "tell us what you're trying to solve",
  },
  solutions: [
    {
      id: "transport",
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
      id: "quality",
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
      id: "software",
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
      id: "ticketing",
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
      id: "project",
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
      id: "monitoring",
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
      id: "cost",
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
      id: "pmi",
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
    {
      id: "supplier",
      icon: "flow",
      image: "cap-supplier",
      title: "Supplier Management",
      short: "Supplier status, reminders and escalation that run themselves.",
      detail:
        "Supplier-facing operations built into the same system as the work: performance and status visible across every supplier, reminders that fire before a deadline slips, and structured escalation when it does — with the right people copied, in the right language, and no one maintaining a spreadsheet of who owes what.",
      experience: [
        "Automated supplier dunning, grouped per supplier with the coordinating office copied",
        "Deadline reminders driven by business-day logic, not calendar days",
        "Supplier-spanning status visibility in a single governed model",
        "Escalation paths with confirmation and response tracking",
      ],
    },
    {
      id: "approval",
      icon: "check",
      image: "cap-approval",
      title: "Approval & Release Management",
      short: "Approval status across every stakeholder, on one timeline.",
      detail:
        "Approval cockpits that replace the status meeting: one model of what has been released, what is pending whom, and what is at risk — dates and dependencies drawn on a single timeline, with the underlying records pulled from the systems that already hold them.",
      experience: [
        "Approval cockpit consolidating release status across parallel workstreams",
        "Timeline logic derived from milestone and dependency data",
        "Integration with existing planning, issue-tracking and master-data sources",
        "Role-based views, so each stakeholder sees the decisions they own",
      ],
    },
    {
      id: "telemetry",
      icon: "database",
      image: "cap-telemetry",
      title: "Data Platform & Real-Time Telemetry",
      short: "Live operational data, from device to dashboard.",
      detail:
        "Streaming pipelines that carry telemetry from machines and operational systems into a queryable store, with a live dashboard on top — so operations sees what is happening now rather than what happened last month, and the history is still there when someone asks why.",
      experience: [
        "Device telemetry streamed into a real-time analytics store",
        "Custom ingestion endpoints feeding an event-driven pipeline",
        "Real-time dashboards deployed and versioned from the command line",
        "Local buffering, so a dropped connection doesn't lose data",
      ],
    },
    {
      id: "planning",
      icon: "forecast",
      image: "cap-planning",
      title: "Demand & Capacity Planning",
      short: "Plan a period in minutes by starting from the one that worked.",
      detail:
        "Planning tools that turn a recurring scheduling exercise into a few clicks: pick the period, start from a reference period as the template, adjust what changed, and create the whole plan in one action — instead of rebuilding the same grid by hand every week.",
      experience: [
        "Weekly planning built from a reference-period template",
        "Batch creation of an entire period's plan in a single action",
        "Capacity and demand compared per site and per period",
        "Plan-versus-actual visibility once the period runs",
      ],
    },
  ],

  capabilitiesSection: {
    eyebrow: "What we do",
    h2: "AI and engineering, end to end.",
    p: "The disciplines behind every custom solution — from AI and predictive analytics to autonomy, integration and governance. The how behind everything we build.",
  },
  capabilities: [

    {
      id: "cap-ai",
      icon: "sparkle",
      image: "cap-ai",
      title: "AI & Agents",
      short: "Copilot Studio agents and intelligent autonomy that cut manual effort.",
      detail:
        "Conversational and task agents scoped to your enterprise data and processes, plus automation of the repetitive, error-prone workflows that quietly drain teams — surfacing information where work already happens, with measurable friction reduction.",
      experience: [
        "Automation of repetitive, error-prone workflows",
        "Agents scoped to enterprise data and processes",
        "Integrations across SharePoint, Dataverse, Azure & cloud",
        "Measurable reduction in manual effort",
      ],
    },    {
      id: "cap-bi",
      icon: "chart",
      image: "cap-bi",
      title: "Data & Business Intelligence",
      short: "Decision-ready insight on data models that stay correct as they grow.",
      detail:
        "We turn scattered, denormalized sources into governed dimensional models, then surface them through clear, fast Power BI — KPI bands, heatmaps and drill-through that decision-makers actually trust. Designed model-first, so the numbers hold up as the data grows.",
      experience: [
        "Star-schema models rebuilt from denormalized exports",
        "Multi-page dashboards with KPI bands and heatmaps",
        "DAX measures and time-intelligence",
        "Clickable mock-ups aligned with stakeholders before build",
      ],
    },
    {
      id: "cap-forecast",
      icon: "forecast",
      image: "cap-forecast",
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
      id: "cap-apps",
      icon: "grid",
      image: "cap-apps",
      title: "Application Development",
      short: "Governed business apps and portals on Power Apps, Power Pages & Dataverse.",
      detail:
        "Canvas and model-driven apps, plus Power Pages portals for the people outside your four walls — architecture chosen deliberately, data model and keys designed up front, environments and ALM aligned to enterprise governance. Reusable components and consistent UI within the platform's rendering model.",
      experience: [
        "A portfolio of six business apps within one enterprise account",
        "Dataverse models with composite and alternate keys",
        "Power Pages portals and external-facing sites",
        "Reusable components, HTML/SVG controls and in-app branding",
      ],
    },
    {
      id: "cap-automation",
      icon: "flow",
      image: "cap-automation",
      title: "Process Autonomy",
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
      id: "cap-data-eng",
      icon: "database",
      image: "cap-data-eng",
      title: "Integration & Data Engineering",
      short: "Clean, connected data flowing between the systems you already use.",
      detail:
        "Power Query (M) dataflows that handle deduplication, trimming, ISO-week logic and null propagation, feeding dimensional models — plus the connectors and glue between SharePoint, Dataverse, SQL, Azure, Google Cloud and SAP so data moves without copy-paste.",
      experience: [
        "Dimensional models derived from denormalized sources",
        "Dataflows with dedup and ISO-week logic",
        "Connector and API integrations across systems",
        "SharePoint consolidation replacing fragmented lists",
      ],
    },
    {
      id: "cap-governance",
      icon: "lock",
      image: "cap-governance",
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
  ],

  industriesSection: {
    eyebrow: "Industries",
    h2: "Built for environments where the details matter.",
    p: "Delivery within regulated, enterprise contexts — where data quality, traceability and stakeholder governance aren't optional. Select an industry to go deeper.",
    explore: "Explore",
  },
  industries: [
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
      solutions: ["quality", "software", "transport", "monitoring", "cost"],
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
      solutions: ["transport", "monitoring", "quality", "project"],
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
      solutions: ["pmi", "monitoring", "cost", "project", "ticketing"],
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
      solutions: ["quality", "project", "monitoring", "cost"],
    },
  ],

  why: {
    eyebrow: "Why Inveenta",
    h2: "The difference is who you're actually working with.",
    p: "Most builds get lost in the gap between strategy, delivery and handover — between the people who scope it and the people who write it. We close that gap.",
    points: [
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
    ],
  },

  about: {
    eyebrow: "About",
    h2: "One partner for the whole build.",
    p1: "Inveenta is a senior engineering practice that pairs solution architecture, hands-on development and business analysis in one place — the people who run discovery also write the code. We design systems that hold up under real data and real scrutiny, and stay close while they grow.",
    p2: "Delivery is built for regulated, enterprise environments — automotive, logistics and finance — and stays in one pair of hands from the first question to the final handover.",
    points: [
      "Architecture, development and analysis in one team",
      "Built for regulated, enterprise-grade delivery",
      "Senior, hands-on delivery from discovery to handover",
      "You own the code and the data",
    ],
    imgAlt: "Inveenta at work",
  },

  approach: {
    eyebrow: "Approach",
    h2: "One team, from the first question to the final handover.",
    p: "Most engagements need three things they rarely find in one place: architecture that holds up under real data, development that ships, and stakeholder communication that keeps the technical and business sides aligned. We do all three — across discovery, design and delivery.",
    steps: [
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
    ],
  },

  technology: {
    eyebrow: "Technology",
    h2: "The stack behind every build.",
    p: "Deep, deliberate expertise across the platforms, clouds and tools we build on — so the right technology is chosen for the job, not the other way around.",
    groups: [
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
    ],
  },

  contact: {
    eyebrow: "Contact",
    h2: "Let's build something that works.",
    p: "Tell us what you're trying to solve using the form. We'll reply within one business day with honest thoughts on scope, timeline, and whether we're the right fit.",
    labels: { name: "Name", email: "Email", company: "Company", optional: "(optional)", message: "How can we help?" },
    placeholders: {
      name: "Jane Cooper",
      email: "jane@company.com",
      company: "Acme Inc.",
      message: "Briefly describe what you're trying to build or improve…",
    },
    errors: {
      name: "Please enter your name.",
      email: "Please enter your email.",
      emailInvalid: "That email doesn't look right.",
      message: "Tell us a little more (at least 10 characters).",
      submit: "Something went wrong sending your message. Please try again in a moment.",
    },
    success: {
      title: "Thanks — message sent.",
      body: "We'll be in touch shortly at the email you provided.",
      again: "Send another",
    },
    submit: { idle: "Send message", sending: "Sending…" },
    subject: "Project enquiry from",
  },

  footer: {
    tagline: "Optimization · Scalability · Performance",
    contact: "Contact",
    privacy: "Privacy",
    imprint: "Imprint",
  },

  cardGrid: {
    whatWeBuilt: "What we've delivered",
    open: "Show more",
    close: "Show less",
  },

  industryPage: {
    label: "Industry",
    breadcrumbHome: "Home",
    breadcrumbIndustries: "Industries",
    talkToUs: "Talk to us",
    challengesEyebrow: "Where the friction is",
    challengesH2: "Challenges we hear in {name}.",
    approachEyebrow: "How we'd approach it",
    solutionsEyebrow: "What we build",
    solutionsH2: "Solutions for {name}.",
    solutionsP:
      "The use-cases most relevant here — each one custom-fitted to your data and process. Select any to go deeper.",
    note: "See all solutions",
    seeAll: "See all solutions",
    tellUs: "tell us what you're trying to solve",
  },

  seo: {
    homeTitle: "Inveenta — engineering intelligent business",
    homeDescription:
      "Custom enterprise software that turns complex, manual operations into governed, scalable systems. Run leaner. Scale faster. Perform better.",
    industryDescriptionFallback: "Custom enterprise software for regulated, data-driven industries.",
    privacyTitle: "Privacy Policy — Inveenta",
    imprintTitle: "Imprint — Inveenta",
  },
};

export default en;
