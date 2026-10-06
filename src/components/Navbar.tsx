import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { safeScrollTo } from "../utils/scroll";

interface NavbarProps {
  currentView: "community" | "how-it-works" | "founding-trading-firm" | "design-system" | "playbook" | "site-index";
  onSetView: (view: "community" | "how-it-works" | "founding-trading-firm" | "design-system" | "playbook" | "site-index") => void;
  onNavigate: (sectionId: string) => void;
  onOpenPath: (path: "onboarding" | "process") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  onSetView, 
  onNavigate, 
  onOpenPath 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 py-3 sm:py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo - Smoothly fades out and collapses when scrolled down */}
        <div 
          onClick={() => {
            onSetView("community");
            safeScrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className={`pointer-events-auto shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer group transition-all duration-300 ${
            isScrolled 
              ? "opacity-0 -translate-x-4 pointer-events-none scale-95" 
              : "opacity-100 translate-x-0 scale-100 glass-panel rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 border border-white/10 shadow-2xl backdrop-blur-xl bg-[#070c18]/85"
          }`}
          id="nav-logo"
        >
          <div className="relative flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500/20 via-slate-900 to-indigo-950 border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-400 group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-emerald-400/10 blur-sm -z-10 group-hover:bg-emerald-400/20 transition-all" />
          </div>
          <div>
            <div className="font-serif-display text-xs sm:text-lg font-bold tracking-wider sm:tracking-widest text-slate-100 group-hover:text-white flex items-center gap-2 whitespace-nowrap">
              FINDERS GUILD
            </div>
            <div className="text-[10px] tracking-widest uppercase text-emerald-400/80 font-medium hidden sm:block">
              Private Network &amp; Deal Clearing
            </div>
          </div>
        </div>

        {/* Navigation Links and Action Buttons */}
        <div className="pointer-events-auto ml-auto shrink-0 flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onNavigate("two-paths")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
              isScrolled 
                ? "shadow-[0_0_25px_rgba(16,185,129,0.45)] border border-emerald-400/40 backdrop-blur-md bg-emerald-600/95 hover:scale-105" 
                : "shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-500/30"
            }`}
            id="nav-get-started"
          >
            <span>Enter Gateway</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          </button>
        </div>

      </div>
    </header>
  );
};
