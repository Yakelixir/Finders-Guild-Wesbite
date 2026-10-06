import React, { useState } from "react";
import { Play, FileText, ExternalLink, RefreshCw } from "lucide-react";
import { MEDIA_SOURCES } from "../../data/foundingFirmData";
import { trackEvent } from "../../utils/analytics";
import posterImage from "../../assets/images/into_the_breach_poster_1790435589915.jpg";

export const StartHereFilm: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const breachAsset = MEDIA_SOURCES.breach;
  const driveDirectUrl = `https://drive.google.com/file/d/${breachAsset.driveId}/view`;

  const handlePlayClick = () => {
    setIsPlaying(true);
    trackEvent("hero_watch_video", { title: breachAsset.title });
  };

  return (
    <section id="film-section" className="relative py-12 sm:py-18 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800/80">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono uppercase tracking-wider mb-2">
          <span>THE 5-MINUTE EXPLAINER</span>
        </div>
        <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
          START HERE: INTO THE BREACH
        </h2>
        <p className="mt-2 text-base sm:text-lg text-slate-300 font-serif-editorial">
          If you have 5 minutes, start here.
        </p>
        <p className="mt-1 text-xs font-mono text-slate-400">
          Why we believe this moment exists and what we are exploring building together.
        </p>
      </div>

      {/* Video Container (Mobile-first, clean 16:9 aspect, instant poster, zero prolonged black box) */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
        
        {!isPlaying ? (
          /* Instant Lightweight Poster View */
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center group">
            <img
              src={posterImage}
              alt="Into the Breach Video Preview"
              className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-[1.01] transition-transform duration-500"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

            {/* Top Telemetry Tag */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-300">
              <span className="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-emerald-400 font-semibold">
                04:18 RUNTIME
              </span>
              <span className="hidden sm:inline text-slate-400">FINDER’S GUILD ESSAY</span>
            </div>

            {/* Centered Big Play Affordance */}
            <button
              onClick={handlePlayClick}
              className="absolute z-20 flex flex-col items-center gap-2.5 group/play cursor-pointer focus:outline-none"
              aria-label="Play Into the Breach video"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 flex items-center justify-center transition-transform duration-300 shadow-[0_0_30px_rgba(16,185,129,0.5)] group-hover/play:scale-105">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1" />
              </div>
              <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-white font-bold bg-slate-950/90 px-3.5 py-1 rounded-full border border-slate-700 shadow-md">
                Watch Film
              </span>
            </button>

            {/* Bottom Bar with Quote & Transcript Trigger */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-serif-editorial text-xs sm:text-sm italic line-clamp-1 max-w-[65%]">
                “Relationships are not inventory. They are assets to be protected.”
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{showTranscript ? "Hide Transcript" : "Transcript"}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Inline Video Player with Fast-Action Header & Google Drive Fallback */
          <div className="relative aspect-video w-full bg-black flex flex-col">
            <div className="px-3 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                INTO THE BREACH (04:18)
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={driveDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-emerald-300 hover:text-emerald-200 flex items-center gap-1.5 text-xs transition-colors"
                >
                  <span>Open in Google Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white"
                >
                  Back to Poster
                </button>
              </div>
            </div>

            <div className="relative flex-1 w-full bg-slate-950">
              <iframe
                src={breachAsset.embedUrl}
                title="Into the Breach - Founding Trading Firm Film"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                onError={() => setIframeError(true)}
              />
            </div>
          </div>
        )}

        {/* Google Drive Direct Access Always-Visible Fallback Bar */}
        <div className="p-3 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="text-slate-400 text-[11px]">
            If video does not start immediately on your network:
          </span>
          <a
            href={driveDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-semibold underline decoration-emerald-500/50 hover:decoration-emerald-400 underline-offset-2"
          >
            <span>Open in Google Drive (Direct High-Speed Playback) →</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Collapsible Transcript */}
        {showTranscript && (
          <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 text-slate-300 text-sm leading-relaxed animate-fadeIn">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs font-mono text-emerald-400">
              <span>NARRATIVE TRANSCRIPT</span>
              <button
                onClick={() => setShowTranscript(false)}
                className="text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                Close Transcript
              </button>
            </div>
            <div className="whitespace-pre-line font-serif-editorial text-xs sm:text-sm text-slate-300 space-y-2 max-h-72 overflow-y-auto pr-2">
              {breachAsset.transcript}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
