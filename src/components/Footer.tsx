import React from "react";
import { ShieldCheck, Lock, ArrowUp, Scale, Cpu, Home } from "lucide-react";
import { safeScrollTo } from "../utils/scroll";

interface FooterProps {
  currentView?: "community" | "how-it-works" | "founding-trading-firm" | "design-system" | "playbook" | "site-index";
  onSetView?: (view: "community" | "how-it-works" | "founding-trading-firm" | "design-system" | "playbook" | "site-index") => void;
  onNavigate?: (sectionId: string) => void;
  onOpenCharter: () => void;
  onOpenPath?: (path: "onboarding" | "process") => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  currentView,
  onSetView,
  onNavigate,
  onOpenCharter,
  onOpenPath 
}) => {
  const scrollToTop = () => {
    safeScrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#040711] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif-display text-base font-bold tracking-widest text-white uppercase">
              FINDERS GUILD
            </div>
            <div className="text-[11px] text-slate-500 font-mono tracking-wider">
              PROTECTED ATTRIBUTION • INSTITUTIONAL DEAL CLEARING
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          {onSetView && (
            <>
              <button
                onClick={() => {
                  onSetView("how-it-works");
                  scrollToTop();
                }}
                className={`transition-colors cursor-pointer flex items-center gap-1 ${
                  currentView === "how-it-works" ? "text-emerald-400" : "hover:text-slate-200"
                }`}
              >
                <Cpu className="w-3 h-3" />
                <span>How This Works</span>
              </button>

              <button
                onClick={() => {
                  onSetView("playbook");
                  scrollToTop();
                }}
                className={`transition-colors cursor-pointer flex items-center gap-1 ${
                  currentView === "playbook" ? "text-emerald-400 font-semibold" : "hover:text-slate-200"
                }`}
              >
                <span>Script Vault</span>
              </button>

              <button
                onClick={() => {
                  onSetView("site-index");
                  scrollToTop();
                }}
                className={`transition-colors cursor-pointer flex items-center gap-1 ${
                  currentView === "site-index" ? "text-emerald-400 font-semibold" : "hover:text-slate-200"
                }`}
              >
                <span>Site Index</span>
              </button>
            </>
          )}

          {/* Master Governance Charter - Opens In-App Modal Directly */}
          <button
            onClick={onOpenCharter}
            className="hover:text-amber-300 text-amber-400/90 transition-colors flex items-center gap-1.5 cursor-pointer"
            id="footer-governance-charter-btn"
          >
            <Lock className="w-3 h-3 text-amber-400" />
            <span className="underline decoration-amber-500/30 underline-offset-4 font-semibold">
              Master Governance Charter
            </span>
          </button>

          <a
            href="https://bryantstratton.me/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            Research &amp; Blog
          </a>

          <a
            href="https://calendar.app.google/4Rx8cLttgJ61XNv8A"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            Schedule Briefing
          </a>

          {onNavigate ? (
            <>
              <button
                onClick={() => onNavigate("portal-onboarding")}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
                id="footer-nav-onboarding"
              >
                Onboarding Gateway
              </button>
              <button
                onClick={() => onNavigate("portal-process")}
                className="hover:text-purple-400 transition-colors cursor-pointer"
                id="footer-nav-process"
              >
                Process Setup
              </button>
            </>
          ) : onOpenPath ? (
            <>
              <button
                onClick={() => onOpenPath("onboarding")}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Onboarding Gateway
              </button>
              <button
                onClick={() => onOpenPath("process")}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                Process Setup
              </button>
            </>
          ) : null}
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Finders Guild.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
