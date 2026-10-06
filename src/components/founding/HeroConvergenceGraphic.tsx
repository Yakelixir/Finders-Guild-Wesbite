import React from "react";

interface HeroConvergenceGraphicProps {
  className?: string;
}

/**
 * MASTER HERO VISUAL
 * Implements Section 6 of Master Rebuild:
 * Multiple commodity/trading signals enter from different directions:
 * (cargo, assay/evidence, buyer, seller, capital, authority, logistics, compliance)
 * Subtle fragmentation converging toward one luminous qualification point.
 * Only a smaller number emerge as structured transaction records.
 * Visual meaning: "Not everything that enters deserves to exit."
 */
export const HeroConvergenceGraphic: React.FC<HeroConvergenceGraphicProps> = ({
  className = "w-full max-w-2xl mx-auto h-[180px] sm:h-[220px]",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none overflow-visible ${className}`}
      role="img"
      aria-label="Trading signals converging toward qualification gate and structured execution records"
    >
      <svg
        viewBox="0 0 600 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Luminous central qualification bloom */}
          <radialGradient id="heroGateBloom" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>

          {/* Incoming signal fiber gradients */}
          <linearGradient id="fiberTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="fiberBottom" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
          </linearGradient>

          {/* Structured record card gradient */}
          <linearGradient id="recordDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D1527" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#040813" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Ambient illumination behind qualification gate */}
        <circle cx="360" cy="120" r="90" fill="url(#heroGateBloom)" />

        {/* --- LEFT: FRAGMENTED UNSTRUCTURED INCOMING SIGNALS --- */}
        {/* Subtle coordinate reference grid */}
        <g opacity="0.18" stroke="#06B6D4" strokeWidth="0.75" strokeDasharray="3 4">
          <line x1="40" y1="40" x2="40" y2="200" />
          <line x1="100" y1="30" x2="100" y2="210" />
          <line x1="160" y1="20" x2="160" y2="220" />
          <line x1="220" y1="20" x2="220" y2="220" />
          <line x1="20" y1="120" x2="280" y2="120" />
        </g>

        {/* Incoming Fragmented Nodes (representing cargo, assay, buyer, seller, capital, authority, logistics, compliance) */}
        {/* Cargo Signal */}
        <g opacity="0.85">
          <rect x="35" y="45" width="8" height="8" fill="#06B6D4" rx="1.5" />
          <text x="35" y="40" fill="#64748B" fontSize="7" fontFamily="monospace">CARGO</text>
        </g>
        {/* Buyer Mandate */}
        <g opacity="0.85">
          <rect x="65" y="95" width="7" height="7" stroke="#10B981" strokeWidth="1.2" fill="#022C22" rx="1" />
          <text x="65" y="90" fill="#64748B" fontSize="7" fontFamily="monospace">BUYER</text>
        </g>
        {/* Assay Lab Evidence */}
        <g opacity="0.85">
          <rect x="110" y="30" width="8" height="8" fill="#34D399" fillOpacity="0.8" rx="1.5" />
          <text x="110" y="24" fill="#64748B" fontSize="7" fontFamily="monospace">ASSAY</text>
        </g>
        {/* Capital Facility */}
        <g opacity="0.85">
          <rect x="50" y="165" width="8" height="8" stroke="#F59E0B" strokeWidth="1.2" fill="#451A03" rx="1.5" />
          <text x="50" y="184" fill="#64748B" fontSize="7" fontFamily="monospace">CAPITAL</text>
        </g>
        {/* Seller Allocation */}
        <g opacity="0.85">
          <rect x="140" y="180" width="8" height="8" fill="#3B82F6" rx="1.5" />
          <text x="140" y="198" fill="#64748B" fontSize="7" fontFamily="monospace">SELLER</text>
        </g>
        {/* Logistics & Berth */}
        <g opacity="0.85">
          <rect x="180" y="65" width="7" height="7" fill="#06B6D4" rx="1" />
        </g>
        {/* Authority / PCO */}
        <g opacity="0.85">
          <rect x="220" y="145" width="7" height="7" stroke="#10B981" strokeWidth="1.2" fill="#064E3B" rx="1" />
        </g>

        {/* Floating noise micro-particles */}
        <circle cx="25" cy="80" r="1.5" fill="#06B6D4" opacity="0.5" />
        <circle cx="85" cy="140" r="1.5" fill="#10B981" opacity="0.7" />
        <circle cx="160" cy="110" r="1.5" fill="#34D399" opacity="0.6" />
        <circle cx="130" cy="70" r="1.5" fill="#06B6D4" opacity="0.5" />
        <circle cx="210" cy="90" r="1.5" fill="#10B981" opacity="0.8" />
        <circle cx="250" cy="160" r="1.5" fill="#06B6D4" opacity="0.4" />

        {/* Rejected signals that dead-end before gate */}
        <path d="M43 53 Q 120 70, 190 75" stroke="#E11D48" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.35" />
        <circle cx="190" cy="75" r="2" fill="#E11D48" opacity="0.4" />

        <path d="M58 169 Q 140 150, 210 160" stroke="#E11D48" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.35" />
        <circle cx="210" cy="160" r="2" fill="#E11D48" opacity="0.4" />

        {/* --- CENTER: CONVERGING FIBERS TOWARD QUALIFICATION GATE --- */}
        <g fill="none">
          <path d="M118 38 C 190 40, 260 90, 350 118" stroke="url(#fiberTop)" strokeWidth="1.4" />
          <path d="M72 98 C 160 100, 250 110, 350 119" stroke="url(#fiberTop)" strokeWidth="1.6" />
          <path d="M187 68 C 240 75, 290 105, 350 120" stroke="url(#fiberTop)" strokeWidth="1.2" />
          <path d="M227 148 C 270 145, 310 130, 350 121" stroke="url(#fiberBottom)" strokeWidth="1.5" />
          <path d="M148 184 C 210 180, 280 145, 350 122" stroke="url(#fiberBottom)" strokeWidth="1.3" />
        </g>

        {/* Central Luminous Qualification Gate (The Single Verified Node) */}
        <g transform="translate(360, 120)">
          <polygon
            points="0,-12 12,0 0,12 -12,0"
            fill="#34D399"
            stroke="#10B981"
            strokeWidth="2"
            className="filter drop-shadow-[0_0_12px_rgba(52,211,153,1)]"
          />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        </g>

        {/* Verified single execution rail exiting gate */}
        <line x1="372" y1="120" x2="420" y2="120" stroke="#34D399" strokeWidth="2.5" strokeDasharray="3 2" />

        {/* --- RIGHT: STRUCTURED INSTITUTIONAL TRANSACTION RECORDS --- */}
        {/* Layered Document 3 (Back) */}
        <rect
          x="445"
          y="50"
          width="110"
          height="140"
          rx="6"
          fill="url(#recordDocGrad)"
          stroke="#1E293B"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Layered Document 2 (Middle) */}
        <rect
          x="430"
          y="42"
          width="110"
          height="140"
          rx="6"
          fill="url(#recordDocGrad)"
          stroke="#334155"
          strokeWidth="1.2"
          opacity="0.65"
        />

        {/* Layered Document 1 (Front Primary Verified Corporate Deal Card) */}
        <g>
          <rect
            x="415"
            y="35"
            width="115"
            height="145"
            rx="6"
            fill="url(#recordDocGrad)"
            stroke="#10B981"
            strokeWidth="1.75"
            className="filter drop-shadow-[0_8px_24px_rgba(16,185,129,0.2)]"
          />

          {/* Corporate Header & Record Code */}
          <line x1="430" y1="55" x2="480" y2="55" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
          <line x1="430" y1="67" x2="510" y2="67" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />

          {/* Structured Transaction Data Rails */}
          <line x1="430" y1="78" x2="500" y2="78" stroke="#64748B" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="430" y1="88" x2="515" y2="88" stroke="#64748B" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="430" y1="98" x2="475" y2="98" stroke="#64748B" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="430" y1="108" x2="510" y2="108" stroke="#64748B" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="430" y1="118" x2="490" y2="118" stroke="#64748B" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="430" y1="128" x2="465" y2="128" stroke="#64748B" strokeWidth="1.4" strokeLinecap="round" />

          {/* Attributed Seal / Signature Stamp */}
          <rect x="430" y="142" width="40" height="18" rx="2" fill="#042F2E" stroke="#10B981" strokeWidth="1" />
          <line x1="436" y1="151" x2="464" y2="151" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="505" cy="151" r="5" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.2" />
        </g>

        {/* Telemetry Annotation Label */}
        <text x="360" y="150" fill="#10B981" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="0.1em">
          QUALIFIED CONVERGENCE
        </text>
        <text x="472" y="200" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">
          STRUCTURED TRANSACTION RECORD
        </text>
      </svg>
    </div>
  );
};
