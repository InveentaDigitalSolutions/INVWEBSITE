import type { SiteContent } from "./types";

// Product names (Power Apps, Dataverse, Power BI …) and the brand tagline stay
// in their original form; all marketing copy is translated to German.
const de: SiteContent = {
  tagline: "engineering intelligent business",
  nav: [
    { label: "Lösungen", href: "/#solutions" },
    { label: "Branchen", href: "/#industries" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Technologie", href: "/#technology" },
    { label: "Über uns", href: "/#about" },
  ],
  cta: { getInTouch: "Kontakt aufnehmen", contact: "Kontakt" },

  hero: {
    kicker: "engineering intelligent business",
    titleLines: ["Schlanker arbeiten.", "Schneller skalieren.", "Mehr leisten."],
    lead: "Inveenta konzipiert und entwickelt individuelle Unternehmenssoftware, die komplexe, manuelle Abläufe in steuerbare, skalierbare Systeme verwandelt — entlang der Art, wie Ihr Unternehmen wirklich arbeitet.",
    primary: "Projekt starten",
    ghost: "Lösungen entdecken",
  },
  heroVisual: {
    live: "live",
    overview: "Betriebsübersicht",
    status: "Alle Systeme im grünen Bereich",
    kpis: [
      { value: "−40%", label: "Manuelle Arbeit" },
      { value: "5×", label: "ROI" },
      { value: "98%", label: "Termintreue" },
    ],
  },
  stats: [
    { value: "7", label: "Kernkompetenzen" },
    { value: "150+", label: "Umgesetzte Lösungen" },
    { value: "3×", label: "Schnellere Lieferung" },
    { value: "100%", label: "Maßgeschneidert" },
  ],

  pillars: [
    {
      title: "Optimierung",
      outcome: "Weniger manueller Aufwand, mehr Ergebnis",
      body: "Wir nehmen die manuellen Schritte, Wartezeiten und Doppelerfassungen aus Ihren Abläufen heraus — damit dasselbe Team mit weniger Aufwand mehr schafft.",
    },
    {
      title: "Skalierbarkeit",
      outcome: "Einmal gebaut, in jeder Größe stabil",
      body: "So konzipiert, dass das System für zehn Nutzer auch zehntausend bedient — ohne Neubau, ohne Migration, ohne Überraschungen beim Wachsen.",
    },
    {
      title: "Performance",
      outcome: "Sekundenschnell, stabil unter Last",
      body: "Berichte, die in Sekunden laden, und Apps, die echter Datenmenge und echter Last standhalten — Geschwindigkeit, die Team und Kunden spüren.",
    },
  ],

  showcase: {
    eyebrow: "engineering intelligent business",
    h2: "Wir verbinden Ihre Daten, Systeme und Menschen zu einem intelligenten Betrieb.",
    p: "Optimierung, Skalierbarkeit und Performance — entwickelt, um echter Datenmenge, echter Skalierung und echter Prüfung standzuhalten.",
  },

  solutionsSection: {
    eyebrow: "Was wir bauen",
    h2: "Lösungen, die zu Ihren werden.",
    p: "Erprobte, produktnahe Anwendungsfälle — jeder individuell auf Ihre Daten und Prozesse zugeschnitten und auf die Branchen abgebildet, in denen wir arbeiten.",
    note: "Ihr Anwendungsfall nicht dabei? Jedes Projekt ist individuell —",
    noteLink: "sagen Sie uns, was Sie lösen möchten",
  },
  solutions: [
    {
      id: "transport",
      icon: "truck",
      image: "sol-transport",
      title: "Transportmanagement",
      short: "Multimodale Transportverfolgung — Straße, Schiene und See, durchgängig.",
      detail:
        "Transportverfolgung über Straße, Schiene und See, mit mehrstufigen Workflows, Datenmodellen mit zusammengesetzten und alternativen Schlüsseln, Orchestrierungs-Flows und operativen Dashboards — damit komplexe Warenbewegungen sichtbar und nachvollziehbar bleiben.",
      experience: [
        "Mehrstufige Transportverfolgung (inkl. eines 24-Status-Bahn-Workflows)",
        "Dataverse-Modelle mit zusammengesetzten und alternativen Schlüsseln",
        "Power-Automate-Orchestrierung und Benachrichtigungen",
        "Operative Dashboards für Logistikteams",
      ],
    },
    {
      id: "quality",
      icon: "shield",
      image: "sol-quality",
      title: "Qualitätsmanagement",
      short: "Nachvollziehbare Qualitätsverfolgung und mobile Prüfung für regulierte Umgebungen.",
      detail:
        "Anwendungen zur Fehler- und Qualitätsverfolgung mit Audit-Trails, rollenbasiertem Zugriff und Datenqualitätskontrollen — dazu mobile Prüfung mit Barcode- und QR-Scan, die strukturierte Daten direkt vor Ort erfasst. Konzipiert für Automotive- und Logistikkontexte, in denen Nachvollziehbarkeit und Datenintegrität nicht verhandelbar sind.",
      experience: [
        "Fehler- und Qualitätsverfolgung in regulierten Automotive-Kontexten",
        "Mobile Prüfung mit Barcode- & QR-Scan",
        "Audit-Trails, rollenbasierter Zugriff und Datenqualitätskontrollen",
        "Foto- und Nachweiserfassung synchron mit Dataverse — statt Papier-Checklisten",
      ],
    },
    {
      id: "software",
      icon: "bolt",
      image: "sol-software",
      title: "Software-Reifegrad-Tracking",
      short: "Software-Updates und Freigabereife über Hochvolt-Systeme hinweg verfolgen.",
      detail:
        "Eine Tracking-Lösung für die Software in Hochvolt-Systemen — Versionen, Update-Status und Reifegrad über jede Komponente und jeden Lieferanten hinweg, in einer steuerbaren Übersicht. So wissen Entwicklung und Qualität jederzeit, was freigegeben ist, was noch im Test steht und was reif genug zum Ausliefern ist.",
      experience: [
        "Versions- und Update-Tracking über HV-Komponenten und Steuergeräte",
        "Reifegrad-Status von in Entwicklung bis freigabebereit",
        "Lieferantenübergreifende Sicht in einem steuerbaren Modell",
        "Frühwarnung bei Komponenten, die hinter dem Freigabeplan liegen",
      ],
    },
    {
      id: "ticketing",
      icon: "ticket",
      image: "sol-ticketing",
      title: "Ticketsysteme",
      short: "Anfragen- und Vorfallverfolgung, die sich Ihrem Prozess anpasst — nicht umgekehrt.",
      detail:
        "Individuelle Ticketing-Anwendungen mit Status-Lebenszyklen, Zuweisung und Routing, Benachrichtigungen und SLA-Reporting. Keine starren Standardvorgaben: Der Workflow bildet ab, wie Ihr Team Anfragen tatsächlich einstuft und löst.",
      experience: [
        "Apps für Fehlermeldungen und Anfragenverfolgung",
        "Status-Lebenszyklen mit Zuweisung und Routing",
        "Automatisierte Benachrichtigungen und Eskalationen",
        "Status-Reporting für Stakeholder",
      ],
    },
    {
      id: "project",
      icon: "tasks",
      image: "sol-project",
      title: "Projektmanagement",
      short: "Projektverfolgung über Projekttypen hinweg, mit Meilensteinen und Frühwarnungen.",
      detail:
        "Lösungen zur Projektverfolgung über mehrere Projekttypen hinweg, mit Meilenstein-Visualisierung, Frühwarn-Automatisierung und Report-Exporten — eine einzige, aktuelle Sicht für Portfolio-Verantwortliche statt eines Stapels Status-E-Mails.",
      experience: [
        "Ein Projekt-Tracking-Tool über vier Projekttypen hinweg",
        "Meilenstein-Visualisierung und Frühwarn-Automatisierung",
        "Anforderungsspezifikationen und phasenbasierte Lieferpläne",
        "Report-Exporte für Portfolio-Verantwortliche",
      ],
    },
    {
      id: "monitoring",
      icon: "pulse",
      image: "sol-monitoring",
      title: "Monitoring & Controlling",
      short: "Frühwarn-Logik, die Probleme meldet, bevor sie eskalieren.",
      detail:
        "Status-Monitoring mit Schwellenwerten und Frühwarn-Automatisierung, die Ausnahmen an die Menschen weitergibt, die handeln können — im Moment, in dem etwas abweicht. So wird Controlling vom monatlichen Rückblick zum Live-Signal.",
      experience: [
        "Frühwarn-Automatisierung bei Statusabweichungen",
        "Ausnahme-Benachrichtigungen über Power Automate",
        "Controlling-Berichte über parallele Arbeitsstränge",
        "Schwellenwertbasiertes KPI-Monitoring",
      ],
    },
    {
      id: "cost",
      icon: "calculator",
      image: "sol-tco",
      title: "Kosten & TCO",
      short: "Total-Cost-of-Ownership- und Kostenmodelle, denen Ihre Stakeholder vertrauen.",
      detail:
        "Kosten- und Total-Cost-of-Ownership-Modelle, die Kostentreiber in klare, vergleichbare Szenarien übersetzen, mit dokumentierter Logik und exportierbaren Berichten — damit kaufmännische Entscheidungen auf transparenten Zahlen beruhen statt auf einer Blackbox-Tabelle.",
      experience: [
        "Personentag-Aufwands- und rollenbasierte Preismodelle",
        "Szenario- und Kostenvergleich",
        "Dokumentierte, exportierbare Berechnungen",
      ],
    },
    {
      id: "pmi",
      icon: "merge",
      image: "sol-pmi",
      title: "Post-Merger-Integration",
      short: "Eine digitale Lösung, um die Integration zweier Organisationen zu planen, zu verfolgen und zu steuern.",
      detail:
        "Eine digitale Lösung für die Post-Merger-Integration (PMI) — Arbeitsstränge, Meilensteine, Synergien und Risiken der zusammenwachsenden Organisationen in einer steuerbaren Übersicht. So können Integrationsverantwortliche das Programm steuern, die Wertschöpfung verfolgen und erkennen, was ins Rutschen gerät, bevor es den Deal kostet.",
      experience: [
        "Arbeitsstrang- und Meilenstein-Tracking über beide Organisationen",
        "Überwachung von Synergien und Wertschöpfung gegen Zielwerte",
        "Risiko- und Abhängigkeitswarnungen mit Frühwarnung",
        "Konsolidiertes Reporting für Steuerungsgremien",
      ],
    },
  ],

  capabilitiesSection: {
    eyebrow: "Was wir tun",
    h2: "Expertise, durchgängig angewandt.",
    p: "Die Disziplinen, die wir in jedes Projekt einbringen — von Daten und BI über Automatisierung und KI bis zu Governance. Das Wie hinter allem, was wir bauen.",
  },
  capabilities: [
    {
      id: "cap-bi",
      icon: "chart",
      title: "Daten & Business Intelligence",
      short: "Entscheidungsreife Erkenntnisse auf Datenmodellen, die auch beim Wachsen korrekt bleiben.",
      detail:
        "Wir machen aus verstreuten, denormalisierten Quellen steuerbare dimensionale Modelle und bringen sie über klares, schnelles Power BI an die Oberfläche — KPI-Leisten, Heatmaps und Drill-through, denen Entscheider wirklich vertrauen. Modell-first konzipiert, damit die Zahlen auch bei wachsenden Daten halten.",
      experience: [
        "Mehrseitige Power-BI-Dashboards mit KPI-Leisten und Heatmaps",
        "Stern-Schema-Modelle, aus denormalisierten Exporten neu aufgebaut",
        "DAX-Measures und Zeitintelligenz",
        "Klickbare Mock-ups, vor dem Bau mit Stakeholdern abgestimmt",
      ],
    },
    {
      id: "cap-forecast",
      icon: "forecast",
      title: "Forecasting & Predictive Analytics",
      short: "Aus Ihrer Historie eine belastbare Sicht auf das, was kommt.",
      detail:
        "Nachfrage, Kosten, Kapazität oder Risiko — Forecasting- und Vorhersagemodelle, fundiert auf Ihren eigenen Daten, mit explizit gemachten Annahmen und über die Zeit überwachbarer Genauigkeit. Über Dashboards und Alerts sichtbar gemacht, damit der Forecast wirklich Entscheidungen treibt.",
      experience: [
        "Trend- und Szenariomodellierung auf operativen Daten",
        "Frühwarn- und Risikoindikatoren in Dashboards",
        "In das Reporting eingebaute Genauigkeitsüberwachung",
        "Planungsszenarien für Kapazität und Nachfrage",
      ],
    },
    {
      id: "cap-apps",
      icon: "grid",
      title: "Anwendungsentwicklung",
      short: "Steuerbare Business-Apps und Portale auf Power Apps, Power Pages & Dataverse.",
      detail:
        "Canvas- und modellgesteuerte Apps sowie Power-Pages-Portale für die Menschen außerhalb Ihrer vier Wände — bewusst gewählte Architektur, vorab konzipiertes Datenmodell und Schlüssel, Umgebungen und ALM auf Enterprise-Governance ausgerichtet. Wiederverwendbare Komponenten und konsistentes UI innerhalb des Rendering-Modells der Plattform.",
      experience: [
        "Ein Portfolio von sechs Power Apps innerhalb eines Enterprise-Kontos",
        "Dataverse-Modelle mit zusammengesetzten und alternativen Schlüsseln",
        "Power-Pages-Portale und nach außen gerichtete Websites",
        "Wiederverwendbare Komponenten, HTML/SVG-Steuerelemente und In-App-Branding",
      ],
    },
    {
      id: "cap-automation",
      icon: "flow",
      title: "Prozessautomatisierung",
      short: "Freigaben, Orchestrierung und Integrationen, die laufen, ohne dass jemand hinterhertelefoniert.",
      detail:
        "Power-Automate-Flows, die manuelle Übergaben ersetzen — Freigaben, Benachrichtigungen, geplante Jobs und System-zu-System-Integration — beobachtbar und belastbar gebaut, mit Umgebungsvariablen- und Verbindungsfehlern so debuggt, dass sie nicht stillschweigend scheitern.",
      experience: [
        "Orchestrierungs- und Freigabe-Flows",
        "Frühwarn- und Benachrichtigungsautomatisierung",
        "System-zu-System-Integration über Konnektoren und APIs",
        "Debugging von Umgebungsvariablen- und Verbindungsfehlern",
      ],
    },
    {
      id: "cap-ai",
      icon: "sparkle",
      title: "KI & Agenten",
      short: "Copilot-Studio-Agenten und intelligente Automatisierung, die manuellen Aufwand senken.",
      detail:
        "Konversations- und Aufgabenagenten, zugeschnitten auf Ihre Unternehmensdaten und -prozesse, dazu Automatisierung der wiederkehrenden, fehleranfälligen Abläufe, die Teams stillschweigend auslaugen — Informationen dort, wo gearbeitet wird, mit messbarer Reibungsreduktion.",
      experience: [
        "Copilot-Studio-Agenten, zugeschnitten auf Unternehmensdaten",
        "Automatisierung wiederkehrender, fehleranfälliger Abläufe",
        "Integrationen über SharePoint, Dataverse, Azure & Cloud",
        "Messbare Reduktion manuellen Aufwands",
      ],
    },
    {
      id: "cap-data-eng",
      icon: "database",
      title: "Integration & Data Engineering",
      short: "Saubere, vernetzte Daten, die zwischen Ihren bestehenden Systemen fließen.",
      detail:
        "Power-Query-(M-)Dataflows, die Deduplizierung, Trimmen, ISO-Wochen-Logik und Null-Propagierung übernehmen und dimensionale Modelle speisen — dazu die Konnektoren und das Bindeglied zwischen SharePoint, Dataverse, SQL, Azure, Google Cloud und SAP, damit Daten ohne Copy-Paste fließen.",
      experience: [
        "Power-Query-(M-)Dataflows mit Dedup und ISO-Wochen-Logik",
        "Dimensionale Modelle aus denormalisierten Quellen abgeleitet",
        "Konnektor- und API-Integrationen über Systeme hinweg",
        "SharePoint-Konsolidierung statt fragmentierter Listen",
      ],
    },
    {
      id: "cap-governance",
      icon: "lock",
      title: "Governance & Sicherheit",
      short: "Rollenbasierter Zugriff, Audit-Trails und ALM, die einer Prüfung standhalten.",
      detail:
        "Sicherheit und Governance von Tag eins eingebaut, nicht nachträglich aufgesetzt — Zeilen- und Objektebenen-Zugriff, Audit-Trails sowie Umgebungs-, Verbindungs- und ALM-Konfiguration nach Enterprise-Praxis. Datenverarbeitung konzipiert für regulierte Umgebungen, in denen Zugriff und Nachvollziehbarkeit geprüft werden.",
      experience: [
        "Rollen- und objektebenenbasierte Zugriffsmodelle",
        "Umgebungs-, Verbindungs- und ALM-Governance",
        "Audit-Trails und Datenverarbeitungskontrollen",
        "Solution- und Umgebungsvariablen-Management",
      ],
    },
  ],

  industriesSection: {
    eyebrow: "Branchen",
    h2: "Gebaut für Umgebungen, in denen die Details zählen.",
    p: "Umsetzung in regulierten Enterprise-Kontexten — wo Datenqualität, Nachvollziehbarkeit und Stakeholder-Governance nicht optional sind. Wählen Sie eine Branche für mehr Tiefe.",
    explore: "Entdecken",
  },
  industries: [
    {
      slug: "automotive",
      image: "automotive",
      name: "Automotive",
      body: "Nachvollziehbare, datenqualitäts-orientierte Lösungen für OEMs und Zulieferer — wo jeder Datensatz halten muss.",
      intro:
        "Von OEMs bis zu Tier-N-Zulieferern lebt Automotive von Nachvollziehbarkeit. Wir bauen die Werkzeuge, die jedes Teil, jeden Prozess und jede Freigabe prüfbar halten — und das Reporting, das diese Daten an der Linie und im Vorstand nutzbar macht.",
      challenges: [
        "Nachvollziehbarkeit und Datenqualität unter Audit",
        "Fragmentierte Systeme über Werke und Zulieferer hinweg",
        "Manuelle Qualitäts- und Prüfprozesse",
        "Reporting, das mit der Linie nicht Schritt hält",
      ],
      approach:
        "Wir setzen an den Lücken der Nachvollziehbarkeit an — den Datensätzen, die unter Audit brechen — modellieren die Daten so, dass jedes Teil und jede Freigabe nachvollziehbar ist, und bauen darauf das Reporting, damit Linie und Vorstand aus denselben Zahlen lesen.",
      stat: { value: "100%", label: "Prüfbare Datensätze, by design" },
      solutions: ["quality", "software", "transport", "monitoring", "cost"],
    },
    {
      slug: "logistics",
      image: "logistics",
      name: "Logistik & Transport",
      body: "Transportverfolgung und operative Sichtbarkeit über komplexe, mehrparteiige Lieferketten.",
      intro:
        "Waren bewegen sich durch viele Hände und viele Systeme. Wir machen die Bewegung sichtbar — Status für Status — und bringen die Ausnahmen an die Oberfläche, bevor daraus Verzögerungen werden. So handeln Betriebsteams nach Signalen statt nach Überraschungen.",
      challenges: [
        "Sichtbarkeit über mehrparteiige Lieferketten",
        "Komplexe, mehrstufige Transport-Workflows",
        "Manuelles Status-Nachfassen und Neuerfassen",
        "Operatives Reporting, das der Realität hinterherhinkt",
      ],
      approach:
        "Wir bilden die Warenbewegung Status für Status über jede Partei und jedes System ab, bauen das Tracking-Modell, das alles zusammenhält, und geben Ausnahmen in dem Moment an den Betrieb weiter, in dem etwas abweicht — damit Teams nach Signalen handeln, nicht nach Status-Anrufen.",
      stat: { value: "3", label: "Verkehrsträger vereint — Straße, Schiene & See" },
      solutions: ["transport", "monitoring", "quality", "project"],
    },
    {
      slug: "finance",
      image: "finance",
      name: "Finanzen & Controlling",
      body: "Controlling-, Reporting- und Kostentransparenz-Werkzeuge, die kaufmännischer Prüfung standhalten.",
      intro:
        "Controlling- und kaufmännische Teams brauchen Zahlen, die sie verteidigen können. Wir bauen die Werkzeuge für Kostentransparenz, Monitoring und Reporting, die Blackbox-Tabellen durch transparente, steuerbare Zahlen ersetzen.",
      challenges: [
        "Kostentransparenz und TCO im gesamten Unternehmen",
        "Monatlicher Rückblick statt Live-Signale",
        "Tabellengebundene Blackbox-Berechnungen",
        "Governance und Zugriff in der Prüfung",
      ],
      approach:
        "Wir ersetzen die Blackbox-Tabelle durch dokumentierte, steuerbare Kosten- und Controlling-Modelle — jeder Treiber und jede Annahme explizit gemacht — und bringen sie über ein Reporting an die Oberfläche, das aus dem monatlichen Rückblick ein lebendiges, belastbares Signal macht.",
      stat: { value: "0", label: "Zurückgelassene Blackbox-Tabellen" },
      solutions: ["pmi", "monitoring", "cost", "project", "ticketing"],
    },
    {
      slug: "manufacturing",
      image: "manufacturing",
      name: "Fertigung",
      body: "Qualitäts-, Prüf- und Prozesswerkzeuge, die die Werkshalle mit denen verbinden, die sie steuern.",
      intro:
        "Die Werkshalle erzeugt Daten, die das Büro nicht sieht. Wir verbinden beides — Qualitäts-, Prüf- und Prozesswerkzeuge, die Hallenaktivität in Entscheidungen verwandeln und die Menschen wirklich nutzen wollen.",
      challenges: [
        "Papier-Checklisten und manuelles Neuerfassen",
        "Qualitäts- und Fehler-Nachvollziehbarkeit",
        "Getrennte Hallen- und Bürosysteme",
        "Geringe Akzeptanz neuer Werkzeuge",
      ],
      approach:
        "Wir verbinden die Werkshalle mit dem Büro — mobile Prüfung und Qualitätserfassung, die Papier ersetzt und dieselben Modelle speist, die das Controlling treiben — und gestalten zuerst für Akzeptanz, damit die Menschen in der Halle das Werkzeug wirklich nutzen wollen.",
      stat: { value: "3×", label: "Schneller von Hallendaten zur Entscheidung" },
      solutions: ["quality", "project", "monitoring", "cost"],
    },
  ],

  why: {
    eyebrow: "Warum Inveenta",
    h2: "Der Unterschied liegt darin, mit wem Sie tatsächlich arbeiten.",
    p: "Die meisten Projekte verlieren sich in der Lücke zwischen Strategie, Umsetzung und Übergabe — zwischen denen, die es definieren, und denen, die es schreiben. Wir schließen diese Lücke.",
    points: [
      {
        icon: "flow",
        title: "Ein Team, durchgängig",
        body: "Architektur, Entwicklung und Analyse an einem Ort — keine Übergaben, und nichts geht verloren zwischen denen, die die Lösung planen, und denen, die sie bauen.",
      },
      {
        icon: "lock",
        title: "Alles gehört Ihnen",
        body: "Der Code, die Daten und die Lösung gehören Ihnen, gehostet, wo immer Sie möchten — kein Lock-in, keine Blackbox und keine Abhängigkeit von uns im Betrieb.",
      },
      {
        icon: "gauge",
        title: "Wochen, nicht Quartale",
        body: "Iterative Umsetzung legt Ihnen in Wochen eine funktionierende erste Version in die Hand — damit Sie früh korrigieren, bevor es teuer wird.",
      },
    ],
  },

  about: {
    eyebrow: "Über uns",
    h2: "Ein Partner für den ganzen Build.",
    p1: "Inveenta ist eine erfahrene Engineering-Praxis, die Lösungsarchitektur, praktische Entwicklung und Business-Analyse an einem Ort vereint — wer die Discovery führt, schreibt auch den Code. Wir konzipieren Systeme, die echter Datenmenge und echter Prüfung standhalten, und bleiben nah dran, während sie wachsen.",
    p2: "Die Umsetzung ist für regulierte Enterprise-Umgebungen gebaut — Automotive, Logistik und Finanzen — und bleibt in einer Hand, von der ersten Frage bis zur finalen Übergabe.",
    points: [
      "Architektur, Entwicklung und Analyse in einem Team",
      "Gebaut für regulierte Umsetzung auf Enterprise-Niveau",
      "Erfahrenes, praktisches Engineering von Discovery bis Übergabe",
      "Code und Daten gehören Ihnen",
    ],
    imgAlt: "Inveenta bei der Arbeit",
  },

  approach: {
    eyebrow: "Vorgehen",
    h2: "Ein Team, von der ersten Frage bis zur finalen Übergabe.",
    p: "Die meisten Projekte brauchen drei Dinge, die sie selten an einem Ort finden: Architektur, die echter Datenmenge standhält, Entwicklung, die liefert, und Stakeholder-Kommunikation, die technische und fachliche Seite im Gleichklang hält. Wir leisten alle drei — über Discovery, Design und Umsetzung hinweg.",
    steps: [
      {
        step: "01",
        title: "Discovery",
        body: "Strukturierte Sessions mit fachlichen und technischen Stakeholdern, um Scope, Datenquellen und Erfolgskriterien festzuzurren — bevor wir uns auf eine Architektur festlegen.",
      },
      {
        step: "02",
        title: "Architektur & Schätzung",
        body: "Eine Zielarchitektur mit klarer Empfehlung, dann ein phasenbasierter Lieferplan mit Personentag-Schätzungen und einem transparenten, rollenbasierten Preismodell.",
      },
      {
        step: "03",
        title: "Iterative Umsetzung",
        body: "Lieferung in Inkrementen, mit Validierung von Datenmodellen und UI über klickbare Prototypen, damit Stakeholder Fortschritt sehen und früh korrigieren können.",
      },
      {
        step: "04",
        title: "Übergabe",
        body: "Dokumentierte Arbeitspakete, Datenstrukturen und Flows, damit die Lösung lange nach dem Projekt wartbar bleibt.",
      },
    ],
  },

  technology: {
    eyebrow: "Technologie",
    h2: "Der Stack hinter jedem Build.",
    p: "Tiefe, bewusste Expertise über die Plattformen, Clouds und Werkzeuge, auf denen wir bauen — damit die richtige Technologie für die Aufgabe gewählt wird, nicht umgekehrt.",
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
        group: "Microsoft Cloud & Daten",
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
        group: "Enterprise & Cloud",
        items: [
          { name: "SAP", logo: "sap" },
          { name: "Snowflake", logo: "snowflake" },
          { name: "Databricks", logo: "databricks" },
          { name: "Google", logo: "google" },
          { name: "Google Cloud", logo: "googlecloud" },
        ],
      },
      {
        group: "KI, Dev & Tools",
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
        group: "Sprachen & Query",
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
    eyebrow: "Kontakt",
    h2: "Lassen Sie uns etwas bauen, das funktioniert.",
    p: "Sagen Sie uns über das Formular, was Sie lösen möchten. Wir antworten innerhalb eines Werktags mit einer ehrlichen Einschätzung zu Scope, Zeitrahmen und ob wir der richtige Partner sind.",
    labels: { name: "Name", email: "E-Mail", company: "Unternehmen", optional: "(optional)", message: "Wie können wir helfen?" },
    placeholders: {
      name: "Max Mustermann",
      email: "max@unternehmen.de",
      company: "Beispiel GmbH",
      message: "Beschreiben Sie kurz, was Sie bauen oder verbessern möchten…",
    },
    errors: {
      name: "Bitte geben Sie Ihren Namen ein.",
      email: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Diese E-Mail-Adresse sieht nicht richtig aus.",
      message: "Erzählen Sie uns etwas mehr (mindestens 10 Zeichen).",
      submit: "Beim Senden Ihrer Nachricht ist etwas schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.",
    },
    success: {
      title: "Danke — Nachricht gesendet.",
      body: "Wir melden uns in Kürze unter der angegebenen E-Mail-Adresse.",
      again: "Weitere senden",
    },
    submit: { idle: "Nachricht senden", sending: "Senden…" },
    subject: "Projektanfrage von",
  },

  footer: {
    tagline: "Optimierung · Skalierbarkeit · Performance",
    contact: "Kontakt",
    privacy: "Datenschutz",
    imprint: "Impressum",
  },

  cardGrid: { whatWeBuilt: "Was wir umgesetzt haben", open: "Mehr zeigen", close: "Weniger zeigen" },

  industryPage: {
    label: "Branche",
    breadcrumbHome: "Start",
    breadcrumbIndustries: "Branchen",
    talkToUs: "Sprechen Sie uns an",
    challengesEyebrow: "Wo es hakt",
    challengesH2: "Herausforderungen, die wir in {name} hören.",
    approachEyebrow: "Wie wir vorgehen würden",
    solutionsEyebrow: "Was wir bauen",
    solutionsH2: "Lösungen für {name}.",
    solutionsP:
      "Die hier relevantesten Anwendungsfälle — jeder individuell auf Ihre Daten und Prozesse zugeschnitten. Wählen Sie einen für mehr Tiefe.",
    note: "Alle Lösungen ansehen",
    seeAll: "Alle Lösungen ansehen",
    tellUs: "sagen Sie uns, was Sie lösen möchten",
  },

  seo: {
    homeTitle: "Inveenta — engineering intelligent business",
    homeDescription:
      "Individuelle Unternehmenssoftware, die komplexe, manuelle Abläufe in steuerbare, skalierbare Systeme verwandelt. Schlanker arbeiten. Schneller skalieren. Mehr leisten.",
    industryDescriptionFallback: "Individuelle Unternehmenssoftware für regulierte, datengetriebene Branchen.",
    privacyTitle: "Datenschutz — Inveenta",
    imprintTitle: "Impressum — Inveenta",
  },
};

export default de;
