import React from "react";

interface CryptographicDiagramProps {
  className?: string;
  variant?: "hero" | "compact" | "banner";
}

/**
 * High-fidelity vector graphic reproducing the exact aesthetic from the user's mockups:
 * Left: Scattered glowing particles, hash nodes, and micro-grid dots (cyan & emerald)
 * Center: Smooth vector conduits/fibers converging into a single green diamond verification node
 * Right: Layered clean document pages with horizontal text rails and radiant edges
 */
export const CryptographicDiagram: React.FC<CryptographicDiagramProps> = ({
  className = "w-full max-w-[280px] sm:max-w-[340px] h-[100px] sm:h-[120px]",
  variant = "hero",
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Subtle background radial glow */}
          <radialGradient id="cryptoGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>

          {/* Conduit line gradient */}
          <linearGradient id="conduitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#10B981" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
          </linearGradient>

          {/* Document page gradient */}
          <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="240" cy="80" r="70" fill="url(#cryptoGlow)" />

        {/* --- LEFT: SCATTERED PARTICLES & MICRO-GRID --- */}
        {/* Subtle grid crosshairs */}
        <g opacity="0.25" stroke="#06B6D4" strokeWidth="0.75">
          <line x1="40" y1="40" x2="40" y2="120" strokeDasharray="2 3" />
          <line x1="80" y1="30" x2="80" y2="130" strokeDasharray="2 3" />
          <line x1="120" y1="20" x2="120" y2="140" strokeDasharray="2 3" />
          <line x1="20" y1="80" x2="150" y2="80" strokeDasharray="2 3" />
        </g>

        {/* Scattered Cyan & Emerald Nodes / Hashes */}
        <rect x="35" y="55" width="6" height="6" fill="#06B6D4" fillOpacity="0.8" rx="1" />
        <rect x="60" y="32" width="5" height="5" stroke="#10B981" strokeWidth="1.2" fill="#022C22" rx="1" />
        <rect x="85" y="48" width="7" height="7" fill="#10B981" fillOpacity="0.9" rx="1.5" />
        <rect x="50" y="95" width="6" height="6" stroke="#06B6D4" strokeWidth="1" fill="#082F49" rx="1" />
        <rect x="75" y="115" width="5" height="5" fill="#34D399" fillOpacity="0.7" rx="1" />
        <rect x="110" y="70" width="7" height="7" fill="#06B6D4" rx="1.5" />
        <rect x="105" y="102" width="6" height="6" stroke="#10B981" strokeWidth="1" fill="#042F2E" rx="1" />
        <rect x="130" y="45" width="5" height="5" fill="#10B981" rx="1" />
        <rect x="135" y="88" width="6" height="6" fill="#34D399" rx="1" />

        {/* Micro particles */}
        <circle cx="25" cy="70" r="1.5" fill="#06B6D4" opacity="0.6" />
        <circle cx="70" cy="75" r="1.5" fill="#10B981" opacity="0.8" />
        <circle cx="95" cy="30" r="1.5" fill="#34D399" opacity="0.6" />
        <circle cx="120" cy="125" r="1.5" fill="#06B6D4" opacity="0.5" />
        <circle cx="150" cy="62" r="1.5" fill="#10B981" opacity="0.7" />

        {/* --- CENTER: CONVERGING FIBERS / VECTOR CONDUITS --- */}
        <g stroke="url(#conduitGrad)" strokeWidth="1.2" fill="none">
          {/* Top curve */}
          <path d="M70 34 C 130 35, 180 65, 235 78" opacity="0.6" />
          <path d="M92 51 C 140 52, 185 70, 235 79" opacity="0.85" />
          {/* Center rail */}
          <path d="M117 73 C 150 74, 190 79, 235 80" strokeWidth="1.6" opacity="1" />
          {/* Bottom curves */}
          <path d="M141 91 C 170 90, 200 84, 235 81" opacity="0.85" />
          <path d="M80 117 C 135 115, 185 95, 235 82" opacity="0.6" />
          <path d="M56 98 C 110 105, 175 90, 235 81" opacity="0.5" />
        </g>

        {/* Converging Core Diamond Node (Glowing Verification Gate) */}
        <g transform="translate(240, 80)">
          <polygon
            points="0,-8 8,0 0,8 -8,0"
            fill="#34D399"
            stroke="#10B981"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_8px_rgba(52,211,153,0.9)]"
          />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>

        {/* Single outgoing verified conduit rail into document */}
        <line x1="248" y1="80" x2="265" y2="80" stroke="#34D399" strokeWidth="1.5" strokeDasharray="2 2" />

        {/* --- RIGHT: STRUCTURED DOCUMENT PAGES --- */}
        {/* Back page 3 */}
        <rect
          x="285"
          y="35"
          width="75"
          height="95"
          rx="5"
          fill="url(#docGrad)"
          stroke="#1E293B"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Middle page 2 */}
        <rect
          x="275"
          y="30"
          width="75"
          height="95"
          rx="5"
          fill="url(#docGrad)"
          stroke="#334155"
          strokeWidth="1.2"
          opacity="0.7"
        />

        {/* Front page 1 (Primary Verified Document) */}
        <g>
          <rect
            x="265"
            y="25"
            width="75"
            height="95"
            rx="5"
            fill="url(#docGrad)"
            stroke="#10B981"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_4px_16px_rgba(16,185,129,0.15)]"
          />

          {/* Structured Text Lines (Cyan & Emerald rails) */}
          <line x1="277" y1="42" x2="315" y2="42" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="277" y1="52" x2="328" y2="52" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <line x1="277" y1="60" x2="320" y2="60" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="277" y1="68" x2="325" y2="68" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="277" y1="76" x2="310" y2="76" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="277" y1="84" x2="328" y2="84" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="277" y1="92" x2="300" y2="92" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="277" y1="102" x2="318" y2="102" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
};
