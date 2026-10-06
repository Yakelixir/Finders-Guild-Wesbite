import React, { useState } from "react";
import { 
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ExternalLink,
  Users,
  EyeOff,
  Scale,
  Zap
} from "lucide-react";

interface VisualGovernanceProps {
  onOpenCharter?: () => void;
}

export const VisualGovernance: React.FC<VisualGovernanceProps> = ({ onOpenCharter }) => {
  const [activeModel, setActiveModel] = useState<"guild" | "traditional">("guild");

  const GOVERNANCE_DOC_URL = "https://app.findersguild.com/docs/governance";

  return (
    <section id="governance-visual" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Background ambient radial */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-amber-500/5 via-emerald-500/5 to-transparent blur-[140px] -z-10 pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-amber-950/40 border border-amber-500/30 text-amber-200/90 text-[11px] sm:text-xs font-serif-display tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <span className="text-amber-400 text-xs">✦</span>
          <span>The Trust Architecture <span className="text-amber-500/60 mx-1">·</span> Master Governance</span>
          <span className="text-amber-400 text-xs">✦</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Why our governance exists.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Governance is not a legal barrier—it is the invisible armor that protects your relationships, guarantees attribution, and eliminates market chaos.
        </p>
      </div>

      {/* Visual Model Comparison Box */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl bg-[#060b18]/85 mb-16 overflow-hidden">
        
        {/* Toggle between Traditional vs Guild */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
              Visualizing Deal Protection
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Toggle below to compare traditional unregulated deal making against the Finders Guild protocol.
            </p>
          </div>

          <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-white/10">
            <button
              onClick={() => setActiveModel("guild")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeModel === "guild"
                  ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Guild Protected Protocol</span>
            </button>

            <button
              onClick={() => setActiveModel("traditional")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeModel === "traditional"
                  ? "bg-red-950/80 text-red-300 border border-red-500/40 shadow-[0_0_15px_rgba(244,63,94,0.2)]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Traditional Broker Chaos</span>
            </button>
          </div>
        </div>

        {/* Dynamic Visual Diagram */}
        <div className="py-8">
          {activeModel === "guild" ? (
            /* GUILD PROTECTED PROTOCOL */
            <div className="space-y-8 animate-fadeIn">
              
              {/* Diagram Vector SVG */}
              <div className="p-6 rounded-2xl bg-black/40 border border-emerald-500/20 shadow-inner">
                <svg viewBox="0 0 800 180" className="w-full h-auto select-none">
                  <defs>
                    <linearGradient id="guildFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Track */}
                  <line x1="80" y1="90" x2="720" y2="90" stroke="url(#guildFlow)" strokeWidth="3" strokeDasharray="6 3" />

                  {/* Step 1: Finder Introduction */}
                  <g transform="translate(80, 90)">
                    <circle cx="0" cy="0" r="28" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="2" />
                    <circle cx="0" cy="0" r="10" fill="#10b981" />
                    <text x="0" y="45" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">1. Introducing Finder</text>
                    <text x="0" y="60" fill="#94a3b8" fontSize="9" textAnchor="middle">Direct 1-Degree Mandate</text>
                  </g>

                  {/* Step 2: Attribution Lock (Shield) */}
                  <g transform="translate(280, 90)">
                    <rect x="-35" y="-35" width="70" height="70" rx="16" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="2" />
                    <Lock x="-12" y="-12" className="w-6 h-6 text-amber-400" />
                    <text x="0" y="52" fill="#fde68a" fontSize="11" fontWeight="bold" textAnchor="middle">2. Attribution Seal</text>
                    <text x="0" y="67" fill="#d97706" fontSize="9" fontWeight="bold" textAnchor="middle">Carry &amp; Identity Locked</text>
                  </g>

                  {/* Step 3: Process Gate */}
                  <g transform="translate(480, 90)">
                    <circle cx="0" cy="0" r="28" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="2" />
                    <circle cx="0" cy="0" r="10" fill="#a855f7" />
                    <text x="0" y="45" fill="#d8b4fe" fontSize="11" fontWeight="bold" textAnchor="middle">3. Process Gate</text>
                    <text x="0" y="60" fill="#94a3b8" fontSize="9" textAnchor="middle">Verified Buy-Box Match</text>
                  </g>

                  {/* Step 4: Bilateral Diligence */}
                  <g transform="translate(680, 90)">
                    <circle cx="0" cy="0" r="32" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="2" />
                    <ShieldCheck x="-12" y="-12" className="w-6 h-6 text-sky-400" />
                    <text x="0" y="52" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle">4. Direct Diligence</text>
                    <text x="0" y="67" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Protected Closing</text>
                  </g>
                </svg>
              </div>

              {/* Explanatory Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                  <div className="text-emerald-400 text-xs font-mono font-bold uppercase mb-1">Protected Position</div>
                  <p className="text-slate-300 text-xs leading-relaxed">Your introduction is sealed in the Guild ledger. You are never cut out or bypassed.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20">
                  <div className="text-amber-400 text-xs font-mono font-bold uppercase mb-1">Master Charter Rules</div>
                  <p className="text-slate-300 text-xs leading-relaxed">All participants operate under pre-signed non-circumvention, saving months of legal delays.</p>
                </div>
                <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/20">
                  <div className="text-sky-400 text-xs font-mono font-bold uppercase mb-1">Closing Velocity</div>
                  <p className="text-slate-300 text-xs leading-relaxed">Direct communication between decision-makers leads to clean transactions without friction.</p>
                </div>
              </div>

            </div>
          ) : (
            /* TRADITIONAL BROKER CHAOS */
            <div className="space-y-8 animate-fadeIn">
              
              {/* Diagram Vector SVG */}
              <div className="p-6 rounded-2xl bg-black/60 border border-red-500/30 shadow-inner">
                <svg viewBox="0 0 800 180" className="w-full h-auto select-none">
                  {/* Fragmented, chaotic lines */}
                  <path d="M 80 90 Q 180 20, 240 90 T 400 90 T 560 90 T 680 90" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 4" />
                  
                  {/* Broker 1 */}
                  <g transform="translate(80, 90)">
                    <circle cx="0" cy="0" r="24" fill="#260f17" stroke="#ef4444" strokeWidth="2" />
                    <text x="0" y="38" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Finder A</text>
                    <text x="0" y="52" fill="#cbd5e1" fontSize="9" fontWeight="600" textAnchor="middle">Has Real Lead</text>
                  </g>

                  {/* Intermediary 1 */}
                  <g transform="translate(240, 60)">
                    <circle cx="0" cy="0" r="20" fill="#200d14" stroke="#f87171" strokeWidth="1.5" />
                    <text x="0" y="30" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Broker 1</text>
                    <text x="0" y="44" fill="#fca5a5" fontSize="9" fontWeight="600" textAnchor="middle">Copies Text</text>
                  </g>

                  {/* Intermediary 2 */}
                  <g transform="translate(400, 120)">
                    <circle cx="0" cy="0" r="20" fill="#200d14" stroke="#f87171" strokeWidth="1.5" />
                    <text x="0" y="30" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Broker 2</text>
                    <text x="0" y="44" fill="#fca5a5" fontSize="9" fontWeight="600" textAnchor="middle">Changes Terms</text>
                  </g>

                  {/* Intermediary 3 */}
                  <g transform="translate(560, 60)">
                    <circle cx="0" cy="0" r="20" fill="#200d14" stroke="#f87171" strokeWidth="1.5" />
                    <text x="0" y="30" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Broker 3</text>
                    <text x="0" y="44" fill="#fca5a5" fontSize="9" fontWeight="600" textAnchor="middle">Claims Mandate</text>
                  </g>

                  {/* Bypassed Outcome */}
                  <g transform="translate(680, 90)">
                    <circle cx="0" cy="0" r="28" fill="#380d19" stroke="#ef4444" strokeWidth="2.5" />
                    <text x="0" y="6" fill="#ef4444" fontSize="18" fontWeight="bold" textAnchor="middle">✕</text>
                    <text x="0" y="44" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Deal Dies / Bypassed</text>
                    <text x="0" y="58" fill="#fca5a5" fontSize="9" fontWeight="600" textAnchor="middle">Finder gets $0</text>
                  </g>
                </svg>
              </div>

              {/* Explanatory Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                  <div className="text-red-400 text-xs font-mono font-bold uppercase mb-1">Circumvention Risk</div>
                  <p className="text-slate-300 text-xs leading-relaxed">Once principal names are mentioned, intermediaries are discarded and relationships are burned.</p>
                </div>
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                  <div className="text-red-400 text-xs font-mono font-bold uppercase mb-1">Information Distortion</div>
                  <p className="text-slate-300 text-xs leading-relaxed">Details get altered across 4 WhatsApp forwards. Principals reject distorted, unverified specs.</p>
                </div>
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                  <div className="text-red-400 text-xs font-mono font-bold uppercase mb-1">Total Loss of Time</div>
                  <p className="text-slate-300 text-xs leading-relaxed">Months of effort result in suspicion, legal threats, and zero completed transactions.</p>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>

      {/* The 4 Fundamental Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        
        {/* Pillar 1 */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="font-serif-display text-lg font-bold text-white mb-2">
              Preserved Attribution
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Why it exists: To eliminate the fear of being bypassed. You introduced the counterparty; your attribution is immutable and protected for 24 months.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-serif-display tracking-widest text-amber-300 uppercase font-semibold flex items-center gap-1.5">
            <span className="text-amber-400">✦</span>
            <span>Canon I · Immutable Credit</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-serif-display text-lg font-bold text-white mb-2">
              1-Degree Standard
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Why it exists: To eliminate multi-layer broker chains. Every mandate must be held directly or within one authenticated degree of the principal.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-serif-display tracking-widest text-emerald-300 uppercase font-semibold flex items-center gap-1.5">
            <span className="text-emerald-400">✦</span>
            <span>Canon II · Zero Daisy Chains</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-serif-display text-lg font-bold text-white mb-2">
              Defined Process
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Why it exists: To prevent endless negotiations. Both parties enter diligence with pre-cleared fee tiers (1.5%–3.0%) and transparent closing timetables.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-serif-display tracking-widest text-sky-300 uppercase font-semibold flex items-center gap-1.5">
            <span className="text-sky-400">✦</span>
            <span>Canon III · Pre-Agreed Terms</span>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif-display text-lg font-bold text-white mb-2">
              Perimeter Defense
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Why it exists: To maintain a high-trust room. Bad actors, circumnavigators, and serial leakers are permanently ejected from all Guild desks.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-serif-display tracking-widest text-purple-300 uppercase font-semibold flex items-center gap-1.5">
            <span className="text-purple-400">✦</span>
            <span>Canon IV · Zero Tolerance</span>
          </div>
        </div>

      </div>

      {/* Formal Governance Link Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h4 className="font-serif-display text-lg sm:text-xl font-bold text-white mb-1">
            Need to review the complete legal charter?
          </h4>
          <p className="text-xs sm:text-sm text-slate-400">
            Access our master Non-Circumvention, Non-Disclosure &amp; Fee Protection Agreement (NCNDA/IMFPA) documentation.
          </p>
        </div>

        {onOpenCharter ? (
          <button
            onClick={onOpenCharter}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide border border-amber-500/30 transition-all flex-shrink-0 cursor-pointer shadow-lg"
            id="btn-view-governance-charter"
          >
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Open Master Governance Charter</span>
          </button>
        ) : (
          <a
            href={GOVERNANCE_DOC_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wide border border-white/15 transition-all flex-shrink-0 cursor-pointer"
            id="btn-view-governance-charter"
          >
            <span>View Master Governance Document</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        )}
      </div>

    </section>
  );
};
