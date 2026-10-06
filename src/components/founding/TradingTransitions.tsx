import React from "react";

interface TransitionProps {
  className?: string;
  label?: string;
  sublabel?: string;
}

/**
 * TRANSITION A: SIGNAL → QUALIFICATION
 * A field of incoming transaction signals moves toward a narrowing gate.
 * Some continue, others fade quietly.
 * Meaning: "Not every opportunity progresses."
 */
export const SignalQualificationTransition: React.FC<TransitionProps> = ({
  className = "w-full max-w-xl mx-auto my-8",
  label = "SIGNAL → QUALIFICATION",
  sublabel = "Not every opportunity progresses.",
}) => {
  return (
    <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-900 flex flex-col items-center select-none ${className}`}>
      <div className="w-full flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {label}
        </span>
        <span className="text-slate-400">{sublabel}</span>
      </div>

      <svg viewBox="0 0 400 80" fill="none" className="w-full h-16 overflow-visible" aria-hidden="true">
        {/* Incoming noisy signals */}
        <g opacity="0.4" stroke="#06B6D4" strokeWidth="1" strokeDasharray="2 3">
          <line x1="20" y1="15" x2="160" y2="35" />
          <line x1="10" y1="35" x2="160" y2="40" />
          <line x1="30" y1="50" x2="160" y2="42" />
          <line x1="15" y1="65" x2="160" y2="45" />
        </g>

        {/* Filtered signals fading away */}
        <g opacity="0.25">
          <line x1="160" y1="35" x2="200" y2="15" stroke="#E11D48" strokeWidth="0.8" strokeDasharray="1 2" />
          <line x1="160" y1="45" x2="200" y2="65" stroke="#E11D48" strokeWidth="0.8" strokeDasharray="1 2" />
          <circle cx="200" cy="15" r="1.5" fill="#E11D48" />
          <circle cx="200" cy="65" r="1.5" fill="#E11D48" />
        </g>

        {/* The Narrowing Gate */}
        <line x1="170" y1="20" x2="170" y2="60" stroke="#334155" strokeWidth="1.5" />
        <polygon points="170,36 178,40 170,44" fill="#10B981" />

        {/* Verified signals continuing */}
        <line x1="178" y1="40" x2="380" y2="40" stroke="#10B981" strokeWidth="1.75" />
        <circle cx="380" cy="40" r="3" fill="#34D399" className="filter drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

        {/* Node nodes on the active rail */}
        <rect x="230" y="37" width="6" height="6" fill="#06B6D4" rx="1" />
        <rect x="300" y="37" width="6" height="6" fill="#10B981" rx="1" />
      </svg>
    </div>
  );
};

/**
 * TRANSITION B: CHAIN OF CUSTODY
 * Sequential checkpoints: SOURCE → AUTHORITY → EVIDENCE → PROCEDURE → COUNTERPARTY → EXECUTION
 */
export const ChainOfCustodyTransition: React.FC<TransitionProps> = ({
  className = "w-full max-w-xl mx-auto my-8",
}) => {
  const stages = ["SOURCE", "AUTHORITY", "EVIDENCE", "PROCEDURE", "COUNTERPARTY", "EXECUTION"];
  return (
    <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-900 select-none ${className}`}>
      <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-3 flex items-center justify-between">
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CHAIN OF CUSTODY
        </span>
        <span className="text-slate-400">Sequential Checkpoint Verification</span>
      </div>

      <div className="relative flex items-center justify-between w-full">
        {/* Continuous background rail */}
        <div className="absolute top-1/2 left-2 right-2 -translate-y-1/2 h-[2px] bg-slate-800 -z-0" />
        {/* Active progress rail */}
        <div className="absolute top-1/2 left-2 right-1/4 -translate-y-1/2 h-[2px] bg-gradient-to-r from-emerald-500/80 via-cyan-400 to-emerald-400 -z-0" />

        {stages.map((stage, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center gap-1.5">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-mono font-bold border transition-colors ${
              idx < 5 
                ? "bg-emerald-950 border-emerald-400 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                : "bg-slate-900 border-slate-700 text-slate-400"
            }`}>
              {idx + 1}
            </div>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-slate-300 text-center">
              {stage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * TRANSITION C: CARGO / ROUTE
 * Abstract coordinates, route ticks, origin → inspection → logistics → destination
 * Meaning: "A commodity transaction is a sequence of dependencies, not an introduction."
 */
export const CargoRouteTransition: React.FC<TransitionProps> = ({
  className = "w-full max-w-xl mx-auto my-8",
}) => {
  return (
    <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-900 select-none ${className}`}>
      <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2 flex items-center justify-between">
        <span className="text-cyan-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          PHYSICAL DEPENDENCY ROUTE
        </span>
        <span className="text-slate-400">LAT 24.8607° N · LNG 67.0011° E</span>
      </div>

      <svg viewBox="0 0 400 60" fill="none" className="w-full h-14 overflow-visible" aria-hidden="true">
        {/* Route axis line */}
        <path d="M20 30 Q 120 10, 200 30 T 380 30" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Waypoints */}
        <circle cx="20" cy="30" r="4" fill="#06B6D4" />
        <text x="20" y="50" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">ORIGIN</text>

        <circle cx="140" cy="18" r="3.5" fill="#10B981" />
        <text x="140" y="8" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle">INSPECTION</text>

        <circle cx="260" cy="38" r="3.5" fill="#3B82F6" />
        <text x="260" y="55" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">LOGISTICS</text>

        <circle cx="380" cy="30" r="4.5" fill="#10B981" className="filter drop-shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
        <text x="380" y="50" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle">DESTINATION</text>
      </svg>
      <div className="text-[10px] font-mono text-slate-400 text-center mt-1">
        A commodity transaction is a sequence of physical dependencies, not a casual introduction.
      </div>
    </div>
  );
};

