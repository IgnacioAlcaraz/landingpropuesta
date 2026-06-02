"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { diferenciadores } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";

export default function Diferenciadores() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background:   "linear-gradient(180deg, rgba(5,113,211,0.10) 0%, rgba(0,0,0,0) 100%)",
        borderTop:    "0.5px solid rgba(95,158,210,0.25)",
        borderBottom: "0.5px solid rgba(95,158,210,0.25)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{diferenciadores.label}</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-[36px] font-light leading-tight tracking-tight text-white mb-12 max-w-xl"
          >
            {diferenciadores.h2.line1}
            <br />
            <strong className="font-semibold">{diferenciadores.h2.strong}</strong>
          </motion.h2>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8"
          >
            {diferenciadores.items.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0 mt-[5px]"
                  style={{ background: "#5F9ED2" }}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[13px] font-semibold text-white">{item.title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
