"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, TrendingUp, Building2, BarChart3, Database } from "lucide-react";
import { alphasense } from "@/lib/data";

const statIcons = [TrendingUp, Building2, BarChart3, Database];

export default function AlphaSenseSpotlight() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="alphasense" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark bg */}
      <div className="absolute inset-0 bg-[#0d0d0d]" />

      {/* Accent glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00d4aa]/[0.04] rounded-full blur-[100px] pointer-events-none" />

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
            <span className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase">Current Company</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Engineering at{" "}
            <span className="gradient-text">AlphaSense</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-3 glass rounded-3xl p-8 border border-[#00d4aa]/15"
          >
            {/* Company badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00d4aa] flex items-center justify-center font-bold text-black text-sm">
                AS
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">AlphaSense</h3>
                <p className="text-white/40 text-sm">AI Market Intelligence Platform</p>
              </div>
              <a
                href={alphasense.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-white/30 hover:text-[#00d4aa] transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            <h4 className="text-white/90 font-semibold text-lg mb-3 leading-snug">
              {alphasense.tagline}
            </h4>

            <p className="text-white/55 leading-relaxed mb-6">
              {alphasense.description}
            </p>

            {/* Role highlight */}
            <div className="p-4 rounded-xl bg-[#00d4aa]/5 border border-[#00d4aa]/15">
              <p className="text-[#00d4aa] text-sm font-medium mb-1">My Role</p>
              <p className="text-white/70 text-sm">
                As <strong className="text-white">Director of Engineering</strong>, I lead engineering teams
                building the AI platform that powers market intelligence for the world&apos;s top enterprises —
                from Fortune 500 companies to leading hedge funds and investment banks.
              </p>
            </div>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4"
          >
            {alphasense.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass glass-hover rounded-2xl p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center">
                      <Icon size={15} className="text-[#00d4aa]" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/40 leading-snug">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
