import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, ChevronLeft, ShieldCheck } from "lucide-react";
import { trackEvent } from "../../utils/analytics";

interface PersonalInvitationSceneProps {
  onBeginJourney: () => void;
}

export const PersonalInvitationScene: React.FC<PersonalInvitationSceneProps> = ({
  onBeginJourney,
}) => {
  const [stage, setStage] = useState<number>(0);
  const totalStages = 4;

  useEffect(() => {
    trackEvent("invitation_stage_view", { stage });
  }, [stage]);

  const handleNext = () => {
    if (stage < totalStages - 1) {
      setStage((prev) => prev + 1);
    } else {
      onBeginJourney();
    }
  };

  const handlePrev = () => {
    if (stage > 0) {
      setStage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-center text-center px-4 sm:px-8 py-2 sm:py-4 select-none relative max-w-2xl mx-auto overflow-hidden">
      
      {/* 1. Subtle 4-segment progress line */}
      <div className="w-full flex items-center justify-between gap-3 pt-1 pb-2 shrink-0">
        <div className="flex items-center gap-1.5 flex-1 max-w-[200px]">
          {Array.from({ length: totalStages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setStage(idx)}
              className="h-1 flex-1 rounded-full transition-all duration-500 cursor-pointer"
              style={{
                backgroundColor:
                  stage === idx
                    ? "#34d399"
                    : stage > idx
                    ? "#059669"
                    : "rgba(255, 255, 255, 0.12)",
                boxShadow: stage === idx ? "0 0 8px rgba(52, 211, 153, 0.6)" : "none",
              }}
              aria-label={`Go to invitation phase ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
          <span>0{stage + 1} / 0{totalStages}</span>
          {stage < totalStages - 1 && (
            <button
              type="button"
              onClick={() => setStage(totalStages - 1)}
              className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Skip →
            </button>
          )}
        </div>
      </div>

      {/* 2. Main Narrative Canvas with Staged Typography & Vector Graphics */}
      <div className="flex-1 w-full flex flex-col justify-center items-center my-auto relative">
        
        {/* ================================================================= */}
        {/* STAGE 0: THE INVITATION */}
        {/* ================================================================= */}
        {stage === 0 && (
          <div className="w-full flex flex-col items-center text-center space-y-4 sm:space-y-6 animate-fadeIn max-w-lg">
            
            {/* Fine vector line entering from the left */}
            <div className="w-full max-w-xs h-6 flex items-center justify-center relative">
              <svg viewBox="0 0 280 20" fill="none" className="w-full h-full overflow-visible">
                <line
                  x1="0"
                  y1="10"
                  x2="280"
                  y2="10"
                  stroke="url(#invitationLineGrad)"
                  strokeWidth="1.2"
                  strokeDasharray="4 2"
                />
                <circle cx="140" cy="10" r="3" fill="#34D399" />
                <circle cx="140" cy="10" r="8" stroke="#10B981" strokeWidth="0.75" strokeOpacity="0.5" className="animate-ping" />
                <defs>
                  <linearGradient id="invitationLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#10B981" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Label */}
            <div className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              A PERSONAL INVITATION
            </div>

            {/* Headline */}
            <h1 className="font-serif-display text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.15]">
              YOU’VE BEEN
              <br />
              PERSONALLY INVITED.
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-3 text-slate-300 font-sans-ui max-w-md mx-auto leading-relaxed">
              <p className="text-sm sm:text-base font-serif-editorial text-slate-200 italic">
                Because someone believes your experience, judgment, relationships or integrity may matter to what comes next.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                This invitation is not only about what you might bring to us. We want to build something that creates meaningful value for the people who help build it.
              </p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STAGE 1: THE TEAM & PRINCIPLES */}
        {/* ================================================================= */}
        {stage === 1 && (
          <div className="w-full flex flex-col items-center text-center space-y-4 sm:space-y-6 animate-fadeIn max-w-lg">
            
            {/* Converging Vector Signals */}
            <div className="w-full max-w-xs h-8 flex items-center justify-center relative">
              <svg viewBox="0 0 280 30" fill="none" className="w-full h-full overflow-visible">
                <path d="M20 5 L140 15 M260 5 L140 15 M50 25 L140 15 M230 25 L140 15" stroke="#10B981" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />
                <circle cx="140" cy="15" r="4" fill="#34D399" />
                <circle cx="140" cy="15" r="10" stroke="#06B6D4" strokeWidth="0.8" strokeOpacity="0.4" />
              </svg>
            </div>

            <div className="space-y-1">
              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                WE MAY NEED YOU.
              </h2>
              <p className="text-xs sm:text-sm font-mono text-emerald-400">
                Or you may know exactly who we should be talking to.
              </p>
            </div>

            <div className="space-y-3 max-w-md mx-auto text-left sm:text-center">
              <div className="text-xs sm:text-sm font-serif-display font-bold text-slate-100 uppercase tracking-wide">
                NOTHING WORTH BUILDING AT THIS SCALE IS BUILT BY ONE PERSON.
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans-ui leading-relaxed">
                The lesson I take from firms such as Bridgewater is not that we should copy them. It is that an enduring organization requires exceptional people, clear principles, honest disagreement and a structure that allows individual strengths to compound.
              </p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STAGE 2: THE REALITY & RISK */}
        {/* ================================================================= */}
        {stage === 2 && (
          <div className="w-full flex flex-col items-center text-center space-y-5 animate-fadeIn max-w-lg">
            
            {/* Quiet, Still Minimal Vector Line */}
            <div className="w-full max-w-[180px] h-3 flex items-center justify-center">
              <div className="w-full h-[1px] bg-slate-800 relative">
                <div className="absolute left-1/2 -top-[2px] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight text-slate-100">
                WE MAY COMPLETELY
                <br />
                FALL ON OUR FACES.
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wider uppercase">
                That possibility is real.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans-ui max-w-md mx-auto leading-relaxed">
              But what we have already seen is enough to justify asking whether the right group of people could build something durable from it.
            </p>
          </div>
        )}

        {/* ================================================================= */}
        {/* STAGE 3: THE CALL TO JOURNEY */}
        {/* ================================================================= */}
        {stage === 3 && (
          <div className="w-full flex flex-col items-center text-center space-y-4 sm:space-y-5 animate-fadeIn max-w-lg">
            
            {/* Dynamic Alignment Vector */}
            <div className="w-full max-w-xs h-6 flex items-center justify-center">
              <svg viewBox="0 0 280 20" fill="none" className="w-full h-full overflow-visible">
                <line x1="20" y1="10" x2="260" y2="10" stroke="#10B981" strokeWidth="1.5" />
                <polygon points="265,10 255,6 255,14" fill="#34D399" />
                <circle cx="140" cy="10" r="3" fill="#06B6D4" />
              </svg>
            </div>

            <div className="space-y-1 text-slate-300 text-xs sm:text-sm font-sans-ui">
              <p>Take a look at what we have learned.</p>
              <p className="text-slate-400">Challenge it. See where your experience fits.</p>
            </div>

            <h2 className="font-serif-display text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug max-w-md mx-auto">
              AND IF YOU REACH THE END AND STILL FEEL THIS MAY BE THE RIGHT JOURNEY FOR YOU, WE WANT TO KNOW.
            </h2>

            {/* Primary Action Button directly inside Stage 3 */}
            <div className="w-full max-w-sm pt-2 space-y-2">
              <button
                type="button"
                onClick={onBeginJourney}
                className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-sans-ui font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(52,211,153,0.4)] cursor-pointer group active:scale-[0.99]"
              >
                <span>Begin the Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-[10px] font-mono text-slate-400 tracking-wider">
                About 10 minutes · No commitment
              </div>
            </div>

          </div>
        )}

      </div>

      {/* 3. Navigation Controls for Stages 0, 1, 2 */}
      {stage < 3 && (
        <div className="w-full max-w-sm flex items-center justify-between gap-3 pt-2 pb-1 shrink-0">
          {stage > 0 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-xs font-mono"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div className="w-16" />
          )}

          <button
            type="button"
            onClick={handleNext}
            className="flex-1 py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-emerald-400 hover:text-emerald-300 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <span>Continue</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Institutional Boundary Marker */}
      <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-slate-400 tracking-wider uppercase select-none pt-1 shrink-0">
        <ShieldCheck className="w-3 h-3 text-emerald-500/80 shrink-0" />
        <span>CONFIDENTIAL DISCUSSION DRAFT</span>
        <span>·</span>
        <span>NOT AN OFFER OF SECURITIES</span>
      </div>

    </div>
  );
};
