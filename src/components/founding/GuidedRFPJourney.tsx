import React, { useState, useEffect, useRef } from "react";
import { RoleId } from "../../types/foundingFirm";
import { ROLES_DATA, ROLE_ORDER, MEDIA_SOURCES, RFP_DISCUSSION_DRAFT_PAGES } from "../../data/foundingFirmData";
import { RoleVector } from "./RoleVectors";
import { SignalAction } from "./SignalAction";
import { TradingSignalReveal } from "./TradingSignalReveal";
import { InShellRFPReader } from "./InShellRFPReader";
import { CryptographicDiagram } from "./CryptographicDiagram";
import { downloadRfpPdf } from "../../utils/generateRfpPdf";
import {
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Calendar,
  Check,
  Download,
  X
} from "lucide-react";
import { trackEvent } from "../../utils/analytics";
import posterImage from "../../assets/images/into_the_breach_poster_1790435589915.jpg";

interface GuidedRFPJourneyProps {
  onBackToCommunity: () => void;
}

export const GuidedRFPJourney: React.FC<GuidedRFPJourneyProps> = ({ onBackToCommunity }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 10;

  // Selected founding role state
  const [selectedRole, setSelectedRole] = useState<RoleId>("trader");

  // Step 3: Video Player State (Now dedicated exclusively on Page 3)
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [showVideoControls, setShowVideoControls] = useState<boolean>(true);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const videoControlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Step 8: In-Shell RFP Reader State
  const [isRfpReaderActive, setIsRfpReaderActive] = useState<boolean>(false);
  const [rfpReaderPageIdx, setRfpReaderPageIdx] = useState<number>(0);
  const [pdfDownloaded, setPdfDownloaded] = useState<boolean>(false);

  // Step 9: Diagnostic expanded question state
  const [expandedQuestionIdx, setExpandedQuestionIdx] = useState<number | null>(0);

  // Step 10: Ready to talk choice
  const [talkChoice, setTalkChoice] = useState<"interested" | "questions" | "later">("interested");

  const stepContainerRef = useRef<HTMLDivElement>(null);

  const breachAsset = MEDIA_SOURCES.breach;
  const driveVideoUrl = `https://drive.google.com/file/d/${breachAsset.driveId}/view`;
  const CALENDAR_URL = "https://calendar.app.google/4Rx8cLttgJ61XNv8A";

  // Reset scroll on step change
  useEffect(() => {
    if (stepContainerRef.current) {
      stepContainerRef.current.scrollTop = 0;
    }
    setIsVideoPlaying(false);
    trackEvent("page_view", { step: currentStep, role: selectedRole });
  }, [currentStep]);

  // Video controls auto-hide after 2s of inactivity
  const handleVideoInteraction = () => {
    setShowVideoControls(true);
    if (videoControlsTimerRef.current) clearTimeout(videoControlsTimerRef.current);
    videoControlsTimerRef.current = setTimeout(() => {
      setShowVideoControls(false);
    }, 2000);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (isRfpReaderActive) {
        if (e.key === "ArrowRight") {
          handleNextReaderPage();
        } else if (e.key === "ArrowLeft") {
          handlePrevReaderPage();
        } else if (e.key === "Escape") {
          setIsRfpReaderActive(false);
        }
        return;
      }

      if (e.key === "ArrowRight" && currentStep < totalSteps) {
        goToNextStep();
      } else if (e.key === "ArrowLeft" && currentStep > 1) {
        goToPrevStep();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, isRfpReaderActive, rfpReaderPageIdx]);

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNextReaderPage = () => {
    if (rfpReaderPageIdx < RFP_DISCUSSION_DRAFT_PAGES.length - 1) {
      setRfpReaderPageIdx((prev) => prev + 1);
    }
  };

  const handlePrevReaderPage = () => {
    if (rfpReaderPageIdx > 0) {
      setRfpReaderPageIdx((prev) => prev - 1);
    }
  };

  const handleDownloadPdf = () => {
    trackEvent("rfp_download", { title: "Request for Founding Participation - Discussion Draft.pdf" });
    downloadRfpPdf();
    setPdfDownloaded(true);
    setTimeout(() => setPdfDownloaded(false), 3500);
  };

  const activeRoleData = ROLES_DATA[selectedRole];

  return (
    <div className="h-[100svh] max-h-[100svh] w-full bg-[#070b12] text-slate-100 overflow-hidden relative font-sans-ui select-none">
      
      {/* Background radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[700px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      {/* ========================================================================= */}
      {/* ZONE 1: TOP NAVIGATION (Absolute Viewport Anchor) */}
      {/* ========================================================================= */}
      <header
        className="absolute top-0 left-0 right-0 h-12 sm:h-14 px-4 sm:px-8 flex items-center justify-between z-40 bg-[#070b12]/90 backdrop-blur-md border-b border-slate-900/80"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        {!isRfpReaderActive ? (
          <>
            {/* Minimal Scene Progress Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-1 max-w-[200px] sm:max-w-[260px]">
              {Array.from({ length: totalSteps }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentStep(idx + 1)}
                  className="h-1 flex-1 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor:
                      currentStep === idx + 1
                        ? "#34d399"
                        : currentStep > idx + 1
                        ? "#059669"
                        : "rgba(255, 255, 255, 0.12)",
                    boxShadow: currentStep === idx + 1 ? "0 0 6px rgba(52, 211, 153, 0.6)" : "none",
                  }}
                  aria-label={`Jump to scene ${idx + 1}`}
                />
              ))}
            </div>

            {/* Chapter Counter & Guild Portal Link (No skip button) */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-bold">
                {String(currentStep).padStart(2, "0")} <span className="text-slate-600 font-normal">/</span> {String(totalSteps).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={onBackToCommunity}
                className="text-[11px] text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer hidden sm:inline"
              >
                Guild Portal →
              </button>
            </div>
          </>
        ) : (
          /* Reader Header State: Uncluttered with Download and Exit buttons at top */
          <div className="w-full flex items-center justify-between text-xs font-mono">
            <span className="text-emerald-400 font-bold tracking-wider text-[11px] sm:text-xs">
              DISCUSSION DRAFT READER
            </span>

            {/* Centered Page Counter in Header */}
            <span className="text-slate-300 font-mono text-xs">
              PAGE 0{rfpReaderPageIdx + 1} OF 06
            </span>

            {/* Download and Close Utility Buttons in Top Header */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Download PDF"
                aria-label="Download PDF"
              >
                {pdfDownloaded ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsRfpReaderActive(false)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Close reader"
                aria-label="Close reader"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* ZONE 2: CENTER EXPERIENCE / SCENE CANVAS */}
      {/* ========================================================================= */}
      <main
        ref={stepContainerRef}
        className="absolute top-12 sm:top-14 bottom-14 sm:bottom-16 left-0 right-0 overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center px-4 sm:px-8 py-2 relative focus:outline-none"
      >
        {isRfpReaderActive ? (
          /* In-Shell RFP Reader with smooth scrolling */
          <div className="w-full h-full max-w-3xl flex flex-col justify-start my-auto overflow-hidden">
            <InShellRFPReader currentPageIdx={rfpReaderPageIdx} />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center my-auto">
            
            {/* ----------------------------------------------------------------- */}
            {/* SCENE 1: THE TRADING INVITATION REVEAL */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 1 && (
              <TradingSignalReveal
                scene={1}
                onAdvance={goToNextStep}
              />
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 2: TEAM & THE FIVE-PERSON ADVENTURE (Pure Focus, No Video) */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 2 && (
              <TradingSignalReveal
                scene={2}
                onAdvance={goToNextStep}
              />
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 3: DEDICATED FILM PRESENTATION ("INTO THE BREACH") */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 3 && (
              <div className="w-full max-w-3xl flex flex-col items-center space-y-3 sm:space-y-4 animate-fadeIn my-auto">
                
                {/* Bridge Intro */}
                <div className="w-full text-center sm:text-left space-y-1">
                  <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold flex items-center justify-center sm:justify-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>INTO THE BREACH · 04:18 ESSAY FILM</span>
                  </div>

                  <h2 className="font-serif-display text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    Where Access Is Abundant, Judgment Is Scarce
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-sans-ui leading-relaxed max-w-2xl">
                    Real deal flow doesn't die from lack of capital or interest. It dies because relationships get exposed too early, claims are unverified, and broker chains fight for attribution.
                  </p>
                </div>

                {/* Inline Video Player Container */}
                <div className="w-full relative">
                  {!isVideoPlaying ? (
                    <div className="w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl relative aspect-video flex items-center justify-center group max-h-[52vh]">
                      <img
                        src={posterImage}
                        alt="Into the Breach Preview"
                        className="w-full h-full object-cover filter brightness-90 group-hover:scale-101 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                      {/* Video Center Trigger: Signal Action */}
                      <div className="absolute z-20 flex flex-col items-center">
                        <SignalAction
                          label="Watch Inline"
                          onClick={() => {
                            setIsVideoPlaying(true);
                            trackEvent("hero_watch_video", { title: breachAsset.title });
                          }}
                          variant="primary"
                        />
                      </div>

                      {/* Transcript Toggle */}
                      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-300">
                        <span>04:18 Video Essay</span>
                        <button
                          type="button"
                          onClick={() => setShowTranscript(!showTranscript)}
                          className="text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
                        >
                          {showTranscript ? "Hide Transcript" : "Transcript"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Active Video Frame with Floating Transparent Controls (↗ and ×) */
                    <div
                      className="relative w-full aspect-video max-h-[55vh] bg-black overflow-hidden rounded-2xl border border-slate-800 shadow-2xl group"
                      onMouseMove={handleVideoInteraction}
                      onTouchStart={handleVideoInteraction}
                      onMouseLeave={() => setShowVideoControls(false)}
                    >
                      {/* Floating Transparent Utility Controls */}
                      <div
                        className={`absolute top-3 right-3 z-30 flex items-center gap-1.5 transition-opacity duration-300 ${
                          showVideoControls ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <a
                          href={driveVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors cursor-pointer backdrop-blur-sm"
                          title="Open original"
                          aria-label="Open original"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>

                        <button
                          type="button"
                          onClick={() => setIsVideoPlaying(false)}
                          className="w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors cursor-pointer backdrop-blur-sm"
                          title="Close video"
                          aria-label="Close video"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Google Drive Iframe with negative top margin to crop Google's black top chrome */}
                      <iframe
                        src={breachAsset.embedUrl}
                        title="Into the Breach Film"
                        className="w-full border-0 absolute left-0 right-0"
                        style={{
                          top: "-52px",
                          height: "calc(100% + 52px)",
                          width: "100%",
                        }}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>

                {/* Transcript Drawer if opened */}
                {showTranscript && (
                  <div className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-serif-editorial leading-relaxed max-h-24 overflow-y-auto text-left">
                    "In commodity trade and high-stakes capital, everyone is chasing transactions. But real deal flow doesn't die from lack of capital or lack of interest. It dies because relationships get exposed too early, claims are unverified, and everyone in the middle is fighting for attribution."
                  </div>
                )}

              </div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 4: THE HONEST UNCERTAINTY (Signal Drop Precursor) */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 4 && (
              <TradingSignalReveal
                scene={4}
                onAdvance={goToNextStep}
              />
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 5: OPERATING MODEL (From Messy Signal to Usable Truth) */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 5 && (
              <div className="w-full max-w-xl flex flex-col items-center space-y-3 sm:space-y-4 animate-fadeIn my-auto">
                <div className="text-center space-y-0.5">
                  <h2 className="font-serif-display text-xl sm:text-3xl font-bold text-white tracking-tight">
                    From Messy Signal to Usable Truth
                  </h2>
                  <p className="text-xs text-slate-300 font-sans-ui">
                    A repeatable operating layer protecting participants at every stage.
                  </p>
                </div>

                <div className="w-full space-y-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-slate-950 border border-slate-700 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                        01
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white font-serif-display">SIGNAL INGESTION</div>
                        <div className="text-[10px] text-slate-400 font-sans-ui">Standardized Deal Cards &amp; provisional records</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">INTAKE</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-slate-950 border border-slate-700 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                        02
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white font-serif-display">AUTHORITY &amp; ALIGNMENT</div>
                        <div className="text-[10px] text-slate-400 font-sans-ui">Verifying mandates before exposing relationships</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-blue-400 font-mono">MANDATE</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-slate-950 border border-slate-700 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                        03
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white font-serif-display">EVIDENCE GATES</div>
                        <div className="text-[10px] text-slate-400 font-sans-ui">Auditing claims and surfacing deal-breakers early</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-purple-400 font-mono">DILIGENCE</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 flex items-center justify-between gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                        04
                      </span>
                      <div>
                        <div className="text-xs font-bold text-emerald-300 font-serif-display">EXECUTION &amp; ATTRIBUTION</div>
                        <div className="text-[10px] text-slate-300 font-sans-ui">Direct principal introductions with protected economics</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">CLEARING</span>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 6: CHOOSE YOUR ROLE */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 6 && (
              <div className="w-full max-w-xl flex flex-col space-y-2 sm:space-y-3 animate-fadeIn my-auto">
                <div className="space-y-0.5">
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Why were you invited?
                  </h2>
                  <p className="text-xs text-slate-300 font-sans-ui">
                    We matched you based on your experience. Choose the role closest to the value you already create.
                  </p>
                </div>

                <div className="w-full space-y-1.5 sm:space-y-2">
                  {ROLE_ORDER.map((roleId) => {
                    const r = ROLES_DATA[roleId];
                    const isSelected = selectedRole === roleId;

                    if (isSelected) {
                      return (
                        <div
                          key={roleId}
                          className="p-3 rounded-xl bg-slate-900 border-2 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all relative"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                                <RoleVector role={roleId} className="w-4 h-4 text-emerald-400" />
                              </div>
                              <div>
                                <div className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                                  {r.cardHeadline}
                                </div>
                                <h3 className="font-serif-display text-xs sm:text-sm font-bold text-white">
                                  {r.roleTitle}
                                </h3>
                                <p className="text-[11px] text-slate-300 font-serif-editorial italic mt-0.5 line-clamp-2">
                                  “{r.pain[0]}”
                                </p>
                              </div>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <button
                        key={roleId}
                        type="button"
                        onClick={() => setSelectedRole(roleId)}
                        className="w-full p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-2.5 text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-6 h-6 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                            <RoleVector role={roleId} className="w-3 h-3" />
                          </div>
                          <div className="truncate">
                            <div className="text-[9px] font-mono uppercase text-slate-400 truncate">
                              {r.cardHeadline}
                            </div>
                            <div className="text-xs font-serif-display font-bold text-slate-200 group-hover:text-white truncate">
                              {r.roleTitle}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-300 shrink-0" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 7: PERSONALIZED LENS */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 7 && (
              <div className="w-full max-w-xl flex flex-col space-y-2.5 sm:space-y-3 animate-fadeIn my-auto">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <RoleVector role={selectedRole} className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider">
                        PERSONALIZED LENS
                      </div>
                      <h2 className="font-serif-display text-xs sm:text-sm font-bold text-white">
                        {activeRoleData.roleTitle}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentStep(6)}
                    className="text-[10px] font-mono text-slate-400 hover:text-emerald-400 underline cursor-pointer"
                  >
                    Change Role
                  </button>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-rose-500/30">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-rose-400 font-bold mb-0.5">
                      WHAT WASTES YOUR BANDWIDTH
                    </div>
                    <div className="text-slate-300 font-serif-editorial text-[11px] sm:text-xs leading-relaxed">
                      {activeRoleData.pain[0]}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-0.5">
                      WHAT WE BUILD AROUND YOU
                    </div>
                    <div className="text-slate-300 font-serif-editorial text-[11px] sm:text-xs leading-relaxed">
                      {activeRoleData.claim}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-blue-400 font-bold mb-0.5">
                      YOUR INSTITUTIONAL GAIN
                    </div>
                    <div className="text-slate-300 font-serif-editorial text-[11px] sm:text-xs leading-relaxed">
                      {activeRoleData.gain}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 8: RFP ARTIFACT & DOCUMENT CONVERGENCE GRAPHIC */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 8 && (
              <div className="w-full max-w-2xl flex flex-col items-center text-center space-y-4 animate-fadeIn my-auto">
                <div className="space-y-0.5">
                  <h2 className="font-serif-display text-xl sm:text-3xl font-bold text-white tracking-tight">
                    Request for Founding Participation
                  </h2>
                  <div className="text-[11px] font-mono text-emerald-400">
                    6 pages · September 2026 · Confidential Discussion Draft
                  </div>
                </div>

                {/* Restored Document Convergence Graphic */}
                <div className="w-full flex justify-center py-2">
                  <CryptographicDiagram className="w-full max-w-sm sm:max-w-md h-[110px] sm:h-[130px]" />
                </div>

                {/* Unified Signal Actions for RFP: Clean labels without duplicate arrows */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <SignalAction
                    label="Read Discussion Draft"
                    onClick={() => {
                      setIsRfpReaderActive(true);
                      setRfpReaderPageIdx(0);
                    }}
                    variant="primary"
                  />

                  <SignalAction
                    label={pdfDownloaded ? "Downloaded (.pdf) ✓" : "Download PDF"}
                    onClick={handleDownloadPdf}
                    variant="secondary"
                    iconDirection="down"
                  />
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 9: REFLECTION (5 Diagnostic Questions - Recentered Vertically) */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 9 && (
              <div className="w-full max-w-xl mx-auto flex-1 flex flex-col justify-center items-center py-4 my-auto animate-fadeIn">
                <div className="w-full text-center space-y-0.5 mb-3">
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Five Discussion Questions
                  </h2>
                  <p className="text-xs text-slate-300 font-sans-ui">
                    Consider these questions before proceeding to the follow-up discussion.
                  </p>
                </div>

                <div className="w-full space-y-2 text-xs">
                  {[
                    {
                      title: "1. Repeatable Value Creation",
                      desc: "Where do you already create repeatable transaction value that does not depend on pure market speculation?",
                    },
                    {
                      title: "2. Filtering & Gatekeeping",
                      desc: "What deals should never reach a professional desk? What procedures survive real market pressure?",
                    },
                    {
                      title: "3. Irreplaceable Contribution",
                      desc: "What role or relationship capability do you bring that cannot simply be automated by AI?",
                    },
                    {
                      title: "4. Economics & Attribution",
                      desc: "What makes you comfortable exposing a relationship? What should value share look like as transactions compound?",
                    },
                    {
                      title: "5. Immediate Deal-Breakers",
                      desc: "What would make this an immediate no? What governance or boundary conditions are non-negotiable for you?",
                    },
                  ].map((item, qIdx) => {
                    const isExpanded = expandedQuestionIdx === qIdx;
                    return (
                      <div
                        key={qIdx}
                        onClick={() => setExpandedQuestionIdx(isExpanded ? null : qIdx)}
                        className={`p-2.5 sm:p-3 rounded-xl transition-all cursor-pointer border ${
                          isExpanded
                            ? "bg-slate-900 border-emerald-500/50 shadow-md"
                            : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-serif-display font-bold text-slate-100 text-xs sm:text-sm">
                            {item.title}
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                              isExpanded ? "rotate-90 text-emerald-400" : ""
                            }`}
                          />
                        </div>
                        {isExpanded && (
                          <div className="mt-1.5 text-slate-300 font-sans-ui leading-relaxed text-[11px] pt-1.5 border-t border-slate-800/80">
                            {item.desc}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* SCENE 10: READY TO TALK (Recentered Vertically) */}
            {/* ----------------------------------------------------------------- */}
            {currentStep === 10 && (
              <div className="w-full max-w-xl mx-auto flex-1 flex flex-col justify-center items-center text-center space-y-3.5 py-4 my-auto animate-fadeIn">
                <div className="space-y-1">
                  <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Ready to Talk?
                  </h2>
                  <p className="text-xs text-slate-300 font-sans-ui max-w-sm mx-auto leading-relaxed">
                    Go back to the person who sent you this page, or schedule a direct discussion with Bryant Stratton.
                  </p>
                </div>

                <div className="w-full grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => setTalkChoice("interested")}
                    className={`p-2 rounded-xl border text-[11px] sm:text-xs font-mono transition-all cursor-pointer ${
                      talkChoice === "interested"
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    I’m Interested
                  </button>
                  <button
                    onClick={() => setTalkChoice("questions")}
                    className={`p-2 rounded-xl border text-[11px] sm:text-xs font-mono transition-all cursor-pointer ${
                      talkChoice === "questions"
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    I Have Questions
                  </button>
                  <button
                    onClick={() => setTalkChoice("later")}
                    className={`p-2 rounded-xl border text-[11px] sm:text-xs font-mono transition-all cursor-pointer ${
                      talkChoice === "later"
                        ? "bg-slate-800 border-slate-600 text-slate-200 font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    Not Right Now
                  </button>
                </div>

                {talkChoice !== "later" ? (
                  <div className="w-full p-3 sm:p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-left">
                    <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                      Recommended Discussion Points:
                    </div>
                    <ul className="text-[11px] sm:text-xs text-slate-200 font-sans-ui space-y-1 pl-1">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✦</span>
                        <span>Your experience in the <strong className="text-white">{activeRoleData.roleTitle}</strong> domain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✦</span>
                        <span>What boundaries, shields, or economics you need to see</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✦</span>
                        <span>Working together on an initial real transaction</span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="w-full p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-300 font-sans-ui space-y-1.5">
                    <div className="text-slate-100 font-bold">Thank you for reviewing the discussion draft.</div>
                    <p className="text-[11px]">
                      Timing and fit matter above all else. We appreciate your consideration and hope to cross paths on future opportunities.
                    </p>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-emerald-400 underline text-xs pt-0.5 cursor-pointer"
                    >
                      Return to beginning
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* ZONE 3: RESTRAINED CONTROL RAIL & ANCHORED LEGAL FOOTER */}
      {/* ========================================================================= */}
      <footer
        className="absolute bottom-0 left-0 right-0 z-40 bg-[#070b12]/95 backdrop-blur-md border-t border-slate-900/80 flex flex-col items-center"
        style={{ paddingBottom: "max(0.4rem, env(safe-area-inset-bottom, 0px))" }}
      >
        {/* Navigation Rail Area */}
        <div className="w-full max-w-3xl px-4 sm:px-8 py-1.5 sm:py-2 flex items-center justify-between gap-4">
          {!isRfpReaderActive ? (
            /* Normal Scene Navigation */
            <>
              {currentStep > 1 ? (
                <SignalAction
                  label="Previous"
                  onClick={goToPrevStep}
                  variant="back"
                />
              ) : (
                <div className="w-16" />
              )}

              {/* Action Button for Steps 2-10 (Step 1 has in-scene Begin) */}
              {currentStep > 1 && (
                <SignalAction
                  label={
                    currentStep === 2
                      ? "Watch Into the Breach"
                      : currentStep === 3
                      ? "Continue to Honest Uncertainty"
                      : currentStep === 4
                      ? "Show Me the Model"
                      : currentStep === 5
                      ? "Where Do I Fit?"
                      : currentStep === 6
                      ? `Continue as ${activeRoleData.roleTitle.split("/")[0].trim()}`
                      : currentStep === 7
                      ? "Review the Discussion Draft"
                      : currentStep === 8
                      ? "Continue to Reflection"
                      : currentStep === 9
                      ? "I’m Ready to Talk"
                      : talkChoice === "later"
                      ? "Finish / Return"
                      : "Schedule Discussion"
                  }
                  onClick={() => {
                    if (currentStep === totalSteps) {
                      if (talkChoice === "later") {
                        setCurrentStep(1);
                      } else {
                        window.open(CALENDAR_URL, "_blank");
                      }
                    } else {
                      goToNextStep();
                    }
                  }}
                  variant="primary"
                />
              )}
            </>
          ) : (
            /* In-Shell Reader Pagination (No redundant middle counter; clean Previous/Next) */
            <div className="w-full flex items-center justify-between">
              <SignalAction
                label="Previous Page"
                onClick={handlePrevReaderPage}
                variant="back"
                disabled={rfpReaderPageIdx === 0}
              />

              <SignalAction
                label="Next Page"
                onClick={handleNextReaderPage}
                variant="primary"
                disabled={rfpReaderPageIdx === RFP_DISCUSSION_DRAFT_PAGES.length - 1}
              />
            </div>
          )}
        </div>

        {/* Anchored Institutional Legal Footer */}
        <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-slate-400 tracking-wider uppercase select-none pb-1">
          <ShieldCheck className="w-3 h-3 text-emerald-500/80 shrink-0" />
          <span>CONFIDENTIAL DISCUSSION DRAFT</span>
          <span>·</span>
          <span>NOT AN OFFER OF SECURITIES</span>
        </div>
      </footer>

    </div>
  );
};
