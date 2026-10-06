import React, { useState } from "react";
import { ArrowRight, ArrowDown, ArrowLeft } from "lucide-react";

interface SignalActionProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "back" | "inline";
  iconDirection?: "forward" | "down" | "back";
  sublabel?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

/**
 * Institutional "Signal Action" Component
 * Transforms conventional buttons into precision trading-vector interactions.
 * Uses thin luminous line geometry, illuminated pulsing nodes, and micro-directional cues.
 */
export const SignalAction: React.FC<SignalActionProps> = ({
  label,
  onClick,
  variant = "primary",
  iconDirection,
  sublabel,
  disabled = false,
  className = "",
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Strip any accidental trailing arrows from label string so no duplicate arrow ever appears
  const cleanLabel = label.replace(/\s*(?:→|->|↓|←|<-)\s*$/g, "").trim();

  const direction = iconDirection || (variant === "back" ? "back" : variant === "secondary" ? "down" : "forward");

  const handleClick = () => {
    if (disabled) return;
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      onClick();
    }, 120);
  };

  if (variant === "back") {
    return (
      <button
        id={id}
        type="button"
        onClick={handleClick}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono tracking-wider uppercase text-slate-400 hover:text-white transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded-lg ${
          disabled ? "opacity-30 cursor-not-allowed" : ""
        } ${className}`}
        aria-label={cleanLabel}
      >
        <span className="flex items-center gap-1 transition-transform group-hover:-translate-x-1">
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400/80 group-hover:text-emerald-300" />
          <span className="w-3 sm:w-4 h-[1px] bg-slate-700 group-hover:bg-emerald-500/80 transition-colors" />
        </span>
        <span className="text-[11px] font-medium tracking-widest">{cleanLabel}</span>
      </button>
    );
  }

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative inline-flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded-xl ${
        disabled ? "opacity-40 cursor-not-allowed" : "hover:brightness-110 active:scale-[0.99]"
      } ${className}`}
      aria-label={cleanLabel}
    >
      <div
        className={`relative flex items-center justify-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border transition-all duration-300 overflow-hidden ${
          variant === "primary"
            ? "bg-slate-950/90 border-emerald-500/50 hover:border-emerald-400/90 text-emerald-300 hover:text-white shadow-[0_0_16px_rgba(16,185,129,0.12)] hover:shadow-[0_0_24px_rgba(16,185,129,0.25)]"
            : variant === "secondary"
            ? "bg-slate-950/70 border-slate-700/80 hover:border-slate-500 text-slate-300 hover:text-white shadow-sm"
            : "bg-transparent border-emerald-500/30 hover:border-emerald-400/70 text-emerald-400"
        }`}
      >
        {/* Leading Vector Rail */}
        <span className="hidden sm:flex items-center gap-1">
          <span
            className={`h-[1px] transition-all duration-300 ${
              isHovered ? "w-6 bg-emerald-400 shadow-[0_0_6px_#34d399]" : "w-3 bg-emerald-600/60"
            }`}
          />
          <span
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              isHovered
                ? "bg-emerald-300 shadow-[0_0_8px_#34d399] scale-125"
                : "bg-emerald-500/80"
            } ${isClicked ? "scale-150 bg-white" : ""}`}
          />
        </span>

        {/* Clean Action Label (No static duplicate arrow) */}
        <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
          {cleanLabel}
        </span>

        {/* Trailing Vector Rail & Single Stylized Arrow */}
        <span className="flex items-center gap-1.5">
          <span
            className={`h-[1px] transition-all duration-300 ${
              isHovered ? "w-5 bg-emerald-400" : "w-2.5 bg-emerald-600/50"
            }`}
          />
          {direction === "down" ? (
            <ArrowDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isHovered ? "translate-y-0.5 text-emerald-300" : "text-emerald-400"
              }`}
            />
          ) : (
            <ArrowRight
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isHovered ? "translate-x-0.5 text-emerald-300" : "text-emerald-400"
              }`}
            />
          )}
        </span>
      </div>

      {sublabel && (
        <span className="mt-1 text-[9px] sm:text-[10px] font-mono text-slate-400 tracking-wider">
          {sublabel}
        </span>
      )}
    </button>
  );
};
