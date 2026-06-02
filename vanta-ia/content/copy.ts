// ─── content/copy.ts ──────────────────────────────────────────────────────────
// Centraliza todo el texto de la landing. Editá aquí sin tocar los componentes.

export const WA_LINK =
  "https://api.whatsapp.com/send/?phone=5492226486414&text&type=phone_number&app_absent=0";

export const nav = {
  brand: { prefix: "Avanta", suffix: "Labs" },
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso",   href: "#proceso"   },
    { label: "Clientes",  href: "#clientes"  },
    { label: "Contacto",  href: "#contacto"  },
  ],
  cta: "Contactar",
} as const;

export const hero = {
  badge:    "✦ Automatización con Inteligencia Artificial",
  h1Line1:  "Tu empresa,",
  h1Line2:  "trabajando sola.",
  subtitle:
    "Implementamos agentes de IA que atienden clientes, cierran ventas y generan reportes — sin que tú muevas un dedo.",
  ctaPrimary:   "Contactar →",
  ctaSecondary: "Ver cómo funciona",
  stats: [
    { value: "3x",    label: "más velocidad de respuesta" },
    { value: "24/7",  label: "operación continua"         },
    { value: "-70%",  label: "tareas manuales repetitivas"},
    { value: "2 sem", label: "tiempo de implementación"   },
  ],
} as const;

export const problema = {
  label: "· El problema",
  h2: {
    prefix: "Lo que te está",
    strong: "costando dinero",
    suffix: "todos los días",
  },
  cards: [
    {
      icon:        "Clock",
      title:       "Leads que se enfrían",
      description:
        "Los clientes escriben y nadie responde en los primeros 5 minutos. Ese cliente ya se fue con la competencia.",
    },
    {
      icon:        "BarChart2",
      title:       "Reportes que llegan tarde",
      description:
        "Tus gerentes toman decisiones con datos de la semana pasada.",
    },
    {
      icon:        "RefreshCw",
      title:       "Tareas que se repiten",
      description:
        "Tu equipo pasa horas respondiendo las mismas preguntas, copiando datos.",
    },
    {
      icon:        "TrendingUp",
      title:       "Escalar cuesta demasiado",
      description:
        "Para atender más clientes necesitas contratar más personas. Con IA, escalas sin escalar el equipo.",
    },
  ],
} as const;

export const soluciones = {
  label: "· Lo que hacemos",
  h2: {
    prefix: "Tres tipos de",
    strong: "agentes",
    suffix: "que transforman tu operación",
  },
  cards: [
    {
      number:      "01",
      icon:        "MessageSquare",
      title:       "Agente de Ventas",
      description:
        "Atiende consultas por WhatsApp o web, califica leads, hace seguimiento automático y cierra más ventas.",
      tags:        ["WhatsApp", "Web", "CRM"],
    },
    {
      number:      "02",
      icon:        "Target",
      title:       "Agente de Atención",
      description:
        "Resuelve dudas frecuentes, gestiona reclamos y deriva casos complejos a un humano en el momento justo.",
      tags:        ["Soporte", "FAQ", "Derivación"],
    },
    {
      number:      "03",
      icon:        "BarChart2",
      title:       "Agente de Reportería",
      description:
        "Consolida datos de múltiples fuentes y entrega reportes ejecutivos automáticos.",
      tags:        ["Analytics", "Sheets", "Alertas"],
    },
  ],
} as const;

export const proceso = {
  label: "· Cómo funciona",
  h2: {
    prefix: "En",
    strong: "3 pasos,",
    suffix: "tu empresa ya tiene su agente",
  },
  steps: [
    {
      number:      "01",
      title:       "Conversamos y diagnosticamos",
      description:
        "Una llamada de 30 minutos para entender tu operación, identificar los procesos a automatizar y definir el agente ideal.",
      duration:    "Sem. 1",
    },
    {
      number:      "02",
      title:       "Diseñamos e implementamos",
      description:
        "Construimos tu agente personalizado, lo integramos con tus herramientas actuales (WhatsApp, CRM, Sheets) y lo probamos contigo.",
      duration:    "Sem. 1–2",
    },
    {
      number:      "03",
      title:       "Lanzamos y optimizamos",
      description:
        "Tu agente entra en producción. Hacemos seguimiento, medimos resultados y ajustamos en base a datos reales.",
      duration:    "Sem. 3+",
    },
  ],
} as const;

export const clientes = {
  label:     "· Empresas que confían en nosotros",
  h2: {
    prefix: "Clientes que ya",
    strong: "trabajan con IA",
  },
  subtitle:
    "Desde PYMEs hasta empresas medianas — distintas industrias, el mismo resultado.",
  stats: [
    { value: "6+",   label: "empresas"    },
    { value: "5",    label: "industrias"  },
    { value: "AR",   label: "mercados"    },
  ],
  items: [
    { initials: "SA", name: "Somos Argentina", industry: "Turismo",    color: "#5F9ED2", logo: "/logos/somosargentina.png" },
    { initials: "EQ", name: "Equitur SRL",     industry: "Turismo",    color: "#E040A0", logo: "/logos/equitur.jpg"        },
    { initials: "MF", name: "Mau Fragance",    industry: "Perfumería", color: "#C8A97E", logo: "/logos/maufragance.webp"   },
    { initials: "HY", name: "hereyoutravel",   industry: "Viajes",     color: "#FF3B30", logo: "/logos/hereyoutravel.jpg"  },
    { initials: "ED", name: "EduMed",          industry: "Educación",  color: "#5F9ED2", logo: "/logos/edumed.png"         },
    { initials: "CL", name: "Clamaco",         industry: "Construcción", color: "#F5A623", logo: "/logos/clamaco.jpg"      },
  ],
} as const;

export const diferenciadores = {
  label: "· Por qué nosotros",
  h2: {
    line1: "No vendemos software.",
    strong: "Implementamos resultados.",
  },
  items: [
    {
      title:       "Implementación en 2 semanas",
      description: "Sin meses de espera ni proyectos eternos. Tu agente está operativo rápido.",
    },
    {
      title:       "Integración con lo que ya usas",
      description: "WhatsApp, Google Sheets, tu CRM. No cambiamos tu stack, lo potenciamos.",
    },
    {
      title:       "Soporte y mejora continua",
      description: "No desaparecemos después de entregar. Medimos, ajustamos y optimizamos.",
    },
    {
      title:       "Precio justo para PYMEs",
      description: "Soluciones de nivel enterprise al alcance de empresas medianas en Argentina y LATAM.",
    },
  ],
} as const;

export const ctaFinal = {
  label: "· Empieza hoy",
  h2: {
    prefix: "¿Listo para que tu empresa",
    strong: "trabaje con IA?",
  },
  subtitle:
    "Contactanos por WhatsApp. Sin compromiso, sin tecnicismos.",
  ctaPrimary:        "Contactar →",
  formPlaceholder:   "tu@email.com",
  formCta:           "Escribirnos",
} as const;

export const footer = {
  brand: { prefix: "Avanta", suffix: "Labs" },
  tagline: "Automatización con IA para empresas en Argentina y LATAM.",
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso",   href: "#proceso"   },
    { label: "Clientes",  href: "#clientes"  },
    { label: "Contacto",  href: "#contacto"  },
  ],
  socials: [
    { label: "LinkedIn",  href: "#" },
    { label: "Instagram", href: "https://instagram.com/avantalabs" },
  ],
  copy: "© 2025 · Hecho en Argentina",
} as const;