/**
 * TRANSITION D: ASSAY / VERIFICATION
 * A noisy field resolves into a narrow measurement band.
 * Meaning: "Claims become useful when measured."
 */
export const AssayVerificationTransition: React.FC<TransitionProps> = ({
  className = "w-full max-w-xl mx-auto my-8",
}) => {
  return (
    <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-900 select-none ${className}`}>
      <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2 flex items-center justify-between">
        <span className="text-purple-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          ASSAY TOLERANCE BAND
        </span>
        <span className="text-slate-400">SPEC: 99.99% Cu ±0.005</span>
      </div>

      <svg viewBox="0 0 400 60" fill="none" className="w-full h-12 overflow-visible" aria-hidden="true">
        {/* Upper and lower tolerance limits */}
        <line x1="20" y1="18" x2="380" y2="18" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="20" y1="42" x2="380" y2="42" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Narrow accepted measurement corridor */}
        <rect x="180" y="24" width="200" height="12" fill="#10B981" fillOpacity="0.1" />
        <line x1="180" y1="30" x2="380" y2="30" stroke="#10B981" strokeWidth="1.5" />

        {/* Scattered noisy unverified data points on left */}
        <circle cx="40" cy="12" r="2" fill="#E11D48" opacity="0.6" />
        <circle cx="70" cy="48" r="2" fill="#E11D48" opacity="0.6" />
        <circle cx="100" cy="8" r="2" fill="#E11D48" opacity="0.6" />
        <circle cx="130" cy="30" r="2.5" fill="#F59E0B" />
        <circle cx="160" cy="31" r="2.5" fill="#34D399" />
        <circle cx="240" cy="30" r="3" fill="#10B981" />
        <circle cx="320" cy="30" r="3" fill="#10B981" />
      </svg>
      <div className="text-[10px] font-mono text-slate-400 text-center">
        Claims become useful when measured against verified assay thresholds.
      </div>
    </div>
  );
};

/**
 * TRANSITION E: BID / ASK CONVERGENCE
 * Two sparse sets of signals approach one another but do not connect immediately.
 * Only after requirements align does a central point illuminate.
 * Meaning: "A match exists when requirements align."
 */
export const BidAskConvergenceTransition: React.FC<TransitionProps> = ({
  className = "w-full max-w-xl mx-auto my-8",
}) => {
  return (
    <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-900 select-none ${className}`}>
      <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2 flex items-center justify-between">
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          REQUIREMENT CONVERGENCE
        </span>
        <span className="text-slate-400">SPECIFICATION ALIGNMENT</span>
      </div>

      <svg viewBox="0 0 400 60" fill="none" className="w-full h-12 overflow-visible" aria-hidden="true">
        {/* Buyer signal rails from left */}
        <path d="M20 20 L 190 30" stroke="#06B6D4" strokeWidth="1.2" />
        <path d="M20 40 L 190 30" stroke="#06B6D4" strokeWidth="1.2" />
        <text x="20" y="14" fill="#06B6D4" fontSize="8" fontFamily="monospace">BUYER SPEC</text>

        {/* Seller signal rails from right */}
        <path d="M380 20 L 210 30" stroke="#3B82F6" strokeWidth="1.2" />
        <path d="M380 40 L 210 30" stroke="#3B82F6" strokeWidth="1.2" />
        <text x="380" y="14" fill="#3B82F6" fontSize="8" fontFamily="monospace" textAnchor="end">SELLER MANDATE</text>

        {/* Illuminated convergence point in center */}
        <polygon points="200,24 206,30 200,36 194,30" fill="#34D399" className="filter drop-shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
        <circle cx="200" cy="30" r="1.5" fill="#FFFFFF" />
      </svg>
      <div className="text-[10px] font-mono text-slate-400 text-center">
        A match is not two people who both said "gold." A match exists when requirements align.
      </div>
    </div>
  );
};

/**
 * TRANSITION F: DOCUMENTARY TRADE
 * Abstract institutional document outlines appear sequentially:
 * mandate → requirements → evidence → procedure → agreement → settlement
 */
