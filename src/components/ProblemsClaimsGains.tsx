import React from "react";
import { 
  AlertOctagon, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Zap, 
  Users, 
  Scale, 
  Target,
  FileX,
  UserCheck
} from "lucide-react";

export const ProblemsClaimsGains: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[140px] -z-10 pointer-events-none rounded-full" />

      {/* PART 1: THE CLAIMS */}
      <div className="mb-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-emerald-950/40 border border-emerald-500/30 text-emerald-200/90 text-[11px] sm:text-xs font-serif-display tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="text-emerald-400 text-xs">✦</span>
            <span>Our Commitments to You</span>
            <span className="text-emerald-400 text-xs">✦</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            The claims we stand behind.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We don't believe in zero-sum broker competition. Together, we found empirically that we succeed through win-win. Here is what we guarantee inside the Guild:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Claim 1 */}
          <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-emerald-500/20 bg-[#071324]/80 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  GUARANTEE 01
                </span>
                <span className="text-[10px] font-mono text-slate-500">Guild Standard</span>
              </div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-xl font-bold text-white leading-snug">
                  100% Protected Attribution
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pl-0 sm:pl-11">
                When you introduce an opportunity or counterparty into the Guild, your position is permanently watermarked and recorded. You never get cut out, circumnavigated, or bypassed.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>24-Month Tail Lock Active</span>
            </div>
          </div>

          {/* Claim 2 */}
          <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-emerald-500/20 bg-[#071324]/80 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  GUARANTEE 02
                </span>
                <span className="text-[10px] font-mono text-slate-500">Guild Standard</span>
              </div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-xl font-bold text-white leading-snug">
                  Direct 1-Degree Mandates Only
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pl-0 sm:pl-11">
                No broker chains. Every mandate brought to our private sector desks is held directly or within one authenticated degree of the principal. Daisy chains are terminated at the gate.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Direct Principal Line</span>
            </div>
          </div>

          {/* Claim 3 */}
          <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-emerald-500/20 bg-[#071324]/80 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  GUARANTEE 03
                </span>
                <span className="text-[10px] font-mono text-slate-500">Guild Standard</span>
              </div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-xl font-bold text-white leading-snug">
                  Air Traffic Control (100% Noise Filter)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pl-0 sm:pl-11">
                We take counterparty criteria, verify buy-boxes, and structure incoming assets into clean corporate specs before anyone talks. You only see pre-qualified, actionable matches.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Pre-Screened Mandates</span>
            </div>
          </div>

          {/* Claim 4 */}
          <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-emerald-500/20 bg-[#071324]/80 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  GUARANTEE 04
                </span>
                <span className="text-[10px] font-mono text-slate-500">Guild Standard</span>
              </div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-xl font-bold text-white leading-snug">
                  Pre-Cleared Master Governance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pl-0 sm:pl-11">
                All members operate under a shared, pre-signed Non-Circumvention and Fee Protection Agreement. Standardized fees (1.5%–3.0%) mean zero post-introduction fee disputes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Pre-Signed Fee Protection</span>
            </div>
          </div>

        </div>

      </div>

      {/* PART 3: THE GAINS */}
      <div>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-950/40 via-slate-900/90 to-purple-950/40 border border-purple-500/30 text-purple-200/90 text-[11px] sm:text-xs font-serif-display tracking-[0.2em] uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <span className="text-purple-400 text-xs">✦</span>
            <span>The Empirical Results</span>
            <span className="text-purple-400 text-xs">✦</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            The gains: what changes when you join.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            The outcomes have been very clear. When you stop operating as an isolated island and join an aligned network, your commercial power multiplies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Gain 1 */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-purple-500/20 bg-[#0d0a1c]/80 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                  Predictable Velocity
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-0 sm:pl-11 font-normal">
                Move from months of radio silence to clear 72-hour turnaround SLAs with immediate pass/proceed decisions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-purple-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Gain • 5x Faster Handoffs</span>
            </div>
          </div>

          {/* Gain 2 */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-purple-500/20 bg-[#0d0a1c]/80 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                  Syndicate Desk Access
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-0 sm:pl-11 font-normal">
                Plug into 24 private sector desks (Energy, Metals, Tech, Ags). Share aligned deal flow and co-broker with vetted peers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-purple-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Gain • Active Deal Desks</span>
            </div>
          </div>

          {/* Gain 3 */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-purple-500/20 bg-[#0d0a1c]/80 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                  Compounding Equity
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-0 sm:pl-11 font-normal">
                Your reputation is protected and elevated. Every successful close inside the Guild unlocks higher capital mandates.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-purple-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Gain • Enduring Standing</span>
            </div>
          </div>

          {/* Gain 4 */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-purple-500/20 bg-[#0d0a1c]/80 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-sm">
            <div>
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                  Unwavering Peace of Mind
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-0 sm:pl-11 font-normal">
                No more wondering if you'll get paid. Operate with legal certainty, institutional protection, and an aligned community.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-purple-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Gain • Protected Carry</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
