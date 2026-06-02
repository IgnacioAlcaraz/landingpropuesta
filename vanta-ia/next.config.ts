import type { NextConfig } from "next";

const securityHeaders = [
  // Evita que la página sea embebida en iframes (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Evita que el browser detecte el MIME type incorrectamente
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controla qué información de referencia se envía
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Fuerza HTTPS por 1 año e incluye subdominios
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Restringe acceso a APIs del browser no necesarias
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js necesita unsafe-inline para hidratación
      "script-src 'self' 'unsafe-inline'",
      // Estilos inline de Tailwind + Framer Motion
      "style-src 'self' 'unsafe-inline'",
      // Imágenes: self + data URIs (next/image)
      "img-src 'self' data: blob:",
      // Fuentes: next/font las sirve desde self
      "font-src 'self'",
      // Conexiones permitidas
      "connect-src 'self'",
      // Sin plugins (Flash, etc.)
      "object-src 'none'",
      // Sin iframes embebidos
      "frame-ancestors 'none'",
      // Links externos (WhatsApp, Instagram) se abren en nueva pestaña — no necesitan frame-src
      "frame-src 'none'",
      // Base URI restringida
      "base-uri 'self'",
      // Solo HTTPS para recursos mixtos
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
