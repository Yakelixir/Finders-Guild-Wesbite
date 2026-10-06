import React, { useState } from "react";
import {
  ShieldCheck,
  Check,
  Copy,
  Terminal,
  BookOpen,
  ArrowRight,
  Lock,
  ChevronRight,
  FileText,
  Sliders,
  ExternalLink
} from "lucide-react";
import { ScriptBlock } from "./DesignSystem";

interface ClassifiedPlaybookProps {
  onNavigateHome: () => void;
  onNavigateDesignSystem: () => void;
}

export const ClassifiedPlaybook: React.FC<ClassifiedPlaybookProps> = ({
  onNavigateHome,
  onNavigateDesignSystem,
}) => {
  const [activeTab, setActiveTab] = useState<"scripts" | "audit" | "velocity">("scripts");

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F7F7F5] font-sans-ui selection:bg-[#C9A76A]/30 selection:text-white relative">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-15">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="playbook-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A76A" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#playbook-grid)" />
        </svg>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 backdrop-blur-xl border-b border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#C9A76A]/10 border border-[#C9A76A]/40 flex items-center justify-center text-[#C9A76A]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase">
                FINDERS GUILD
              </div>
              <div className="text-[10px] font-mono text-[#C9A76A] tracking-wider uppercase">
                CLASSIFIED OPERATOR PLAYBOOK // _PLAYBOOK
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateDesignSystem}
              className="text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer hidden sm:inline"
            >
              Design System →
            </button>
            <button
              onClick={onNavigateHome}
              className="px-3.5 py-1.5 rounded-xl bg-[#C9A76A] text-[#0B0C0E] hover:bg-[#d6b77e] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(201,167,106,0.3)]"
            >
              <span>Guild Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-[10px] font-mono tracking-widest text-red-400 uppercase font-semibold">
            <span>RESTRICTED PROTOCOL // FOR OPERATORS ONLY</span>
          </div>
          <h1 className="font-crimson text-4xl sm:text-6xl font-light tracking-tight text-white">
            Classified Playbook &amp; Script Vault
          </h1>
          <p className="font-inter text-sm sm:text-base text-gray-400 max-w-2xl font-light leading-relaxed">
            High-conviction communication scripts, forensic audit procedures, and friction qualification matrices for commodity desks and sovereign deal architects.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 gap-4 sm:gap-8 overflow-x-auto text-xs font-mono uppercase tracking-wider pb-1">
          {[
            { id: "scripts", label: "01 // The Script Vault" },
            { id: "audit", label: "02 // The Audit Protocol" },
            { id: "velocity", label: "03 // The Velocity Flow" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 border-b-2 whitespace-nowrap cursor-pointer transition-all ${
                activeTab === tab.id
                  ? "border-[#C9A76A] text-[#C9A76A] font-bold"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: SCRIPT VAULT */}
        {activeTab === "scripts" && (
          <div className="space-y-8 animate-fadeIn">
            <ScriptBlock
              title="1. The Unverified Broker Chain Boundary"
              context="MANDATE VERIFICATION &amp; RELATIONSHIP SHIELD"
              text={`"Thank you for presenting the opportunity. Because our principal relationships are bound by strict non-circumvention charters, we only review files with verified direct authority.

Please return:
1. Proof of Direct Signatory Mandate from the allocation holder.
2. Verified Lab Assay (SGS/Saybolt) dated within the last 7 days.
3. Target Price & Delivery Basis (Incoterm: CIF or FOB).

Until these are verified, we do not circulate specs or involve closing desks."`}
            />

            <ScriptBlock
              title="2. The Principal Introduction Shield"
              context="ATTRIBUTION &amp; PROTECTED ECONOMICS"
              text={`"Before introducing [Principal A] to [Counterparty B], our clearing framework requires an executed Finders Guild Attribution Schedule. 

This confirms our 50/50 carry split on initial volume and locks trailing fees on all recurring rollovers and extensions for a minimum of 24 months. Let us have your signature on the schedule so we can issue the official introductory briefing."`}
            />

            <ScriptBlock
              title="3. The Aggressive NDA Pushback"
              context="ETIQUETTE COACHING &amp; REALITY SCAN"
              text={`"We understand your desire for confidentiality. However, our operating policy is to sign mutual confidentiality agreements only after counterparty standing, bank capability, and product availability are objectively confirmed.

Signing multi-jurisdictional non-competes on blind specs creates artificial liability without closing certainty. Let us first review the anonymized deal card specs to establish commercial alignment."`}
            />
          </div>
        )}

        {/* TAB 2: AUDIT PROTOCOL */}
        {activeTab === "audit" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-white">
                The 5-Stage Forensic Deal Scan
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Before any transaction is submitted into Finders Guild deal clearing, evaluate the communication against the MiliMatch friction matrix:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <div className="text-[#C9A76A] font-bold">1. PRIORITIES</div>
                  <div className="text-gray-300">Are buyer and seller aligned on timeline, inspection, and payment guarantees?</div>
                </div>
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <div className="text-[#C9A76A] font-bold">2. OWNERSHIP</div>
                  <div className="text-gray-300">Who holds legal title right now? Can they issue an unencumbered corporate invoice?</div>
                </div>
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <div className="text-[#C9A76A] font-bold">3. DECISIONS</div>
                  <div className="text-gray-300">Who is the sole signatory authorized to execute terminal contracts?</div>
                </div>
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <div className="text-[#C9A76A] font-bold">4. PRESSURE</div>
                  <div className="text-gray-300">Is there artificial urgency ("take it in 2 hours or price doubles") indicating phantom brokers?</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: VELOCITY FLOW */}
        {activeTab === "velocity" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-white">
                The Hormozi Deal Velocity Flow
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Shorten the time between signal ingestion and settlement by cutting intermediaries, securing economics up front, and demanding hard evidence before phone calls:
              </p>
              <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs text-gray-300 space-y-2">
                <div>SIGNAL INTAKE → STANDARDIZED CARD (15 MIN)</div>
                <div>MANDATE CONFIRMATION VIA DIRECT SIGNATORY (24 HRS)</div>
                <div>SGS LAB SPEC VALIDATION (12 HRS)</div>
                <div>IRREVOCABLE FEE ALLOCATION SCHEDULE (6 HRS)</div>
                <div>PRINCIPAL CLOSING CALL (30 MIN)</div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-center text-xs font-mono text-gray-500 uppercase tracking-widest">
        <span>Restricted Playbook // Finders Guild Operator Network</span>
      </footer>

    </div>
  );
};
