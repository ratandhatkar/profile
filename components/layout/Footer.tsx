import { Mail, Heart } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#00d4aa] flex items-center justify-center text-black font-bold text-xs">
            RD
          </div>
          <span className="text-white/40 text-sm">Ratnadeep Dhatkar</span>
        </div>

        {/* Center */}
        <p className="text-white/25 text-xs flex items-center gap-1.5">
          Built with <Heart size={11} className="text-[#00d4aa]" fill="#00d4aa" /> using Next.js & Framer Motion
        </p>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-[#00d4aa] hover:bg-white/[0.04] transition-all"
          >
            <LinkedInIcon size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-[#00d4aa] hover:bg-white/[0.04] transition-all"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
