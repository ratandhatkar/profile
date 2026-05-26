"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { profile } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Hi Ratnadeep,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[300px] bg-[#00d4aa]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 rounded-full bg-[#00d4aa]" />
            <span className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <div className="w-1 h-8 rounded-full bg-[#00d4aa]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Whether you&apos;re interested in collaborating, have an exciting opportunity, or just want to chat about engineering and AI — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-6 text-lg">Connect with me</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.04] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center group-hover:bg-[#00d4aa]/20 transition-colors">
                    <Mail size={18} className="text-[#00d4aa]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Email</p>
                    <p className="text-white/80 text-sm">{profile.email}</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-[#00d4aa] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.04] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center group-hover:bg-[#00d4aa]/20 transition-colors">
                    <LinkedInIcon size={18} className="text-[#00d4aa]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">LinkedIn</p>
                    <p className="text-white/80 text-sm">linkedin.com/in/ratnadeepdhatkar</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-[#00d4aa] group-hover:translate-x-1 transition-all" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center">
                    <MapPin size={18} className="text-[#00d4aa]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Location</p>
                    <p className="text-white/80 text-sm">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-[#00d4aa]/15">
              <div className="flex items-center gap-2 text-[#00d4aa] text-sm font-medium mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
                Currently open to
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Advisory Roles", "Speaking Engagements", "Consulting", "Collaboration"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-[#00d4aa]/8 border border-[#00d4aa]/15 text-[#00d4aa]/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5">
              <div>
                <label className="block text-white/50 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#00d4aa]/40 focus:bg-white/[0.06] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/50 text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#00d4aa]/40 focus:bg-white/[0.06] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/50 text-sm mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-[#00d4aa]/40 focus:bg-white/[0.06] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#00d4aa] text-black font-semibold rounded-xl hover:bg-[#00d4aa]/90 hover:shadow-[0_0_30px_rgba(0,212,170,0.35)] transition-all hover:scale-[1.02] text-sm"
              >
                {sent ? "Message Opened! ✓" : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
