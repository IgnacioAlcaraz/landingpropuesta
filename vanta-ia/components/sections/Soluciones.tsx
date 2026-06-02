"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { MessageSquare, Target, BarChart2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { soluciones } from "@/content/copy";
import { fadeUp, staggerSlow } from "@/lib/motion";

const iconMap = { MessageSquare, Target, BarChart2 } as const;
type IconKey = keyof typeof iconMap;
type CardData = (typeof soluciones.cards)[number];

/* ── 3D Tilt Card ─────────────────────────────────────────────────── */
function TiltCard({ card }: { card: CardData }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[card.icon as IconKey];

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 200, damping: 28 });
  const springY = useSpring(rawY, { stiffness: 200, damping: 28 });

  const rotateX = useTransform(springY, [-65, 65], [8, -8]);
  const rotateY = useTransform(springX, [-65, 65], [-8, 8]);

  // Glow que sigue el mouse dentro de la card
  const glowX = useTransform(springX, [-65, 65], [15, 85]);
  const glowY = useTransform(springY, [-65, 65], [15, 85]);
  const glowBg = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(95,158,210,0.14), transparent 65%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col gap-5 p-8 bg-[#060c18] overflow-hidden cursor-default"
    >
      {/* Mouse-follow glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBg }}
      />

      {/* Línea superior que aparece on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-400"
        style={{
          background: "linear-gradient(90deg, transparent, #5F9ED2, transparent)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Número */}
      <span className="relative text-xs font-mono text-[var(--muted)]">
        {card.number} —
      </span>

      {/* Ícono */}
      <div
        className="relative w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{
          background: "rgba(95,158,210,0.1)",
          border: "1px solid rgba(95,158,210,0.2)",
        }}
      >
        <Icon size={18} color="#5F9ED2" />
      </div>

      {/* Título */}
      <h3 className="relative text-[16px] font-semibold text-white">
        {card.title}
      </h3>

      {/* Descripción */}
      <p
        className="relative text-[13px] leading-relaxed flex-1"
        style={{ color: "var(--muted)" }}
      >
        {card.description}
      </p>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-2 mt-auto">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="text-[12px] text-[#5F9ED2] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(95,158,210,0.1)",
              border: "1px solid rgba(95,158,210,0.3)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────────────────────── */
export default function Soluciones() {
  return (
    <section
      id="servicios"
      className="py-24 px-6"
      style={{
        background: "rgba(5,113,211,0.06)",
        borderTop: "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{soluciones.label}</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-[36px] font-light leading-tight tracking-tight text-white mb-12 max-w-2xl"
          >
            {soluciones.h2.prefix}{" "}
            <strong className="font-semibold">{soluciones.h2.strong}</strong>{" "}
            {soluciones.h2.suffix}
          </motion.h2>

          {/* Grid con perspectiva para que el tilt luzca en contexto */}
          <motion.div
            variants={staggerSlow}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]"
            style={{ perspective: "1200px" }}
          >
            {soluciones.cards.map((card) => (
              <TiltCard key={card.number} card={card} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
