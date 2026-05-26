"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { experience } from "@/lib/data";

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d0d]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded-full bg-[#00d4aa]" />
            <span className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            15+ Years of{" "}
            <span className="gradient-text">Building & Leading</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4aa] via-[#00aaff]/50 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Desktop: half-width card */}
                  <div className={`hidden md:block w-[calc(50%-32px)] ${isLeft ? "pr-8" : "pl-8"}`}>
                    <div className={`glass glass-hover rounded-2xl p-6 ${item.current ? "border-[#00d4aa]/30" : ""}`}>
                      <CardContent item={item} />
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex-shrink-0 ml-0 md:ml-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-colors ${
                      item.current
                        ? "bg-[#00d4aa] border-[#00d4aa] shadow-[0_0_20px_rgba(0,212,170,0.4)]"
                        : "bg-[#111] border-[#333] text-white/40"
                    }`}>
                      <Briefcase size={18} className={item.current ? "text-black" : "text-white/40"} />
                    </div>
                  </div>

                  {/* Mobile: full-width card / right side desktop */}
                  <div className="flex-1 md:hidden glass glass-hover rounded-2xl p-6">
                    <CardContent item={item} />
                  </div>

                  {/* Desktop right-side placeholder */}
                  <div className="hidden md:block w-[calc(50%-32px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CardContent({ item }: { item: (typeof experience)[0] }) {
  return (
    <>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-white text-base leading-snug">{item.role}</h3>
        {item.current && (
          <span className="flex-shrink-0 px-2 py-0.5 bg-[#00d4aa]/10 text-[#00d4aa] text-xs rounded-full border border-[#00d4aa]/20">
            Current
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[#00d4aa] text-sm font-medium">{item.company}</span>
        <span className="text-white/30 text-xs">·</span>
        <span className="text-white/40 text-xs">{item.period}</span>
      </div>
      <p className="text-white/55 text-sm leading-relaxed mb-4">{item.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-xs text-white/50">
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}
