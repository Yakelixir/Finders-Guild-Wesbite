import React from "react";
import { BookOpen, Download, ShieldCheck, FileText, Check } from "lucide-react";
import { trackEvent } from "../../utils/analytics";

interface RFPFeatureCardProps {
  onOpenRFP: () => void;
  onDownloadRFP: () => void;
  downloadSuccess?: boolean;
}

export const RFPFeatureCard: React.FC<RFPFeatureCardProps> = ({
  onOpenRFP,
  onDownloadRFP,
  downloadSuccess = false,
}) => {
  return (
    <section id="rfp-section" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono uppercase tracking-wider mb-3">
          <span>THE FOUNDATIONAL COMMERCIAL DOCUMENT</span>
        </div>
        <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
          THEN READ THE DISCUSSION DRAFT.
        </h2>
      </div>

      {/* Main RFP Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Card Header Info */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <FileText className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wider">FOUNDING TRADING FIRM RFP</span>
          </div>
          <div className="text-slate-400">
            BRYANT STRATTON · SEPTEMBER 2026 (6 PAGES)
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2 mb-6">
          <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Building a Relationship-Driven Trading Firm
          </h3>
          <div className="text-sm sm:text-base font-serif-editorial text-emerald-300 italic">
            Request for Founding Participation
          </div>
        </div>

        {/* Description from Prompt */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
          The RFP explains what we have observed, what we believe could be built, the people we think are required, the economic principles we want to protect, and the questions that need to be answered before anything more formal should exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4 border-t border-slate-800">
          <button
            onClick={() => {
              trackEvent("rfp_open", { source: "rfp_card" });
              onOpenRFP();
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            id="btn-read-rfp-primary"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read the RFP (6 Pages)</span>
          </button>

          <button
            onClick={() => {
              trackEvent("rfp_download", { source: "rfp_card" });
              onDownloadRFP();
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors flex items-center justify-center gap-2 cursor-pointer"
            id="btn-download-rfp"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Discussion Draft Exported</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download the RFP</span>
              </>
            )}
          </button>
        </div>

        {/* Supporting mandatory line */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>This is a discussion draft, not an offer, partnership agreement, or request for commitment.</span>
        </div>

      </div>
    </section>
  );
};
