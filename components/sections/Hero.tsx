"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { profile } from "@/lib/data";

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = profile.taglines[taglineIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setTaglineIdx((i) => (i + 1) % profile.taglines.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, taglineIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,170,0.06) 0%, transparent 70%)"
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-[0.04] bg-[#00d4aa] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-[0.03] bg-[#00aaff] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/5 text-[#00d4aa] text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
          <MapPin size={13} />
          Pune, India · Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4"
        >
          Ratnadeep
          <br />
          <span className="gradient-text">Dhatkar</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-10 flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl text-white/60 font-light">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-[#00d4aa] ml-0.5 animate-[blink_1s_infinite]" />
          </span>
        </motion.div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Building world-class engineering teams and AI-powered products. Currently engineering the future of
          market intelligence at{" "}
          <span className="text-[#00d4aa]">AlphaSense</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-8 py-3.5 bg-[#00d4aa] text-black font-semibold rounded-xl hover:bg-[#00d4aa]/90 hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all hover:scale-105 text-sm"
          >
            View My Journey
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/10 text-white/80 rounded-xl hover:border-[#00d4aa]/40 hover:text-white hover:bg-white/[0.03] transition-all text-sm"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/50 hover:text-[#00d4aa] hover:bg-white/[0.04] transition-all text-sm"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/50 hover:text-[#00d4aa] hover:bg-white/[0.04] transition-all text-sm"
          >
            <Mail size={16} />
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
