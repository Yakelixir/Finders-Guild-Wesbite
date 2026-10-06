import React from "react";
import { RoleId } from "../../types/foundingFirm";
import { MEDIA_SOURCES } from "../../data/foundingFirmData";
import { InstitutionalAudioPlayer } from "./InstitutionalAudioPlayer";
import { BidAskConvergenceTransition } from "./TradingTransitions";

interface RelationshipThesisMediaProps {
  selectedRole: RoleId;
}

export const RelationshipThesisMedia: React.FC<RelationshipThesisMediaProps> = ({
  selectedRole,
}) => {
  const asset = MEDIA_SOURCES.ndas;

  // Exact Section 35 personalized role context lines
  const roleContextMap: Record<RoleId, string> = {
    trader: "Protection should preserve good flow, not prevent legitimate transactions from reaching the desk.",
    originator: "Your relationships need protection without making every introduction impossible.",
    capital: "Contractual complexity is not counterparty quality.",
    compliance: "Governance begins before signatures.",
    operator: "Protection and momentum must coexist.",
    principal: "Boundaries should protect authority without creating theater.",
  };

  const contextSentence = roleContextMap[selectedRole] || roleContextMap.trader;

  return (
    <section id="relationship-thesis" className="relative py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-900">
      
      {/* Bid / Ask Convergence Transition Motif */}
      <BidAskConvergenceTransition className="mb-10" />

      {/* Section Header (Section 34) */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
          <span>THE BOUNDARY · MEDIA 02</span>
        </div>

        <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
          RELATIONSHIPS ARE NOT INVENTORY.
        </h2>

        <p className="text-base sm:text-lg text-emerald-300 font-serif-editorial">
          “They are assets to be protected, attributed and strengthened.”
        </p>

        <p className="text-xs sm:text-sm text-slate-300 font-sans-ui max-w-xl mx-auto leading-relaxed pt-1">
          Protection matters. But premature contractual pressure can become a substitute for qualification, judgment and earned trust.
        </p>
      </div>

      {/* Custom Audio Player with Personalized Sentence (Section 35) */}
      <InstitutionalAudioPlayer
        asset={asset}
        roleContextLine={contextSentence}
        className="max-w-3xl mx-auto"
      />

    </section>
  );
};
