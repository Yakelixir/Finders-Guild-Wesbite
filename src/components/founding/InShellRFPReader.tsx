import React from "react";
import { RFP_DISCUSSION_DRAFT_PAGES } from "../../data/foundingFirmData";

interface InShellRFPReaderProps {
  currentPageIdx: number;
}

export const InShellRFPReader: React.FC<InShellRFPReaderProps> = ({
  currentPageIdx,
}) => {
  const page = RFP_DISCUSSION_DRAFT_PAGES[currentPageIdx];

  return (
    <div className="w-full h-full flex flex-col justify-start max-w-3xl mx-auto px-2 sm:px-6 py-1 select-text relative overflow-hidden">
      
      {/* Document Page Viewing Surface: Guaranteed smooth scrolling up & down */}
      <div
        className="flex-1 w-full overflow-y-auto overflow-x-hidden px-4 sm:px-8 py-4 sm:py-6 bg-slate-950/80 border border-slate-800/80 rounded-2xl shadow-2xl scrollbar-thin overscroll-contain touch-pan-y"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="max-w-2xl mx-auto space-y-4">
          
          {/* Clean Document Page Title (Uncluttered: No redundant Bryant Stratton / Page 1 of 6 / Founding participation header) */}
          <div className="border-b border-slate-800/60 pb-3">
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1 font-semibold">
              {page.header}
            </div>
            <h3 className="font-serif-display text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {page.title}
            </h3>
            {page.subHeader && (
              <p className="text-xs text-slate-400 font-sans-ui mt-1">
                {page.subHeader}
              </p>
            )}
          </div>

          {/* Page Sections Content */}
          <div className="space-y-4 text-xs sm:text-sm font-sans-ui text-slate-300 leading-relaxed pt-1">
            {page.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-2">
                {section.heading && (
                  <h4 className="font-serif-display text-xs sm:text-sm font-bold text-slate-100 uppercase tracking-wide pt-2">
                    {section.heading}
                  </h4>
                )}

                {section.body.map((par, pIdx) => (
                  <p key={pIdx} className="text-slate-300 leading-relaxed">
                    {par}
                  </p>
                ))}

                {section.callout && (
                  <div className="p-3.5 my-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-200 font-serif-editorial italic text-xs sm:text-sm leading-relaxed shadow-sm">
                    "{section.callout.text}"
                  </div>
                )}

                {section.bullets && (
                  <ul className="space-y-1.5 pl-2 pt-1">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-300 leading-normal">
                        <span className="text-emerald-400 shrink-0 mt-0.5 font-bold">✦</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Bottom spacing inside scrollable document */}
          <div className="h-6" />
        </div>
      </div>

    </div>
  );
};
