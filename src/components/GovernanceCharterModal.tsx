import React, { useState } from "react";
import { 
  X, 
  ShieldCheck, 
  Lock, 
  FileText, 
  Check, 
  Copy, 
  Download, 
  ExternalLink,
  Scale,
  Building2,
  Users
} from "lucide-react";

interface GovernanceCharterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GovernanceCharterModal: React.FC<GovernanceCharterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `FINDERS GUILD // MASTER GOVERNANCE CHARTER SUMMARY
1. Protected Attribution: Any opportunity or counterparty introduced is watermarked. 24-month non-circumvention. Standard protected carry (1.5% - 3.0%).
2. 1-Degree Mandate Rule: No daisy chains. Every deal must be held directly or within 1 authenticated degree of principal with verifiable Proof of Authority.
3. Air Traffic Control: Structured criteria matching before introductions. Zero unsolicited spam.
4. Permanent Perimeter Defense: Immediate expulsion for deal leaking or circumvention.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] my-auto flex flex-col rounded-3xl bg-[#060b18] border border-amber-500/30 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-gradient-to-r from-slate-950 via-[#0a1024] to-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-serif-display tracking-[0.2em] uppercase text-amber-300 font-semibold flex items-center gap-1.5">
                <span className="text-amber-400 text-xs">✦</span> Official Master Charter <span className="text-amber-400 text-xs">✦</span>
              </div>
              <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white mt-0.5">
                Finders Guild Master Governance &amp; Protocol
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
              title="Copy Summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Summary"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-300 text-sm leading-relaxed custom-scrollbar">
          
          {/* Preamble Callout */}
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif-display text-base font-bold text-amber-200 mb-1">
                The Operating Principle: Invisible Armor
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Governance at Finders Guild is not bureaucratic red tape—it is the protective barrier that allows high-performing dealmakers and institutional principals to collaborate freely without fear of circumvention, deal theft, or reputational damage.
              </p>
            </div>
          </div>

          {/* Section 1: Non-Circumvention & Protected Attribution */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-serif-display text-base font-bold">
              <span className="text-amber-400 font-mono text-xs font-normal">ARTICLE I //</span>
              Permanent Protected Attribution &amp; Fee Defense
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Any contact, opportunity, asset, or buyer introduced through the Guild protocol or its authenticated syndicate desks is stamped with cryptographic provenance.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5 text-slate-400">
              <li><strong className="text-slate-200">24-Month Protection Tail:</strong> Introductions carry an automatic 24-month non-circumvention protection window across all transactions between the matched entities.</li>
              <li><strong className="text-slate-200">Standardized Fee Range:</strong> Introducer compensation is pre-cleared between 1.5% and 3.0% of gross transaction value (or customary commodity basis point splits), escrowed directly at closing.</li>
              <li><strong className="text-slate-200">Chain Immunity:</strong> No secondary broker or intermediary may extract fees from the primary introducer’s allocation without explicit written consent.</li>
            </ul>
          </div>

          {/* Section 2: 1-Degree Mandate Standard */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white font-serif-display text-base font-bold">
              <span className="text-emerald-400 font-mono text-xs font-normal">ARTICLE II //</span>
              The 1-Degree Mandate Requirement (Zero Daisy Chains)
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Finders Guild strictly enforces origin integrity. All deal flow submitted to desks must meet verifiable mandate criteria:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5 text-slate-400">
              <li><strong className="text-slate-200">Mandate Origin:</strong> The submitting member must hold direct communication with the asset owner/buyer, or be precisely one validated degree removed with direct written authority.</li>
              <li><strong className="text-slate-200">No Forwarded Rumors:</strong> Copy-pasting speculative LinkedIn broadcasts, multi-hop Telegram forwards, or unverified lists results in immediate post rejection.</li>
              <li><strong className="text-slate-200">Proof of Authority (POA / POF):</strong> Principals and reps must be prepared to submit redacted verification before bilateral diligence opens.</li>
            </ul>
          </div>

          {/* Section 3: Air Traffic Control & Structuring */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white font-serif-display text-base font-bold">
              <span className="text-cyan-400 font-mono text-xs font-normal">ARTICLE III //</span>
              Intake Structuring &amp; 72-Hour Response SLAs
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Principals configuring their institutional process establish strict buy/sell boxes. In return:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5 text-slate-400">
              <li><strong className="text-slate-200">72-Hour SLA:</strong> When a structured spec is presented to a designated principal, they commit to an initial pass or proceed determination within 72 business hours.</li>
              <li><strong className="text-slate-200">Protected Diligence Chamber:</strong> Once bilateral discussions commence, documents are shared in secure virtual clean rooms with logging and watermarks.</li>
            </ul>
          </div>

          {/* Section 4: Perimeter Defense & Expulsion */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white font-serif-display text-base font-bold">
              <span className="text-red-400 font-mono text-xs font-normal">ARTICLE IV //</span>
              Perimeter Defense &amp; Immediate Expulsion
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              The Guild operates on absolute high trust. Any of the following behaviors results in permanent, irrevocable expulsion and blacklisting across all affiliate desks:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5 text-slate-400">
              <li>Attempting to bypass an introducing finder or arrange backchannel compensation.</li>
              <li>Leaking confidential teardowns, teasers, or counterparty identities outside the private network.</li>
              <li>Submitting fraudulent financial instruments, spoofed bank comfort letters, or fake commodities allocations.</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono">
            STATUS: ACTIVE GOVERNANCE PROTOCOL // ENFORCED BY MASTER NCNDA
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            I Understand &amp; Agree
          </button>
        </div>

      </div>
    </div>
  );
};
