import React from "react";
import { RoleId } from "../../types/foundingFirm";
import { ROLES_DATA } from "../../data/foundingFirmData";
import { RoleVector } from "./RoleVectors";
import { AlertTriangle, ShieldCheck, TrendingUp, HelpCircle, RefreshCw, Sparkles } from "lucide-react";

interface RoleSpecificThesisProps {
  selectedRole: RoleId;
  onChangeRoleClick: () => void;
}

export const RoleSpecificThesis: React.FC<RoleSpecificThesisProps> = ({
  selectedRole,
  onChangeRoleClick,
}) => {
  const r = ROLES_DATA[selectedRole];

  return (
    <section className="relative py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Role Context Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <RoleVector role={selectedRole} className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>CUSTOMIZED PERSPECTIVE · {r.cardHeadline}</span>
            </div>
            <h2 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              {r.roleTitle}
            </h2>
          </div>
        </div>

        <button
          onClick={onChangeRoleClick}
          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
          <span>Change Role Lens</span>
        </button>
      </div>

      {/* Why we thought of you banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6 text-sm sm:text-base font-serif-editorial text-slate-200 leading-relaxed">
        <strong className="font-sans-ui text-xs font-mono uppercase tracking-wider text-emerald-300 block mb-1">
          Why we thought of you:
        </strong>
        {r.invitationRelevance}
      </div>

      {/* 3-Stage Role Thesis (PAIN / CLAIM / GAIN) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
        
        {/* PAIN */}
        <div className="rounded-2xl p-5 sm:p-6 bg-slate-900/80 border border-slate-800 flex flex-col justify-between relative shadow-lg">
          <div className="absolute top-0 left-5 -translate-y-1/2 px-2.5 py-0.5 rounded bg-slate-950 border border-rose-500/40 text-[10px] font-mono tracking-widest text-rose-400 uppercase">
            THE PAIN
          </div>

          <div>
            <div className="w-9 h-9 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
              <AlertTriangle className="w-4 h-4" />
            </div>

            <h3 className="font-serif-display text-base sm:text-lg font-bold text-white mb-2.5">
              What Wastes Bandwidth
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {r.pain.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
            Friction point identified
          </div>
        </div>

        {/* CLAIM */}
        <div className="rounded-2xl p-5 sm:p-6 bg-slate-900/90 border border-emerald-500/40 flex flex-col justify-between relative shadow-xl shadow-emerald-950/20 ring-1 ring-emerald-500/20">
          <div className="absolute top-0 left-5 -translate-y-1/2 px-2.5 py-0.5 rounded bg-slate-950 border border-emerald-500/50 text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
            THE CLAIM
          </div>

          <div>
            <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <ShieldCheck className="w-4 h-4" />
            </div>

            <h3 className="font-serif-display text-base sm:text-lg font-bold text-white mb-2.5">
              What We Build Around You
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {r.claim}
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400/90">
            Attribution &amp; verification shield
          </div>
        </div>

        {/* GAIN */}
        <div className="rounded-2xl p-5 sm:p-6 bg-slate-900/80 border border-slate-800 flex flex-col justify-between relative shadow-lg">
          <div className="absolute top-0 left-5 -translate-y-1/2 px-2.5 py-0.5 rounded bg-slate-950 border border-blue-500/40 text-[10px] font-mono tracking-widest text-blue-400 uppercase">
            THE GAIN
          </div>

          <div>
            <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <TrendingUp className="w-4 h-4" />
            </div>

            <h3 className="font-serif-display text-base sm:text-lg font-bold text-white mb-2.5">
              Your Advantage
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {r.gain}
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-blue-400">
            Repeatable institutional value
          </div>
        </div>

      </div>

      {/* WHAT WE NEED FROM YOU CARD */}
      <div className="p-5 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>WHAT WE NEED FROM YOUR EXPERIENCE</span>
        </div>
        <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white mb-4">
          The Specific Questions We Want Your Help Answering:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {r.whatWeNeed.map((q, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-2.5"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-[11px] font-mono font-bold shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {q}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
