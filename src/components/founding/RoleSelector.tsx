import React from "react";
import { RoleId } from "../../types/foundingFirm";
import { ROLES_DATA, ROLE_ORDER } from "../../data/foundingFirmData";
import { RoleVector } from "./RoleVectors";
import { CryptographicSignal } from "./CryptographicSignal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { trackEvent } from "../../utils/analytics";

interface RoleSelectorProps {
  selectedRole: RoleId;
  onSelectRole: (role: RoleId) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({
  selectedRole,
  onSelectRole,
}) => {
  const activeRoleData = ROLES_DATA[selectedRole];

  const handlePick = (roleId: RoleId) => {
    onSelectRole(roleId);
    trackEvent("role_selected", { role: roleId });
  };

  return (
    <section id="role-picker" className="relative py-12 sm:py-18 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800/80">
      
      {/* Section Header with Cryptographic Signal */}
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
        <div className="flex justify-center mb-3">
          <CryptographicSignal label="SELECT YOUR LENS" />
        </div>
        <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          WHY WERE YOU INVITED?
        </h2>
        <p className="mt-2 text-base sm:text-lg text-slate-300 font-serif-editorial">
          Choose the role closest to the value you already create.
        </p>
        <p className="mt-1 text-xs font-mono text-slate-400">
          This personalizes the operational pain, claim, gain, and discussion questions below.
        </p>
      </div>

      {/* Progressive Compact Role Selector */}
      <div className="space-y-4">
        
        {/* 1. Prominent Active Role Focus Card */}
        <div className="p-5 sm:p-7 rounded-2xl bg-slate-900 border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <RoleVector role={selectedRole} className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  {activeRoleData.cardHeadline}
                </div>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                  {activeRoleData.roleTitle}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-mono font-semibold text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Active Lens Selected</span>
            </div>
          </div>

          {/* Role Pain Preview Snippet */}
          <div className="mt-4 text-sm sm:text-base text-slate-300 font-serif-editorial italic leading-relaxed">
            “{activeRoleData.pain[0]}”
          </div>
        </div>

        {/* 2. Compact Grid of Remaining Roles (Clean 2-row / 3-col mobile-first pills) */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1 flex items-center justify-between">
            <span>Or switch to another founding role:</span>
            <span className="text-[10px] text-slate-500">6 Founding Categories</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
            {ROLE_ORDER.map((roleId) => {
              const r = ROLES_DATA[roleId];
              const isSelected = selectedRole === roleId;

              return (
                <button
                  key={roleId}
                  type="button"
                  onClick={() => handlePick(roleId)}
                  className={`p-3 sm:p-3.5 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between gap-3 border ${
                    isSelected
                      ? "bg-emerald-950/40 border-emerald-500/60 text-white"
                      : "bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected ? "bg-emerald-900/60 border-emerald-500/40 text-emerald-300" : "bg-slate-950 border-slate-800 text-slate-400"
                    }`}>
                      <RoleVector role={roleId} className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 truncate">
                        {r.cardHeadline}
                      </div>
                      <div className="text-xs font-serif-display font-bold text-slate-100 truncate">
                        {r.roleTitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                    isSelected ? "text-emerald-400 translate-x-0.5" : "text-slate-600"
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
