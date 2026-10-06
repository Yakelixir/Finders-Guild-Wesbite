import React, { useState, useEffect } from "react";
import { Play, ExternalLink, ShieldCheck, CheckCircle2, RotateCcw, Volume2, FileText } from "lucide-react";
import { MEDIA_SOURCES } from "../../data/foundingFirmData";
import { trackEvent } from "../../utils/analytics";
import posterImage from "../../assets/images/into_the_breach_poster_1790435589915.jpg";

interface CinematicVideoExperienceProps {
  onContinue?: () => void;
}

/**
 * CINEMATIC VIDEO EXPERIENCE: INTO THE BREACH (04:18)
 * Implements Section 24, 25, 26 of Master Rebuild:
 * - Intelligent preloading/ready telemetry state
 * - Full responsive 16:9 cinematic poster frame
 * - Reliable embed with immediate direct Drive open option
 * - Accessible transcript drawer
 * - Zero forced sound / zero mandatory watch gates
 */
export const CinematicVideoExperience: React.FC<CinematicVideoExperienceProps> = ({ onContinue }) => {
  const [loadState, setLoadState] = useState<"preparing" | "ready">("preparing");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const breachAsset = MEDIA_SOURCES.breach;
  const driveDirectUrl = `https://drive.google.com/file/d/${breachAsset.driveId}/view`;

  // Simulated intelligent media readiness telemetry
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadState("ready");
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    trackEvent("hero_watch_video", { title: breachAsset.title });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Eyebrow & Chapter Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
          <span>WHY YOU'RE HERE / 02</span>
        </div>
        <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase">
          BEFORE WE EXPLAIN THE SYSTEM, WATCH THIS.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans-ui max-w-xl mx-auto leading-relaxed">
          <strong className="text-white font-semibold">Into the Breach</strong> is the shortest explanation of the problem we believe is worth solving.
        </p>
      </div>

      {/* Preload / Readiness Telemetry Indicator (Section 25) */}
      <div className="flex items-center justify-between text-[10px] font-mono px-2 text-slate-400">
        <div className="flex items-center gap-2">
          {loadState === "preparing" ? (
            <>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-amber-400 font-semibold tracking-wider">PREPARING INTO THE BREACH...</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 font-semibold tracking-wider">READY · RUNTIME 04:18</span>
            </>
          )}
        </div>
        <span className="text-slate-400 hidden sm:inline">RELATIONSHIP ASSET THESIS · BRYANT STRATTON</span>
      </div>

      {/* Cinematic Responsive 16:9 Video Canvas */}
      <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative aspect-video flex items-center justify-center group">
        {!isPlaying ? (
          <>
            {/* Cinematic Poster Image */}
            <img
              src={posterImage}
              alt="Into the Breach Cinematic Film Preview"
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-101 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

            {/* Glowing Big Play Button */}
            <button
              onClick={handlePlayClick}
              className="absolute z-20 flex flex-col items-center gap-2 group/play cursor-pointer focus:outline-none"
              aria-label="Play Into the Breach film"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-all duration-300 group-hover/play:scale-105">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-white font-bold bg-slate-950/90 px-3.5 py-1 rounded-full border border-slate-700 shadow-lg">
                Watch Film (04:18)
              </span>
            </button>

            {/* Bottom Bar: Quick Quote & Transcript Drawer Trigger */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-serif-editorial text-xs sm:text-sm italic line-clamp-1 max-w-[65%]">
                “Relationships are not inventory. They are assets to be protected.”
              </span>
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white font-mono text-[11px] flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>{showTranscript ? "Hide Transcript" : "Transcript"}</span>
              </button>
            </div>
          </>
        ) : (
          /* Active Player State with Clean Direct Embed & Drive Fallback */
          <div className="w-full h-full flex flex-col bg-black">
            <div className="px-3 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                INTO THE BREACH (04:18)
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={driveDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-emerald-300 flex items-center gap-1 text-[11px]"
                >
                  <span>Open in Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-[11px]"
                >
                  Poster
                </button>
              </div>
            </div>

            <div className="relative flex-1 w-full bg-black">
              <iframe
                src={breachAsset.embedUrl}
                title="Into the Breach - Finding Trading Firm Film"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* Fallback & Network Assistance Link */}
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <span className="text-slate-400 text-[11px]">
          Direct high-speed stream hosted on institutional Google Workspace Drive:
        </span>
        <a
          href={driveDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-semibold text-xs underline underline-offset-2"
        >
          <span>Open Fullscreen in Google Drive →</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Expandable Narrative Transcript Drawer */}
      {showTranscript && (
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs font-mono text-emerald-400 font-bold">
            <span>COMPLETE ESSAY TRANSCRIPT</span>
            <button
              onClick={() => setShowTranscript(false)}
              className="text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Close ✕
            </button>
          </div>
          <div className="whitespace-pre-line font-serif-editorial text-slate-300 space-y-2 max-h-72 overflow-y-auto pr-2">
            {breachAsset.transcript}
          </div>
        </div>
      )}
    </div>
  );
};
