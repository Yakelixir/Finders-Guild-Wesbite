import React, { useState, useEffect } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  RefreshCw
} from "lucide-react";

interface DealFlowComparisonGraphicProps {
  visualMode: "comparison" | "lottery" | "guild";
  onSetVisualMode: (mode: "comparison" | "lottery" | "guild") => void;
}

export const DealFlowComparisonGraphic: React.FC<DealFlowComparisonGraphicProps> = ({
  visualMode,
  onSetVisualMode,
}) => {
  // 4 Core Phases:
  // Phase 0: Deal Inflow (Mandate Enters)
  // Phase 1: Attribution Gate (Unprotected Broadcast vs. Vault Lock)
  // Phase 2: Execution Routes (Failure Nodes Transform to Green Closes)
  // Phase 3: Final Outcome (Zero Carry vs. Protected Escrow Settlement)
  const [phase, setPhase] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  
  // Mobile detection for responsive pacing
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Relaxed pace on mobile (9.0s) so text and animated paths are comfortable to read on small screens
  // Desktop pace is 6.8s for smooth deliberate inspection
  const phaseDuration = isMobile ? 9000 : 6800;

  // Auto progression timer with single timeout - eliminates unnecessary high-frequency component re-renders on mobile
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setPhase((curr) => (curr >= 3 ? 0 : curr + 1));
    }, phaseDuration);

    return () => clearTimeout(timer);
  }, [isPlaying, phase, phaseDuration]);

  const handleManualPhase = (newPhase: number) => {
    setPhase(newPhase);
  };

  const handleNextPhase = () => {
    setPhase((prev) => (prev >= 3 ? 0 : prev + 1));
  };

  const handlePrevPhase = () => {
    setPhase((prev) => (prev <= 0 ? 3 : prev - 1));
  };

  const phaseDetails = [
    { 
      num: 0, 
      title: "Deal Inflow", 
      desc: "Mandate Enters System",
      transformNarrative: "A $25M exclusive mandate arrives. Alone, brokers impulsively broadcast to chat groups. In the Guild, attribution is secured first."
    },
    { 
      num: 1, 
      title: "Attribution Gate", 
      desc: "Broadcast Risk ➔ Vault Lock",
      transformNarrative: "Watch the red broadcast risk intercepted: the Guild's 24-Month Attribution Vault locks the lead before any counterparty sees it."
    },
    { 
      num: 2, 
      title: "Execution Routes", 
      desc: "Red Failure Nodes Turn Green",
      transformNarrative: "Every failure point turns green: fake buyers become verified balance, daisy chains bypass to settlement, and circumvention becomes an aligned syndicate."
    },
    { 
      num: 3, 
      title: "Final Outcome", 
      desc: "$0 Fee ➔ Protected Escrow Close",
      transformNarrative: "The deal settles. The $0 fee solo outcome dissolves, replaced by protected carry distribution and compound repeat dealflow."
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-7">
      {/* Top Graphic Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[11px] font-serif-display tracking-[0.2em] uppercase text-emerald-300 font-semibold">
            <span className="text-emerald-400 text-xs">✦</span>
            <span>Interactive Deal-Flow Architecture <span className="text-emerald-500/60 mx-1">·</span> Live Sequence</span>
            <span className="text-emerald-400 text-xs">✦</span>
          </div>
          <h3 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
            {visualMode === "comparison" 
              ? "Why Lone Dealmakers Join the Guild" 
              : visualMode === "lottery" 
                ? "The Solo Broker Lottery (Failure Anatomy)" 
                : "The Win-Win Guild (Protected Pipeline)"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            {visualMode === "comparison"
              ? "Transformation View: Watch solo failure points resolve into protected Guild closing chambers."
              : visualMode === "lottery"
                ? "Failure Anatomy: The unvetted daisy chain and circumvention trap."
                : "The Guild Model: Pre-cleared buyers, locked attribution, and protected carry."}
          </p>
        </div>

        {/* Pace indicator */}
        <div className="hidden sm:flex items-center gap-2 shrink-0 text-[11px] font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{isMobile ? "9.0s Reading Pace" : "6.8s Animation Pace"}</span>
        </div>
      </div>

      {/* Narrative Context Card for Current Phase */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950 border border-white/15 shadow-md flex items-center gap-3.5 my-2">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0 shadow-sm">
          {phase === 0 && <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />}
          {phase === 1 && <Lock className="w-4 h-4 sm:w-5 sm:h-5" />}
          {phase === 2 && <Zap className="w-4 h-4 sm:w-5 sm:h-5" />}
          {phase === 3 && <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />}
        </div>
        <div>
          <div className="text-xs sm:text-sm font-mono font-bold text-white flex flex-wrap items-center gap-2">
            <span className="text-emerald-400">{phaseDetails[phase].title.toUpperCase()}</span>
            <span className="text-slate-600 hidden sm:inline">—</span>
            <span className="text-slate-300 font-normal text-xs">{phaseDetails[phase].desc}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            {phaseDetails[phase].transformNarrative}
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP SVG CANVAS (md: and up) */}
      {/* ======================================================== */}
      <div className="hidden md:block relative min-h-[440px] rounded-2xl bg-[#030712] border border-white/10 p-6 shadow-2xl overflow-hidden">
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Global SVG Definitions for Glows & Gradients */}
        <svg className="absolute w-0 h-0">
          <defs>
            <linearGradient id="soloRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>

            <linearGradient id="guildEmeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>

            <linearGradient id="goldVaultGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>

            <filter id="glowRed" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="glowGreen" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="glowGold" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>

        {/* ---------------------------------------------------- */}
        {/* VIEW 1: THE TRANSFORMATION SEQUENCE (RED ➔ GREEN)   */}
        {/* ---------------------------------------------------- */}
        {visualMode === "comparison" ? (
          <svg viewBox="0 0 920 380" className="w-full h-auto select-none">
            
            {/* Outer Stage Boundary */}
            <rect 
              x="10" 
              y="10" 
              width="900" 
              height="360" 
              rx="20" 
              fill={phase >= 2 ? "rgba(16,185,129,0.03)" : "rgba(244,63,94,0.02)"} 
              stroke={phase >= 2 ? "#10b981" : "rgba(255,255,255,0.15)"} 
              strokeWidth="1.5" 
              strokeDasharray={phase >= 2 ? undefined : "6 6"}
            />

            {/* Top Interactive Banner */}
            <g transform="translate(30, 24)">
              <rect 
                x="0" 
                y="0" 
                width="310" 
                height="28" 
                rx="6" 
                fill={phase >= 2 ? "rgba(16,185,129,0.2)" : "rgba(244,63,94,0.2)"} 
                stroke={phase >= 2 ? "#10b981" : "#f43f5e"}
                strokeWidth="1"
              />
              <text 
                x="155" 
                y="18" 
                fill={phase >= 2 ? "#34d399" : "#fda4af"} 
                fontSize="11" 
                fontWeight="bold" 
                textAnchor="middle" 
                letterSpacing="0.5"
              >
                {phase < 2 
                  ? "UNCHECKED WILDERNESS EXPOSURE" 
                  : "GUILD INTERCEPTION ➔ PROTECTED ALIGNMENT"}
              </text>
            </g>

            {/* Top Right Live Telemetry Tag */}
            <g transform="translate(620, 24)">
              <rect x="0" y="0" width="270" height="28" rx="6" fill="rgba(15,23,42,0.8)" stroke="rgba(255,255,255,0.1)" />
              <text x="135" y="18" fill="#94a3b8" fontSize="10.5" textAnchor="middle" fontFamily="monospace">
                SYSTEM STATUS: {phase === 0 ? "INCOMING LEAD" : phase === 1 ? "VAULT SECURING" : phase === 2 ? "TURNING NODES GREEN" : "CLOSED ESCROW"}
              </text>
            </g>

            {/* Deal Inflow Conduits from Left Edge */}
            <line 
              x1="30" 
              y1="175" 
              x2="105" 
              y2="175" 
              stroke={phase === 0 ? "#f43f5e" : "#10b981"} 
              strokeWidth="2.5" 
              className="animate-liquid-flow"
              strokeDasharray="6 4"
            />
            <polygon 
              points="105,171 114,175 105,179" 
              fill={phase === 0 ? "#f43f5e" : "#10b981"} 
            />

            {/* Dealmaker Origin Node */}
            <g transform="translate(140, 175)">
              <circle 
                cx="0" 
                cy="0" 
                r="30" 
                fill={phase >= 1 ? "rgba(16,185,129,0.22)" : "rgba(244,63,94,0.2)"} 
                stroke={phase >= 1 ? "#10b981" : "#f43f5e"} 
                strokeWidth="2.5" 
              />
              <circle 
                cx="0" 
                cy="0" 
                r="12" 
                fill={phase >= 1 ? "#10b981" : "#f43f5e"} 
                filter={phase >= 1 ? "url(#glowGreen)" : "url(#glowRed)"}
              />
              <text x="0" y="48" fill="#ffffff" fontSize="12.5" fontWeight="bold" textAnchor="middle">
                Dealmaker Lead Origin
              </text>
              <text 
                x="0" 
                y="63" 
                fill={phase >= 1 ? "#34d399" : "#fda4af"} 
                fontSize="10" 
                fontWeight="bold" 
                textAnchor="middle"
              >
                {phase >= 1 ? "✓ Shielded by Guild" : "Isolated & Vulnerable"}
              </text>
            </g>

            {/* Inflow Mandate Token Animation */}
            {phase === 0 && (
              <g className="animate-pulse">
                <circle cx="65" cy="175" r="9" fill="#f43f5e" filter="url(#glowRed)" />
                <rect x="25" y="132" width="105" height="24" rx="6" fill="#881337" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="77" y="148" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  $25M Mandate
                </text>
              </g>
            )}

            {/* ---------------------------------------------------- */}
            {/* CENTRAL CONDUIT & ATTRIBUTION VAULT GATE             */}
            {/* ---------------------------------------------------- */}
            <g>
              {/* Connecting line from Dealmaker to Vault */}
              <path 
                id="comparison-vault-inflow"
                d="M 170 175 L 300 175" 
                fill="none"
                stroke={phase >= 1 ? "#f59e0b" : "#f43f5e"} 
                strokeWidth={phase >= 1 ? "3.5" : "2"} 
                strokeDasharray={phase >= 1 ? undefined : "5 5"}
                className={phase >= 1 ? undefined : "animate-liquid-flow"}
              />
              <circle cx="170" cy="175" r="4" fill={phase >= 1 ? "#f59e0b" : "#f43f5e"} />

              {/* Attribution Vault Box (NO BOUNCE - PURE STABILITY & GLOW) */}
              <rect 
                x="300" 
                y="148" 
                width="170" 
                height="54" 
                rx="10" 
                fill={phase >= 1 ? "rgba(245,158,11,0.22)" : "rgba(244,63,94,0.12)"} 
                stroke={phase >= 1 ? "#f59e0b" : "#f43f5e"} 
                strokeWidth={phase >= 1 ? "2" : "1.5"}
                filter={phase >= 1 ? "url(#glowGold)" : undefined}
              />
              
              {/* Icon in Vault */}
              <g transform="translate(312, 163)">
                {phase >= 1 ? (
                  <>
                    <rect x="2" y="8" width="16" height="13" rx="3" fill="#f59e0b" />
                    <path d="M 6 8 L 6 4 Q 10 0, 14 4 L 14 8" fill="none" stroke="#f59e0b" strokeWidth="2" />
                  </>
                ) : (
                  <text x="8" y="16" fill="#f43f5e" fontSize="16" fontWeight="bold">⚠</text>
                )}
              </g>

              {/* Vault Text Content */}
              <text x="342" y="170" fill={phase >= 1 ? "#fde68a" : "#fca5a5"} fontSize="11" fontWeight="bold">
                {phase >= 1 ? "Attribution Vault" : "Unprotected Forward"}
              </text>
              <text x="342" y="187" fill={phase >= 1 ? "#34d399" : "#fda4af"} fontSize="9" fontFamily="monospace" fontWeight="600">
                {phase >= 1 ? "✓ 24-Mo Tail Active" : "✕ Copied & Leaked"}
              </text>

              {/* Liquid gold particle moving into vault during Phase >= 1 (strictly on line) */}
              {phase >= 1 && (
                <circle cx="0" cy="0" r="4.5" fill="#fbbf24" filter="url(#glowGold)">
                  <animateMotion dur="1.8s" repeatCount="indefinite">
                    <mpath href="#comparison-vault-inflow" />
                  </animateMotion>
                </circle>
              )}

              {/* Line from Vault to Settlement */}
              <path 
                id="comparison-route-mid"
                d="M 470 175 L 680 175" 
                fill="none"
                stroke={phase >= 2 ? "#10b981" : "#64748b"} 
                strokeWidth={phase >= 2 ? "3" : "1.5"} 
                strokeDasharray={phase >= 2 ? undefined : "4 4"}
              />
            </g>

            {/* ---------------------------------------------------- */}
            {/* ROUTE 1 (TOP): COUNTERPARTY CHECK (TURNS GREEN)      */}
            {/* ---------------------------------------------------- */}
            <g>
              {/* Fluid Conduit Path */}
              <path 
                id="comparison-route-top"
                d="M 470 162 Q 560 85, 680 85" 
                fill="none" 
                stroke={phase >= 2 ? "#38bdf8" : "#f43f5e"} 
                strokeWidth={phase >= 2 ? "2.5" : "1.5"} 
                strokeDasharray={phase >= 2 ? undefined : "5 4"}
                className={phase >= 2 ? "animate-liquid-flow" : undefined}
              />
              <circle cx="470" cy="162" r="3.5" fill={phase >= 2 ? "#38bdf8" : "#f43f5e"} />

              {/* Node Circle */}
              <circle 
                cx="680" 
                cy="85" 
                r="16" 
                fill={phase >= 2 ? "rgba(56,189,248,0.25)" : "rgba(244,63,94,0.15)"} 
                stroke={phase >= 2 ? "#38bdf8" : "#f43f5e"} 
                strokeWidth="2" 
              />
              <circle 
                cx="680" 
                cy="85" 
                r="6" 
                fill={phase >= 2 ? "#38bdf8" : "#f43f5e"} 
                filter={phase >= 2 ? "url(#glowGreen)" : "url(#glowRed)"}
              />

              {/* Node Descriptive Text & Status (Cleanly offset to the right) */}
              <g transform="translate(706, 72)">
                <text x="0" y="13" fill={phase >= 2 ? "#7dd3fc" : "#fca5a5"} fontSize="12" fontWeight="bold">
                  {phase >= 2 ? "Verified Buyer" : "Ghost Buyer"}
                </text>
                <text x="0" y="28" fill={phase >= 2 ? "#34d399" : "#f87171"} fontSize="10" fontWeight="bold">
                  {phase >= 2 ? "✓ POF Pre-Cleared (No Flakes)" : "✕ Fake POF • 40 hrs lost"}
                </text>
              </g>

              {/* Transformation Indicator Tag */}
              {phase >= 2 && (
                <g transform="translate(525, 78)">
                  <rect x="0" y="0" width="105" height="18" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
                  <text x="52" y="12" fill="#ecfdf5" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                    ➔ TURNED TO GREEN
                  </text>
                </g>
              )}
            </g>

            {/* ---------------------------------------------------- */}
            {/* ROUTE 2 (MIDDLE): DIRECT SETTLEMENT (TURNS GREEN)    */}
            {/* ---------------------------------------------------- */}
            <g>
              {/* Settlement Node */}
              <circle 
                cx="680" 
                cy="175" 
                r="18" 
                fill={phase >= 2 ? "rgba(16,185,129,0.3)" : "rgba(100,116,139,0.2)"} 
                stroke={phase >= 2 ? "#10b981" : "#64748b"} 
                strokeWidth="2.5" 
              />
              <circle 
                cx="680" 
                cy="175" 
                r="7" 
                fill={phase >= 2 ? "#10b981" : "#64748b"} 
                filter={phase >= 2 ? "url(#glowGreen)" : undefined}
              />

              {/* Text to Right */}
              <g transform="translate(706, 162)">
                <text x="0" y="13" fill={phase >= 2 ? "#ecfdf5" : "#cbd5e1"} fontSize="12" fontWeight="bold">
                  {phase >= 2 ? "Escrow Settlement" : "Broker #4 (Daisy Chain)"}
                </text>
                <text x="0" y="28" fill={phase >= 2 ? "#34d399" : "#f87171"} fontSize="10" fontWeight="bold">
                  {phase >= 2 ? "✓ Direct Principal Channel" : "✕ Leaked Text • Mandate Blown"}
                </text>
              </g>

              {/* Transformation Tag */}
              {phase >= 2 && (
                <g transform="translate(535, 166)">
                  <rect x="0" y="0" width="105" height="18" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
                  <text x="52" y="12" fill="#ecfdf5" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                    ➔ BYPASSES LEAKS
                  </text>
                </g>
              )}
            </g>

            {/* ---------------------------------------------------- */}
            {/* ROUTE 3 (BOTTOM): SYNDICATE DESK (TURNS GREEN)       */}
            {/* ---------------------------------------------------- */}
            <g>
              {/* Conduit Path */}
              <path 
                id="comparison-route-bot"
                d="M 470 188 Q 560 265, 680 265" 
                fill="none" 
                stroke={phase >= 2 ? "#a855f7" : "#f43f5e"} 
                strokeWidth={phase >= 2 ? "2.5" : "1.5"} 
                strokeDasharray={phase >= 2 ? undefined : "5 4"}
                className={phase >= 2 ? "animate-liquid-flow" : undefined}
              />
              <circle cx="470" cy="188" r="3.5" fill={phase >= 2 ? "#a855f7" : "#f43f5e"} />

              {/* Node Circle */}
              <circle 
                cx="680" 
                cy="265" 
                r="16" 
                fill={phase >= 2 ? "rgba(168,85,247,0.25)" : "rgba(244,63,94,0.15)"} 
                stroke={phase >= 2 ? "#a855f7" : "#f43f5e"} 
                strokeWidth="2" 
              />
              <circle 
                cx="680" 
                cy="265" 
                r="6" 
                fill={phase >= 2 ? "#a855f7" : "#f43f5e"} 
                filter={phase >= 2 ? "url(#glowGreen)" : "url(#glowRed)"}
              />

              {/* Text to Right */}
              <g transform="translate(706, 252)">
                <text x="0" y="13" fill={phase >= 2 ? "#d8b4fe" : "#fca5a5"} fontSize="12" fontWeight="bold">
                  {phase >= 2 ? "Syndicate Desks" : "Circumvention Threat"}
                </text>
                <text x="0" y="28" fill={phase >= 2 ? "#34d399" : "#f87171"} fontSize="10" fontWeight="bold">
                  {phase >= 2 ? "✓ Win-Win Split Guaranteed" : "✕ Finder Cut Out • $0 Fee"}
                </text>
              </g>

              {/* Transformation Tag */}
              {phase >= 2 && (
                <g transform="translate(525, 250)">
                  <rect x="0" y="0" width="105" height="18" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
                  <text x="52" y="12" fill="#ecfdf5" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                    ➔ TURNED TO GREEN
                  </text>
                </g>
              )}
            </g>

            {/* ---------------------------------------------------- */}
            {/* BOTTOM OUTCOME BANNER (TRANSFORMS RED ➔ GREEN)       */}
            {/* ---------------------------------------------------- */}
            <g transform="translate(30, 318)">
              {phase < 3 ? (
                <g>
                  <rect 
                    x="0" 
                    y="0" 
                    width="440" 
                    height="32" 
                    rx="8" 
                    fill={phase >= 2 ? "rgba(16,185,129,0.2)" : "rgba(244,63,94,0.18)"} 
                    stroke={phase >= 2 ? "#10b981" : "#f43f5e"} 
                    strokeWidth="1.5" 
                  />
                  <text 
                    x="220" 
                    y="21" 
                    fill={phase >= 2 ? "#a7f3d0" : "#fecdd3"} 
                    fontSize="11" 
                    fontWeight="bold" 
                    textAnchor="middle"
                  >
                    {phase >= 2 
                      ? "TRANSFORMATION COMPLETE: Network Protected Against All 3 Leaks" 
                      : "DANGER: Solo Broker Gambling on Unverified Forwards"}
                  </text>
                </g>
              ) : (
                /* Phase 3: Radiant Settled Escrow Banner */
                <g>
                  <rect 
                    x="0" 
                    y="0" 
                    width="860" 
                    height="34" 
                    rx="8" 
                    fill="#064e3b" 
                    stroke="#34d399" 
                    strokeWidth="2" 
                    filter="url(#glowGreen)"
                  />
                  <text x="430" y="22" fill="#ecfdf5" fontSize="12" fontWeight="bold" textAnchor="middle">
                    ✓ ESCROW SETTLED: $250,000+ Protected Carry Distributed • 100% Attribution Preserved
                  </text>
                </g>
              )}
            </g>

            {/* Liquid Flow Particles strictly tracking the 3 conduit curves */}
            {phase >= 2 && (
              <g>
                <circle cx="0" cy="0" r="4.5" fill="#38bdf8" filter="url(#glowGreen)">
                  <animateMotion dur="2.2s" repeatCount="indefinite">
                    <mpath href="#comparison-route-top" />
                  </animateMotion>
                </circle>
                <circle cx="0" cy="0" r="4.5" fill="#10b981" filter="url(#glowGreen)">
                  <animateMotion dur="1.8s" repeatCount="indefinite">
                    <mpath href="#comparison-route-mid" />
                  </animateMotion>
                </circle>
                <circle cx="0" cy="0" r="4.5" fill="#a855f7" filter="url(#glowGreen)">
                  <animateMotion dur="2.2s" repeatCount="indefinite">
                    <mpath href="#comparison-route-bot" />
                  </animateMotion>
                </circle>
              </g>
            )}

          </svg>
        ) : visualMode === "lottery" ? (
          /* ---------------------------------------------------- */
          /* VIEW 2: THE SOLO BROKER LOTTERY (SLOWED & LIQUID)    */
          /* ---------------------------------------------------- */
          <svg viewBox="0 0 920 380" className="w-full h-auto select-none">
            {/* Outer boundary */}
            <rect 
              x="15" 
              y="10" 
              width="890" 
              height="360" 
              rx="20" 
              fill="rgba(244,63,94,0.03)" 
              stroke="#f43f5e" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
            
            {/* Top Tag */}
            <rect x="35" y="24" width="220" height="28" rx="6" fill="rgba(244,63,94,0.25)" />
            <text x="145" y="42" fill="#fda4af" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              THE SOLO BROKER LOTTERY
            </text>

            {/* Inflow line */}
            <line x1="35" y1="175" x2="95" y2="175" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 3" />
            <polygon points="95,171 104,175 95,179" fill="#f43f5e" />

            {/* Solo Dealmaker Node */}
            <g transform="translate(140, 175)">
              <circle cx="0" cy="0" r="30" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="12" fill="#f43f5e" filter="url(#glowRed)" />
              <text x="0" y="48" fill="#ffffff" fontSize="12.5" fontWeight="bold" textAnchor="middle">
                Solo Dealmaker
              </text>
              <text x="0" y="64" fill="#fda4af" fontSize="10" textAnchor="middle">
                Isolated • Vulnerable
              </text>
            </g>

            {/* Phase 0 Mandate Inflow */}
            {phase === 0 && (
              <g className="animate-pulse">
                <circle cx="65" cy="175" r="9" fill="#fb7185" filter="url(#glowRed)" />
                <rect x="25" y="132" width="105" height="24" rx="6" fill="#881337" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="77" y="148" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  $25M Mandate
                </text>
              </g>
            )}

            {/* Phase 1 Unprotected Broadcast alert */}
            {phase === 1 && (
              <g>
                <circle cx="140" cy="175" r="38" fill="none" stroke="#f43f5e" strokeWidth="1.5" className="animate-ping" />
                <rect x="90" y="105" width="180" height="26" rx="6" fill="#4c0519" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="180" y="122" fill="#fda4af" fontSize="10" fontWeight="bold" textAnchor="middle">
                  ⚠ Unprotected Broadcast
                </text>
              </g>
            )}

            {/* Path 1: Top Branch -> Ghost Buyer */}
            <path 
              id="lottery-route-top"
              d="M 170 162 Q 280 85, 420 85" 
              fill="none" 
              stroke="#f43f5e" 
              strokeWidth="2" 
              strokeDasharray="5 4" 
              className="animate-liquid-flow"
            />
            <circle cx="420" cy="85" r="15" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="420" cy="85" r="5" fill="#f43f5e" filter="url(#glowRed)" />
            <g transform="translate(448, 72)">
              <text x="0" y="13" fill="#fca5a5" fontSize="12" fontWeight="bold">Ghost Buyer (Fake POF)</text>
              <text x="0" y="28" fill="#94a3b8" fontSize="10">40+ hours wasted on forged bank letters</text>
            </g>

            {/* Path 2: Middle Branch -> Broker Daisy Chain */}
            <path 
              id="lottery-route-mid"
              d="M 170 175 L 420 175" 
              fill="none"
              stroke="#64748b" 
              strokeWidth="2" 
              strokeDasharray="4 4" 
            />
            <circle cx="420" cy="175" r="15" fill="rgba(100,116,139,0.15)" stroke="#64748b" strokeWidth="2" />
            <circle cx="420" cy="175" r="5" fill="#64748b" />
            <g transform="translate(448, 162)">
              <text x="0" y="13" fill="#cbd5e1" fontSize="12" fontWeight="bold">Broker #4 Daisy Chain</text>
              <text x="0" y="28" fill="#f87171" fontSize="10" fontWeight="bold">✕ Leaked into 10 Telegram groups • Mandate Blown</text>
            </g>

            {/* Path 3: Bottom Branch -> Circumvention */}
            <path 
              id="lottery-route-bot"
              d="M 170 188 Q 280 265, 420 265" 
              fill="none" 
              stroke="#f43f5e" 
              strokeWidth="2" 
              strokeDasharray="5 4" 
              className="animate-liquid-flow"
            />
            <circle cx="420" cy="265" r="15" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="420" cy="265" r="5" fill="#f43f5e" filter="url(#glowRed)" />
            <g transform="translate(448, 252)">
              <text x="0" y="13" fill="#fca5a5" fontSize="12" fontWeight="bold">Direct Circumvention (Cut Out)</text>
              <text x="0" y="28" fill="#f87171" fontSize="10" fontWeight="bold">✕ Counterparty circumvents dealmaker • $0 Fee received</text>
            </g>

            {/* Bottom Outcome Card */}
            <g transform="translate(35, 318)">
              <rect 
                x="0" 
                y="0" 
                width="850" 
                height="32" 
                rx="8" 
                fill="#450a0a" 
                stroke="#ef4444" 
                strokeWidth="1.5" 
                filter="url(#glowRed)"
              />
              <text x="425" y="21" fill="#fecdd3" fontSize="11.5" fontWeight="bold" textAnchor="middle">
                OUTCOME: 98% WASTED TIME • ZERO PROTECTED CARRY • $0 FEE
              </text>
            </g>

            {/* Slow liquid particles flowing strictly along failure paths */}
            {phase >= 2 && (
              <g>
                <circle cx="0" cy="0" r="4.5" fill="#f43f5e" filter="url(#glowRed)">
                  <animateMotion dur="2.2s" repeatCount="indefinite">
                    <mpath href="#lottery-route-top" />
                  </animateMotion>
                </circle>
                <circle cx="0" cy="0" r="4.5" fill="#94a3b8">
                  <animateMotion dur="1.8s" repeatCount="indefinite">
                    <mpath href="#lottery-route-mid" />
                  </animateMotion>
                </circle>
                <circle cx="0" cy="0" r="4.5" fill="#f43f5e" filter="url(#glowRed)">
                  <animateMotion dur="2.2s" repeatCount="indefinite">
                    <mpath href="#lottery-route-bot" />
                  </animateMotion>
                </circle>
              </g>
            )}
          </svg>
        ) : (
          /* ---------------------------------------------------- */
          /* VIEW 3: THE WIN-WIN GUILD (PURE GREEN PROTECTED)     */
          /* ---------------------------------------------------- */
          <svg viewBox="0 0 920 380" className="w-full h-auto select-none">
            {/* Outer boundary */}
            <rect 
              x="15" 
              y="10" 
              width="890" 
              height="360" 
              rx="20" 
              fill="rgba(16,185,129,0.04)" 
              stroke="#10b981" 
              strokeWidth="2" 
            />
            
            {/* Top Tag */}
            <rect x="35" y="24" width="240" height="28" rx="6" fill="rgba(16,185,129,0.25)" />
            <text x="155" y="42" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              THE ALIGNED GUILD COMMUNITY
            </text>

            {/* Inflow line */}
            <line x1="35" y1="175" x2="95" y2="175" stroke="#10b981" strokeWidth="2.5" />
            <polygon points="95,171 104,175 95,179" fill="#10b981" />

            {/* Guild Dealmaker Node */}
            <g transform="translate(140, 175)">
              <circle cx="0" cy="0" r="30" fill="rgba(16,185,129,0.25)" stroke="#10b981" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="12" fill="#10b981" filter="url(#glowGreen)" />
              <text x="0" y="48" fill="#ffffff" fontSize="12.5" fontWeight="bold" textAnchor="middle">
                You in the Guild
              </text>
              <text x="0" y="64" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">
                Protected &amp; Backed
              </text>
            </g>

            {/* Phase 0 Mandate Inflow */}
            {phase === 0 && (
              <g className="animate-pulse">
                <circle cx="65" cy="175" r="9" fill="#10b981" filter="url(#glowGreen)" />
                <rect x="25" y="132" width="105" height="24" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
                <text x="77" y="148" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  $25M Mandate
                </text>
              </g>
            )}

            {/* Attribution Vault Line & Box (NO BOUNCING) */}
            <path id="guild-route-inflow" d="M 170 175 L 300 175" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="170" cy="175" r="4" fill="#f59e0b" />
            <circle cx="300" cy="175" r="4" fill="#f59e0b" />

            {/* Golden Vault Box */}
            <rect 
              x="300" 
              y="148" 
              width="180" 
              height="54" 
              rx="10" 
              fill="rgba(245,158,11,0.25)" 
              stroke="#f59e0b" 
              strokeWidth="2" 
              filter="url(#glowGold)" 
            />
            {/* Lock icon */}
            <g transform="translate(312, 163)">
              <rect x="2" y="8" width="16" height="13" rx="3" fill="#f59e0b" />
              <path d="M 6 8 L 6 4 Q 10 0, 14 4 L 14 8" fill="none" stroke="#f59e0b" strokeWidth="2" />
            </g>
            <text x="345" y="170" fill="#fde68a" fontSize="11" fontWeight="bold">
              Attribution Locked
            </text>
            <text x="345" y="187" fill="#a7f3d0" fontSize="9" fontFamily="monospace">
              ✓ 24-Mo Tail Guaranteed
            </text>

            {/* Line from Vault to Settlement */}
            <path id="guild-route-mid" d="M 480 175 L 680 175" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
            
            {/* Settlement Node */}
            <circle cx="680" cy="175" r="18" fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="2.5" />
            <circle cx="680" cy="175" r="7" fill="#10b981" filter="url(#glowGreen)" />
            <g transform="translate(706, 162)">
              <text x="0" y="13" fill="#ffffff" fontSize="12" fontWeight="bold">Escrow Settlement</text>
              <text x="0" y="28" fill="#34d399" fontSize="10" fontWeight="bold">✓ Direct Protected Distribution</text>
            </g>

            {/* Verified Buyer (Top Path) */}
            <path 
              id="guild-route-top"
              d="M 480 162 Q 570 85, 680 85" 
              fill="none" 
              stroke="#38bdf8" 
              strokeWidth="2.5" 
              className="animate-liquid-flow"
            />
            <circle cx="680" cy="85" r="16" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="680" cy="85" r="6" fill="#38bdf8" filter="url(#glowGreen)" />
            <g transform="translate(706, 72)">
              <text x="0" y="13" fill="#7dd3fc" fontSize="12" fontWeight="bold">Verified Buyer</text>
              <text x="0" y="28" fill="#34d399" fontSize="10" fontWeight="bold">✓ POF Pre-Cleared (Zero Flakes)</text>
            </g>

            {/* Syndicate Desks (Bottom Path) */}
            <path 
              id="guild-route-bot"
              d="M 480 188 Q 570 265, 680 265" 
              fill="none" 
              stroke="#a855f7" 
              strokeWidth="2.5" 
              className="animate-liquid-flow"
            />
            <circle cx="680" cy="265" r="16" fill="rgba(168,85,247,0.25)" stroke="#a855f7" strokeWidth="2" />
            <circle cx="680" cy="265" r="6" fill="#a855f7" filter="url(#glowGreen)" />
            <g transform="translate(706, 252)">
              <text x="0" y="13" fill="#d8b4fe" fontSize="12" fontWeight="bold">Syndicate Desks</text>
              <text x="0" y="28" fill="#34d399" fontSize="10" fontWeight="bold">✓ Win-Win Split Guaranteed</text>
            </g>

            {/* Bottom Outcome Card */}
            <g transform="translate(35, 318)">
              <rect 
                x="0" 
                y="0" 
                width="850" 
                height="32" 
                rx="8" 
                fill="#064e3b" 
                stroke="#34d399" 
                strokeWidth="2" 
                filter="url(#glowGreen)"
              />
              <text x="425" y="21" fill="#ecfdf5" fontSize="11.5" fontWeight="bold" textAnchor="middle">
                OUTCOME: COMPOUNDING CLOSES • 100% PROTECTED CARRY • IRREVOCABLE REPUTATION
              </text>
            </g>

            {/* Liquid particles along conduits strictly locked on paths */}
            <g>
              <circle cx="0" cy="0" r="4.5" fill="#fbbf24" filter="url(#glowGold)">
                <animateMotion dur="1.8s" repeatCount="indefinite">
                  <mpath href="#guild-route-inflow" />
                </animateMotion>
              </circle>
              <circle cx="0" cy="0" r="4.5" fill="#38bdf8" filter="url(#glowGreen)">
                <animateMotion dur="2.2s" repeatCount="indefinite">
                  <mpath href="#guild-route-top" />
                </animateMotion>
              </circle>
              <circle cx="0" cy="0" r="4.5" fill="#10b981" filter="url(#glowGreen)">
                <animateMotion dur="1.8s" repeatCount="indefinite">
                  <mpath href="#guild-route-mid" />
                </animateMotion>
              </circle>
              <circle cx="0" cy="0" r="4.5" fill="#a855f7" filter="url(#glowGreen)">
                <animateMotion dur="2.2s" repeatCount="indefinite">
                  <mpath href="#guild-route-bot" />
                </animateMotion>
              </circle>
            </g>
          </svg>
        )}

      </div>

      {/* ======================================================== */}
      {/* MOBILE VIEW (< md:): CLEAN TRANSFORMATION SEQUENCE       */}
      {/* ======================================================== */}
      <div className="block md:hidden space-y-4">
        
        <div className="p-4 sm:p-5 rounded-2xl bg-[#030712] border border-white/15 shadow-xl">
          
          {/* Mobile Header with Mode Badge and Phase Counter */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${
                phase === 0 ? "bg-rose-950/80 border-rose-500/40 text-rose-300" :
                phase === 1 ? "bg-amber-950/80 border-amber-500/40 text-amber-300" :
                phase === 2 ? "bg-cyan-950/80 border-cyan-500/40 text-cyan-300" :
                "bg-emerald-950/80 border-emerald-500/40 text-emerald-300"
              }`}>
                {visualMode === "lottery" ? "THE SOLO REALITY" : `PHASE 0${phase + 1}: ${phaseDetails[phase].title.toUpperCase()}`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 rounded bg-slate-800 border border-white/10 text-slate-300 hover:text-white"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
            </div>
          </div>

          {/* SVG Visual Stage for Mobile */}
          <div className="py-2">
            <svg viewBox="0 0 350 220" className="w-full h-auto select-none">
              <defs>
                <filter id="glowMobile" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Phase 0 Deal Inflow Token */}
              {phase === 0 && (
                <g transform="translate(6, 100)">
                  <rect x="0" y="0" width="22" height="20" rx="4" fill="#f43f5e" />
                  <text x="11" y="13" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                    $25M
                  </text>
                  <line x1="22" y1="10" x2="32" y2="10" stroke="#f43f5e" strokeWidth="2" strokeDasharray="2 2" />
                </g>
              )}

              {/* Central Dealmaker */}
              <circle 
                cx="50" 
                cy="110" 
                r="22" 
                fill={
                  phase >= 2 && visualMode !== "lottery" ? "rgba(16,185,129,0.25)" : 
                  phase === 1 && visualMode !== "lottery" ? "rgba(245,158,11,0.2)" : 
                  "rgba(244,63,94,0.2)"
                } 
                stroke={
                  phase >= 2 && visualMode !== "lottery" ? "#10b981" : 
                  phase === 1 && visualMode !== "lottery" ? "#f59e0b" : 
                  "#f43f5e"
                } 
                strokeWidth="2" 
              />
              <circle 
                cx="50" 
                cy="110" 
                r="8" 
                fill={
                  phase >= 2 && visualMode !== "lottery" ? "#10b981" : 
                  phase === 1 && visualMode !== "lottery" ? "#f59e0b" : 
                  "#f43f5e"
                } 
              />
              <text x="50" y="145" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                Dealmaker
              </text>
              <text 
                x="50" 
                y="158" 
                fill={
                  phase >= 2 && visualMode !== "lottery" ? "#34d399" : 
                  phase === 1 && visualMode !== "lottery" ? "#fde68a" : 
                  "#fda4af"
                } 
                fontSize="8" 
                fontWeight="bold" 
                textAnchor="middle"
              >
                {phase >= 2 && visualMode !== "lottery" ? "✓ Protected" : phase === 1 ? "Vault Locking" : "✕ Vulnerable"}
              </text>

              {/* Top Branch */}
              <path 
                d="M 72 100 Q 120 50, 175 50" 
                fill="none" 
                stroke={phase >= 2 && visualMode !== "lottery" ? "#38bdf8" : "#f43f5e"} 
                strokeWidth="1.5" 
                strokeDasharray={phase >= 2 && visualMode !== "lottery" ? undefined : "3 3"} 
              />
              <circle 
                cx="175" 
                cy="50" 
                r="11" 
                fill={phase >= 2 && visualMode !== "lottery" ? "rgba(56,189,248,0.2)" : "rgba(244,63,94,0.15)"} 
                stroke={phase >= 2 && visualMode !== "lottery" ? "#38bdf8" : "#f43f5e"} 
                strokeWidth="1.5" 
              />
              <circle 
                cx="175" 
                cy="50" 
                r="3.5" 
                fill={phase >= 2 && visualMode !== "lottery" ? "#38bdf8" : "#f43f5e"} 
              />
              <g transform="translate(193, 40)">
                <text x="0" y="10" fill={phase >= 2 && visualMode !== "lottery" ? "#7dd3fc" : "#fca5a5"} fontSize="10" fontWeight="bold">
                  {phase >= 2 && visualMode !== "lottery" ? "✓ Verified Buyer" : "✕ Ghost Buyer"}
                </text>
                <text x="0" y="21" fill={phase >= 2 && visualMode !== "lottery" ? "#34d399" : "#f87171"} fontSize="8">
                  {phase >= 2 && visualMode !== "lottery" ? "POF Pre-Cleared" : "Fake POF (40 hrs)"}
                </text>
              </g>

              {/* Middle Branch: Attribution Vault & Escrow Settlement */}
              <line 
                x1="72" 
                y1="110" 
                x2="165" 
                y2="110" 
                stroke={
                  phase === 3 && visualMode !== "lottery" ? "#10b981" :
                  phase >= 1 && visualMode !== "lottery" ? "#f59e0b" : 
                  "#64748b"
                } 
                strokeWidth="2" 
                strokeDasharray={phase >= 1 && visualMode !== "lottery" ? undefined : "3 3"} 
              />
              <circle 
                cx="165" 
                cy="110" 
                r="12" 
                fill={
                  phase === 3 && visualMode !== "lottery" ? "rgba(16,185,129,0.3)" :
                  phase >= 1 && visualMode !== "lottery" ? "rgba(245,158,11,0.25)" : 
                  "rgba(100,116,139,0.15)"
                } 
                stroke={
                  phase === 3 && visualMode !== "lottery" ? "#10b981" :
                  phase >= 1 && visualMode !== "lottery" ? "#f59e0b" : 
                  "#64748b"
                } 
                strokeWidth="1.5" 
              />
              <circle 
                cx="165" 
                cy="110" 
                r="4" 
                fill={
                  phase === 3 && visualMode !== "lottery" ? "#10b981" :
                  phase >= 1 && visualMode !== "lottery" ? "#f59e0b" : 
                  "#64748b"
                } 
              />
              <g transform="translate(183, 100)">
                <text 
                  x="0" 
                  y="10" 
                  fill={
                    phase === 3 && visualMode !== "lottery" ? "#6ee7b7" :
                    phase >= 1 && visualMode !== "lottery" ? "#fde68a" : 
                    "#cbd5e1"
                  } 
                  fontSize="10" 
                  fontWeight="bold"
                >
                  {phase === 3 && visualMode !== "lottery" ? "✓ Escrow Settlement" : phase >= 1 && visualMode !== "lottery" ? "✓ Attribution Vault" : "✕ Broker #4 Leaked"}
                </text>
                <text 
                  x="0" 
                  y="21" 
                  fill={
                    phase === 3 && visualMode !== "lottery" ? "#34d399" :
                    phase >= 1 && visualMode !== "lottery" ? "#fde68a" : 
                    "#f87171"
                  } 
                  fontSize="8"
                >
                  {phase === 3 && visualMode !== "lottery" ? "Carry Distributed" : phase >= 1 && visualMode !== "lottery" ? "24-Mo Tail Locked" : "Daisy Chain Blown"}
                </text>
              </g>

              {/* Bottom Branch */}
              <path 
                d="M 72 120 Q 120 170, 175 170" 
                fill="none" 
                stroke={phase >= 2 && visualMode !== "lottery" ? "#a855f7" : "#f43f5e"} 
                strokeWidth="1.5" 
                strokeDasharray={phase >= 2 && visualMode !== "lottery" ? undefined : "3 3"} 
              />
              <circle 
                cx="175" 
                cy="170" 
                r="11" 
                fill={phase >= 2 && visualMode !== "lottery" ? "rgba(168,85,247,0.2)" : "rgba(244,63,94,0.15)"} 
                stroke={phase >= 2 && visualMode !== "lottery" ? "#a855f7" : "#f43f5e"} 
                strokeWidth="1.5" 
              />
              <circle 
                cx="175" 
                cy="170" 
                r="3.5" 
                fill={phase >= 2 && visualMode !== "lottery" ? "#a855f7" : "#f43f5e"} 
              />
              <g transform="translate(193, 160)">
                <text x="0" y="10" fill={phase >= 2 && visualMode !== "lottery" ? "#d8b4fe" : "#fca5a5"} fontSize="10" fontWeight="bold">
                  {phase >= 2 && visualMode !== "lottery" ? "✓ Syndicate Desks" : "✕ Circumvented"}
                </text>
                <text x="0" y="21" fill={phase >= 2 && visualMode !== "lottery" ? "#34d399" : "#f87171"} fontSize="8">
                  {phase >= 2 && visualMode !== "lottery" ? "Win-Win Split Locked" : "$0 Fee Received"}
                </text>
              </g>

              {/* Phase 3 Final Outcome Celebration Badge */}
              {phase === 3 && visualMode !== "lottery" && (
                <g transform="translate(20, 192)">
                  <rect x="0" y="0" width="310" height="22" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" />
                  <text x="155" y="14" fill="#a7f3d0" fontSize="9" fontWeight="bold" textAnchor="middle">
                    ✓ ESCROW SETTLED: $250,000+ Protected Carry Distributed
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Phase-specific context narrative banner */}
          <div className={`p-3 rounded-xl border text-xs leading-relaxed mt-2 transition-all ${
            phase === 0 || visualMode === "lottery" ? "bg-rose-950/40 border-rose-500/30 text-rose-200" :
            phase === 1 ? "bg-amber-950/40 border-amber-500/30 text-amber-200" :
            phase === 2 ? "bg-cyan-950/40 border-cyan-500/30 text-cyan-200" :
            "bg-emerald-950/40 border-emerald-500/30 text-emerald-200"
          }`}>
            <div className="font-bold flex items-center gap-1.5 mb-1">
              <span className={`w-2 h-2 rounded-full ${
                phase === 0 ? "bg-rose-400" :
                phase === 1 ? "bg-amber-400" :
                phase === 2 ? "bg-cyan-400" :
                "bg-emerald-400"
              }`} />
              <span>
                {phase === 0 ? "Deal Inflow (The Wilderness Dilemma)" :
                 phase === 1 ? "Attribution Gate (Vault Secures Deal)" :
                 phase === 2 ? "Execution Routes (Nodes Turn Green)" :
                 "Final Outcome (Protected Escrow Close)"}
              </span>
            </div>
            <p className="text-[11px] opacity-90">
              {phase === 0 ? "A $25M exclusive mandate arrives. Broadcasting into unverified WhatsApp groups or daisy chains risks ghost buyers, leaks, and direct circumvention." :
               phase === 1 ? "Before any counterparty or desk sees the mandate, attribution is cryptographically anchored in the Guild Vault with a 24-month tail guarantee." :
               phase === 2 ? "Every danger point transforms into green: verified buyers replace fake POFs, daisy chains bypass to settlement, and syndicates lock win-win carry splits." :
               "Transaction settles cleanly in escrow. The $0 fee solo outcome dissolves into protected carry distribution and compounding repeat dealflow."}
            </p>
          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* TABS & PLAYBACK CONTROLS (MOVED BELOW THE GRAPHIC CANVAS) */}
      {/* ======================================================== */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-[#040813]/90 border border-white/10 shadow-xl">
        
        {/* Perspective Selector Tabs - 3-Column Equal Grid on Mobile, Inline on Desktop */}
        <div className="w-full md:w-auto grid grid-cols-3 md:inline-flex p-1 rounded-xl bg-slate-950 border border-white/10 shadow-inner gap-1">
          <button
            onClick={() => onSetVisualMode("comparison")}
            className={`px-2 sm:px-3.5 py-2 rounded-lg text-[11px] sm:text-xs font-medium tracking-tight sm:tracking-wide transition-all cursor-pointer text-center flex items-center justify-center gap-1 sm:gap-1.5 ${
              visualMode === "comparison"
                ? "bg-slate-800 text-emerald-300 shadow-sm border border-emerald-500/40 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <RefreshCw className="w-3 h-3 text-emerald-400 shrink-0 hidden xs:inline" />
            <span className="sm:hidden">Transform</span>
            <span className="hidden sm:inline whitespace-nowrap">Transformation (Red ➔ Green)</span>
          </button>

          <button
            onClick={() => onSetVisualMode("lottery")}
            className={`px-2 sm:px-3.5 py-2 rounded-lg text-[11px] sm:text-xs font-medium tracking-tight sm:tracking-wide transition-all cursor-pointer text-center flex items-center justify-center ${
              visualMode === "lottery"
                ? "bg-red-950/90 text-red-300 border border-red-500/40 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="sm:hidden">Solo Lottery</span>
            <span className="hidden sm:inline whitespace-nowrap">The Solo Lottery</span>
          </button>

          <button
            onClick={() => onSetVisualMode("guild")}
            className={`px-2 sm:px-3.5 py-2 rounded-lg text-[11px] sm:text-xs font-medium tracking-tight sm:tracking-wide transition-all cursor-pointer text-center flex items-center justify-center ${
              visualMode === "guild"
                ? "bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="sm:hidden">Win-Win Guild</span>
            <span className="hidden sm:inline whitespace-nowrap">The Win-Win Guild</span>
          </button>
        </div>

        {/* Step Navigation Controls: Prev, Play/Pause, Next, Reset */}
        <div className="w-full md:w-auto flex items-center justify-center sm:justify-end">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-white/10 shadow-inner w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={handlePrevPhase}
              className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center gap-1"
              title="Previous Phase"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title={isPlaying ? "Pause animation" : "Play continuous animation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <button
              onClick={handleNextPhase}
              className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center gap-1"
              title="Next Phase"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setPhase(0);
                setIsPlaying(true);
              }}
              className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Restart from Beginning"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Graphic Insights Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-slate-900/70 border border-white/10">
          <div className="text-red-300 text-xs font-serif-display tracking-[0.18em] uppercase font-semibold mb-1 flex items-center gap-1.5">
            <span className="text-red-400">✦</span>
            <span>The Solo Reality</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Operating alone means gambling on unverified forwards, ghost mandates, and constant fear of being cut out.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-white/10">
          <div className="text-amber-300 text-xs font-serif-display tracking-[0.18em] uppercase font-semibold mb-1 flex items-center gap-1.5">
            <span className="text-amber-400">✦</span>
            <span>Empirical Truth</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            We tested both models. Dealmakers who lock attribution and syndicate with verified desks close <strong>7x more transactions</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-white/10">
          <div className="text-emerald-300 text-xs font-serif-display tracking-[0.18em] uppercase font-semibold mb-1 flex items-center gap-1.5">
            <span className="text-emerald-400">✦</span>
            <span>Your Collective Gain</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            You retain complete relationship ownership, backed by the collective reach and enforceable rules of the Guild.
          </p>
        </div>
      </div>

    </div>
  );
};
