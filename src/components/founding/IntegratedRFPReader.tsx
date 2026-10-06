import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Download, Printer, FileText, Check, ShieldCheck, Maximize2, Minimize2 } from "lucide-react";
import { RFP_DISCUSSION_DRAFT_PAGES } from "../../data/foundingFirmData";
import { downloadRfpPdf } from "../../utils/generateRfpPdf";
import { trackEvent } from "../../utils/analytics";
import { DocumentaryTradeTransition } from "./TradingTransitions";

interface IntegratedRFPReaderProps {
  onScheduleClick?: () => void;
}

export const IntegratedRFPReader: React.FC<IntegratedRFPReaderProps> = ({ onScheduleClick }) => {
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const totalPages = RFP_DISCUSSION_DRAFT_PAGES.length;
  const page = RFP_DISCUSSION_DRAFT_PAGES[currentPageIdx];

  const handleNextPage = () => {
    if (currentPageIdx < totalPages - 1) {
      setCurrentPageIdx(currentPageIdx + 1);
      trackEvent("rfp_page_navigate", { pageNumber: currentPageIdx + 2 });
    }
  };

  const handlePrevPage = () => {
    if (currentPageIdx > 0) {
      setCurrentPageIdx(currentPageIdx - 1);
      trackEvent("rfp_page_navigate", { pageNumber: currentPageIdx });
    }
  };

  const handleDownload = () => {
    trackEvent("rfp_download", { title: "Request for Founding Participation - Discussion Draft.pdf" });
    downloadRfpPdf();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  const handlePrint = () => {
    trackEvent("rfp_print", { pageNumber: currentPageIdx + 1 });
    window.print();
  };

  return (
    <section id="rfp-document" className="relative py-12 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Documentary Trade Transition Motif */}
      <DocumentaryTradeTransition className="mb-8" />

      {/* Header section (Section 31) */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
          <span>DISCUSSION DRAFT · SEPTEMBER 2026</span>
        </div>

        <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase">
          THE SYSTEM IS NOT THE COMPANY.
        </h2>
        <h3 className="font-serif-display text-lg sm:text-2xl text-emerald-300 font-bold tracking-tight">
          WHAT IF THE OPERATING PATTERN BECOMES A FIRM?
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 font-sans-ui max-w-2xl mx-auto leading-relaxed pt-1">
          This document explains what we have observed, what we believe could be built, the people required, the economic principles we want to protect, and the questions we believe must be answered before anything more formal exists.
        </p>

        <div className="pt-2 text-[11px] font-mono text-slate-400">
          Discussion draft. Not an offer of securities. Not a request for commitment.
        </div>
      </div>

      {/* Reader Container */}
      <div className={`relative rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl transition-all duration-300 ${
        isExpanded ? "fixed inset-2 sm:inset-6 z-50 flex flex-col bg-slate-950 max-h-none" : ""
      }`}>
        
        {/* Navigation & Utilities Bar */}
        <div className="p-3 sm:p-4 bg-slate-950 rounded-t-2xl border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          
          {/* Page Indicators & Step Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPageIdx === 0}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-slate-200 flex items-center gap-1 transition-colors cursor-pointer"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <div className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-semibold flex items-center gap-1.5">
              <span className="text-emerald-400">Page {page.pageNumber}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">{totalPages}</span>
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPageIdx === totalPages - 1}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-slate-200 flex items-center gap-1 transition-colors cursor-pointer"
              aria-label="Next Page"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Page Title Snippet */}
          <div className="hidden md:block text-slate-300 text-xs font-serif-editorial italic truncate max-w-xs">
            {page.title}
          </div>

          {/* Utilities: PDF Download, Print, Expand */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer text-xs font-semibold"
              title="Download clean discussion draft PDF"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Downloaded (.pdf)</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-xs"
              title="Print this document page"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={isExpanded ? "Minimize Reader" : "Full View Mode"}
              aria-label="Toggle full view mode"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Quick Page Jump Tabs */}
        <div className="px-3 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-1 overflow-x-auto no-scrollbar">
          {RFP_DISCUSSION_DRAFT_PAGES.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentPageIdx(idx);
                trackEvent("rfp_page_tab_click", { pageNumber: idx + 1 });
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                currentPageIdx === idx
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              P{p.pageNumber}: {p.title.split(" ").slice(0, 3).join(" ")}...
            </button>
          ))}
        </div>

        {/* Document Body Canvas */}
        <div className={`p-5 sm:p-8 lg:p-10 bg-slate-950/80 font-serif-editorial text-slate-100 selection:bg-emerald-500/20 overflow-y-auto ${
          isExpanded ? "flex-1" : "max-h-[68vh] sm:max-h-[75vh]"
        }`}>
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Top Page Banner */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                <span>{page.header}</span>
                <span>{page.subHeader}</span>
              </div>
              <h3 className="mt-3 font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                {page.title}
              </h3>
            </div>

            {/* Document Sections */}
            {page.sections.map((sec, sIdx) => (
              <div key={sIdx} className="space-y-3.5">
                {sec.heading && (
                  <h4 className="font-serif-display text-sm sm:text-base font-bold text-emerald-400 tracking-wider uppercase pt-2">
                    {sec.heading}
                  </h4>
                )}

                {/* Callout box */}
                {sec.callout && (
                  <div className={`p-4 sm:p-5 rounded-xl border ${
                    sec.callout.type === "quote"
                      ? "bg-slate-900/90 border-emerald-500/40"
                      : sec.callout.type === "principle"
                      ? "bg-slate-900/90 border-cyan-500/40"
                      : "bg-slate-900/90 border-emerald-500/30"
                  }`}>
                    <div className="text-[10px] font-mono tracking-widest uppercase mb-1.5 text-slate-400">
                      {sec.callout.label}
                    </div>
                    <blockquote className="text-base sm:text-lg text-slate-100 italic leading-relaxed">
                      “{sec.callout.text}”
                    </blockquote>
                  </div>
                )}

                {/* Body paragraphs */}
                {sec.body.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {para}
                  </p>
                ))}

                {/* Bullets - CLEAN VECTOR DIAMOND ICONS (NO %Æ GLYPHS) */}
                {sec.bullets && (
                  <ul className="space-y-2 pl-1 my-2">
                    {sec.bullets.map((bItem, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans-ui">
                        <svg className="w-3 h-3 text-emerald-400 mt-1 shrink-0" viewBox="0 0 12 12" fill="currentColor">
                          <polygon points="6,1 11,6 6,11 1,6" />
                        </svg>
                        <span>{bItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Bottom Pagination & Progress Bar */}
            <div className="pt-6 mt-8 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Discussion draft · Confidential &amp; relationship-driven</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPageIdx === 0}
                  className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 disabled:opacity-30 border border-slate-800 text-slate-300 cursor-pointer"
                >
                  ← Prev Page
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPageIdx === totalPages - 1}
                  className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-slate-950 font-bold cursor-pointer"
                >
                  Next Page →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
