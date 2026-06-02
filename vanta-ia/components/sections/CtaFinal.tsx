"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { ctaFinal, WA_LINK } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative py-32 px-6 overflow-hidden bg-black"
    >
      {/* ── Fondo animado: orbs en movimiento ───────────────────────── */}
      <div
        className="orb-drift-1 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(95,158,210,0.13) 0%, transparent 65%)",
        }}
      />
      <div
        className="orb-drift-2 pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(30,52,70,0.5) 0%, transparent 65%)",
        }}
      />
      <div
        className="orb-drift-1 pointer-events-none absolute -top-24 -left-24 w-[400px] h-[400px] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse, rgba(95,158,210,0.08) 0%, transparent 70%)",
          animationDelay: "-11s",
        }}
      />

      {/* Línea horizontal decorativa arriba */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(95,158,210,0.35), transparent)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <motion.div variants={fadeUp}>
            <SectionLabel center>{ctaFinal.label}</SectionLabel>
          </motion.div>

          {/* H2 */}
          <motion.h2
            variants={fadeUp}
            className="text-[30px] md:text-[42px] font-light leading-tight tracking-tight text-white"
          >
            {ctaFinal.h2.prefix}{" "}
            <strong className="gradient-text font-semibold">
              {ctaFinal.h2.strong}
            </strong>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            className="text-[14px] leading-relaxed max-w-sm"
            style={{ color: "var(--muted)" }}
          >
            {ctaFinal.subtitle}
          </motion.p>

          {/* Botón principal con pulse */}
          <motion.div variants={fadeUp}>
            <Button
              variant="primary"
              className="btn-shimmer btn-pulse px-8 py-3 text-base"
              href={WA_LINK}
            >
              {ctaFinal.ctaPrimary}
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
