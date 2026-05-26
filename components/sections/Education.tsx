"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 md:py-32 relative">
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
            <span className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase">Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Academic{" "}
            <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass glass-hover rounded-3xl p-8 md:p-10 border border-white/[0.06]"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#00d4aa]/10 border border-[#00d4aa]/20 flex items-center justify-center">
                <GraduationCap size={28} className="text-[#00d4aa]" />
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-[#00d4aa] font-medium">{edu.field}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#00d4aa]/8 border border-[#00d4aa]/20 rounded-xl">
                    <Award size={14} className="text-[#00d4aa]" />
                    <span className="text-[#00d4aa] text-sm font-medium">{edu.honors}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-white/50">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap size={13} />
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {edu.period}
                  </div>
                </div>

                <p className="text-white/50 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
