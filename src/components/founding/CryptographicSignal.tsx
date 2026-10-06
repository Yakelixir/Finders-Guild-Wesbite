import React from "react";

interface CryptographicSignalProps {
  label?: string;
  className?: string;
  variant?: "inline" | "banner" | "compact";
}

/**
 * Tasteful, restrained cryptographic signal transition:
 * Raw hash telemetry / particles → converging vector rails → structured decision record.
 * Respects prefers-reduced-motion.
 */
export const CryptographicSignal: React.FC<CryptographicSignalProps> = ({
  label = "SIGNAL → STRUCTURE → HUMAN DECISION",
  className = "",
  variant = "inline",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-3 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800/90 text-xs font-mono text-slate-400 select-none overflow-hidden ${className}`}
      role="presentation"
      aria-label="Cryptographic signal visualization"
    >
      {/* Animated / styled micro-hash telemetry sequence */}
      <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono tracking-tighter shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse motion-reduce:animate-none" />
        <span className="opacity-75">0x7F2B</span>
      </div>

      {/* Converging vector line rail */}
      <svg
        viewBox="0 0 48 12"
        className="w-12 h-3 text-slate-600 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        {/* Converging nodes into single verified line */}
        <path d="M0 2L18 6" className="stroke-slate-600" />
        <path d="M0 6L18 6" className="stroke-emerald-500/70" />
        <path d="M0 10L18 6" className="stroke-slate-600" />
        <line x1="18" y1="6" x2="48" y2="6" className="stroke-emerald-400" strokeDasharray="2 1.5" />
      </svg>

      {/* Verified readable record badge */}
      <span className="text-[10px] tracking-widest text-slate-300 uppercase font-semibold">
        {label}
      </span>
    </div>
  );
};
