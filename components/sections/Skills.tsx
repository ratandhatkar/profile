"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Layers, Code2, Cpu } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Layers,
  Code2,
  Cpu,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded-full bg-[#00d4aa]" />
            <span className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase">Skills & Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What I{" "}
            <span className="gradient-text">Bring to the Table</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center mb-5 group-hover:bg-[#00d4aa]/20 transition-colors">
                  <Icon size={18} className="text-[#00d4aa]" />
                </div>

                {/* Category */}
                <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                  {group.category}
                </h3>

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.07] rounded-lg text-xs text-white/60 hover:border-[#00d4aa]/30 hover:text-white/80 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra languages strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-6 flex flex-wrap items-center gap-4"
        >
          <span className="text-white/40 text-sm mr-2">Spoken Languages:</span>
          {["English", "Marathi", "Hindi", "French"].map((lang) => (
            <span
              key={lang}
              className="px-4 py-2 bg-[#00d4aa]/8 border border-[#00d4aa]/15 rounded-lg text-sm text-[#00d4aa]/80"
            >
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
