import type { SiteContent } from "./types";

// Product names (Power Apps, Dataverse, Power BI …) and the brand tagline stay
// in their original form; all marketing copy is translated to Spanish.
const es: SiteContent = {
  tagline: "engineering intelligent business",
  nav: [
    { label: "Soluciones", href: "/#solutions" },
    { label: "Sectores", href: "/#industries" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Tecnología", href: "/#technology" },
    { label: "Nosotros", href: "/#about" },
  ],
  cta: { getInTouch: "Contactar", contact: "Contacto" },

  hero: {
    kicker: "engineering intelligent business",
    titleLines: ["Opere con menos.", "Escale más rápido.", "Rinda mejor."],
    lead: "Inveenta diseña y desarrolla software empresarial a medida que convierte operaciones complejas y manuales en sistemas gobernados y escalables — diseñados en torno a cómo funciona realmente su negocio.",
    primary: "Iniciar un proyecto",
    ghost: "Explorar soluciones",
  },
  heroVisual: {
    live: "en vivo",
    overview: "visión de operaciones",
    status: "Todos los sistemas en orden",
    kpis: [
      { value: "−40%", label: "Trabajo manual" },
      { value: "5×", label: "ROI" },
      { value: "98%", label: "A tiempo" },
    ],
  },
  stats: [
    { value: "7", label: "Competencias clave" },
    { value: "150+", label: "Soluciones creadas" },
    { value: "3×", label: "Entrega más rápida" },
    { value: "100%", label: "A medida" },
  ],

  pillars: [
    {
      title: "Optimización",
      outcome: "Menos trabajo manual, más resultado",
      body: "Quitamos los pasos manuales, las esperas y la doble captura del flujo de trabajo — para que el mismo equipo logre más con menos esfuerzo.",
    },
    {
      title: "Escalabilidad",
      outcome: "Construido una vez, sólido a cualquier escala",
      body: "Diseñado para que el sistema que atiende a diez usuarios atienda a diez mil — sin reconstruir, sin migrar, sin sorpresas al crecer.",
    },
    {
      title: "Rendimiento",
      outcome: "Veloz en segundos, sólido bajo carga",
      body: "Informes que cargan en segundos y aplicaciones que resisten datos y carga reales — velocidad que su equipo y sus clientes notan de verdad.",
    },
  ],

  showcase: {
    eyebrow: "engineering intelligent business",
    h2: "Conectamos sus datos, sistemas y personas en una sola operación inteligente.",
    p: "Optimización, escalabilidad y rendimiento — diseñados para resistir datos reales, escala real y escrutinio real.",
  },

  solutionsSection: {
    eyebrow: "Lo que construimos",
    h2: "Soluciones, listas para hacerlas suyas.",
    p: "Casos de uso productizados que ya hemos entregado — cada uno ajustado a sus datos y procesos, y mapeado a los sectores en los que trabajamos.",
    note: "¿No ve su caso de uso exacto? Cada proyecto es a medida —",
    noteLink: "díganos qué quiere resolver",
  },
  solutions: [
    {
      id: "transport",
      icon: "truck",
      image: "sol-transport",
      title: "Gestión de Transporte",
      short: "Seguimiento multimodal de transporte — carretera, ferrocarril y mar, de extremo a extremo.",
      detail:
        "Seguimiento de transporte por carretera, ferrocarril y mar, con flujos multi-estado, modelos de datos con claves compuestas y alternativas, flujos de orquestación y paneles operativos — diseñados para mantener el movimiento complejo de mercancías visible y trazable.",
      experience: [
        "Seguimiento multi-estado del transporte (incl. un flujo ferroviario de 24 estados)",
        "Modelos de Dataverse con claves compuestas y alternativas",
        "Orquestación y notificaciones con Power Automate",
        "Paneles operativos para equipos de logística",
      ],
    },
    {
      id: "quality",
      icon: "shield",
      image: "sol-quality",
      title: "Gestión de Calidad",
      short: "Seguimiento de calidad trazable e inspección móvil para entornos regulados.",
      detail:
        "Aplicaciones de seguimiento de defectos y calidad con pistas de auditoría, acceso por roles y controles de calidad de datos — más inspección móvil con escaneo de código de barras y QR que captura datos estructurados en campo. Diseñadas para contextos de automoción y logística donde la trazabilidad y la integridad de los datos no son negociables.",
      experience: [
        "Seguimiento de defectos y calidad en contextos de automoción regulados",
        "Inspección móvil con escaneo de código de barras y QR",
        "Pistas de auditoría, acceso por roles y controles de calidad de datos",
        "Captura de fotos y evidencias sincronizada con Dataverse — en lugar de listas en papel",
      ],
    },
    {
      id: "software",
      icon: "bolt",
      image: "sol-software",
      title: "Seguimiento de Madurez de Software",
      short: "Seguir actualizaciones de software y madurez de versión en sistemas de alta tensión.",
      detail:
        "Una solución de seguimiento para el software dentro de los sistemas de alta tensión — versiones, estado de actualización y nivel de madurez de cada componente y proveedor, en una vista gobernada. Para que ingeniería y calidad sepan siempre qué está liberado, qué sigue en prueba y qué está lo bastante maduro para entregar.",
      experience: [
        "Seguimiento de versiones y actualizaciones en componentes y ECUs de alta tensión",
        "Estado de madurez desde en desarrollo hasta listo para liberar",
        "Visibilidad entre proveedores en un único modelo gobernado",
        "Alertas tempranas en componentes que van por detrás del plan de liberación",
      ],
    },
    {
      id: "ticketing",
      icon: "ticket",
      image: "sol-ticketing",
      title: "Sistemas de Tickets",
      short: "Seguimiento de incidencias y solicitudes que se adapta a su proceso — no al revés.",
      detail:
        "Aplicaciones de ticketing a medida con ciclos de vida de estado, asignación y enrutamiento, notificaciones e informes de SLA. Sin las limitaciones rígidas de lo estándar: el flujo refleja cómo su equipo realmente clasifica y resuelve.",
      experience: [
        "Apps de notificación de defectos y seguimiento de solicitudes",
        "Ciclos de vida de estado con asignación y enrutamiento",
        "Notificaciones y escalados automatizados",
        "Informes de estado para las partes interesadas",
      ],
    },
    {
      id: "project",
      icon: "tasks",
      image: "sol-project",
      title: "Gestión de Proyectos",
      short: "Seguimiento de proyectos por tipos, con hitos y alertas tempranas.",
      detail:
        "Soluciones de seguimiento de proyectos que abarcan múltiples tipos de proyecto, con visualización de hitos, automatización de alertas tempranas y exportación de informes — una vista única y actual para los responsables de cartera en lugar de una pila de correos de estado.",
      experience: [
        "Una herramienta de seguimiento que abarca cuatro tipos de proyecto",
        "Visualización de hitos y automatización de alertas tempranas",
        "Especificaciones de requisitos y planes de entrega por fases",
        "Exportación de informes para responsables de cartera",
      ],
    },
    {
      id: "monitoring",
      icon: "pulse",
      image: "sol-monitoring",
      title: "Monitoreo & Control",
      short: "Lógica de alerta temprana que señala problemas antes de que escalen.",
      detail:
        "Monitoreo de estado con umbrales y automatización de alertas tempranas que envía las excepciones a quienes pueden actuar, en el momento en que algo se desvía — convirtiendo el control de una mirada mensual hacia atrás en una señal en vivo.",
      experience: [
        "Automatización de alertas tempranas ante desviaciones de estado",
        "Notificaciones de excepción vía Power Automate",
        "Informes de control sobre flujos de trabajo paralelos",
        "Monitoreo de KPI basado en umbrales",
      ],
    },
    {
      id: "cost",
      icon: "calculator",
      image: "sol-tco",
      title: "Costes & TCO",
      short: "Modelos de coste total de propiedad en los que sus interlocutores pueden confiar.",
      detail:
        "Modelos de coste y de coste total de propiedad que convierten los generadores de coste en escenarios claros y comparables, con lógica documentada e informes exportables — para que las decisiones comerciales se apoyen en cifras transparentes en lugar de una hoja de cálculo opaca.",
      experience: [
        "Modelos de esfuerzo por persona-día y de precios por rol",
        "Comparación de escenarios y costes",
        "Cálculos documentados y exportables",
      ],
    },
    {
      id: "pmi",
      icon: "merge",
      image: "sol-pmi",
      title: "Integración Post-Fusión",
      short: "Una solución digital para planificar, seguir y dirigir la integración de dos organizaciones en una.",
      detail:
        "Una solución digital para la integración post-fusión (PMI) — flujos de trabajo, hitos, sinergias y riesgos de las organizaciones que se unen, en una vista gobernada. Para que los responsables de integración dirijan el programa, sigan la captura de valor y detecten lo que se desvía antes de que cueste la operación.",
      experience: [
        "Seguimiento de flujos de trabajo e hitos en ambas organizaciones",
        "Monitoreo de sinergias y captura de valor frente a objetivos",
        "Alertas de riesgos y dependencias con avisos tempranos",
        "Informes consolidados para comités de dirección",
      ],
    },
  ],

  capabilitiesSection: {
    eyebrow: "Lo que hacemos",
    h2: "Expertise, aplicado de extremo a extremo.",
    p: "Las disciplinas que aportamos a cada proyecto — de los datos y el BI a la automatización, la IA y la gobernanza. El cómo detrás de todo lo que construimos.",
  },
  capabilities: [
    {
      id: "cap-bi",
      icon: "chart",
      title: "Datos & Business Intelligence",
      short: "Información lista para decidir sobre modelos de datos que siguen siendo correctos al crecer.",
      detail:
        "Convertimos fuentes dispersas y desnormalizadas en modelos dimensionales gobernados, y luego las mostramos a través de un Power BI claro y rápido — bandas de KPI, mapas de calor y drill-through en los que los decisores realmente confían. Diseñado modelo-primero, para que las cifras aguanten a medida que crecen los datos.",
      experience: [
        "Paneles de Power BI de varias páginas con bandas de KPI y mapas de calor",
        "Modelos en esquema de estrella reconstruidos desde exportaciones desnormalizadas",
        "Medidas DAX e inteligencia de tiempo",
        "Maquetas clicables alineadas con las partes interesadas antes de construir",
      ],
    },
    {
      id: "cap-forecast",
      icon: "forecast",
      title: "Forecasting & Analítica Predictiva",
      short: "Convierta su histórico en una visión creíble de lo que viene.",
      detail:
        "Demanda, coste, capacidad o riesgo — modelos de forecasting y predictivos fundamentados en sus propios datos, con supuestos explícitos y una precisión que puede monitorear en el tiempo. Expuestos a través de paneles y alertas para que el forecast realmente impulse decisiones.",
      experience: [
        "Modelado de tendencias y escenarios sobre datos operativos",
        "Indicadores de alerta temprana y de riesgo en paneles",
        "Monitoreo de precisión integrado en el reporting",
        "Escenarios de planificación de capacidad y demanda",
      ],
    },
    {
      id: "cap-apps",
      icon: "grid",
      title: "Desarrollo de Aplicaciones",
      short: "Apps de negocio y portales gobernados sobre Power Apps, Power Pages & Dataverse.",
      detail:
        "Apps canvas y basadas en modelo, más portales Power Pages para las personas fuera de sus cuatro paredes — arquitectura elegida con criterio, modelo de datos y claves diseñados de antemano, entornos y ALM alineados con la gobernanza empresarial. Componentes reutilizables y UI consistente dentro del modelo de renderizado de la plataforma.",
      experience: [
        "Una cartera de seis Power Apps dentro de una cuenta empresarial",
        "Modelos de Dataverse con claves compuestas y alternativas",
        "Portales Power Pages y sitios de cara al exterior",
        "Componentes reutilizables, controles HTML/SVG y branding en la app",
      ],
    },
    {
      id: "cap-automation",
      icon: "flow",
      title: "Automatización de Procesos",
      short: "Aprobaciones, orquestación e integraciones que funcionan sin que nadie las persiga.",
      detail:
        "Flujos de Power Automate que sustituyen los traspasos manuales — aprobaciones, notificaciones, trabajos programados e integración entre sistemas — construidos para ser observables y resilientes, con fallos de variables de entorno y conexión depurados para que no fallen en silencio.",
      experience: [
        "Flujos de orquestación y aprobación",
        "Automatización de alertas tempranas y notificaciones",
        "Integración entre sistemas vía conectores y APIs",
        "Depuración de fallos de variables de entorno y conexión",
      ],
    },
    {
      id: "cap-ai",
      icon: "sparkle",
      title: "IA & Agentes",
      short: "Agentes de Copilot Studio y automatización inteligente que reducen el esfuerzo manual.",
      detail:
        "Agentes conversacionales y de tareas acotados a sus datos y procesos empresariales, más la automatización de los flujos repetitivos y propensos a error que agotan a los equipos en silencio — mostrando la información donde ya se trabaja, con una reducción de fricción medible.",
      experience: [
        "Agentes de Copilot Studio acotados a datos empresariales",
        "Automatización de flujos repetitivos y propensos a error",
        "Integraciones en SharePoint, Dataverse, Azure & cloud",
        "Reducción medible del esfuerzo manual",
      ],
    },
    {
      id: "cap-data-eng",
      icon: "database",
      title: "Integración & Data Engineering",
      short: "Datos limpios y conectados que fluyen entre los sistemas que ya usa.",
      detail:
        "Dataflows de Power Query (M) que gestionan deduplicación, recorte, lógica de semana ISO y propagación de nulos, alimentando modelos dimensionales — más los conectores y el pegamento entre SharePoint, Dataverse, SQL, Azure, Google Cloud y SAP para que los datos se muevan sin copiar y pegar.",
      experience: [
        "Dataflows de Power Query (M) con dedup y lógica de semana ISO",
        "Modelos dimensionales derivados de fuentes desnormalizadas",
        "Integraciones de conectores y API entre sistemas",
        "Consolidación de SharePoint en lugar de listas fragmentadas",
      ],
    },
    {
      id: "cap-governance",
      icon: "lock",
      title: "Gobernanza & Seguridad",
      short: "Acceso por roles, pistas de auditoría y ALM que resisten el escrutinio.",
      detail:
        "Seguridad y gobernanza incorporadas desde el primer día, no añadidas después — acceso a nivel de fila y de objeto, pistas de auditoría y configuración de entornos, conexiones y ALM alineada con la práctica empresarial. Tratamiento de datos diseñado para entornos regulados donde se revisan el acceso y la trazabilidad.",
      experience: [
        "Modelos de acceso por roles y a nivel de objeto",
        "Gobernanza de entornos, conexiones y ALM",
        "Pistas de auditoría y controles de tratamiento de datos",
        "Gestión de soluciones y variables de entorno",
      ],
    },
  ],

  industriesSection: {
    eyebrow: "Sectores",
    h2: "Diseñado para entornos donde los detalles importan.",
    p: "Entrega en contextos empresariales regulados — donde la calidad de los datos, la trazabilidad y la gobernanza de las partes interesadas no son opcionales. Seleccione un sector para profundizar.",
    explore: "Explorar",
  },
  industries: [
    {
      slug: "automotive",
      image: "automotive",
      name: "Automoción",
      body: "Soluciones trazables y centradas en la calidad del dato para OEMs y proveedores — donde cada registro tiene que aguantar.",
      intro:
        "De los OEMs a los proveedores de nivel N, la automoción se mueve por la trazabilidad. Construimos las herramientas que mantienen auditables cada pieza, proceso y aprobación — y el reporting que hace esos datos útiles en la línea y en el consejo.",
      challenges: [
        "Trazabilidad y calidad del dato bajo auditoría",
        "Sistemas fragmentados entre plantas y proveedores",
        "Procesos manuales de calidad e inspección",
        "Reporting que no sigue el ritmo de la línea",
      ],
      approach:
        "Empezamos por las brechas de trazabilidad — los registros que se rompen bajo auditoría — modelamos los datos para que cada pieza y aprobación sea responsable, y montamos el reporting encima para que la línea y el consejo lean de las mismas cifras.",
      stat: { value: "100%", label: "Registros auditables, por diseño" },
      solutions: ["quality", "software", "transport", "monitoring", "cost"],
    },
    {
      slug: "logistics",
      image: "logistics",
      name: "Logística & Transporte",
      body: "Seguimiento de transporte y visibilidad operativa en cadenas de suministro complejas y multiactor.",
      intro:
        "Las mercancías pasan por muchas manos y muchos sistemas. Hacemos visible el movimiento — estado a estado — y sacamos a la luz las excepciones antes de que se conviertan en retrasos, para que los equipos operativos actúen sobre señales, no sobre sorpresas.",
      challenges: [
        "Visibilidad en cadenas de suministro multiactor",
        "Flujos de transporte complejos y multi-estado",
        "Persecución manual de estados y recaptura de datos",
        "Reporting operativo que va por detrás de la realidad",
      ],
      approach:
        "Mapeamos el movimiento de mercancías estado a estado en cada actor y sistema, construimos el modelo de seguimiento que lo mantiene unido y enviamos las excepciones a operaciones en el momento en que algo se desvía — para que los equipos actúen sobre señales, no sobre llamadas de estado.",
      stat: { value: "3", label: "Modos de transporte unificados — carretera, ferrocarril y mar" },
      solutions: ["transport", "monitoring", "quality", "project"],
    },
    {
      slug: "finance",
      image: "finance",
      name: "Finanzas & Control",
      body: "Herramientas de control, reporting y transparencia de costes que resisten el escrutinio comercial.",
      intro:
        "Los equipos de control y comerciales necesitan cifras que puedan defender. Construimos las herramientas de transparencia de costes, monitoreo y reporting que sustituyen las hojas de cálculo opacas por cifras transparentes y gobernadas.",
      challenges: [
        "Transparencia de costes y TCO en todo el negocio",
        "Mirada mensual hacia atrás en lugar de señales en vivo",
        "Cálculos opacos atados a hojas de cálculo",
        "Gobernanza y acceso bajo revisión",
      ],
      approach:
        "Sustituimos la hoja de cálculo opaca por modelos de coste y control documentados y gobernados — cada generador y supuesto explícito — y los mostramos a través de un reporting que convierte la mirada mensual hacia atrás en una señal viva y defendible.",
      stat: { value: "0", label: "Hojas de cálculo opacas dejadas atrás" },
      solutions: ["pmi", "monitoring", "cost", "project", "ticketing"],
    },
    {
      slug: "manufacturing",
      image: "manufacturing",
      name: "Fabricación",
      body: "Herramientas de calidad, inspección y proceso que conectan la planta con quienes la dirigen.",
      intro:
        "La planta genera datos que la oficina no ve. Conectamos ambas — herramientas de calidad, inspección y proceso que convierten la actividad de planta en decisiones, y que la gente realmente quiere usar.",
      challenges: [
        "Listas en papel y recaptura manual",
        "Trazabilidad de calidad y defectos",
        "Sistemas de planta y oficina desconectados",
        "Baja adopción de nuevas herramientas",
      ],
      approach:
        "Conectamos la planta con la oficina — inspección móvil y captura de calidad que sustituye el papel y alimenta los mismos modelos que impulsan el control — y diseñamos primero para la adopción, para que la gente de planta realmente quiera usarla.",
      stat: { value: "3×", label: "Más rápido del dato de planta a la decisión" },
      solutions: ["quality", "project", "monitoring", "cost"],
    },
  ],

  why: {
    eyebrow: "Por qué Inveenta",
    h2: "La diferencia está en con quién trabaja de verdad.",
    p: "La mayoría de los proyectos se pierden en la brecha entre estrategia, entrega y traspaso — entre quienes lo definen y quienes lo escriben. Nosotros cerramos esa brecha.",
    points: [
      {
        icon: "flow",
        title: "Un equipo, de extremo a extremo",
        body: "Arquitectura, desarrollo y análisis en un mismo lugar — sin traspasos, y sin que nada se pierda entre quienes planifican la solución y quienes la construyen.",
      },
      {
        icon: "lock",
        title: "Todo es suyo",
        body: "El código, los datos y la solución son suyos, alojados donde necesite — sin lock-in, sin caja negra y sin depender de nosotros para que funcione.",
      },
      {
        icon: "gauge",
        title: "Semanas, no trimestres",
        body: "La entrega iterativa le pone en las manos una primera versión funcional en semanas — para que corrija pronto, antes de que salga caro.",
      },
    ],
  },

  about: {
    eyebrow: "Nosotros",
    h2: "Un solo socio para todo el proyecto.",
    p1: "Inveenta es una práctica de ingeniería sénior que combina arquitectura de soluciones, desarrollo práctico y análisis de negocio en un mismo lugar — quienes dirigen la discovery también escriben el código. Diseñamos sistemas que resisten datos reales y escrutinio real, y permanecemos cerca mientras crecen.",
    p2: "La entrega está construida para entornos empresariales regulados — automoción, logística y finanzas — y permanece en unas mismas manos, desde la primera pregunta hasta el traspaso final.",
    points: [
      "Arquitectura, desarrollo y análisis en un solo equipo",
      "Construido para entrega regulada de nivel empresarial",
      "Ingeniería sénior y práctica, de discovery a traspaso",
      "El código y los datos son suyos",
    ],
    imgAlt: "Inveenta trabajando",
  },

  approach: {
    eyebrow: "Enfoque",
    h2: "Un equipo, de la primera pregunta al traspaso final.",
    p: "La mayoría de los proyectos necesitan tres cosas que rara vez encuentran juntas: arquitectura que resiste datos reales, desarrollo que entrega y comunicación con las partes interesadas que mantiene alineados los lados técnico y de negocio. Hacemos las tres — a lo largo de discovery, diseño y entrega.",
    steps: [
      {
        step: "01",
        title: "Discovery",
        body: "Sesiones estructuradas con interlocutores de negocio y técnicos para fijar alcance, fuentes de datos y criterios de éxito — antes de comprometernos con una arquitectura.",
      },
      {
        step: "02",
        title: "Arquitectura & estimación",
        body: "Una arquitectura objetivo con una recomendación clara, y luego un plan de entrega por fases con estimaciones en persona-día y un modelo de precios transparente basado en roles.",
      },
      {
        step: "03",
        title: "Construcción iterativa",
        body: "Entrega en incrementos, validando modelos de datos y UI con prototipos clicables para que las partes interesadas vean el avance y puedan corregir pronto.",
      },
      {
        step: "04",
        title: "Traspaso",
        body: "Paquetes de trabajo, estructuras de datos y flujos documentados, para que la solución siga siendo mantenible mucho después del proyecto.",
      },
    ],
  },

  technology: {
    eyebrow: "Tecnología",
    h2: "El stack detrás de cada proyecto.",
    p: "Expertise profundo y deliberado en las plataformas, clouds y herramientas sobre las que construimos — para que se elija la tecnología adecuada para la tarea, y no al revés.",
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
        group: "Microsoft cloud & datos",
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
        group: "IA, dev & herramientas",
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
        group: "Lenguajes & query",
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
    eyebrow: "Contacto",
    h2: "Construyamos algo que funcione.",
    p: "Díganos a través del formulario qué quiere resolver. Le responderemos en un día laborable con una opinión honesta sobre alcance, plazos y si somos el socio adecuado.",
    labels: { name: "Nombre", email: "Email", company: "Empresa", optional: "(opcional)", message: "¿Cómo podemos ayudar?" },
    placeholders: {
      name: "Juan Pérez",
      email: "juan@empresa.com",
      company: "Empresa S.A.",
      message: "Describa brevemente qué quiere construir o mejorar…",
    },
    errors: {
      name: "Por favor, introduzca su nombre.",
      email: "Por favor, introduzca su email.",
      emailInvalid: "Ese email no parece correcto.",
      message: "Cuéntenos un poco más (al menos 10 caracteres).",
      submit: "Algo salió mal al enviar su mensaje. Por favor, inténtelo de nuevo en un momento.",
    },
    success: {
      title: "Gracias — mensaje enviado.",
      body: "Nos pondremos en contacto en breve en el email que ha indicado.",
      again: "Enviar otro",
    },
    submit: { idle: "Enviar mensaje", sending: "Enviando…" },
    subject: "Consulta de proyecto de",
  },

  footer: {
    tagline: "Optimización · Escalabilidad · Rendimiento",
    contact: "Contacto",
    privacy: "Privacidad",
    imprint: "Aviso legal",
  },

  cardGrid: { whatWeBuilt: "Lo que hemos entregado", open: "Ver más", close: "Ver menos" },

  industryPage: {
    label: "Sector",
    breadcrumbHome: "Inicio",
    breadcrumbIndustries: "Sectores",
    talkToUs: "Hablemos",
    challengesEyebrow: "Dónde está la fricción",
    challengesH2: "Retos que escuchamos en {name}.",
    approachEyebrow: "Cómo lo abordaríamos",
    solutionsEyebrow: "Lo que construimos",
    solutionsH2: "Soluciones para {name}.",
    solutionsP:
      "Los casos de uso más relevantes aquí — cada uno ajustado a sus datos y procesos. Seleccione cualquiera para profundizar.",
    note: "Ver todas las soluciones",
    seeAll: "Ver todas las soluciones",
    tellUs: "díganos qué quiere resolver",
  },

  seo: {
    homeTitle: "Inveenta — engineering intelligent business",
    homeDescription:
      "Software empresarial a medida que convierte operaciones complejas y manuales en sistemas gobernados y escalables. Opere con menos. Escale más rápido. Rinda mejor.",
    industryDescriptionFallback: "Software empresarial a medida para sectores regulados y orientados a datos.",
    privacyTitle: "Política de Privacidad — Inveenta",
    imprintTitle: "Aviso Legal — Inveenta",
  },
};

export default es;
