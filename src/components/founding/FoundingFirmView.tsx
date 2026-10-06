import React from "react";
import { GuidedRFPJourney } from "./GuidedRFPJourney";

interface FoundingFirmViewProps {
  onBackToCommunity: () => void;
}

export const FoundingFirmView: React.FC<FoundingFirmViewProps> = ({ onBackToCommunity }) => {
  return <GuidedRFPJourney onBackToCommunity={onBackToCommunity} />;
};


