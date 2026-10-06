import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download, Printer, Search, FileText, Check, Shield } from "lucide-react";
import { RFP_DISCUSSION_DRAFT_PAGES, RFPPageContent } from "../../data/foundingFirmData";
import { downloadRfpPdf } from "../../utils/generateRfpPdf";
import { trackEvent } from "../../utils/analytics";

interface RFPReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEOI: () => void;
}

export const RFPReaderModal: React.FC<RFPReaderModalProps> = ({
  isOpen,
  onClose,
  onOpenEOI,
}) => {
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const totalPages = RFP_DISCUSSION_DRAFT_PAGES.length;
  const page = RFP_DISCUSSION_DRAFT_PAGES[currentPageIdx];

  const handleNextPage = () => {
    if (currentPageIdx < totalPages - 1) {
      setCurrentPageIdx(currentPageIdx + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIdx > 0) {
      setCurrentPageIdx(currentPageIdx - 1);
    }
  };

  const handleDownload = async () => {
    trackEvent("rfp_download", { title: "Request for Founding Participation - Discussion Draft.pdf" });
    try {
      await downloadRfpPdf();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (e) {
      console.error("PDF download error", e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Founding Trading Firm RFP Reader"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Top Controls Bar */}
        <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-serif-display font-bold text-white tracking-wide">
                REQUEST FOR FOUNDING PARTICIPATION
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Bryant Stratton · Discussion Draft · Page {page.pageNumber} of {totalPages}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download Draft as Document"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Download Draft</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close RFP modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Page Switcher Navigation Bar */}
        <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrevPage}
              disabled={currentPageIdx === 0}
              className="p-1.5 rounded hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-2 text-slate-200">
              Page {currentPageIdx + 1} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPageIdx === totalPages - 1}
              className="p-1.5 rounded hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Page Jump Pills */}
          <div className="hidden sm:flex items-center gap-1">
            {RFP_DISCUSSION_DRAFT_PAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPageIdx(idx)}
                className={`w-6 h-6 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                  currentPageIdx === idx
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-400">
            CONFIDENTIAL DISCUSSION DRAFT
          </div>
        </div>

        {/* Page Document Body (Institutional Styling matching Bryant Stratton's PDF) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-950 font-serif-editorial text-slate-200 selection:bg-emerald-500/20">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Document Header */}
            <div className="border-b border-slate-800 pb-4 mb-6">
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                <span>{page.header}</span>
                <span>{page.subHeader}</span>
              </div>
              <h2 className="mt-4 font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {page.title}
              </h2>
            </div>

            {/* Sections */}
            {page.sections.map((sec, sIdx) => (
              <div key={sIdx} className="space-y-4">
                {sec.heading && (
                  <h3 className="font-serif-display text-base sm:text-lg font-bold text-emerald-400 tracking-wider uppercase pt-2">
                    {sec.heading}
                  </h3>
                )}

                {sec.callout && (
                  <div className={`p-4 sm:p-5 rounded-xl border ${
                    sec.callout.type === "quote"
                      ? "bg-slate-900/90 border-emerald-500/40"
                      : sec.callout.type === "principle"
                      ? "bg-slate-900/90 border-blue-500/40"
                      : "bg-slate-900/90 border-amber-500/30"
                  }`}>
                    <div className="text-[10px] font-mono tracking-widest uppercase mb-1.5 text-slate-400">
                      {sec.callout.label}
                    </div>
                    <div className="text-base sm:text-lg text-slate-100 italic leading-relaxed">
                      “{sec.callout.text}”
                    </div>
                  </div>
                )}

                {sec.body.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {para}
                  </p>
                ))}

                {sec.bullets && (
                  <ul className="space-y-2.5 my-3 pl-1">
                    {sec.bullets.map((bItem, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                        <span className="text-emerald-400 mt-1.5 text-xs">◆</span>
                        <span>{bItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Page Footer */}
            <div className="pt-8 mt-10 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span>Executive Summary &amp; Request for Founding Participation</span>
              <span>Page {page.pageNumber} of {totalPages}</span>
            </div>

          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Discussion draft · Not an offer of securities</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenEOI();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md text-center"
            >
              Proceed to Discussion Next Steps
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
