import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://octoflowlabs.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Agentes de IA para Empresas en Argentina | Octoflow Labs",
  description:
    "Implementamos agentes de inteligencia artificial que atienden clientes, cierran ventas y generan reportes automÃ¡ticos. Soluciones de IA para PYMEs y empresas medianas en Argentina y LATAM. ImplementaciÃ³n en 2 semanas.",
  keywords: [
    "agentes de IA para empresas",
    "automatizaciÃ³n con inteligencia artificial",
    "chatbot de ventas Argentina",
    "agente de atenciÃ³n al cliente IA",
    "automatizaciÃ³n empresarial Argentina",
    "IA para PYMEs",
    "inteligencia artificial para empresas LATAM",
    "chatbot WhatsApp empresa",
    "reporterÃ­a automatizada IA",
    "implementaciÃ³n IA Argentina",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Agentes de IA para Empresas en Argentina | Octoflow Labs",
    description:
      "Implementamos agentes de IA que atienden clientes, cierran ventas y generan reportes automÃ¡ticos. Para PYMEs y empresas medianas en Argentina y LATAM.",
    url: BASE_URL,
    siteName: "Octoflow Labs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentes de IA para Empresas | Octoflow Labs",
    description:
      "AutomatizÃ¡ tu empresa con agentes de IA para ventas, atenciÃ³n al cliente y reporterÃ­a. ImplementaciÃ³n en 2 semanas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Octoflow Labs",
      url: BASE_URL,
      description:
        "Agencia especializada en implementaciÃ³n de agentes de inteligencia artificial para PYMEs y empresas medianas en Argentina y LATAM.",
      areaServed: ["Argentina", "MÃ©xico", "Colombia", "LATAM"],
      knowsAbout: [
        "Inteligencia Artificial",
        "AutomatizaciÃ³n Empresarial",
        "Chatbots",
        "Agentes de IA",
        "Procesamiento de Lenguaje Natural",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Octoflow Labs",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "es-AR",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Agentes de IA para Empresas en Argentina | Octoflow Labs",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "Implementamos agentes de IA que atienden clientes, cierran ventas y generan reportes automÃ¡ticos para PYMEs y empresas medianas en Argentina y LATAM.",
      inLanguage: "es-AR",
    },
    {
      "@type": "Service",
      name: "Agente de Ventas IA",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Agente de inteligencia artificial que atiende consultas por WhatsApp o web, califica leads, hace seguimiento automÃ¡tico y cierra mÃ¡s ventas.",
      serviceType: "AutomatizaciÃ³n de Ventas",
      areaServed: "Argentina",
    },
    {
      "@type": "Service",
      name: "Agente de AtenciÃ³n al Cliente IA",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Agente de IA que resuelve dudas frecuentes, gestiona reclamos y deriva casos complejos a un humano en el momento justo.",
      serviceType: "AtenciÃ³n al Cliente Automatizada",
      areaServed: "Argentina",
    },
    {
      "@type": "Service",
      name: "Agente de ReporterÃ­a Automatizada",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Agente de IA que consolida datos de mÃºltiples fuentes y entrega reportes ejecutivos automÃ¡ticos.",
      serviceType: "Business Intelligence Automatizado",
      areaServed: "Argentina",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <head>
        <meta name="facebook-domain-verification" content="fdh49aycjotx00ccbusbe5s64j0gr0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}


