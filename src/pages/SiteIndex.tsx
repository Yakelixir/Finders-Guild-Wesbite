import React from "react";
import {
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Layers,
  Cpu,
  Lock,
  Compass,
  FileText,
  Sliders,
  CheckCircle2
} from "lucide-react";

interface SiteIndexProps {
  onNavigateView: (view: "community" | "how-it-works" | "founding-trading-firm" | "design-system" | "playbook" | "site-index") => void;
  onOpenCharter: () => void;
}

export const SiteIndex: React.FC<SiteIndexProps> = ({ onNavigateView, onOpenCharter }) => {
  const directorySections = [
    {
      category: "CORE GATEWAYS & PARTICIPATION",
      links: [
        {
          title: "Community Gateway & Deal Clearing",
          desc: "Main institutional landing page: Problems, Claims, Gains, and dual onboarding portals.",
          route: "/",
          action: () => onNavigateView("community"),
          badge: "PUBLIC",
        },
        {
          title: "Founding Trading Firm Initiative",
          desc: "The 9-step guided founding firm journey, Into the Breach film, role lenses, and Discussion Draft.",
          route: "/founding-trading-firm",
          action: () => onNavigateView("founding-trading-firm"),
          badge: "INVITATION",
        },
        {
          title: "System Mechanics & Operating Architecture",
          desc: "5-stage animated vector engine, deal structuring algorithms, and visual governance model.",
          route: "/how-it-works",
          action: () => onNavigateView("how-it-works"),
          badge: "TECHNICAL",
        },
      ],
    },
    {
      category: "SOVEREIGN BLUEPRINT & DESIGN TOKENS",
      links: [
        {
          title: "Interactive Design System & Token Matrix",
          desc: "Live color tokens (ink, porcelain, gold, aurora), Crimson Pro typography, ScriptBlock, and bento panels.",
          route: "/design-system",
          action: () => onNavigateView("design-system"),
          badge: "SYSTEM",
        },
        {
          title: "Classified Playbook & Script Vault",
          desc: "High-conviction communication scripts, forensic audit procedures, and friction qualification matrices.",
          route: "/_playbook",
          action: () => onNavigateView("playbook"),
          badge: "OPERATOR",
        },
        {
          title: "Master Governance Charter",
          desc: "Institutional non-circumvention, attribution locking, and sovereign clearing protocols.",
          route: "#charter",
          action: onOpenCharter,
          badge: "LEGAL",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F7F7F5] font-sans-ui selection:bg-[#C9A76A]/30 selection:text-white relative">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-15">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="index-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A76A" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#index-grid)" />
        </svg>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 backdrop-blur-xl border-b border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#C9A76A]/10 border border-[#C9A76A]/40 flex items-center justify-center text-[#C9A76A]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase">
                FINDERS GUILD
              </div>
              <div className="text-[10px] font-mono text-[#C9A76A] tracking-wider uppercase">
                MASTER DIRECTORY // SITE-INDEX
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateView("community")}
            className="px-3.5 py-1.5 rounded-xl bg-[#C9A76A] text-[#0B0C0E] hover:bg-[#d6b77e] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(201,167,106,0.3)]"
          >
            <span>Guild Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-20 space-y-16">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A76A]/40 bg-[#C9A76A]/10 text-[10px] font-mono tracking-widest text-[#C9A76A] uppercase font-semibold">
            <span>MASTER NAVIGATION DIRECTORY</span>
          </div>
          <h1 className="font-crimson text-4xl sm:text-6xl font-light tracking-tight text-white">
            Finders Guild Platform Index
          </h1>
          <p className="font-inter text-sm sm:text-base text-gray-400 max-w-2xl font-light leading-relaxed">
            Direct access to all public, invitation-only, operational, and architectural surfaces across the Finders Guild institutional ecosystem.
          </p>
        </div>

        <div className="space-y-12">
          {directorySections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-xs font-mono text-[#C9A76A] uppercase tracking-widest font-bold border-b border-white/10 pb-2">
                {sec.category}
              </div>

              <div className="grid grid-cols-1 gap-4">
                {sec.links.map((link, lIdx) => (
                  <div
                    key={lIdx}
                    onClick={link.action}
                    className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A76A]/40 hover:bg-white/10 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-lg"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#C9A76A] transition-colors">
                          {link.title}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono border border-white/20 bg-black/40 text-gray-400">
                          {link.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 font-light max-w-2xl">
                        {link.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#C9A76A] shrink-0 self-end sm:self-center group-hover:translate-x-1 transition-transform">
                      <span>{link.route}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-center text-xs font-mono text-gray-500 uppercase tracking-widest">
        <span>Finders Guild Master Directory // System Coherent</span>
      </footer>

    </div>
  );
};
