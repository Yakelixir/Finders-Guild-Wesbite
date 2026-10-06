import React from "react";
import { MessageSquare, Calendar, ShieldCheck, ArrowRight, BookOpen, UserCheck } from "lucide-react";
import { CryptographicSignal } from "./CryptographicSignal";
import { trackEvent } from "../../utils/analytics";

interface ReadyToTalkCloseProps {
  onOpenRFP: () => void;
}

export const ReadyToTalkClose: React.FC<ReadyToTalkCloseProps> = ({ onOpenRFP }) => {
  const CALENDAR_URL = "https://calendar.app.google/4Rx8cLttgJ61XNv8A";

  const conversationPrompts = [
    "What resonated with your market experience",
    "Where you think you could uniquely contribute",
    "What operational or legal boundaries you require",
    "What verification shields you would need to see",
    "What would make this an immediate no",
  ];

  return (
    <section id="ready-to-talk" className="relative py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800/80">
      
      {/* 1. READY TO TALK? (The Real Relationship Next Step) */}
      <div className="rounded-2xl bg-slate-900 border border-slate-700/80 p-5 sm:p-10 shadow-2xl mb-12 text-center sm:text-left">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE NEXT STEP</span>
          </div>

          <CryptographicSignal label="RELATIONSHIP INITIATION" />
        </div>

        <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
          READY TO TALK?
        </h2>

        <div className="space-y-3 text-base sm:text-lg text-slate-200 font-serif-editorial leading-relaxed max-w-3xl mb-6">
          <p className="text-xl sm:text-2xl text-emerald-300 font-medium">
            Go back to the person who sent you this page.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm font-sans-ui">
            We do not use automated intake funnels. This firm is being explored around real human relationships, mutual respect, and verified trust.
          </p>
        </div>

        {/* 5 Conversation Topics */}
        <div className="p-4 sm:p-6 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-left">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
            In your reply or upcoming discussion, tell them:
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-sans-ui">
            {conversationPrompts.map((prompt, pIdx) => (
              <li key={pIdx} className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✦</span>
                <span className="leading-relaxed">{prompt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("discovery_call_click", { source: "ready_to_talk" })}
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Follow-Up Discussion</span>
          </a>

          <button
            onClick={onOpenRFP}
            className="w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Review Full 6-Page Discussion Draft</span>
          </button>
        </div>

      </div>

      {/* 2. RESTRAINED INSTITUTIONAL CLOSE */}
      <div className="text-center max-w-3xl mx-auto space-y-5 pt-4">
        
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
          FOUNDING INVITATION
        </div>

        <h3 className="font-serif-display text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
          INTO THE BREACH, WE GO, DEAR FRIENDS.
        </h3>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800">
          <blockquote className="font-serif-editorial text-lg sm:text-xl text-emerald-300 italic">
            “I call upon your experience and your integrity.”
          </blockquote>
          <div className="mt-1.5 text-xs font-mono text-slate-400">
            Bryant Stratton · Steward, Finder's Guild
          </div>
        </div>

        <div className="pt-1">
          <div className="font-serif-display text-lg sm:text-2xl font-bold text-white">
            IS THIS THE RIGHT MOMENT FOR YOU?
          </div>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-serif-editorial max-w-xl mx-auto leading-relaxed">
            You do not have to decide from this page. Understand what we are exploring. Review the evidence. Challenge the thesis. Then let’s talk.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-900 text-[11px] font-mono text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Discussion draft for prospective founding partners · September 2026</span>
        </div>

      </div>

    </section>
  );
};
