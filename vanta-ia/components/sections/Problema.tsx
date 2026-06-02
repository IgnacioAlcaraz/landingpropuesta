"use client";

import { motion } from "framer-motion";
import { Clock, BarChart2, RefreshCw, TrendingUp } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { problema } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";

const iconMap = {
  Clock,
  BarChart2,
  RefreshCw,
  TrendingUp,
} as const;

type IconKey = keyof typeof iconMap;

export default function Problema() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{problema.label}</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-[36px] font-light leading-tight tracking-tight text-white mb-12 max-w-xl"
          >
            {problema.h2.prefix}{" "}
            <strong className="font-semibold">{problema.h2.strong}</strong>{" "}
            {problema.h2.suffix}
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {problema.cards.map((card) => {
              const Icon = iconMap[card.icon as IconKey];
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="flex flex-col gap-4 p-6 rounded-[10px] bg-[#060c18] border border-[rgba(5,113,211,0.15)]"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(95,158,210,0.1)",
                      border:     "1px solid rgba(95,158,210,0.2)",
                    }}
                  >
                    <Icon size={18} color="#5F9ED2" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[13px] font-semibold text-white">{card.title}</h3>
                    <p className="text-[12px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
