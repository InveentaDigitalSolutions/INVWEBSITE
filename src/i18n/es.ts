import type { SiteContent } from "./types";

// Product names (Power Apps, Dataverse, Power BI …) and the brand tagline stay
// in their original form; all marketing copy is translated to Spanish.
const es: SiteContent = {
  tagline: "engineering intelligent business",
  nav: [
    { label: "Expertise", href: "/#expertise" },
    { label: "Sectores", href: "/#industries" },
    { label: "Soluciones", href: "/#solutions" },
    { label: "Tecnología", href: "/#technology" },
    { label: "Nosotros", href: "/#about" },
  ],
  cta: { getInTouch: "Contactar", contact: "Contacto" },

  hero: {
    kicker: "Data Autonomy",
    titleLines: ["La próxima generación de software empresarial."],
    lead: "Las operaciones empresariales están limitadas por el estado de sus datos, no por su ambición. Establecemos la capa de datos gobernada que elimina esa limitación, y los agentes de IA que la convierten en decisiones — ciclo tras ciclo, sin sustituir un solo sistema.",
    primary: "Iniciar un proyecto",
    ghost: "Explorar soluciones",
    scrollCue: "Desplazar",
  },
  film: {
    thesis: {
      eyebrow: "El problema contra el que diseñamos",
      line: "La mayoría de las operaciones no necesitan más software. Necesitan que los sistemas que ya usan",
      emphasis: "actúen como uno solo.",
    },
    integration: {
      eyebrow: "De fragmentado a orquestado",
      fromLabel: "Lo que se usa hoy",
      fragmented: [
        "ERP",
        "Hojas de cálculo",
        "Carpetas compartidas",
        "Bases de datos",
        "Tickets",
        "Correo",
        "Formularios en papel",
      ],
      hub: "IA / Agentes",
      layers: [
        { label: "Optimizado", items: ["Monitorizar", "Prever", "Decidir"] },
        { label: "Automatizado", items: ["Enrutar", "Aprobar", "Notificar"] },
        { label: "Digitalizado", items: ["Capturar", "Modelar", "Gobernar"] },
      ],
      caption: "Un flujo. Un registro. Agentes por encima.",
    },
    shift: {
      eyebrow: "El cambio, en cifras",
      year: "2026",
      unit: "100 aplicaciones empresariales",
      figure: 40,
      note: "incorporarán agentes de IA específicos por tarea.",
    },
  },
  stats: [
    { value: "7", label: "Áreas de expertise" },
    { value: "3", label: "Sectores regulados" },
    { value: "100%", label: "A medida" },
    { value: "0", label: "Dependencia" },
  ],



  shiftSection: {
    eyebrow: "El cambio",
    h2: "Un cambio enorme — y una tasa de fracaso a la altura.",
    prev: "Anterior",
    next: "Siguiente",
    panels: [
      {
        id: "wave",
        eyebrow: "La ola",
        prefix: "",
        value: 40,
        decimals: 0,
        suffix: "%",
        statement:
          "de las aplicaciones empresariales incorporarán agentes de IA a finales de 2026 — hoy son menos del 5%.",
        note: "Seis de cada diez organizaciones esperan tener agentes en producción en dos años.",
      },
      {
        id: "reality",
        eyebrow: "La realidad",
        prefix: "",
        value: 95,
        decimals: 0,
        suffix: "%",
        statement:
          "de los pilotos de IA no dan retorno. El fallo está en la implementación, no en el modelo.",
        note: "La demanda de quienes saben implementarla triplica la oferta disponible.",
      },
      {
        id: "stake",
        eyebrow: "Lo que está en juego",
        prefix: "US$",
        value: 4.4,
        decimals: 1,
        suffix: " billones",
        statement:
          "al año en valor de la IA generativa — para quien sepa llevarla de verdad a producción.",
        note: "El modelo es solo la punta visible. Lo que decide el resultado son los datos, la gobernanza y las personas que hay debajo.",
      },
    ],
  },

  solutionsSection: {
    eyebrow: "Lo que construimos",
    h2: "Tres etapas. La mayoría de las operaciones siguen en la primera.",
    p: "Digitalizar es donde casi todos empiezan, y donde la mayoría se detiene. El valor se acumula cuando los sistemas dejan de informar y empiezan a decidir — construimos para la etapa en la que está, y para la siguiente.",
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
        "Modelos de datos con claves compuestas y alternativas",
        "Flujos de orquestación y notificaciones",
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
        "Captura de fotos y evidencias sincronizada con el registro — en lugar de listas en papel",
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
        "Notificaciones de excepción enrutadas automáticamente",
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
    {
      id: "supplier",
      icon: "flow",
      image: "cap-supplier",
      title: "Gestión de Proveedores",
      short: "Estado, recordatorios y escalado de proveedores que funcionan solos.",
      detail:
        "Los procesos con proveedores integrados en el mismo sistema que el trabajo: rendimiento y estado visibles en todos los proveedores, recordatorios que se disparan antes de que se caiga un plazo y escalado estructurado cuando ocurre — con las personas correctas en copia, en el idioma correcto, y sin que nadie mantenga una hoja de cálculo de quién debe qué.",
      experience: [
        "Reclamaciones automáticas a proveedores, agrupadas por proveedor y con la oficina coordinadora en copia",
        "Recordatorios de plazos basados en días hábiles, no en días naturales",
        "Visibilidad de estado entre proveedores en un único modelo gobernado",
        "Rutas de escalado con seguimiento de confirmación y respuesta",
      ],
    },
    {
      id: "approval",
      icon: "check",
      image: "cap-approval",
      title: "Gestión de Aprobaciones y Releases",
      short: "El estado de aprobación de cada parte implicada, en una sola línea temporal.",
      detail:
        "Cockpits de aprobación que sustituyen la reunión de estado: un modelo de qué está liberado, qué está pendiente de quién y qué está en riesgo — fechas y dependencias sobre una única línea temporal, alimentadas por los sistemas que ya contienen esos registros.",
      experience: [
        "Cockpit de aprobación que consolida el estado de release entre flujos paralelos",
        "Lógica de línea temporal derivada de datos de hitos y dependencias",
        "Integración con fuentes existentes de planificación, tickets y datos maestros",
        "Vistas por rol: cada parte ve las decisiones de las que responde",
      ],
    },
    {
      id: "telemetry",
      icon: "database",
      image: "cap-telemetry",
      title: "Plataforma de Datos y Telemetría en Tiempo Real",
      short: "Datos operativos en vivo, del dispositivo al panel.",
      detail:
        "Pipelines de streaming que llevan la telemetría de máquinas y sistemas operativos a un almacén consultable, con un panel en vivo encima — para que operaciones vea lo que está pasando ahora y no lo que pasó el mes pasado, y el histórico siga ahí cuando alguien pregunte por qué.",
      experience: [
        "Telemetría de dispositivos transmitida a un almacén analítico en tiempo real",
        "Endpoints de ingesta propios que alimentan un pipeline orientado a eventos",
        "Paneles en tiempo real desplegados y versionados desde la línea de comandos",
        "Buffer local: una conexión caída no pierde datos",
      ],
    },
    {
      id: "planning",
      icon: "forecast",
      image: "cap-planning",
      title: "Planificación de Demanda y Capacidad",
      short: "Planificar un periodo en minutos partiendo del que funcionó.",
      detail:
        "Herramientas de planificación que convierten un ejercicio recurrente en unos pocos clics: elegir el periodo, partir de un periodo de referencia como plantilla, ajustar lo que ha cambiado y crear el plan completo en una sola acción — en lugar de rehacer la misma cuadrícula a mano cada semana.",
      experience: [
        "Planificación semanal construida a partir de una plantilla de periodo de referencia",
        "Creación por lotes del plan de todo un periodo en una sola acción",
        "Capacidad y demanda comparadas por centro y por periodo",
        "Visibilidad de plan frente a real una vez que el periodo avanza",
      ],
    },
  ],

  stages: [
    {
      id: "digitalize",
      title: "Digitalizar",
      short: "Sacar el trabajo de documentos, correos y hojas de cálculo personales, y llevarlo a un registro gobernado.",
      detail:
        "Donde siguen estando la mayoría de las operaciones. El proceso vive en cadenas de correo, adjuntos y una hoja de cálculo que alguien mantiene por su cuenta — nada consultable, nada auditable, y ninguna persona con la misma versión que otra. Modelamos el proceso como corresponde y lo reunimos en un solo lugar, para que el registro sea lo bastante fiable como para construir sobre él.",
      solutions: ["quality", "ticketing", "project"],
    },
    {
      id: "orchestrate",
      title: "Orquestar",
      short: "Un modelo sobre los sistemas que ya utiliza. No se arranca nada.",
      detail:
        "Sus sistemas se quedan como están. Añadimos la capa que los hace hablar un mismo idioma — un modelo de datos, una base temporal, una sola versión de la verdad — para que un proceso que atraviesa cinco sistemas se pueda ver, medir y gobernar de principio a fin. Aquí el panorama deja de fragmentarse y empieza a sumar.",
      solutions: ["transport", "software", "approval", "pmi", "cost"],
    },
    {
      id: "autonomize",
      title: "Autonomizar",
      short: "Agentes que deciden, actúan y devuelven el resultado al siguiente ciclo.",
      detail:
        "Cuando los datos están limpios, conectados y gobernados, el software puede hacer algo más que informar. Los agentes vigilan el proceso, deciden dentro de las reglas que reciben, actúan y devuelven el resultado, de modo que el ciclo siguiente arranca mejor informado que el anterior. Ese ciclo cerrado es lo que convierte un sistema de registro en una operación que se mejora a sí misma.",
      solutions: ["supplier", "monitoring", "telemetry", "planning"],
    },
  ],

  layers: {
    eyebrow: "Nuestra filosofía",
    h2: "Data Autonomy.",
    p: "Gobernar los datos una vez y dejar que los agentes actúen sobre ellos en todas las capas del stack. Ese es el principio sobre el que se construye todo aquí, y la razón por la que trabajamos el stack completo y no una porción. La palanca está en la capa de datos: si está bien, todo lo que va encima se vuelve posible; si está mal, ninguna aplicación por encima puede compensarlo.",
    agentsLabel: "Agentes de IA",
    governanceLabel: "Gobernanza",
    governanceItems: ["Acceso", "Auditoría", "Retención", "Residencia"],
    governanceNote: "Definida una vez y aplicada en todas las capas anteriores — no se renegocia en cada proyecto.",
    focusLabel: "Aquí está la palanca",
    rows: [
      {
        id: "apps",
        name: "Apps & Experiencia",
        items: "Apps operativas · Autoservicio · Herramientas de campo y móviles",
        agent: "Asistentes dentro de las herramientas que ya se usan",
      },
      {
        id: "process",
        name: "Proceso & Orquestación",
        items: "Aprobaciones · Enrutamiento · Flujos entre sistemas",
        agent: "Agentes que enrutan, aprueban y escalan",
      },
      {
        id: "data",
        name: "Datos",
        items: "Un modelo · Tiempo real y batch · Linaje e histórico",
        agent: "Agentes que vigilan la calidad y el linaje de los datos",
        focus: true,
      },
      {
        id: "infra",
        name: "Infraestructura",
        items: "Cloud y entornos · Landing zones · Control de costes",
        agent: "Agentes que mantienen entornos, coste y acceso en orden",
      },
    ],
    note: "Agnóstico en tecnología por diseño. Construimos sobre las plataformas que ya tiene — no se sustituye nada para hacernos sitio.",
  },

  capabilitiesSection: {
    eyebrow: "Lo que hacemos",
    h2: "IA e ingeniería, de principio a fin.",
    p: "Las disciplinas detrás de cada solución a medida — desde IA y analítica predictiva hasta autonomía, integración y gobernanza. El cómo detrás de todo lo que construimos.",
  },
  capabilities: [

    {
      id: "cap-ai",
      icon: "sparkle",
      image: "cap-ai",
      title: "IA & Agentes",
      short: "Agentes y autonomía inteligente que reducen el esfuerzo manual.",
      detail:
        "Agentes conversacionales y de tareas acotados a sus datos y procesos empresariales, más la automatización de los flujos repetitivos y propensos a error que agotan a los equipos en silencio — mostrando la información donde ya se trabaja, con una reducción de fricción medible.",
      experience: [
        "Automatización de flujos repetitivos y propensos a error",
        "Agentes acotados a datos y procesos empresariales",
        "Integraciones entre repositorios documentales, bases de datos y servicios cloud",
        "Reducción medible del esfuerzo manual",
      ],
    },    {
      id: "cap-bi",
      icon: "chart",
      image: "cap-bi",
      title: "Datos & Business Intelligence",
      short: "Información lista para decidir sobre modelos de datos que siguen siendo correctos al crecer.",
      detail:
        "Convertimos fuentes dispersas y desnormalizadas en modelos dimensionales gobernados, y luego las mostramos a través de paneles claros y rápidos — bandas de KPI, mapas de calor y drill-through en los que los decisores realmente confían. Diseñado modelo-primero, para que las cifras aguanten a medida que crecen los datos.",
      experience: [
        "Modelos en esquema de estrella reconstruidos desde exportaciones desnormalizadas",
        "Paneles de varias páginas con bandas de KPI y mapas de calor",
        "Modelos de cálculo e inteligencia de tiempo",
        "Maquetas clicables alineadas con las partes interesadas antes de construir",
      ],
    },
    {
      id: "cap-forecast",
      icon: "forecast",
      image: "cap-forecast",
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
      image: "cap-apps",
      title: "Desarrollo de Aplicaciones",
      short: "Apps de negocio y portales gobernados sobre un núcleo de datos modelado.",
      detail:
        "Aplicaciones low-code y basadas en modelo, más portales para las personas fuera de sus cuatro paredes — arquitectura elegida con criterio, modelo de datos y claves diseñados de antemano, entornos y gestión de releases alineados con la gobernanza empresarial. Componentes reutilizables y una interfaz consistente en todo el conjunto.",
      experience: [
        "Una cartera de seis apps de negocio dentro de una cuenta empresarial",
        "Modelos de datos con claves compuestas y alternativas",
        "Portales y sitios de cara al exterior",
        "Componentes reutilizables, controles HTML/SVG y branding en la app",
      ],
    },
    {
      id: "cap-automation",
      icon: "flow",
      image: "cap-automation",
      title: "Autonomía de Procesos",
      short: "Aprobaciones, orquestación e integraciones que funcionan sin que nadie las persiga.",
      detail:
        "Flujos de orquestación que sustituyen los traspasos manuales — aprobaciones, notificaciones, trabajos programados e integración entre sistemas — construidos para ser observables y resilientes, con fallos de variables de entorno y conexión depurados para que no fallen en silencio.",
      experience: [
        "Flujos de orquestación y aprobación",
        "Automatización de alertas tempranas y notificaciones",
        "Integración entre sistemas vía conectores y APIs",
        "Depuración de fallos de variables de entorno y conexión",
      ],
    },
    {
      id: "cap-data-eng",
      icon: "database",
      image: "cap-data-eng",
      title: "Integración & Data Engineering",
      short: "Datos limpios y conectados que fluyen entre los sistemas que ya usa.",
      detail:
        "Dataflows que gestionan deduplicación, recorte, lógica de semana ISO y propagación de nulos, alimentando modelos dimensionales — más los conectores y el pegamento entre repositorios documentales, bases de datos, almacenes y sistemas operativos para que los datos se muevan sin copiar y pegar.",
      experience: [
        "Modelos dimensionales derivados de fuentes desnormalizadas",
        "Dataflows con dedup y lógica de semana ISO",
        "Integraciones de conectores y API entre sistemas",
        "Consolidación de listas fragmentadas en una sola fuente",
      ],
    },
    {
      id: "cap-governance",
      icon: "lock",
      image: "cap-governance",
      title: "Gobernanza & Seguridad",
      short: "Acceso por roles, pistas de auditoría y gobernanza del ciclo de vida que resisten el escrutinio.",
      detail:
        "Seguridad y gobernanza incorporadas desde el primer día, no añadidas después — acceso a nivel de fila y de objeto, pistas de auditoría y configuración de entornos, conexiones y releases alineada con la práctica empresarial. Tratamiento de datos diseñado para entornos regulados donde se revisan el acceso y la trazabilidad.",
      experience: [
        "Modelos de acceso por roles y a nivel de objeto",
        "Gobernanza de entornos, conexiones y releases",
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
      "Entrega sénior y práctica, de discovery a traspaso",
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

  cardGrid: {
    whatWeBuilt: "Lo que hemos entregado",
    open: "Ver más",
    close: "Ver menos",
  },

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
      "Sistemas empresariales a medida que no solo informan sobre sus operaciones — las ejecutan. IA en el núcleo, para los procesos de gran escala que ningún producto gestiona.",
    industryDescriptionFallback: "Software empresarial a medida para sectores regulados y orientados a datos.",
    privacyTitle: "Política de Privacidad — Inveenta",
    imprintTitle: "Aviso Legal — Inveenta",
  },
};

export default es;
