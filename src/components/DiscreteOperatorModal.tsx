import React from "react";
import { 
  X, 
  Lock, 
  Calendar, 
  BookOpen, 
  ExternalLink, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown,
  CheckCircle2, 
  FileText, 
  Award, 
  Scale,
  Sparkles,
  Users
} from "lucide-react";

interface DiscreteOperatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "overview" | "research" | "schedule";
}

export const DiscreteOperatorModal: React.FC<DiscreteOperatorModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  if (!isOpen) return null;

  const CALENDAR_URL = "https://calendar.app.google/4Rx8cLttgJ61XNv8A";
  const FEATURED_ARTICLE_URL = "https://bryantstratton.me/why-non-predatory-intermediaries-win-trust-in-high-fraud-markets/";
  const BASE_BLOG_URL = "https://bryantstratton.me/blog";
  const ONBOARDING_URL = "https://app.findersguild.com/onboarding";
  const PROCESS_URL = "https://app.findersguild.com/setup-profile/alM3UW9HdGxrZ2RwMURrRFZ4enZUekg5aUh6Mg==";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] my-auto flex flex-col rounded-3xl bg-[#060b18] border border-amber-500/30 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean, Minimalist Modal Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-slate-950/90 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-serif-display tracking-[0.2em] uppercase text-amber-300 font-semibold">
            <span className="text-amber-400 text-xs">✦</span>
            <span>Discrete Operator Protocol <span className="text-amber-500/60 mx-1">·</span> Confidential Track</span>
            <span className="text-amber-400 text-xs">✦</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-7 divide-y divide-white/10">
          
          {/* Core Notice */}
          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900/60 to-amber-950/20 border border-amber-500/30 shadow-md">
              <h4 className="font-serif-display text-lg sm:text-2xl font-bold text-white mb-2.5 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                <span>Prefer not to network or join community groups?</span>
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                That is completely fine and respected. Completing the onboarding process or establishing your process criteria is <strong>still strictly required</strong> so our matching engine understands your exact parameters. This guarantees we only ever bring you pre-qualified, highly aligned opportunities and zero spam.
              </p>
            </div>

            {/* Indicator to Explore Options Below */}
            <div className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-white/10 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <span>
                  Maybe you operate in a discrete fashion, and we understand. <strong>Explore the options below</strong> to schedule a consultation or review our findings.
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce shrink-0" />
            </div>
          </div>

          {/* Action Options Grid: Schedule vs Research */}
          <div className="pt-6 space-y-6">
            <div className="text-xs font-serif-display uppercase tracking-[0.18em] text-slate-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Available Discrete Pathways</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Option 1: Schedule With Us */}
              <div className="rounded-2xl p-6 bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-md">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-sm">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider font-semibold block mb-1">
                    Option 01 • 1-on-1 Consultation
                  </span>
                  <h4 className="font-serif-display text-lg font-bold text-white mb-2">
                    Schedule with Us
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    Book a direct, confidential private consultation with our leadership team to review your discreet buy/sell parameters, specific mandates, or principal representation criteria under strict confidentiality.
                  </p>
                </div>

                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule on Google Calendar</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

              {/* Option 2: Request Research & Findings */}
              <div className="rounded-2xl p-6 bg-slate-900/80 border border-cyan-500/30 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-md">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-sm">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider font-semibold block mb-1">
                    Option 02 • Founder Research
                  </span>
                  <h4 className="font-serif-display text-lg font-bold text-white mb-2">
                    Research &amp; Findings
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    Access our published behavioral economics research and market analysis analyzing broker incentives, fraud vectors, and non-predatory intermediation models in off-market dealmaking.
                  </p>
                </div>

                <a
                  href={BASE_BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-600/90 hover:bg-cyan-500 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Research Blog</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

            </div>
          </div>

          {/* Research Context & Founder Commentary Section */}
          <div className="pt-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-serif-display uppercase tracking-[0.18em] text-slate-300 font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Documented Baseline &amp; Behavioral Economics</span>
            </div>

            {/* Founder Commentary Quote Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#090d1e] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal space-y-3">
                <p>
                  Our founder has written extensively on this topic, studied behavioral economics, and has been a part of families that have done incredible things and lost incredible amounts.
                </p>
                <p>
                  Because of this lived reality, the baseline that we work off of is thoroughly documented. We hope to help other high-net-worth individuals and family representatives really show up for the families that they serve as well — because that trust has been entrusted to them and to you.
                </p>
                <p className="text-slate-200 font-medium">
                  We hope everyone wins through our focus that takes you deliberately through both the wins and the losses.
                </p>
              </div>
            </div>

            {/* Highlighted Article Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/30 hover:border-amber-500/50 transition-all shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-serif-display text-amber-200 uppercase tracking-wider font-semibold">
                    <span className="text-amber-400 text-xs">✦</span>
                    <span>Featured Broker Research Treatise</span>
                  </div>
                  
                  <h5 className="font-serif-display text-base sm:text-lg font-bold text-white leading-snug">
                    "Why Non-Predatory Intermediaries Win Trust in High-Fraud Markets"
                  </h5>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    An in-depth analysis of how non-predatory structural alignment, watermark attribution, and cryptographic perimeter defense solve the principal-agent dilemma in opaque off-market transactions.
                  </p>
                </div>

                <a
                  href={FEATURED_ARTICLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 text-xs font-semibold tracking-wide transition-all self-start sm:self-center cursor-pointer whitespace-nowrap"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct blog base link footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-serif-display tracking-wider">
                <span className="text-slate-400 uppercase text-[11px]">Official Research Archive:</span>
                <a
                  href={BASE_BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1 font-sans-ui text-xs"
                >
                  <span>bryantstratton.me/blog</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Registration & Intake Links */}
          <div className="pt-6 space-y-3">
            <div className="text-xs font-serif-display uppercase tracking-[0.18em] text-slate-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Ready to submit your parameters quietly?</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={ONBOARDING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-slate-200 hover:text-white transition-all text-center"
              >
                <span>Direct Onboarding Form (Individual) →</span>
              </a>
              
              <a
                href={PROCESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-purple-500/40 text-xs font-mono text-slate-200 hover:text-white transition-all text-center"
              >
                <span>Process Profile Setup (Principal / Fund) →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            Discretion guaranteed • 24-month attribution protection
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
