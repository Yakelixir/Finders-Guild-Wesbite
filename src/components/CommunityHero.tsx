import React, { useState } from "react";
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle,
  TrendingUp,
  Cpu,
  Layers,
  ArrowDown,
  AlertOctagon,
  FileX,
  Lock,
  Clock,
  Scale
} from "lucide-react";
import { DealFlowComparisonGraphic } from "./DealFlowComparisonGraphic";

interface CommunityHeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenPath: (path: "onboarding" | "process") => void;
  onViewHowItWorks: () => void;
}

export const CommunityHero: React.FC<CommunityHeroProps> = ({ 
  onNavigate,
  onOpenPath, 
  onViewHowItWorks 
}) => {
  const [visualMode, setVisualMode] = useState<"comparison" | "lottery" | "guild">("comparison");

  return (
    <section className="relative pt-24 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-purple-500/10 blur-[60px] sm:blur-[140px] -z-10 pointer-events-none rounded-full" />

      {/* Hero Welcome & Framing */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        
        {/* Classical Guild Insignia Badge - Ancient Elegance blended with Modern Craft */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-950/30 via-slate-900/90 to-amber-950/30 border border-amber-500/30 text-amber-200/90 text-[9.5px] sm:text-xs font-serif-display tracking-[0.12em] sm:tracking-[0.22em] uppercase mb-6 shadow-[0_0_20px_rgba(245,158,11,0.1)] backdrop-blur-md whitespace-nowrap">
          <span className="text-amber-400 text-xs">✦</span>
          <span>Finders Guild <span className="text-amber-500/60 mx-1">·</span> Private Network &amp; Directory</span>
          <span className="text-amber-400 text-xs">✦</span>
        </div>

        <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          Dealmaking is a lottery alone. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Together, we win through alignment.
          </span>
        </h1>

        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal mb-8">
          We know how brutal it is in the solo broker wilderness—chasing ghost mandates, fearing circumvention, and wasting 98% of your time on dead ends. We built Finders Guild because we found empirically that when aligned dealmakers collaborate under protected rules, everyone closes more.
        </p>

        {/* Hero Actions - Page Jumps to Onboarding & Process Portals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
          <button
            onClick={() => onNavigate("portal-onboarding")}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
            id="hero-join-community-btn"
          >
            <span>Complete Onboarding</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate("portal-process")}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-purple-600/90 hover:bg-purple-500 text-white text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all cursor-pointer border border-purple-400/30"
            id="hero-setup-process-btn"
          >
            <span>Set Up Your Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* THE SOLO LOTTERY: The Problems You Face Every Single Day (Placed directly above the Deal Flow Engine) */}
      <div id="solo-problems" className="scroll-mt-28 mb-16 sm:mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950/40 via-slate-900/90 to-red-950/40 border border-red-500/30 text-rose-200/90 text-[11px] sm:text-xs font-serif-display tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <span className="text-rose-400 text-xs">✦</span>
            <span>The Solo Lottery <span className="text-rose-500/60 mx-1">·</span> Industry Vulnerability</span>
            <span className="text-rose-400 text-xs">✦</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            The problems you face every single day.
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
            If you’ve spent any time working off-market deals, you know this feeling. The traditional broker space is exhausting, adversarial, and fundamentally broken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Problem 1: The Infinite Daisy Chain */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-red-500/20 bg-[#0b0c16]/80 flex flex-col justify-between hover:border-red-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <FileX className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                  The Infinite Daisy Chain
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-0 sm:pl-11 font-normal">
                Chasing 4th-hand forwards from brokers claiming "direct to buyer," only for deals to evaporate upon requesting proof of funds.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-red-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
              <span>Reality • 90% of deals aren’t real</span>
            </div>
          </div>

          {/* Problem 2: Attribution Paranoia */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-red-500/20 bg-[#0b0c16]/80 flex flex-col justify-between hover:border-red-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                  Attribution Paranoia
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-0 sm:pl-11 font-normal">
                Living in constant fear of sharing direct names because the moment identities are revealed, intermediaries bypass you for $0.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-red-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
              <span>Reality • Constant circumvention</span>
            </div>
          </div>

          {/* Problem 3: The 98% Noise Tax */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-red-500/20 bg-[#0b0c16]/80 flex flex-col justify-between hover:border-red-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                  The 98% Noise Tax
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-0 sm:pl-11 font-normal">
                Spending 50+ hours a week reviewing unvetted whispers and ghost specs instead of executing real, actionable mandates.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-red-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
              <span>Reality • Wasted capital &amp; hours</span>
            </div>
          </div>

          {/* Problem 4: Solo Vulnerability */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-red-500/20 bg-[#0b0c16]/80 flex flex-col justify-between hover:border-red-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                  Solo Vulnerability
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-0 sm:pl-11 font-normal">
                Operating alone with zero collective leverage, having to negotiate NCNDAs from scratch and hoping parties respect your fee.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-red-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
              <span>Reality • No institutional backing</span>
            </div>
          </div>

        </div>
      </div>

      {/* LEAD GRAPHIC: The Shift from the Deal Lottery to Collective Win-Win */}
      <div className="glass-panel rounded-3xl p-4 sm:p-8 lg:p-10 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl bg-[#060b18]/90 overflow-hidden">
        <DealFlowComparisonGraphic 
          visualMode={visualMode} 
          onSetVisualMode={setVisualMode} 
        />
      </div>

    </section>
  );
};
