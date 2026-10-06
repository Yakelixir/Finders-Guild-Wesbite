import React, { useState, useEffect } from "react";
import { ShieldCheck, BookOpen, ArrowLeft, Menu, X, Users, MessageSquare, Calendar } from "lucide-react";
import { RoleId } from "../../types/foundingFirm";
import { ROLES_DATA } from "../../data/foundingFirmData";
import { trackEvent } from "../../utils/analytics";

interface FoundingNavbarProps {
  selectedRole: RoleId;
  onSelectRole: (role: RoleId) => void;
  onOpenRFP: () => void;
  onBackToCommunity: () => void;
}

export const FoundingNavbar: React.FC<FoundingNavbarProps> = ({
  selectedRole,
  onSelectRole,
  onOpenRFP,
  onBackToCommunity,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -70;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const activeRoleData = ROLES_DATA[selectedRole];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-2.5 sm:py-3"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand identity */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-left cursor-pointer focus:outline-none rounded-lg"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="font-serif-display text-xs sm:text-sm font-bold tracking-widest text-slate-100 uppercase flex items-center gap-1.5">
                <span>FINDERS GUILD</span>
                <span className="text-[9px] font-mono font-medium text-emerald-400 border border-emerald-500/30 px-1 py-0.2 rounded tracking-normal">
                  RFP
                </span>
              </div>
              <div className="text-[9px] font-mono text-slate-400 tracking-wider hidden sm:block">
                Founding Trading Firm Discussion
              </div>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-mono text-slate-300">
          <button
            onClick={() => scrollToSection("role-picker")}
            className="hover:text-emerald-400 transition-colors cursor-pointer py-1 flex items-center gap-1"
          >
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Role Lens: <strong className="text-white font-semibold">{activeRoleData.roleTitle.split("/")[0].trim()}</strong></span>
          </button>

          <button
            onClick={() => scrollToSection("film-section")}
            className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
          >
            Film
          </button>

          <button
            onClick={() => scrollToSection("rfp-section")}
            className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
          >
            Founding RFP
          </button>

          <button
            onClick={() => scrollToSection("relationship-section")}
            className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
          >
            Relationships &amp; NDAs
          </button>

          <button
            onClick={() => scrollToSection("critique-section")}
            className="hover:text-emerald-400 transition-colors cursor-pointer py-1 text-amber-300/90 hover:text-amber-200"
          >
            The Critique
          </button>

          <button
            onClick={() => scrollToSection("questions-section")}
            className="hover:text-emerald-400 transition-colors cursor-pointer py-1"
          >
            5 Questions
          </button>

          <span className="w-px h-3.5 bg-slate-800" aria-hidden="true" />

          <button
            onClick={onBackToCommunity}
            className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
            title="Return to general Finder's Guild community portal"
          >
            <ArrowLeft className="w-3 h-3 text-slate-500" />
            <span>Guild Portal</span>
          </button>
        </nav>

        {/* Action button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              trackEvent("rfp_open", { source: "navbar" });
              onOpenRFP();
            }}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-300 font-mono text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Read RFP</span>
            <span className="sm:hidden">RFP</span>
          </button>

          <button
            onClick={() => scrollToSection("ready-to-talk")}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.3)]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ready to Talk</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2.5 animate-fadeIn">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-xs font-mono text-slate-200 flex items-center justify-between">
            <span>Role Lens: <strong className="text-emerald-300">{activeRoleData.roleTitle.split("/")[0].trim()}</strong></span>
            <button
              onClick={() => scrollToSection("role-picker")}
              className="text-[10px] text-emerald-400 underline uppercase"
            >
              Change
            </button>
          </div>

          <div className="flex flex-col space-y-1.5 text-xs font-mono text-slate-300">
            <button
              onClick={() => scrollToSection("role-picker")}
              className="text-left py-2 px-2.5 rounded hover:bg-slate-900 text-slate-200"
            >
              1. Choose Your Role
            </button>
            <button
              onClick={() => scrollToSection("film-section")}
              className="text-left py-2 px-2.5 rounded hover:bg-slate-900 text-slate-200"
            >
              2. Watch Film: Into the Breach
            </button>
            <button
              onClick={() => scrollToSection("rfp-section")}
              className="text-left py-2 px-2.5 rounded hover:bg-slate-900 text-slate-200"
            >
              3. Read Discussion Draft RFP
            </button>
            <button
              onClick={() => scrollToSection("relationship-section")}
              className="text-left py-2 px-2.5 rounded hover:bg-slate-900 text-slate-200"
            >
              4. Why Aggressive NDAs Are A Red Flag
            </button>
            <button
              onClick={() => scrollToSection("critique-section")}
              className="text-left py-2 px-2.5 rounded hover:bg-slate-900 text-amber-300"
            >
              5. The Critique: Why We Need Human Friction
            </button>
            <button
              onClick={() => scrollToSection("questions-section")}
              className="text-left py-2 px-2.5 rounded hover:bg-slate-900 text-slate-200"
            >
              6. Five Diagnostic Questions
            </button>
            <button
              onClick={() => scrollToSection("ready-to-talk")}
              className="text-left py-2 px-2.5 rounded hover:bg-slate-900 text-emerald-400 font-bold"
            >
              7. Ready to Talk? Next Step
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBackToCommunity();
              }}
              className="w-full py-2 rounded-lg bg-slate-900 text-xs font-mono text-slate-400 text-center flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to Guild Community Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
