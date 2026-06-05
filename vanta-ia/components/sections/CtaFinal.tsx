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
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #EDEAFF 0%, #F7F8FC 55%, #EDEAFF 100%)",
      }}
    >
      {/* Orb violeta central suave */}
      <div
        className="orb-drift-1 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(103,87,255,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="orb-drift-2 pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(77,63,224,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Línea decorativa arriba */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(103,87,255,0.3), transparent)",
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
          <motion.div variants={fadeUp}>
            <SectionLabel center>{ctaFinal.label}</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[30px] md:text-[42px] font-light leading-tight tracking-tight text-[var(--ink)]"
          >
            {ctaFinal.h2.prefix}{" "}
            <strong className="gradient-text font-semibold">
              {ctaFinal.h2.strong}
            </strong>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[14px] leading-relaxed max-w-sm text-[var(--slate)]"
          >
            {ctaFinal.subtitle}
          </motion.p>

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
