import React, { useState } from "react";
import { RoleId } from "../../types/foundingFirm";
import { ROLES_DATA } from "../../data/foundingFirmData";
import { ChevronDown, MessageSquare, AlertCircle, Sparkles } from "lucide-react";
import { trackEvent } from "../../utils/analytics";

interface FiveRFPQuestionsProps {
  selectedRole: RoleId;
}

export const FiveRFPQuestions: React.FC<FiveRFPQuestionsProps> = ({ selectedRole }) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(4); // Default question 5 (reversing check) open

  const roleData = ROLES_DATA[selectedRole];

  const questions = [
    {
      num: "01",
      title: "Repeatable Value",
      question: "Where have you already created repeatable value in trading, capital, operations, or relationships?",
      rolePrompt: roleData.questionGuidance.q1,
    },
    {
      num: "02",
      title: "Irreplaceable Role",
      question: "What role could you play here that would be difficult to replace?",
      rolePrompt: roleData.questionGuidance.q2,
    },
    {
      num: "03",
      title: "Reputation Security",
      question: "What would you need to see from us before putting your reputation or relationships behind this effort?",
      rolePrompt: roleData.questionGuidance.q3,
    },
    {
      num: "04",
      title: "Fair Economics",
      question: "What economics and protections would make participation fair to you?",
      rolePrompt: roleData.questionGuidance.q4,
    },
    {
      num: "05",
      title: "The Reversing Check (Surface Objections Early)",
      question: "What would make you say no?",
      rolePrompt: roleData.questionGuidance.q5,
      isReversing: true,
    },
  ];

  const toggleAccordion = (idx: number) => {
    const isExpanding = expandedIdx !== idx;
    setExpandedIdx(isExpanding ? idx : null);
    if (isExpanding) {
      trackEvent("diagnostic_expand", { questionIndex: idx, role: selectedRole });
    }
  };

  return (
    <section id="questions-section" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>PREPARATION FOR OUR CONVERSATION</span>
        </div>
        <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
          FIVE QUESTIONS WE WANT YOU THINKING ABOUT
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 font-serif-editorial">
          Do not collect answers through the website. These questions are preparation for the actual relationship-driven conversation.
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-3.5 mb-8">
        {questions.map((q, idx) => {
          const isExpanded = expandedIdx === idx;
          const isReversing = q.isReversing;

          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all border ${
                isReversing
                  ? isExpanded
                    ? "bg-slate-900 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                    : "bg-slate-900/80 border-amber-500/40 hover:border-amber-500/60"
                  : isExpanded
                  ? "bg-slate-900 border-emerald-500/50 shadow-lg"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none rounded-2xl"
                aria-expanded={isExpanded}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className={isReversing ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>
                      QUESTION {q.num}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-400 uppercase tracking-wider text-[11px]">
                      {q.title}
                    </span>
                    {isReversing && (
                      <span className="px-2 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono border border-amber-500/40">
                        CRITICAL REVERSING FILTER
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                    {q.question}
                  </h3>
                </div>

                <div className="p-1 rounded bg-slate-800 text-slate-300 shrink-0 mt-1">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 animate-fadeIn font-sans-ui space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-300 font-mono text-xs uppercase block mb-1">
                        Perspective for {roleData.roleTitle}:
                      </strong>
                      <p className="text-slate-300 leading-relaxed font-normal">
                        {q.rolePrompt}
                      </p>
                    </div>
                  </div>

                  {isReversing && (
                    <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 font-serif-editorial italic">
                      “We want non-starters, dealbreakers, and hidden friction surfaced before formation, not after.”
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mandatory closing guidance */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center text-sm font-mono text-slate-300 max-w-2xl mx-auto">
        <span className="text-emerald-400 font-bold block mb-1">
          You do not need to submit these answers here.
        </span>
        <span className="text-slate-400 text-xs">
          Bring your unvarnished thoughts and boundary requirements directly to our conversation.
        </span>
      </div>

    </section>
  );
};
