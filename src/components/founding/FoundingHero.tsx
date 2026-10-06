import React from "react";
import { ArrowDown, Play, BookOpen, ShieldCheck } from "lucide-react";
import { CryptographicSignal } from "./CryptographicSignal";

interface FoundingHeroProps {
  onFindRole: () => void;
  onWatchFilm: () => void;
  onOpenRFP: () => void;
}

export const FoundingHero: React.FC<FoundingHeroProps> = ({
  onFindRole,
  onWatchFilm,
  onOpenRFP,
}) => {
  return (
    <section id="hero" className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      
      {/* Subtle radial ambient atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[280px] bg-emerald-500/5 blur-[90px] -z-10 pointer-events-none rounded-full" />

      {/* 1. Cryptographic Signal Eyebrow */}
      <div className="flex justify-center mb-5 sm:mb-6">
        <CryptographicSignal label="REQUEST FOR FOUNDING PARTICIPATION" />
      </div>

      {/* 2. Direct Personal Invitation Headline */}
      <div className="space-y-3 mb-6 sm:mb-8">
        <div className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.08]">
          YOU’RE INVITED.
        </div>
        <h1 className="font-serif-display text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-300/95 tracking-tight leading-snug max-w-3xl mx-auto">
          WE THINK SOMETHING YOU’VE ALREADY LEARNED MAY MATTER TO WHAT WE’RE BUILDING.
        </h1>
      </div>

      {/* 3. Supporting Copy (Clean 16px+ mobile type, comfortable line height) */}
      <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-left sm:text-center">
        <p>
          We are assembling a small group of experienced traders, originators, representatives, capital partners, principals, operators, and specialists to explore building a relationship-driven trading firm.
        </p>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left sm:text-center space-y-2">
          <p className="text-xs sm:text-sm font-mono text-slate-400">
            Because after working through a growing volume of real opportunities, we keep encountering the same problem:
          </p>
          <blockquote className="text-base sm:text-xl font-serif-editorial text-white font-medium">
            “The scarce resource is no longer access.
            <br className="hidden sm:inline" />
            <span className="text-emerald-300"> It is knowing what is real, who should be involved, and what deserves to move forward.</span>”
          </blockquote>
        </div>

        <p className="text-sm sm:text-base text-slate-300 pt-1">
          If someone sent you this page, <strong className="text-white font-semibold">they believe your experience may belong somewhere in that answer.</strong>
        </p>
      </div>

      {/* 4. Action CTAs */}
      <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
        <button
          onClick={onOpenRFP}
          className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer group"
          id="hero-review-rfp-btn"
        >
          <BookOpen className="w-4 h-4" />
          <span>Review Discussion Draft (6 Pages)</span>
        </button>

        <button
          onClick={onWatchFilm}
          className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 text-xs font-mono transition-colors flex items-center justify-center gap-2 cursor-pointer"
          id="hero-watch-film-btn"
        >
          <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
          <span>Watch: Into the Breach (04:18)</span>
        </button>
      </div>

      {/* 5. Role Lens Sub-CTA */}
      <div className="mt-4">
        <button
          onClick={onFindRole}
          className="text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 underline decoration-slate-700 hover:decoration-emerald-500 underline-offset-4 cursor-pointer"
        >
          <span>Or Choose Your Role Lens (Trader, Originator, Capital, Diligence, Operator, Principal) ↓</span>
        </button>
      </div>

      {/* 6. Context Note */}
      <div className="mt-8 pt-4 border-t border-slate-900 max-w-md mx-auto text-[11px] font-mono text-slate-500 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/70 shrink-0" />
        <span>Personal discussion draft · Confidential &amp; relationship-driven</span>
      </div>
    </section>
  );
};
