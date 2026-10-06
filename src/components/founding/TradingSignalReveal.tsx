import React, { useEffect, useState, useRef } from "react";
import { SignalAction } from "./SignalAction";

interface TradingSignalRevealProps {
  scene: 1 | 2 | 4;
  onAdvance: () => void;
}

export const TradingSignalReveal: React.FC<TradingSignalRevealProps> = ({
  scene,
  onAdvance,
}) => {
  const [phase, setPhase] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Timed choreographed reveal sequence
  useEffect(() => {
    setPhase(0);
    const timers: NodeJS.Timeout[] = [];

    if (scene === 1) {
      timers.push(setTimeout(() => setPhase(1), 400));  // Signal enters
      timers.push(setTimeout(() => setPhase(2), 1000)); // YOU'VE BEEN
      timers.push(setTimeout(() => setPhase(3), 1800)); // PERSONALLY INVITED
      timers.push(setTimeout(() => setPhase(4), 2600)); // TO AN ADVENTURE IN TRADING.
      timers.push(setTimeout(() => setPhase(5), 3500)); // Supporting copy & CTA
    } else if (scene === 2) {
      timers.push(setTimeout(() => setPhase(1), 350));  // Signal enters from opposite side
      timers.push(setTimeout(() => setPhase(2), 900));  // NOTHING WORTH BUILDING...
      timers.push(setTimeout(() => setPhase(3), 1800)); // 5 Signals begin converging
      timers.push(setTimeout(() => setPhase(4), 2500)); // WE'RE LOOKING FOR FIVE PEOPLE...
      timers.push(setTimeout(() => setPhase(5), 3400)); // Bridgewater thesis & CTA
    } else if (scene === 4) {
      timers.push(setTimeout(() => setPhase(1), 350));  // Confident signal enters
      timers.push(setTimeout(() => setPhase(2), 900));  // Signal takes sudden sharp drop
      timers.push(setTimeout(() => setPhase(3), 1500)); // WE MAY COMPLETELY FALL ON OUR FACES
      timers.push(setTimeout(() => setPhase(4), 2200)); // That possibility is real...
      timers.push(setTimeout(() => setPhase(5), 3000)); // CTA ready
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [scene]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 relative select-none max-w-4xl mx-auto my-auto"
    >
      {/* ========================================================================= */}
      {/* SCENE 1: THE TRADING INVITATION REVEAL */}
      {/* ========================================================================= */}
      {scene === 1 && (
        <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left relative space-y-6 sm:space-y-8 my-auto">
          
          {/* Active Dynamic Vector Signal Travelling Across the Viewport */}
          <div className="w-full h-12 relative overflow-hidden flex items-center pointer-events-none">
            <svg
              viewBox="0 0 800 60"
              fill="none"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="signalGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.1" />
                  <stop offset="60%" stopColor="#10B981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Grid ticks for telemetry feel */}
              <g stroke="#334155" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4">
                <line x1="100" y1="10" x2="100" y2="50" />
                <line x1="300" y1="10" x2="300" y2="50" />
                <line x1="500" y1="10" x2="500" y2="50" />
                <line x1="700" y1="10" x2="700" y2="50" />
              </g>

              {/* Luminous Trading Signal Path */}
              <path
                d="M 0 30 Q 120 18 220 34 T 440 22 T 620 32 L 780 30"
                stroke="url(#signalGrad1)"
                strokeWidth="1.8"
                strokeDasharray="800"
                strokeDashoffset={phase >= 4 ? 0 : phase === 3 ? 200 : phase === 2 ? 450 : phase === 1 ? 650 : 800}
                className="transition-all duration-1000 ease-out"
              />

              {/* Leading Traveling Node */}
              {phase >= 1 && (
                <circle
                  cx={phase >= 4 ? 780 : phase === 3 ? 580 : phase === 2 ? 350 : 150}
                  cy={phase >= 4 ? 30 : phase === 3 ? 26 : phase === 2 ? 28 : 25}
                  r="3.5"
                  fill="#34D399"
                  className="transition-all duration-1000 ease-out shadow-[0_0_10px_#34d399]"
                />
              )}
            </svg>
          </div>

          {/* Master 3-Line Headline Revealed by the Signal */}
          <div className="space-y-1 sm:space-y-2">
            
            {/* Line 1: YOU'VE BEEN */}
            <div className="overflow-hidden">
              <h1
                className={`font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white transition-all duration-700 ${
                  phase >= 2
                    ? "opacity-100 translate-y-0 filter-none"
                    : "opacity-0 translate-y-4 blur-[2px]"
                }`}
              >
                YOU’VE BEEN
              </h1>
            </div>

            {/* Line 2: PERSONALLY INVITED */}
            <div className="overflow-hidden">
              <h1
                className={`font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-400 transition-all duration-700 ${
                  phase >= 3
                    ? "opacity-100 translate-y-0 filter-none"
                    : "opacity-0 translate-y-4 blur-[2px]"
                }`}
              >
                PERSONALLY INVITED
              </h1>
            </div>

            {/* Line 3: TO AN ADVENTURE IN TRADING. */}
            <div className="overflow-hidden">
              <h1
                className={`font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 transition-all duration-700 ${
                  phase >= 4
                    ? "opacity-100 translate-y-0 filter-none"
                    : "opacity-0 translate-y-4 blur-[2px]"
                }`}
              >
                TO AN ADVENTURE IN TRADING.
              </h1>
            </div>

          </div>

          {/* Supporting Statement: Restrained, not a giant quote */}
          <div
            className={`max-w-xl transition-all duration-700 ${
              phase >= 5
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <p className="text-sm sm:text-base font-sans-ui text-slate-300 leading-relaxed">
              Because someone believes your experience, judgment, relationships or integrity may matter to what comes next.
            </p>

            {/* Primary Action Button: Clean "Begin" with only the trailing vector arrow */}
            <div className="pt-6 sm:pt-8 flex justify-center sm:justify-start">
              <SignalAction
                label="Begin"
                onClick={onAdvance}
                variant="primary"
                sublabel="About 10 minutes · No commitment"
              />
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SCENE 2: TEAM & THE FIVE PEOPLE ADVENTURE (No Video, Pure Focus) */}
      {/* ========================================================================= */}
      {scene === 2 && (
        <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left relative space-y-6 sm:space-y-7 my-auto">
          
          {/* Five Independent Signals Converging Toward a Shared Structure */}
          <div className="w-full h-16 sm:h-20 relative overflow-hidden flex items-center pointer-events-none">
            <svg
              viewBox="0 0 800 80"
              fill="none"
              className="w-full h-full overflow-visible"
            >
              {/* 5 Independent Signal Paths */}
              <g className="transition-all duration-1000">
                {/* Signal 1: Desk Operator */}
                <path
                  d="M 50 15 Q 200 45 400 40"
                  stroke="#10B981"
                  strokeWidth="1.4"
                  strokeDasharray="400"
                  strokeDashoffset={phase >= 3 ? 0 : 400}
                  className="transition-all duration-1000 ease-out"
                />
                {/* Signal 2: Originator */}
                <path
                  d="M 120 70 Q 260 20 400 40"
                  stroke="#06B6D4"
                  strokeWidth="1.2"
                  strokeDasharray="400"
                  strokeDashoffset={phase >= 3 ? 0 : 400}
                  className="transition-all duration-1000 ease-out"
                />
                {/* Signal 3: Capital */}
                <path
                  d="M 750 15 Q 600 50 400 40"
                  stroke="#3B82F6"
                  strokeWidth="1.4"
                  strokeDasharray="400"
                  strokeDashoffset={phase >= 3 ? 0 : 400}
                  className="transition-all duration-1000 ease-out"
                />
                {/* Signal 4: Compliance */}
                <path
                  d="M 680 70 Q 520 25 400 40"
                  stroke="#8B5CF6"
                  strokeWidth="1.2"
                  strokeDasharray="400"
                  strokeDashoffset={phase >= 3 ? 0 : 400}
                  className="transition-all duration-1000 ease-out"
                />
                {/* Signal 5: Principal */}
                <path
                  d="M 400 0 L 400 40"
                  stroke="#34D399"
                  strokeWidth="1.5"
                  strokeDasharray="60"
                  strokeDashoffset={phase >= 3 ? 0 : 60}
                  className="transition-all duration-1000 ease-out"
                />

                {/* Converged Center Node */}
                {phase >= 3 && (
                  <circle
                    cx="400"
                    cy="40"
                    r="5"
                    fill="#34D399"
                    className="shadow-[0_0_12px_#34d399] animate-pulse"
                  />
                )}
              </g>
            </svg>
          </div>

          {/* Statement 1 */}
          <div className="space-y-1">
            <h2
              className={`font-serif-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white transition-all duration-700 ${
                phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              NOTHING WORTH BUILDING AT THIS SCALE
              <br />
              IS BUILT BY ONE PERSON.
            </h2>
          </div>

          {/* Statement 2: Core Adventure */}
          <div
            className={`space-y-1.5 transition-all duration-700 ${
              phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <h3 className="font-serif-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-emerald-300">
              WE’RE LOOKING FOR FIVE PEOPLE
              <br />
              TO HELP US BUILD THE TRADING FIRM.
            </h3>
            <div className="text-xs sm:text-sm font-mono text-slate-400 tracking-wider">
              That’s the adventure.
            </div>
          </div>

          {/* Organizational Analogy (Bridgewater thesis) */}
          <div
            className={`max-w-xl transition-all duration-700 ${
              phase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <p className="text-xs sm:text-sm font-sans-ui text-slate-300 leading-relaxed">
              The lesson I take from firms such as Bridgewater is not that we should copy them. It is that enduring organizations require exceptional people, clear principles, honest disagreement and an environment where individual strengths can compound.
            </p>

            <div className="pt-5 sm:pt-6 flex justify-center sm:justify-start">
              <SignalAction
                label="Watch Into the Breach"
                onClick={onAdvance}
                variant="primary"
              />
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SCENE 4: THE HONEST UNCERTAINTY (Signal Drops Confidently, Words Reveal) */}
      {/* ========================================================================= */}
      {scene === 4 && (
        <div className="w-full flex flex-col items-center text-center relative space-y-5 sm:space-y-6 max-w-2xl mx-auto my-auto">
          
          {/* Signal Travels Confidently, Drops Sharply, Then Stabilizes */}
          <div className="w-full max-w-md h-12 relative overflow-hidden flex items-center pointer-events-none">
            <svg
              viewBox="0 0 400 50"
              fill="none"
              className="w-full h-full overflow-visible"
            >
              <path
                d="M 20 18 L 160 18 L 220 38 L 380 38"
                stroke="#10B981"
                strokeWidth="1.5"
                strokeDasharray="400"
                strokeDashoffset={phase >= 2 ? 0 : 250}
                className="transition-all duration-700 ease-out"
              />
              {phase >= 2 && (
                <circle
                  cx="220"
                  cy="38"
                  r="3.5"
                  fill="#F59E0B"
                  className="shadow-[0_0_8px_#f59e0b]"
                />
              )}
            </svg>
          </div>

          {/* Master Statement */}
          <div className="space-y-2">
            <h2
              className={`font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white transition-all duration-700 ${
                phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              WE MAY COMPLETELY
              <br />
              FALL ON OUR FACES.
            </h2>
            
            <p
              className={`text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-widest transition-all duration-700 ${
                phase >= 4 ? "opacity-100" : "opacity-0"
              }`}
            >
              That possibility is real.
            </p>
          </div>

          {/* Supporting Text */}
          <div
            className={`max-w-lg space-y-6 transition-all duration-700 ${
              phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p className="text-xs sm:text-base font-sans-ui text-slate-300 leading-relaxed">
              But what we have already seen is enough to justify asking whether the right group of people could build something durable from it.
            </p>

            <div className="pt-2 flex justify-center">
              <SignalAction
                label="Show Me the Model"
                onClick={onAdvance}
                variant="primary"
              />
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
