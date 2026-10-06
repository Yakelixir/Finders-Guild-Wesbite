import React from "react";
import { ArrowLeft, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { HeroVisualEngine } from "./HeroVisualEngine";
import { VisualGovernance } from "./VisualGovernance";

interface HowThisWorksViewProps {
  onBackToHome: () => void;
  onNavigate?: (sectionId: string) => void;
  onOpenPath: (path: "onboarding" | "process") => void;
  onOpenCharter?: () => void;
}

export const HowThisWorksView: React.FC<HowThisWorksViewProps> = ({ 
  onBackToHome, 
  onNavigate,
  onOpenPath,
  onOpenCharter
}) => {
  return (
    <div className="relative pt-28 sm:pt-36 pb-20 animate-fadeIn">
      
      {/* Unified Single Header with Integrated Back Navigation */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-xs font-serif-display tracking-wider uppercase transition-all mb-5 cursor-pointer shadow-sm hover:border-emerald-500/40"
          id="back-to-community-story-btn"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
          <span>← Return to Community Welcome &amp; Story</span>
        </button>

        <div className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-emerald-950/40 border border-emerald-500/30 text-emerald-200/90 text-[11px] sm:text-xs font-serif-display tracking-[0.22em] uppercase mb-4 mx-auto w-fit shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <span className="text-emerald-400 text-xs">✦</span>
          <span>The Operating Architecture <span className="text-emerald-500/60 mx-1.5">·</span> Protocol Mechanics</span>
          <span className="text-emerald-400 text-xs">✦</span>
        </div>
        
        <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          How Finders Guild operates under the hood.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
          Explore the animated sequence below to watch how incoming opportunities are structured, matched, and sealed with permanent attribution before entering bilateral diligence.
        </p>
      </div>

      {/* The 5-Stage Animated Vector Sequence Engine */}
      <div className="relative mb-12">
        <HeroVisualEngine showHeader={false} />
      </div>

      {/* The Visual Governance Architecture */}
      <div className="relative mb-8">
        <VisualGovernance onOpenCharter={onOpenCharter} />
      </div>

      {/* Bottom Action Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-[#071324]/90 text-center shadow-[0_20px_50px_-10px_rgba(16,185,129,0.15)]">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white mb-3">
            Ready to participate in protected deal flow?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Choose your gateway below to establish who you are and what you seek, or configure your institutional process box.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate("portal-onboarding");
                } else {
                  onOpenPath("onboarding");
                }
              }}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide shadow-lg transition-all cursor-pointer"
            >
              <span>Complete Onboarding</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate("portal-process");
                } else {
                  onOpenPath("process");
                }
              }}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold tracking-wide shadow-lg transition-all cursor-pointer"
            >
              <span>Set Up Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
