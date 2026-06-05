"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { proceso } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";

export default function Proceso() {
  return (
    <section id="proceso" className="bg-[var(--cloud)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{proceso.label}</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-[36px] font-light leading-tight tracking-tight text-[var(--ink)] mb-12 max-w-xl"
          >
            {proceso.h2.prefix}{" "}
            <strong className="font-semibold">{proceso.h2.strong}</strong>{" "}
            {proceso.h2.suffix}
          </motion.h2>

          {/* Timeline container */}
          <motion.div variants={fadeUp} className="relative">

            {/* Línea vertical animada */}
            <motion.div
              className="timeline-line absolute left-[17px] top-5 w-px"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{
                height: "calc(100% - 2.5rem)",
                transformOrigin: "top",
              }}
            />

            {/* Steps */}
            {proceso.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + i * 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-6 py-7 pl-0 border-b border-[var(--border)] last:border-none"
              >
                {/* Círculo numerado */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0 text-[var(--flow-violet)] relative z-10"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(103,87,255,0.35)",
                    boxShadow: "0 0 14px rgba(103,87,255,0.12)",
                  }}
                >
                  {step.number}
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-0 pt-1">
                  <h3 className="text-[15px] font-semibold text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--slate)]">
                    {step.description}
                  </p>
                </div>

                {/* Duración */}
                <span
                  className="text-[12px] font-mono shrink-0 pt-1 text-[var(--flow-violet)]"
                  style={{ opacity: 0.65 }}
                >
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
