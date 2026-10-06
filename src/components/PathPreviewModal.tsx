import React from "react";
import { 
  X, 
  CheckCircle2, 
  Users, 
  Building2, 
  Lock,
  ExternalLink
} from "lucide-react";

interface PathPreviewModalProps {
  isOpen: boolean;
  path: "onboarding" | "process" | null;
  onClose: () => void;
  onOpenCharter?: () => void;
}

export const PathPreviewModal: React.FC<PathPreviewModalProps> = ({ 
  isOpen, 
  path, 
  onClose,
  onOpenCharter 
}) => {
  if (!isOpen || !path) return null;

  const isOnboarding = path === "onboarding";
  const TARGET_URL = isOnboarding
    ? "https://app.findersguild.com/onboarding"
    : "https://app.findersguild.com/setup-profile/alM3UW9HdGxrZ2RwMURrRFZ4enZUekg5aUh6Mg==";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#080e1d] border border-white/15 p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] text-slate-100 my-auto select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div 
          className="absolute -top-16 -right-16 w-48 h-48 blur-3xl opacity-20 pointer-events-none rounded-full"
          style={{ backgroundColor: isOnboarding ? "#10b981" : "#a855f7" }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-3 pr-8">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-md flex-shrink-0"
            style={{
              backgroundColor: isOnboarding ? "rgba(16,185,129,0.15)" : "rgba(168,85,247,0.15)",
              borderColor: isOnboarding ? "rgba(16,185,129,0.3)" : "rgba(168,85,247,0.3)",
              color: isOnboarding ? "#34d399" : "#c084fc",
            }}
          >
            {isOnboarding ? <Users className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
          </div>
          <div>
            <span className="text-[10px] font-serif-display tracking-[0.2em] uppercase font-semibold text-amber-300/90 flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-amber-400">✦</span> {isOnboarding ? "Finders Guild · Onboarding Gateway" : "Finders Guild · Principal Intake"}
            </span>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white leading-tight mt-0.5">
              {isOnboarding ? "Member Onboarding Intake" : "Principal Process Setup"}
            </h3>
          </div>
        </div>

        {/* Crisp Narrative */}
        <p className="text-xs sm:text-sm text-slate-300 leading-snug mb-4 font-normal">
          {isOnboarding
            ? "Joining the Guild directory establishes your entity profile, sector focus, and active mandates to unlock private sector WhatsApp channels and protected syndicate deal flow."
            : "Defining your process creates a dedicated intake gate. The Guild filters out 100% of unvetted noise before opportunities reach your investment committee."}
        </p>

        {/* Steps Box - Compact & Crystal Clear */}
        <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 space-y-2 mb-5">
          <div className="text-[10px] font-serif-display uppercase tracking-[0.18em] text-slate-300 font-semibold mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>{isOnboarding ? "Required Steps in Onboarding" : "Required Specification Parameters"}</span>
          </div>

          {isOnboarding ? (
            <>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white font-medium">Entity &amp; Accreditation:</strong> Profile, jurisdiction, and track record.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white font-medium">Sector Desk Selection:</strong> Energy, Metals, Deep Tech, Ags, Real Assets.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span><strong className="text-white font-medium">Active Mandates:</strong> Define buy/sell criteria for neural matching.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong className="text-white font-medium">Master Governance:</strong> 24-mo protected attribution &amp; carry.
                  {onOpenCharter && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenCharter();
                      }}
                      className="ml-1.5 text-amber-400 hover:text-amber-300 underline font-mono text-[10px] cursor-pointer inline-flex items-center gap-0.5"
                    >
                      <Lock className="w-2.5 h-2.5" />
                      <span>Review Charter</span>
                    </button>
                  )}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span><strong className="text-white font-medium">Target Asset Box:</strong> Specific commodities, tech, or ticket sizes ($10M+).</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span><strong className="text-white font-medium">Qualification Standards:</strong> Mandatory Proof of Authority / Funds.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span><strong className="text-white font-medium">Committee SLA:</strong> 72-hour turnaround for initial pass/proceed.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span><strong className="text-white font-medium">Air Traffic Routing:</strong> Direct receiving partner email &amp; clean room.</span>
              </div>
            </>
          )}
        </div>

        {/* Action Button Row */}
        <div className="flex items-center gap-2.5">
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all cursor-pointer ${
              isOnboarding
                ? "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            }`}
          >
            <span>Continue to {isOnboarding ? "Onboarding Application" : "Process Setup Engine"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer flex-shrink-0"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};