export const DocumentaryTradeTransition: React.FC<TransitionProps> = ({
  className = "w-full max-w-xl mx-auto my-8",
}) => {
  const docs = ["MANDATE", "REQUIREMENTS", "EVIDENCE", "PROCEDURE", "AGREEMENT", "SETTLEMENT"];
  return (
    <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-900 select-none ${className}`}>
      <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-3 flex items-center justify-between">
        <span className="text-amber-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          DOCUMENTARY TRADE PROGRESSION
        </span>
        <span className="text-slate-400">INSTITUTIONAL RECORD</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {docs.map((docTitle, idx) => (
          <div key={idx} className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center flex flex-col items-center gap-1">
            <div className="w-7 h-9 rounded bg-slate-950 border border-emerald-500/40 flex flex-col justify-center items-center gap-1 p-1">
              <div className="w-4 h-0.5 bg-emerald-400 rounded-full" />
              <div className="w-3 h-0.5 bg-slate-600 rounded-full" />
              <div className="w-3.5 h-0.5 bg-slate-600 rounded-full" />
            </div>
            <span className="text-[8px] font-mono font-bold text-slate-300 tracking-wider">
              {docTitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * TRANSITION G: SETTLEMENT
 * Two previously separated pathways complete simultaneously (economic consideration & performance/delivery).
 * Meaning: "Execution requires both sides to perform."
 */
export const SettlementTransition: React.FC<TransitionProps> = ({
  className = "w-full max-w-xl mx-auto my-8",
}) => {
  return (
    <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-900 select-none ${className}`}>
      <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2 flex items-center justify-between">
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          DUAL-LEG SETTLEMENT CONVERGENCE
        </span>
        <span className="text-slate-400">SIMULTANEOUS PERFORMANCE</span>
      </div>

      <svg viewBox="0 0 400 60" fill="none" className="w-full h-12 overflow-visible" aria-hidden="true">
        {/* Economic consideration rail (top) */}
        <line x1="30" y1="20" x2="200" y2="28" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="30" y="14" fill="#F59E0B" fontSize="8" fontFamily="monospace">CONSIDERATION (FUNDS)</text>

        {/* Physical performance rail (bottom) */}
        <line x1="30" y1="42" x2="200" y2="32" stroke="#10B981" strokeWidth="1.5" />
        <text x="30" y="55" fill="#10B981" fontSize="8" fontFamily="monospace">PERFORMANCE (DELIVERY)</text>

        {/* Simultaneous settlement node */}
        <circle cx="200" cy="30" r="5" fill="#34D399" className="filter drop-shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
        <circle cx="200" cy="30" r="2" fill="#FFFFFF" />

        {/* Verified trade execution output */}
        <line x1="205" y1="30" x2="380" y2="30" stroke="#10B981" strokeWidth="2" strokeDasharray="2 2" />
        <text x="380" y="34" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="end">SETTLED RECORD</text>
      </svg>
      <div className="text-[10px] font-mono text-slate-400 text-center">
        Execution requires both sides to perform simultaneously.
      </div>
    </div>
  );
};

/**
 * TRANSITION H: DEAL KILLED
 * A signal reaches a gate and stops quietly.
 * Meaning: "REJECTION IS PART OF THE PRODUCT."
 */
export const DealKilledTransition: React.FC<TransitionProps> = ({
  className = "w-full max-w-xl mx-auto my-8",
}) => {
  return (
    <div className={`p-4 rounded-2xl bg-slate-950/80 border border-slate-900 select-none ${className}`}>
      <div className="text-[10px] font-mono tracking-widest text-rose-400 uppercase mb-2 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          FILTERING THRESHOLD
        </span>
        <span className="text-slate-400">DISQUALIFICATION GATE</span>
      </div>

      <svg viewBox="0 0 400 50" fill="none" className="w-full h-10 overflow-visible" aria-hidden="true">
        {/* Unverified proposal approaches */}
        <line x1="20" y1="25" x2="190" y2="25" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 2" />
        <text x="20" y="16" fill="#94A3B8" fontSize="8" fontFamily="monospace">UNVERIFIED CLAIM</text>

        {/* Firm barrier gate */}
        <line x1="190" y1="10" x2="190" y2="40" stroke="#F43F5E" strokeWidth="2" />
        <circle cx="190" cy="25" r="3" fill="#F43F5E" />

        {/* Empty void beyond - Deal halted without drama */}
        <line x1="195" y1="25" x2="380" y2="25" stroke="#334155" strokeWidth="0.75" strokeDasharray="1 4" opacity="0.3" />
        <text x="380" y="28" fill="#64748B" fontSize="8" fontFamily="monospace" textAnchor="end">PROGRESSION HALTED</text>
      </svg>
      <div className="text-[10px] font-mono text-slate-300 font-bold text-center">
        REJECTION IS PART OF THE PRODUCT. Killing weak deals early protects reputational balance sheets.
      </div>
    </div>
  );
};
