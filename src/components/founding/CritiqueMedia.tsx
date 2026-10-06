import React, { useState } from "react";
import { RoleId } from "../../types/foundingFirm";
import { ROLES_DATA, MEDIA_SOURCES } from "../../data/foundingFirmData";
import { AlertCircle, Play, FileText, ExternalLink, Sparkles, Scale } from "lucide-react";
import { trackEvent } from "../../utils/analytics";

interface CritiqueMediaProps {
  selectedRole: RoleId;
}

export const CritiqueMedia: React.FC<CritiqueMediaProps> = ({ selectedRole }) => {
  const [isPlayingEmbed, setIsPlayingEmbed] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const asset = MEDIA_SOURCES.friction;
  const roleData = ROLES_DATA[selectedRole];

  const handleListenClick = () => {
    setIsPlayingEmbed(true);
    trackEvent("media_play", { title: asset.title, mediaId: asset.id });
  };

  return (
    <section id="critique-section" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono uppercase tracking-wider mb-3">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>THE SKEPTIC'S LENS</span>
        </div>
        <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
          NOW HEAR THE ARGUMENT AGAINST US.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-amber-200/90 font-serif-editorial italic">
          “If we cannot survive serious criticism, we should not build it.”
        </p>
      </div>

      {/* Main Critique Card */}
      <div className="rounded-2xl p-6 sm:p-9 bg-slate-900 border border-amber-500/30 shadow-xl relative">
        
        {/* Top Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800 text-xs font-mono">
          <span className="text-amber-400 font-bold uppercase">{asset.eyebrow}</span>
          <div className="text-slate-400">
            Runtime: 08:12
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif-display text-xl sm:text-3xl font-bold text-white mb-4">
          {asset.title}
        </h3>

        {/* Skeptical Questions */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 mb-6 space-y-2 text-sm sm:text-base text-slate-300 font-serif-editorial">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-sans-ui">
            The Fundamental Challenges Explored in This Recording:
          </div>
          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
            <li>Where does software stop helping?</li>
            <li>Where does physical commodity execution resist abstraction?</li>
            <li>Where will brokers push back?</li>
            <li>Where does human judgment remain essential?</li>
            <li>What roles cannot be automated away?</li>
          </ul>
        </div>

        {/* Role-Specific Perspective on Friction */}
        <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 mb-6 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-sans-ui text-slate-200">
            <strong className="text-amber-300 font-mono text-xs uppercase block mb-1">
              Why this friction matters to a {roleData.roleTitle}:
            </strong>
            {roleData.frictionRelevance}
          </div>
        </div>

        {/* Player Container */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 mb-6">
          {!isPlayingEmbed ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleListenClick}
                  className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0"
                  aria-label="Listen to the Critique"
                >
                  <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                </button>
                <div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-white">
                    Listen to the Critique
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Critical appraisal of algorithmic limits · 08:12
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>{showTranscript ? "Hide Transcript" : "Read Transcript"}</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                <span className="text-amber-400 font-bold">PLAYING: WHY FINDER’S GUILD NEEDS HUMAN FRICTION</span>
                <a
                  href={`https://drive.google.com/file/d/${asset.driveId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px]"
                >
                  <span>Open Audio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <iframe
                src={asset.embedUrl}
                title="Why Finder’s Guild Needs Human Friction"
                className="w-full h-24 rounded-lg border-0 bg-slate-900"
                allow="autoplay"
              />
            </div>
          )}
        </div>

        {/* Collapsible Transcript */}
        {showTranscript && (
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3 font-serif-editorial leading-relaxed animate-fadeIn mb-6">
            <div className="font-mono text-[10px] text-amber-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              Verbatim Transcript &amp; Show Notes
            </div>
            <div className="whitespace-pre-line space-y-2">
              {asset.transcript}
            </div>
          </div>
        )}

        {/* Core Philosophical Takeaway */}
        <div className="pt-4 border-t border-slate-800 text-center font-serif-editorial text-base sm:text-lg text-slate-200">
          “We are not trying to eliminate human friction.
          <br className="hidden sm:inline" />
          <span className="text-amber-300"> We are trying to determine which friction protects value and which friction simply wastes it.</span>”
        </div>

      </div>
    </section>
  );
};
