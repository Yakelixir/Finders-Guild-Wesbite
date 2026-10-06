import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, FileText, ExternalLink, ShieldCheck } from "lucide-react";
import { MediaAsset } from "../../types/foundingFirm";
import { trackEvent } from "../../utils/analytics";

interface InstitutionalAudioPlayerProps {
  asset: MediaAsset;
  roleContextLine?: string;
  className?: string;
}

/**
 * INSTITUTIONAL AUDIO PLAYER
 * Implements Section 34, 35, 36 & 43 of Master Rebuild:
 * - Bespoke responsive player matching the dark/emerald visual language
 * - Play/Pause, scrubbable progress rail, live timestamp/duration
 * - Waveform visualization
 * - Personalized role context note
 * - Complete transcript drawer
 * - External Google Drive audio access
 */
export const InstitutionalAudioPlayer: React.FC<InstitutionalAudioPlayerProps> = ({
  asset,
  roleContextLine,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const driveDirectUrl = `https://drive.google.com/file/d/${asset.driveId}/view`;

  // Parse duration string like "6:45" or "8:12" into total seconds
  const parseDurationSeconds = (dur: string): number => {
    const parts = dur.split(":").map(Number);
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }
    return 300;
  };

  const totalSeconds = parseDurationSeconds(asset.duration);
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);

  const formatTime = (secs: number): string => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // Simulated audio playback progression for preview environment
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 100 / totalSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalSeconds]);

  const togglePlay = () => {
    const next = !isPlaying;
    setIsPlaying(next);
    if (next) {
      trackEvent("media_play", { title: asset.title });
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newPct);
  };

  return (
    <div className={`p-5 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4 select-none ${className}`}>
      
      {/* Top Header & Telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
            {asset.eyebrow}
          </span>
          <span className="text-xs font-mono text-slate-400">FINDER'S GUILD PRIVATE BRIEFING</span>
        </div>

        <a
          href={driveDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-slate-400 hover:text-emerald-400 inline-flex items-center gap-1 transition-colors self-start sm:self-auto"
        >
          <span>Drive Audio Link</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Main Title & Description */}
      <div>
        <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white tracking-tight">
          {asset.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-300 font-sans-ui leading-relaxed">
          {asset.description}
        </p>
      </div>

      {/* Personalized Role Context Banner (Section 35) */}
      {roleContextLine && (
        <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-xs font-sans-ui text-emerald-300 flex items-start gap-2.5">
          <span className="text-emerald-400 font-bold mt-0.5">✦</span>
          <div>
            <strong className="font-mono text-[10px] tracking-wider uppercase text-emerald-400 block mb-0.5">
              PERSPECTIVE FOR YOUR ROLE:
            </strong>
            <span>{roleContextLine}</span>
          </div>
        </div>
      )}

      {/* Audio Playback Controls Rail */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-800/90 space-y-3">
        
        {/* Play button, Waveform & Timers */}
        <div className="flex items-center gap-3.5">
          
          {/* Big Play/Pause Toggle */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] shrink-0 cursor-pointer focus:outline-none"
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-slate-950" />
            ) : (
              <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
            )}
          </button>

          {/* Waveform Visualization Bars */}
          <div className="flex-1 flex items-center gap-1 h-8 px-2 overflow-hidden">
            {[
              24, 40, 18, 55, 75, 45, 90, 60, 30, 80, 50, 65, 35, 95, 70, 40, 85,
              50, 30, 65, 80, 45, 90, 35, 60, 75, 20, 55, 85, 40, 70, 30, 60, 45,
            ].map((height, idx) => {
              const isPast = (idx / 34) * 100 <= progress;
              return (
                <div
                  key={idx}
                  className={`w-1 rounded-full transition-all duration-200 ${
                    isPast
                      ? "bg-emerald-400"
                      : "bg-slate-700/60"
                  } ${isPlaying && isPast ? "animate-pulse" : ""}`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>

          {/* Time Counter */}
          <div className="text-xs font-mono text-slate-300 font-semibold shrink-0">
            <span>{formatTime(currentSeconds)}</span>
            <span className="text-slate-600 mx-1">/</span>
            <span className="text-slate-500">{asset.duration}</span>
          </div>
        </div>

        {/* Scrubbable Progress Bar */}
        <div
          onClick={handleSeek}
          className="w-full h-2 bg-slate-800 rounded-full cursor-pointer relative overflow-hidden group"
          role="slider"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom utility controls */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-slate-200 transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <span className="text-[10px] text-slate-500">
              {isPlaying ? "Streaming institutional audio" : "Ready to play"}
            </span>
          </div>

          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="hover:text-emerald-400 text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{showTranscript ? "Hide Transcript" : "Full Transcript"}</span>
          </button>
        </div>

      </div>

      {/* Transcript Drawer */}
      {showTranscript && (
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 font-serif-editorial leading-relaxed animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800 font-mono text-xs text-emerald-400 font-bold">
            <span>TRANSCRIPT · {asset.title.toUpperCase()}</span>
            <button
              onClick={() => setShowTranscript(false)}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              Close ✕
            </button>
          </div>
          <div className="whitespace-pre-line space-y-2 max-h-64 overflow-y-auto pr-2">
            {asset.transcript}
          </div>
        </div>
      )}

    </div>
  );
};
