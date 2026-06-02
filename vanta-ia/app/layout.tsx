import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://avantalabs.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Agentes de IA para Empresas en Argentina | Avanta Labs",
  description:
    "Implementamos agentes de inteligencia artificial que atienden clientes, cierran ventas y generan reportes automáticos. Soluciones de IA para PYMEs y empresas medianas en Argentina y LATAM. Implementación en 2 semanas.",
  keywords: [
    "agentes de IA para empresas",
    "automatización con inteligencia artificial",
    "chatbot de ventas Argentina",
    "agente de atención al cliente IA",
    "automatización empresarial Argentina",
    "IA para PYMEs",
    "inteligencia artificial para empresas LATAM",
    "chatbot WhatsApp empresa",
    "reportería automatizada IA",
    "implementación IA Argentina",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Agentes de IA para Empresas en Argentina | Avanta Labs",
    description:
      "Implementamos agentes de IA que atienden clientes, cierran ventas y generan reportes automáticos. Para PYMEs y empresas medianas en Argentina y LATAM.",
    url: BASE_URL,
    siteName: "Avanta Labs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentes de IA para Empresas | Avanta Labs",
    description:
      "Automatizá tu empresa con agentes de IA para ventas, atención al cliente y reportería. Implementación en 2 semanas.",
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
      name: "Avanta Labs",
      url: BASE_URL,
      description:
        "Agencia especializada en implementación de agentes de inteligencia artificial para PYMEs y empresas medianas en Argentina y LATAM.",
      areaServed: ["Argentina", "México", "Colombia", "LATAM"],
      knowsAbout: [
        "Inteligencia Artificial",
        "Automatización Empresarial",
        "Chatbots",
        "Agentes de IA",
        "Procesamiento de Lenguaje Natural",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Avanta Labs",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "es-AR",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Agentes de IA para Empresas en Argentina | Avanta Labs",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "Implementamos agentes de IA que atienden clientes, cierran ventas y generan reportes automáticos para PYMEs y empresas medianas en Argentina y LATAM.",
      inLanguage: "es-AR",
    },
    {
      "@type": "Service",
      name: "Agente de Ventas IA",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Agente de inteligencia artificial que atiende consultas por WhatsApp o web, califica leads, hace seguimiento automático y cierra más ventas.",
      serviceType: "Automatización de Ventas",
      areaServed: "Argentina",
    },
    {
      "@type": "Service",
      name: "Agente de Atención al Cliente IA",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Agente de IA que resuelve dudas frecuentes, gestiona reclamos y deriva casos complejos a un humano en el momento justo.",
      serviceType: "Atención al Cliente Automatizada",
      areaServed: "Argentina",
    },
    {
      "@type": "Service",
      name: "Agente de Reportería Automatizada",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Agente de IA que consolida datos de múltiples fuentes y entrega reportes ejecutivos automáticos.",
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
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
