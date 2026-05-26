"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Users, Award, TrendingUp } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";

const statIcons = [TrendingUp, Award, Users, Globe];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-1 h-8 rounded-full bg-[#00d4aa]" />
          <span className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            {/* Avatar with real photo */}
            <div className="relative">
              <div className="w-56 h-72 rounded-3xl overflow-hidden border-2 border-[#00d4aa]/20 shadow-[0_0_60px_rgba(0,212,170,0.12)] relative">
                <Image
                  src="/ratnadeep.jpeg"
                  alt="Ratnadeep Dhatkar"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-[#111] border border-[#00d4aa]/30 rounded-full flex items-center gap-1.5 text-xs text-[#00d4aa]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
                AlphaSense · Pune
              </div>
            </div>

            {/* Languages */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {["English", "Marathi", "Hindi", "French"].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/50"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Engineering leader who builds{" "}
              <span className="gradient-text">products that matter</span>
            </h2>

            <p className="text-white/60 leading-relaxed text-base mb-8">
              {profile.summary}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="glass glass-hover rounded-xl p-4 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-[#00d4aa]" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
