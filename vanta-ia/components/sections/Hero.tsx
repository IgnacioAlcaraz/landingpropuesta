"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button";
import { hero, WA_LINK } from "@/content/copy";

/* ── Split-word animation ─────────────────────────────────────────── */
function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 17,
              delay: delay + i * 0.1,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </>
  );
}

/* ── Stat card ────────────────────────────────────────────────────── */
function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22, scale: 0.82 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 130, damping: 16, delay }}
      className="flex flex-col gap-1"
    >
      <span className="text-2xl font-semibold text-[var(--ink)]">{value}</span>
      <span className="text-[13px] text-[var(--slate)]">{label}</span>
    </motion.div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--cloud)] pt-20">

      {/* Dot grid */}
      <div className="hero-grid pointer-events-none absolute inset-0" />

      {/* Radial mask que suaviza los bordes del grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 50% 45%, transparent 25%, #F7F8FC 100%)",
        }}
      />

      {/* Orb 1 — violeta top-right */}
      <div
        className="orb-drift-1 pointer-events-none absolute -top-48 -right-48 w-[900px] h-[900px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(103,87,255,0.14) 0%, transparent 62%)",
        }}
      />

      {/* Orb 2 — lavanda bottom-left */}
      <div
        className="orb-drift-2 pointer-events-none absolute -bottom-48 -left-48 w-[700px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(237,234,255,0.7) 0%, transparent 65%)",
        }}
      />

      {/* Orb 3 — violeta center sutil */}
      <div
        className="orb-drift-1 pointer-events-none absolute top-1/2 right-1/3 w-[450px] h-[450px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, rgba(103,87,255,0.10) 0%, transparent 70%)",
          animationDelay: "-9s",
        }}
      />

      {/* ── Contenido ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col items-start gap-7 max-w-3xl">

          {/* Badge */}
          <motion.span
            className="shimmer-badge animate-float inline-block px-4 py-1.5 rounded-full text-[13px] font-medium text-[var(--flow-violet)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {hero.badge}
          </motion.span>

          {/* H1 */}
          <h1 className="text-[38px] sm:text-[52px] lg:text-[64px] font-light leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
            <SplitWords text={hero.h1Line1} delay={0.2} />
            <br />
            <span className="inline-block overflow-hidden">
              <motion.span
                className="gradient-text font-semibold inline-block"
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 17,
                  delay: 0.48,
                }}
              >
                {hero.h1Line2}
              </motion.span>
            </span>
          </h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72 }}
            className="text-[15px] leading-relaxed max-w-xl text-[var(--slate)]"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.88 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <Button variant="primary" className="btn-shimmer btn-pulse" href={WA_LINK}>
              {hero.ctaPrimary}
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-[var(--border)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hero.stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={1.05 + i * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
