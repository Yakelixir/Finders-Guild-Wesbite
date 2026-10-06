import React from "react";
import { RoleId } from "../../types/foundingFirm";

interface RoleVectorProps {
  role: RoleId;
  className?: string;
}

/**
 * Coherent custom stroke-based vector icon system for Finder's Guild Founding Roles.
 * 1. Trader / Desk Operator: Converging market signals / execution node
 * 2. Originator / Representative: Linked circles / relationship bridge
 * 3. Capital / Trade Finance: Layered capital blocks / liquidity flow
 * 4. Diligence / Compliance / Legal: Shield + verification path / checkpoint gate
 * 5. Deal Operator / Facilitator: Routed nodes / coordination map
 * 6. Principal / Strategic Partner: Anchor / source node / asset origin
 */
export const RoleVector: React.FC<RoleVectorProps> = ({ role, className = "w-6 h-6" }) => {
  switch (role) {
    case "trader":
      // Converging market signals / execution node
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Central diamond execution node */}
          <polygon points="12 8 16 12 12 16 8 12" className="fill-emerald-500/20 stroke-emerald-400" />
          {/* Converging signal vectors */}
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          {/* Diagonal market boundary ticks */}
          <path d="M5 5L7.5 7.5" strokeDasharray="1 1.5" />
          <path d="M19 5L16.5 7.5" strokeDasharray="1 1.5" />
          <path d="M5 19L7.5 16.5" strokeDasharray="1 1.5" />
          <path d="M19 19L16.5 16.5" strokeDasharray="1 1.5" />
          {/* Focal core point */}
          <circle cx="12" cy="12" r="1.2" className="fill-emerald-300 stroke-none" />
        </svg>
      );

    case "originator":
      // Linked circles / relationship bridge
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Left relationship node */}
          <circle cx="6.5" cy="12" r="4" className="fill-blue-500/15 stroke-blue-400" />
          <circle cx="6.5" cy="12" r="1.5" className="fill-blue-300 stroke-none" />
          {/* Right relationship node */}
          <circle cx="17.5" cy="12" r="4" className="fill-blue-500/15 stroke-blue-400" />
          <circle cx="17.5" cy="12" r="1.5" className="fill-blue-300 stroke-none" />
          {/* Protected relational bridge arch */}
          <path d="M10.5 10.5C11.5 9 12.5 9 13.5 10.5" strokeWidth="2" className="stroke-blue-300" />
          <path d="M10.5 13.5C11.5 15 12.5 15 13.5 13.5" strokeWidth="2" className="stroke-blue-300" />
          {/* Attribution guard marks */}
          <line x1="12" y1="4" x2="12" y2="6.5" strokeDasharray="1 1.5" />
          <line x1="12" y1="17.5" x2="12" y2="20" strokeDasharray="1 1.5" />
        </svg>
      );

    case "capital":
      // Layered capital blocks / liquidity flow
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Top capital block */}
          <path d="M12 2L3 7L12 12L21 7L12 2Z" className="fill-amber-500/20 stroke-amber-400" />
          {/* Middle tiered liquidity tranche */}
          <path d="M3 12L12 17L21 12" className="stroke-amber-400/80" />
          {/* Bottom base foundation */}
          <path d="M3 17L12 22L21 17" className="stroke-amber-300" />
          {/* Underwriting channel line */}
          <line x1="12" y1="7" x2="12" y2="17" strokeDasharray="1.5 2" className="stroke-amber-200" />
        </svg>
      );

    case "compliance":
      // Shield + verification path / checkpoint gate
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Institutional crest shield */}
          <path
            d="M12 3L4 6.5V12C4 16.8 7.4 21.2 12 22C16.6 21.2 20 16.8 20 12V6.5L12 3Z"
            className="fill-purple-500/15 stroke-purple-400"
          />
          {/* Internal verification check path */}
          <path d="M9 12L11.5 14.5L15.5 9.5" className="stroke-purple-300" strokeWidth="2" />
          {/* Horizontal stage gate delimiter */}
          <line x1="8" y1="18" x2="16" y2="18" strokeDasharray="1 1.5" className="stroke-purple-400/60" />
        </svg>
      );

    case "operator":
      // Routed nodes / coordination map (Deal Room)
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Central coordination hub */}
          <rect x="9.5" y="9.5" width="5" height="5" rx="1" className="fill-cyan-500/25 stroke-cyan-400" />
          {/* Satellite action nodes */}
          <circle cx="4" cy="5" r="2" className="stroke-cyan-300 fill-cyan-950" />
          <circle cx="20" cy="5" r="2" className="stroke-cyan-300 fill-cyan-950" />
          <circle cx="4" cy="19" r="2" className="stroke-cyan-300 fill-cyan-950" />
          <circle cx="20" cy="19" r="2" className="stroke-cyan-300 fill-cyan-950" />
          {/* Multi-way routed paths */}
          <path d="M5.5 6.5L9.5 9.5" />
          <path d="M18.5 6.5L14.5 9.5" />
          <path d="M5.5 17.5L9.5 14.5" />
          <path d="M18.5 17.5L14.5 14.5" />
        </svg>
      );

    case "principal":
      // Anchor / source node / asset origin
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          {/* Source node crown/beacon */}
          <circle cx="12" cy="6" r="3" className="fill-emerald-500/25 stroke-emerald-400" />
          <circle cx="12" cy="6" r="1" className="fill-emerald-200 stroke-none" />
          {/* Central stem */}
          <line x1="12" y1="9" x2="12" y2="19" strokeWidth="2" className="stroke-emerald-400" />
          {/* Grounded asset anchor base */}
          <path d="M5 13C5 17.5 8.1 21 12 21C15.9 21 19 17.5 19 13" className="stroke-emerald-300" />
          <line x1="4" y1="13" x2="6" y2="13" />
          <line x1="18" y1="13" x2="20" y2="13" />
          {/* Radiating source arcs */}
          <path d="M7 4C8.5 3 10.2 2.5 12 2.5C13.8 2.5 15.5 3 17 4" strokeDasharray="1 1.5" className="stroke-emerald-400/70" />
        </svg>
      );
  }
};
