import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { CommunityHero } from "./components/CommunityHero";
import { ProblemsClaimsGains } from "./components/ProblemsClaimsGains";
import { DualPathPortals } from "./components/DualPathPortals";
import { Footer } from "./components/Footer";
import { HowThisWorksView } from "./components/HowThisWorksView";
import { FoundingFirmView } from "./components/founding/FoundingFirmView";
import { PathPreviewModal } from "./components/PathPreviewModal";
import { GovernanceCharterModal } from "./components/GovernanceCharterModal";
import { Cpu, ArrowRight, ShieldCheck } from "lucide-react";
import { safeScrollTo } from "./utils/scroll";

export default function App() {
  const [currentView, setCurrentView] = useState<"community" | "how-it-works" | "founding-trading-firm">(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (
        path === "/founding-trading-firm" ||
        path.startsWith("/founding") ||
        window.location.hash.includes("founding") ||
        path === "/select-for-introduction"
      ) {
        return "founding-trading-firm";
      }
    }
    return "community";
  });
  const [isCharterModalOpen, setIsCharterModalOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    path: "onboarding" | "process" | null;
  }>({
    isOpen: false,
    path: null,
  });

  // Sync browser URL with popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/founding-trading-firm" || path === "/select-for-introduction") {
        setCurrentView("founding-trading-firm");
      } else if (path === "/how-it-works") {
        setCurrentView("how-it-works");
      } else {
        setCurrentView("community");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Strict scroll-to-top whenever view changes with cross-browser safe scrolling
  useEffect(() => {
    safeScrollTo({ top: 0, left: 0, behavior: "auto" });
    if (typeof document !== "undefined") {
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    }
  }, [currentView]);

  const handleSetView = (view: "community" | "how-it-works" | "founding-trading-firm") => {
    setCurrentView(view);
    if (typeof window !== "undefined") {
      if (view === "founding-trading-firm") {
        window.history.pushState({}, "", "/founding-trading-firm");
      } else if (view === "how-it-works") {
        window.history.pushState({}, "", "/how-it-works");
      } else {
        window.history.pushState({}, "", "/");
      }
    }
    safeScrollTo({ top: 0, left: 0, behavior: "auto" });
    if (typeof document !== "undefined") {
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === "hero") {
      safeScrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }
    if (currentView !== "community") {
      setCurrentView("community");
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenPathModal = (path: "onboarding" | "process") => {
    setModalState({
      isOpen: true,
      path,
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      path: null,
    });
  };

  const handleOpenCharterModal = () => {
    setIsCharterModalOpen(true);
  };

  const handleCloseCharterModal = () => {
    setIsCharterModalOpen(false);
  };

  return (
    <div
      className={`text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300 font-sans-ui relative ${
        currentView === "founding-trading-firm"
          ? "h-[100svh] max-h-[100svh] overflow-hidden bg-[#070b12]"
          : "min-h-screen bg-[#040711] overflow-x-hidden"
      }`}
    >
      {/* Top Fixed Institutional Glass Navbar (for community and how-it-works views) */}
      {currentView !== "founding-trading-firm" && (
        <Navbar
          currentView={currentView}
          onSetView={handleSetView}
          onNavigate={handleNavigate}
          onOpenPath={handleOpenPathModal}
        />
      )}

      <main className={`relative ${currentView === "founding-trading-firm" ? "h-full overflow-hidden" : ""}`}>
        {currentView === "founding-trading-firm" ? (
          /* BESPOKE FOUNDING TRADING FIRM GUIDED JOURNEY */
          <FoundingFirmView onBackToCommunity={() => handleSetView("community")} />
        ) : currentView === "community" ? (
          /* MAIN COMMUNITY LANDING VIEW: Problems -> Claims -> Gains -> Paths */
          <div className="animate-fadeIn">
            {/* 1. Welcoming Hero & Lead Graphic */}
            <CommunityHero
              onNavigate={handleNavigate}
              onOpenPath={handleOpenPathModal}
              onViewHowItWorks={() => handleSetView("how-it-works")}
            />

            {/* 2. Problems, Claims, and Gains */}
            <div id="problems-gains" className="scroll-mt-28">
              <ProblemsClaimsGains />
            </div>

            {/* 3. The Two Clear Paths Forward */}
            <DualPathPortals
              onSelectPath={handleOpenPathModal}
              onOpenCharter={handleOpenCharterModal}
            />

            {/* Founding Trading Firm Initiative Teaser Banner */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
              <div className="glass-panel p-8 rounded-3xl border border-emerald-500/30 bg-[#06121f]/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(16,185,129,0.12)]">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-1">
                      NEW DISCUSSION DRAFT · SEPTEMBER 2026
                    </div>
                    <h4 className="font-serif-display text-lg sm:text-xl font-bold text-white mb-1">
                      Founding Trading Firm: Access Is Abundant. Judgment Is Scarce.
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      An invitation to experienced traders, capital partners, operators, and specialists to explore founding participation.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleSetView("founding-trading-firm")}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  id="btn-explore-founding-firm-banner"
                >
                  <span>Explore Founding Firm</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Teaser Banner into System Mechanics */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
              <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-[#080e1d]/80 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif-display text-lg sm:text-xl font-bold text-white mb-1">
                      Curious about our underlying operating mechanics?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Inspect our 5-stage animated vector engine, deal structuring algorithms, and visual governance model.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleSetView("how-it-works")}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wide border border-white/15 transition-all flex-shrink-0 cursor-pointer"
                  id="btn-explore-system-mechanics"
                >
                  <span>Explore System Mechanics</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* SYSTEM MECHANICS / HOW THIS WORKS PAGE */
          <HowThisWorksView
            onBackToHome={() => handleSetView("community")}
            onNavigate={handleNavigate}
            onOpenPath={handleOpenPathModal}
            onOpenCharter={handleOpenCharterModal}
          />
        )}
      </main>

      {/* Path Requirements Inspector Modal */}
      {modalState.isOpen && (
        <PathPreviewModal
          isOpen={modalState.isOpen}
          path={modalState.path}
          onClose={handleCloseModal}
          onOpenCharter={handleOpenCharterModal}
        />
      )}

      {/* Official Master Governance Charter Modal */}
      {isCharterModalOpen && (
        <GovernanceCharterModal
          isOpen={isCharterModalOpen}
          onClose={handleCloseCharterModal}
        />
      )}

      {/* Institutional Footer */}
      {currentView !== "founding-trading-firm" && (
        <Footer
          currentView={currentView}
          onSetView={handleSetView}
          onNavigate={handleNavigate}
          onOpenCharter={handleOpenCharterModal}
          onOpenPath={handleOpenPathModal}
        />
      )}
    </div>
  );
}
