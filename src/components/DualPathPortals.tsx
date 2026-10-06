import React, { useState } from "react";
import { 
  Users, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Sliders, 
  MessageSquare, 
  Building2,
  Lock,
  ExternalLink,
  Calendar,
  BookOpen
} from "lucide-react";
import { DiscreteOperatorModal } from "./DiscreteOperatorModal";

interface DualPathPortalsProps {
  onSelectPath: (path: "onboarding" | "process") => void;
  onOpenCharter?: () => void;
}

export const DualPathPortals: React.FC<DualPathPortalsProps> = ({ 
  onSelectPath,
  onOpenCharter 
}) => {
  const [hoveredPath, setHoveredPath] = useState<"onboarding" | "process" | null>(null);
  const [isDiscreteModalOpen, setIsDiscreteModalOpen] = useState(false);

  const ONBOARDING_URL = "https://app.findersguild.com/onboarding";
  const PROCESS_URL = "https://app.findersguild.com/setup-profile/alM3UW9HdGxrZ2RwMURrRFZ4enZUekg5aUh6Mg==";
  const CALENDAR_URL = "https://calendar.app.google/4Rx8cLttgJ61XNv8A";

  return (
    <section id="two-paths" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-purple-500/5 blur-[140px] -z-10 pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-amber-950/40 border border-amber-500/30 text-amber-200/90 text-[11px] sm:text-xs font-serif-display tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <span className="text-amber-400 text-xs">✦</span>
          <span>Choose Your Next Step</span>
          <span className="text-amber-400 text-xs">✦</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Two ways to engage the Guild network.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Whether you are joining as an individual dealmaker to expand your reach, or an institution defining how opportunities reach your desk.
        </p>
      </div>

      {/* The Two Portals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* PORTAL 1: COMPLETE ONBOARDING */}
        <div 
          onMouseEnter={() => setHoveredPath("onboarding")}
          onMouseLeave={() => setHoveredPath(null)}
          className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 border scroll-mt-28 ${
            hoveredPath === "onboarding"
              ? "bg-[#071324]/90 border-emerald-500/50 shadow-[0_20px_50px_-10px_rgba(16,185,129,0.2)] scale-[1.01]"
              : "bg-[#060b18]/80 border-white/10 shadow-xl"
          }`}
          id="portal-onboarding"
        >
          {/* Top Badge & Identifier */}
          <div>
            {/* Top Eyebrow & Badges Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-white/10">
              <div className="inline-flex items-center gap-1.5 text-xs font-serif-display tracking-[0.18em] text-emerald-300 uppercase font-semibold whitespace-nowrap">
                <span className="text-emerald-400 text-xs">✦</span>
                <span>Pathway I</span>
                <span className="text-emerald-500/60">·</span>
                <span>Registration</span>
              </div>

              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-serif-display tracking-wider text-emerald-300 whitespace-nowrap">
                Individual &amp; Representative
              </div>
            </div>

            {/* Title & Icon Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Complete Onboarding
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              For finders, advisors, dealmakers, and prospective members establishing their identity, sector focus, offerings, and active buy/sell mandates in the Guild directory.
            </p>

            {/* Structured Steps Preview */}
            <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
              <div className="text-xs font-serif-display tracking-[0.18em] uppercase text-slate-300 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>What You Establish</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span><strong>Accreditation &amp; Background:</strong> Verify your operating profile, relationship tier, and commercial track record.</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span><strong>Sector Specialization:</strong> Align with active desks (Energy, Metals, Ags &amp; Softs, Deep Tech, Infrastructure).</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span><strong>Private WhatsApp Access:</strong> Connect to dedicated syndicate channels and direct 1-on-1 strategy alignment briefings.</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span>
                  <strong>Master Governance &amp; Attribution:</strong> Every opportunity submitted receives 24-mo cryptographic attribution lock, non-circumvention, and carry protection.
                  {onOpenCharter && (
                    <button
                      type="button"
                      onClick={onOpenCharter}
                      className="ml-2 inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer"
                    >
                      <Lock className="w-2.5 h-2.5" />
                      <span>Review Charter</span>
                    </button>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={ONBOARDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              id="btn-start-onboarding"
            >
              <span>Start Your Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onSelectPath("onboarding")}
              className="w-full sm:w-auto px-4 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10 transition-colors cursor-pointer text-center"
            >
              Review Requirements
            </button>
          </div>

        </div>

        {/* PORTAL 2: SET UP YOUR PROCESS */}
        <div 
          onMouseEnter={() => setHoveredPath("process")}
          onMouseLeave={() => setHoveredPath(null)}
          className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 border scroll-mt-28 ${
            hoveredPath === "process"
              ? "bg-[#100d24]/90 border-purple-500/50 shadow-[0_20px_50px_-10px_rgba(168,85,247,0.2)] scale-[1.01]"
              : "bg-[#060b18]/80 border-white/10 shadow-xl"
          }`}
          id="portal-process"
        >
          {/* Top Badge & Identifier */}
          <div>
            {/* Top Eyebrow & Badges Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-white/10">
              <div className="inline-flex items-center gap-1.5 text-xs font-serif-display tracking-[0.18em] text-purple-300 uppercase font-semibold whitespace-nowrap">
                <span className="text-purple-400 text-xs">✦</span>
                <span>Pathway II</span>
                <span className="text-purple-500/60">·</span>
                <span>Process Architecture</span>
              </div>

              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-[11px] font-serif-display tracking-wider text-purple-300 whitespace-nowrap">
                Principal &amp; Institutional Fund
              </div>
            </div>

            {/* Title & Icon Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Set Up Your Process
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              For principals, family offices, buyers, and capital providers defining how opportunities must be structured, qualified, and routed to their investment committee.
            </p>

            {/* Structured Steps Preview */}
            <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
              <div className="text-xs font-serif-display tracking-[0.18em] uppercase text-slate-300 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>What You Define</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Exact Buy/Sell Box:</strong> Asset categories, minimum ticket sizes ($10M–$500M+), and jurisdictions.</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Intake Qualification Gates:</strong> Require 1-degree mandate proof (POP/POF) and standardized corporate specs.</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Air Traffic Control:</strong> 100% noise filter — unverified brokers, rumors, and daisy chains are stopped before your inbox.</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Decision SLA:</strong> Set expected counterparty turnaround times to accelerate transaction closing velocity.</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <span>
                  <strong>Master Governance &amp; Noise Elimination:</strong> Institutional mandates operate under binding Master Charter non-circumvention rules.
                  {onOpenCharter && (
                    <button
                      type="button"
                      onClick={onOpenCharter}
                      className="ml-2 inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer"
                    >
                      <Lock className="w-2.5 h-2.5" />
                      <span>Review Charter</span>
                    </button>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={PROCESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all cursor-pointer"
              id="btn-setup-process"
            >
              <span>Define Your Process Box</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onSelectPath("process")}
              className="w-full sm:w-auto px-4 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10 transition-colors cursor-pointer text-center"
            >
              Preview Spec Format
            </button>
          </div>

        </div>

      </div>

      {/* THE FALLBACK (Addressing Users Who Want to Stay Quiet) */}
      <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/20 bg-[#0c0d16]/80 text-center max-w-4xl mx-auto shadow-[0_10px_30px_-10px_rgba(245,158,11,0.08)]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-amber-950/40 border border-amber-500/30 text-amber-200/90 text-[11px] sm:text-xs font-serif-display tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <span className="text-amber-400 text-xs">✦</span>
          <span>Privacy &amp; Quiet Execution Protocol</span>
          <span className="text-amber-400 text-xs">✦</span>
        </div>

        <h4 className="font-serif-display text-lg sm:text-xl font-bold text-white mb-2">
          Prefer not to network or join community groups?
        </h4>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal mb-6">
          That is completely fine and respected. Completing the onboarding process or establishing your process criteria is <strong>still strictly required</strong> so our matching engine understands your exact parameters. This guarantees we only ever bring you pre-qualified, highly aligned opportunities and zero spam.
        </p>

        {/* Interactive Buttons for Discrete Operators */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setIsDiscreteModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Operate in a Discrete Fashion? View Briefing &amp; Research</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Schedule with Us</span>
          </a>

          <button
            onClick={() => setIsDiscreteModalOpen(true)}
            className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Request Research &amp; Findings</span>
          </button>
        </div>
      </div>

      {/* Discrete Operator & Research Modal */}
      <DiscreteOperatorModal 
        isOpen={isDiscreteModalOpen} 
        onClose={() => setIsDiscreteModalOpen(false)} 
      />

    </section>
  );
};
