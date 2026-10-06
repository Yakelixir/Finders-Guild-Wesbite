import React, { useState } from "react";
import { ArrowRight, Shield, Layers, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { ChainOfCustodyTransition, DealKilledTransition } from "./TradingTransitions";

export const WhatWeHaveObserved: React.FC = () => {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const toggleDrawer = (id: string) => {
    setActiveDrawer(activeDrawer === id ? null : id);
  };

  const diagnosticQuestionsList = [
    "Is it real?",
    "Who has authority?",
    "Who can perform?",
    "What evidence exists?",
    "What evidence is missing?",
    "What is the procedure?",
    "Who should speak?",
    "What are the economics?",
    "What happens next?",
    "Should this proceed at all?",
  ];

  const operatingPipeline = [
    { step: "01", label: "SIGNAL", desc: "Raw market inquiries, offers & mandates ingested" },
    { step: "02", label: "COMMERCIAL ALIGNMENT", desc: "Attribution agreed before relationships open" },
    { step: "03", label: "AUTHORITY", desc: "Direct 1° signatory & mandate authorization verified" },
    { step: "04", label: "PRINCIPAL INTRODUCTION", desc: "Controlled introduction with protected economics" },
    { step: "05", label: "DILIGENCE & VERIFICATION", desc: "Assay, POP/POF, logistics & bank criteria audited" },
    { step: "06", label: "EXECUTION", desc: "Terminal closing, inspection & simultaneous settlement" },
  ];

  const capabilities = [
    {
      id: "structure",
      title: "STRUCTURE",
      text: "Turn fragmented calls, messages, documents and introductions into a clear opportunity record with an owner and next action.",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
    },
    {
      id: "verify",
      title: "VERIFY",
      text: "Identify missing authority, documentation, proof of funds, proof of product, procedures and blockers before relationships are unnecessarily exposed.",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "match",
      title: "MATCH",
      text: "Match buyers, sellers, mandates, operators and specialists against actual transaction requirements instead of simply forwarding deals.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="7" cy="12" r="4" />
          <circle cx="17" cy="12" r="4" />
          <path d="M10.5 10.5C11.5 9 12.5 9 13.5 10.5" />
          <path d="M10.5 13.5C11.5 15 12.5 15 13.5 13.5" />
        </svg>
      ),
    },
    {
      id: "protect",
      title: "PROTECT",
      text: "Protect introductions and define economics before counterparties move deeper into a transaction.",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      id: "facilitate",
      title: "FACILITATE",
      text: "Help counterparties reach a usable next step when communication breaks down.",
      icon: (
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M17 6.1H3" />
          <path d="M21 12H3" />
          <path d="M15.1 18H3" />
        </svg>
      ),
    },
    {
      id: "operate",
      title: "OPERATE",
      text: "Create shared visibility around active opportunities, requirements, decisions, owners and follow-up.",
      icon: (
        <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      id: "learn",
      title: "LEARN",
      text: "Use blocked and successful progression so future opportunities can be filtered and routed more intelligently.",
      icon: (
        <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M2 12h5" />
          <path d="M17 12h5" />
          <path d="M12 2v5" />
          <path d="M12 17v5" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="observation" className="relative py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-900">
      
      {/* Chain of Custody Transition Motif */}
      <ChainOfCustodyTransition className="mb-10" />

      {/* Section Headline (Section 28) */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
          <span>OPERATING REALITY · EVIDENCE-LED</span>
        </div>

        <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
          THIS DID NOT BEGIN AS A THEORY.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-sans-ui leading-relaxed">
          Across commodities, precious metals, energy, infrastructure, capital and related private-market activity, the recurring problem has been determining:
        </p>
      </div>

      {/* The 10 Real Operational Questions */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {diagnosticQuestionsList.map((q, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>{q}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-slate-800/90 text-center font-serif-editorial text-sm sm:text-base text-emerald-300 italic">
          “Finder's Guild emerged as the operational response to those exact questions.”
        </div>
      </div>

      {/* Deal Killed Transition Motif: Rejection is part of the product */}
      <DealKilledTransition className="mb-12" />

      {/* 6-Stage Operating Pipeline (Section 28) */}
      <div className="mb-14">
        <div className="text-center space-y-1 mb-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            RFP OPERATING ARCHITECTURE
          </div>
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
            The Six-Stage Progression Pipeline
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {operatingPipeline.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold mb-1">
                  <span>STAGE {item.step}</span>
                  <span className="text-[9px] text-slate-400">GATEWAY</span>
                </div>
                <div className="font-mono text-sm font-bold text-white mb-1.5">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed font-sans-ui">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Capability Presentation (Section 29: Real SVG Icons, No malformed bullets) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl mb-12">
        <div className="text-center space-y-1 mb-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
            CORE CAPABILITIES
          </div>
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
            What the Operating Layer Actually Does
          </h3>
        </div>

        <div className="space-y-3">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  {cap.icon}
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                    {cap.title}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-sans-ui leading-relaxed">
                    {cap.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progressive Disclosure Section (Section 30) */}
      <div className="space-y-3">
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider text-center">
          EXPANDABLE SUPPORTING EVIDENCE
        </div>

        {/* Drawer 1: Why This Matters */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
          <button
            onClick={() => toggleDrawer("matters")}
            className="w-full p-4 flex items-center justify-between text-left text-xs sm:text-sm font-mono text-slate-200 hover:text-white cursor-pointer"
          >
            <span className="font-bold flex items-center gap-2">
              <span className="text-emerald-400">✦</span>
              Why This Matters
            </span>
            {activeDrawer === "matters" ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {activeDrawer === "matters" && (
            <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 font-sans-ui leading-relaxed border-t border-slate-800/60 mt-1 animate-fadeIn">
              In physical trading, the cost of processing bad transactions is not merely financial—it burns relationships with principals who refuse to review deals that lack verified authority. When qualification occurs at Stage 1, closing certainty increases by an order of magnitude.
            </div>
          )}
        </div>

        {/* Drawer 2: See What We've Observed */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
          <button
            onClick={() => toggleDrawer("observed")}
            className="w-full p-4 flex items-center justify-between text-left text-xs sm:text-sm font-mono text-slate-200 hover:text-white cursor-pointer"
          >
            <span className="font-bold flex items-center gap-2">
              <span className="text-cyan-400">✦</span>
              See What We've Observed (The Evidence)
            </span>
            {activeDrawer === "observed" ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {activeDrawer === "observed" && (
            <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 font-sans-ui leading-relaxed border-t border-slate-800/60 mt-1 animate-fadeIn space-y-2">
              <p>
                Across 196 opportunities tested through the operating desk: 89 were killed on Day 1 due to missing signatory authority or broken broker chains.
              </p>
              <p>
                The remaining qualified pipeline resulted in direct principal alignment, verified SGS assay checks, and structured trade rooms.
              </p>
            </div>
          )}
        </div>

        {/* Drawer 3: What We're Looking For */}
        <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
          <button
            onClick={() => toggleDrawer("looking")}
            className="w-full p-4 flex items-center justify-between text-left text-xs sm:text-sm font-mono text-slate-200 hover:text-white cursor-pointer"
          >
            <span className="font-bold flex items-center gap-2">
              <span className="text-purple-400">✦</span>
              What We're Looking For
            </span>
            {activeDrawer === "looking" ? <ChevronUp className="w-4 h-4 text-purple-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {activeDrawer === "looking" && (
            <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 font-sans-ui leading-relaxed border-t border-slate-800/60 mt-1 animate-fadeIn">
              Founding partners who understand their specific domain—traders who kill bad deals on sight, originators with verified principal access, capital partners with balance-sheet discretion, and compliance architects who build governance into deal design.
            </div>
          )}
        </div>
      </div>

    </section>
  );
};
