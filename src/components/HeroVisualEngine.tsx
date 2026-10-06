import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Search,
  Users
} from "lucide-react";

interface StageInfo {
  id: number;
  label: string;
  shortTitle: string;
  badge: string;
  description: string;
  stateName: string;
  metric: string;
  colorAccent: string;
}

const STAGES: StageInfo[] = [
  {
    id: 1,
    label: "01. Intake",
    shortTitle: "Raw Opportunity Enters",
    badge: "SIGNAL INGESTION",
    description: "An unstructured need, mandate, or opportunity enters from a finder, operator, or principal. Noisy market chatter and whispers are caught at the perimeter.",
    stateName: "Unstructured Signal",
    metric: "Raw Ingest • High Entropy",
    colorAccent: "#38bdf8", // cyan
  },
  {
    id: 2,
    label: "02. Structure",
    shortTitle: "Information Becomes Clear",
    badge: "SPEC CRYSTALLIZATION",
    description: "Noise, broker daisy-chains, and ambiguity are stripped away. The opportunity is structured into standardized criteria: asset, capital size, and true mandate authority.",
    stateName: "Verified Corporate Spec",
    metric: "100% Noise Elimination",
    colorAccent: "#10b981", // emerald
  },
  {
    id: 3,
    label: "03. Network Scan",
    shortTitle: "Matching Qualified Parties",
    badge: "INTELLIGENT ROUTING",
    description: "The Guild network scans pre-cleared buyers, sellers, and operators. Criteria are matched with mathematical precision against verified counterparty buy-boxes.",
    stateName: "Active Matching Matrix",
    metric: "Vetted Directory Search",
    colorAccent: "#a855f7", // purple
  },
  {
    id: 4,
    label: "04. Governance",
    shortTitle: "Attribution Shield Engages",
    badge: "RELATIONSHIP PROTECTION",
    description: "Before any introduction occurs, the Attribution Shield locks in. The introducing finder's position is permanently recorded. Backchannel bypassing is impossible.",
    stateName: "Cryptographic Attribution",
    metric: "Zero Leakage • Position Sealed",
    colorAccent: "#f59e0b", // gold
  },
  {
    id: 5,
    label: "05. Diligence",
    shortTitle: "Direct Execution & Diligence",
    badge: "EXECUTION ALIGNMENT",
    description: "With attribution secured and criteria pre-aligned, the right parties meet directly in a bilateral diligence chamber with defined closing tempo and zero friction.",
    stateName: "Bilateral Closing Chamber",
    metric: "Execution Velocity Enabled",
    colorAccent: "#14b8a6", // teal
  },
];

export interface HeroVisualEngineProps {
  showHeader?: boolean;
}

export const HeroVisualEngine: React.FC<HeroVisualEngineProps> = ({ showHeader = false }) => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  // Auto progression timer - strictly sequential 1 -> 2 -> 3 -> 4 -> 5 -> 1
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 100; // 100ms updates
    const stepDuration = 5500; // 5.5s per stage
    const increment = (intervalTime / stepDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, currentStage]);

  // Clean transition to next stage when progress completes (no side-effects in state updaters)
  useEffect(() => {
    if (progress >= 100) {
      setCurrentStage((curr) => (curr >= 5 ? 1 : curr + 1));
      setProgress(0);
    }
  }, [progress]);

  const handleStageSelect = (stageId: number) => {
    setCurrentStage(stageId);
    setProgress(0);
  };

  const activeStage = STAGES.find((s) => s.id === currentStage) || STAGES[0];

  return (
    <section id="operating-sequence" className={`relative ${showHeader ? "pt-28 sm:pt-32" : "pt-4"} pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`}>
      
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-indigo-600/10 to-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] -z-10 pointer-events-none rounded-full" />

      {/* Hero Header (Shown only if showHeader is explicitly enabled) */}
      {showHeader && (
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-emerald-950/40 border border-emerald-500/30 text-emerald-200/90 text-[11px] sm:text-xs font-serif-display tracking-[0.22em] uppercase mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="text-emerald-400 text-xs">✦</span>
            <span>The Operating Logic <span className="text-emerald-500/60 mx-1.5">·</span> Guild Architecture</span>
            <span className="text-emerald-400 text-xs">✦</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            Order, trust, and alignment for off-market deal flow.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Watch how chaotic, unvetted market whispers transform into protected, high-conviction transactions through the Guild protocol.
          </p>
        </div>
      )}

      {/* Interactive Vector Stage Machine */}
      <div className="relative glass-panel rounded-3xl p-4 sm:p-7 lg:p-8 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl bg-[#060b18]/90 overflow-hidden">

        {/* Main Visual Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left / Center Visual Engine (7 Cols) - Flex Col with Dedicated Controls & Telemetry Bottom */}
          <div className="lg:col-span-7 flex flex-col justify-between p-3 sm:p-5 rounded-2xl bg-black/60 border border-white/10 shadow-inner">
            
            {/* Dedicated SVG Canvas Area */}
            <div className="relative flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[360px] w-full overflow-hidden">
              {/* Grid Pattern in SVG Background */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              <svg viewBox="0 0 600 340" className="w-full h-auto max-h-[380px] select-none">
                
                <defs>
                  {/* Glow Filters */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="shieldGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  {/* Gradients */}
                  <linearGradient id="cyanPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <linearGradient id="goldSeal" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="noiseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                </defs>

                {/* STAGE 1: RAW OPPORTUNITY ENTERS */}
                {currentStage === 1 && (
                  <g className="transition-opacity duration-500">
                    {/* Raw Market Signal / Finder Node */}
                    <circle cx="80" cy="170" r="30" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="2.5" filter="url(#glow)" />
                    <circle cx="80" cy="170" r="12" fill="#38bdf8" />
                    <text x="80" y="218" fill="#ffffff" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Raw Market Signal</text>
                    <text x="80" y="235" fill="#7dd3fc" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Finder / Whisper</text>

                    {/* Chaotic Market Waves */}
                    <path d="M 115 160 Q 180 100, 260 140" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path id="hero-stage1-conduit" d="M 115 170 L 375 170" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 3" />
                    <path d="M 115 180 Q 180 240, 260 200" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Flowing Market Signal Particle Strictly on Line */}
                    <circle cx="0" cy="0" r="4.5" fill="#38bdf8" filter="url(#glow)">
                      <animateMotion dur="1.8s" repeatCount="indefinite">
                        <mpath href="#hero-stage1-conduit" />
                      </animateMotion>
                    </circle>

                    {/* HIGH-CONTRAST FILTERED NOISE MARKERS (No text overlap) */}
                    {/* Top Marker: Unvetted Broker */}
                    <g transform="translate(180, 55)">
                      <rect x="0" y="0" width="165" height="34" rx="8" fill="#200d14" stroke="#f43f5e" strokeWidth="1.5" />
                      <circle cx="16" cy="17" r="6" fill="#ef4444" />
                      <text x="30" y="15" fill="#ffffff" fontSize="10" fontWeight="bold">✕ Unvetted Broker</text>
                      <text x="30" y="27" fill="#fca5a5" fontSize="9" fontWeight="600">Spam / Zero Authority</text>
                    </g>

                    {/* Bottom Marker: Daisy Chain Risk */}
                    <g transform="translate(180, 250)">
                      <rect x="0" y="0" width="165" height="34" rx="8" fill="#200d14" stroke="#f43f5e" strokeWidth="1.5" />
                      <circle cx="16" cy="17" r="6" fill="#ef4444" />
                      <text x="30" y="15" fill="#ffffff" fontSize="10" fontWeight="bold">✕ Daisy Chain Risk</text>
                      <text x="30" y="27" fill="#fca5a5" fontSize="9" fontWeight="600">4+ Intermediary Handoffs</text>
                    </g>

                    {/* Guild Perimeter Gate (Catching and Ingesting Signal with zero collision) */}
                    <rect x="375" y="45" width="195" height="250" rx="18" fill="rgba(15,23,42,0.9)" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" />
                    <text x="472" y="78" fill="#38bdf8" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">GUILD PERIMETER</text>
                    <text x="472" y="96" fill="#e2e8f0" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">Scanning Incoming Flow</text>

                    {/* Ingestion Scanner Hub */}
                    <circle cx="472" cy="170" r="36" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="2" filter="url(#glow)" />
                    <circle cx="472" cy="170" r="12" fill="#38bdf8" />
                    <circle cx="472" cy="170" r="4" fill="#ffffff" />
                    <text x="472" y="228" fill="#7dd3fc" fontSize="11" textAnchor="middle" fontWeight="bold">Ingesting Criteria...</text>
                    <text x="472" y="244" fill="#cbd5e1" fontSize="9" textAnchor="middle">Signal Decoded</text>
                  </g>
                )}

                {/* STAGE 2: SPEC CRYSTALLIZATION */}
                {currentStage === 2 && (
                  <g className="transition-opacity duration-500">
                    {/* Inflow beam */}
                    <path id="hero-stage2-conduit" d="M 40 170 L 130 170" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 3" />
                    <circle cx="40" cy="170" r="8" fill="#10b981" />
                    <circle cx="0" cy="0" r="4.5" fill="#10b981" filter="url(#glow)">
                      <animateMotion dur="1.5s" repeatCount="indefinite">
                        <mpath href="#hero-stage2-conduit" />
                      </animateMotion>
                    </circle>

                    {/* Standardized Spec Card - Perfectly Centered */}
                    <rect x="130" y="45" width="290" height="250" rx="16" fill="rgba(6,78,59,0.3)" stroke="#10b981" strokeWidth="2" filter="url(#glow)" />
                    
                    {/* Header of the spec */}
                    <rect x="145" y="62" width="260" height="30" rx="6" fill="rgba(16,185,129,0.25)" />
                    <circle cx="162" cy="77" r="5" fill="#10b981" />
                    <text x="175" y="81" fill="#ffffff" fontSize="11" fontWeight="bold">STANDARDIZED CORPORATE SPEC</text>

                    {/* Spec Criteria Rows */}
                    <g transform="translate(145, 105)">
                      <rect x="0" y="0" width="105" height="22" rx="4" fill="rgba(255,255,255,0.08)" />
                      <text x="8" y="15" fill="#cbd5e1" fontSize="9" fontWeight="600">ASSET CLASS</text>
                      <text x="115" y="15" fill="#ffffff" fontSize="10" fontWeight="bold">Energy / Infrastructure</text>

                      <rect x="0" y="32" width="105" height="22" rx="4" fill="rgba(255,255,255,0.08)" />
                      <text x="8" y="47" fill="#cbd5e1" fontSize="9" fontWeight="600">CAPITAL ASK</text>
                      <text x="115" y="47" fill="#34d399" fontSize="10" fontWeight="bold">$50M – $120M Equity</text>

                      <rect x="0" y="64" width="105" height="22" rx="4" fill="rgba(255,255,255,0.08)" />
                      <text x="8" y="79" fill="#cbd5e1" fontSize="9" fontWeight="600">JURISDICTION</text>
                      <text x="115" y="79" fill="#ffffff" fontSize="10" fontWeight="bold">North America (ERCOT)</text>

                      <rect x="0" y="96" width="105" height="22" rx="4" fill="rgba(255,255,255,0.08)" />
                      <text x="8" y="111" fill="#cbd5e1" fontSize="9" fontWeight="600">MANDATE STATUS</text>
                      <text x="115" y="111" fill="#34d399" fontSize="10" fontWeight="bold">Direct 1-Degree Mandate</text>

                      <rect x="0" y="128" width="105" height="22" rx="4" fill="rgba(255,255,255,0.08)" />
                      <text x="8" y="143" fill="#cbd5e1" fontSize="9" fontWeight="600">INTEGRITY SCORE</text>
                      <text x="115" y="143" fill="#6ee7b7" fontSize="10" fontWeight="bold">100% Institutional Grade</text>
                    </g>

                    {/* Stripped noise exiting right - HIGH CONTRAST, ZERO OVERFLOW */}
                    <g transform="translate(440, 80)">
                      {/* Badge 1: Noise Stripped */}
                      <rect x="0" y="0" width="145" height="34" rx="8" fill="#200d14" stroke="#f43f5e" strokeWidth="1.5" />
                      <text x="12" y="15" fill="#ffffff" fontSize="10" fontWeight="bold">✕ Ghost Brokers</text>
                      <text x="12" y="27" fill="#fca5a5" fontSize="9" fontWeight="600">Permanently Stripped</text>

                      {/* Badge 2: Broker Chains Cut */}
                      <rect x="0" y="55" width="145" height="34" rx="8" fill="#200d14" stroke="#f43f5e" strokeWidth="1.5" />
                      <text x="12" y="70" fill="#ffffff" fontSize="10" fontWeight="bold">✕ Broker Chains</text>
                      <text x="12" y="82" fill="#fca5a5" fontSize="9" fontWeight="600">Circumvention Eliminated</text>

                      {/* Badge 3: Verified Spec */}
                      <rect x="0" y="110" width="145" height="34" rx="8" fill="#062d22" stroke="#10b981" strokeWidth="1.5" />
                      <text x="12" y="125" fill="#ffffff" fontSize="10" fontWeight="bold">✓ Clean Criteria</text>
                      <text x="12" y="137" fill="#6ee7b7" fontSize="9" fontWeight="600">Ready for Matching</text>
                    </g>
                  </g>
                )}

                {/* STAGE 3: INTELLIGENT MATCHING */}
                {currentStage === 3 && (
                  <g className="transition-opacity duration-500">
                    {/* Central Intelligence Core */}
                    <circle cx="300" cy="165" r="46" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="2.5" filter="url(#glow)" />
                    <circle cx="300" cy="165" r="26" fill="#a855f7" />
                    <Cpu x="287" y="152" className="w-6 h-6 text-white" />
                    <text x="300" y="228" fill="#e9d5ff" fontSize="12" fontWeight="bold" textAnchor="middle">Guild Match Engine</text>
                    <text x="300" y="243" fill="#c084fc" fontSize="9" fontWeight="600" textAnchor="middle">Vetted Directory Search</text>

                    {/* Stage 3 Visual Conduits directly connected to central core */}
                    <path id="hero-stage3-conduit-1" d="M 300 165 L 130 75" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 2" />
                    <path id="hero-stage3-conduit-2" d="M 300 165 L 130 250" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path id="hero-stage3-conduit-3" d="M 300 165 L 470 75" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 2" />
                    <path id="hero-stage3-conduit-4" d="M 300 165 L 470 250" fill="none" stroke="#38bdf8" strokeWidth="2" />

                    {/* Dynamic matching particles strictly following lines from Core to Terminals */}
                    <circle cx="0" cy="0" r="4.5" fill="#10b981" filter="url(#glow)">
                      <animateMotion dur="2.2s" repeatCount="indefinite">
                        <mpath href="#hero-stage3-conduit-1" />
                      </animateMotion>
                    </circle>
                    <circle cx="0" cy="0" r="4.5" fill="#10b981" filter="url(#glow)">
                      <animateMotion dur="2.2s" repeatCount="indefinite">
                        <mpath href="#hero-stage3-conduit-3" />
                      </animateMotion>
                    </circle>
                    <circle cx="0" cy="0" r="4.5" fill="#38bdf8" filter="url(#glow)">
                      <animateMotion dur="2.2s" repeatCount="indefinite">
                        <mpath href="#hero-stage3-conduit-4" />
                      </animateMotion>
                    </circle>

                    {/* Node 1: Top Left - Aligned Buyer */}
                    <g>
                      <circle cx="130" cy="75" r="22" fill="rgba(16,185,129,0.25)" stroke="#10b981" strokeWidth="2" />
                      <circle cx="130" cy="75" r="8" fill="#10b981" filter="url(#glow)" />
                      <text x="130" y="112" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">Direct Family Office</text>
                      <text x="130" y="127" fill="#34d399" fontSize="9" textAnchor="middle" fontWeight="bold">98% Mandate Fit</text>
                    </g>

                    {/* Node 2: Bottom Left - HIGH CONTRAST Rejected Node */}
                    <g>
                      <rect x="50" y="235" width="155" height="36" rx="8" fill="#200d14" stroke="#f43f5e" strokeWidth="1.5" />
                      <circle cx="65" cy="253" r="6" fill="#ef4444" />
                      <text x="78" y="249" fill="#ffffff" fontSize="10" fontWeight="bold">✕ Unverified Fund</text>
                      <text x="78" y="262" fill="#fca5a5" fontSize="9" fontWeight="600">Filtered Out (No POF)</text>
                    </g>

                    {/* Node 3: Top Right - Strategic Operator */}
                    <g>
                      <circle cx="470" cy="75" r="22" fill="rgba(16,185,129,0.25)" stroke="#10b981" strokeWidth="2" />
                      <circle cx="470" cy="75" r="8" fill="#10b981" filter="url(#glow)" />
                      <text x="470" y="112" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">Infrastructure Fund</text>
                      <text x="470" y="127" fill="#34d399" fontSize="9" textAnchor="middle" fontWeight="bold">Active Mandate Match</text>
                    </g>

                    {/* Node 4: Bottom Right - Process Gate */}
                    <g>
                      <circle cx="470" cy="250" r="20" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx="470" cy="250" r="7" fill="#38bdf8" />
                      <text x="470" y="285" fill="#ffffff" fontSize="11" textAnchor="middle" fontWeight="bold">Sector Desk #4</text>
                      <text x="470" y="299" fill="#7dd3fc" fontSize="9" textAnchor="middle" fontWeight="600">Pre-Cleared Counterparty</text>
                    </g>
                  </g>
                )}

                {/* STAGE 4: ATTRIBUTION SHIELD ENGAGES (NO CLIPPING, PERFECT VERTICAL MARGINS) */}
                {currentStage === 4 && (
                  <g className="transition-opacity duration-500">
                    {/* Central Shield Vector Graphic - Scaled and Positioned between y=35 and y=250 */}
                    <path 
                      d="M 300 35 L 395 75 L 395 175 C 395 225, 300 255, 300 255 C 300 255, 205 225, 205 175 L 205 75 Z" 
                      fill="rgba(245,158,11,0.15)" 
                      stroke="url(#goldSeal)" 
                      strokeWidth="3" 
                      filter="url(#shieldGlow)" 
                    />

                    {/* Inside Shield: Cryptographic Seal & Attribution Lock */}
                    <circle cx="300" cy="140" r="32" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="2" />
                    <Lock x="288" y="128" className="w-6 h-6 text-amber-300" />
                    <text x="300" y="195" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">ATTRIBUTION SHIELD</text>
                    <text x="300" y="212" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">24-MONTH NON-CIRCUMVENTION</text>

                    {/* Stage 4 Connecting Conduits Directly to Shield */}
                    <path id="hero-stage4-left" d="M 180 144 L 205 140" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 3" />
                    <path id="hero-stage4-right" d="M 420 144 L 395 140" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 3" />

                    {/* Flowing Trust Particles Strictly on Conduit Lines */}
                    <circle cx="0" cy="0" r="4.5" fill="#fbbf24" filter="url(#shieldGlow)">
                      <animateMotion dur="1.8s" repeatCount="indefinite">
                        <mpath href="#hero-stage4-left" />
                      </animateMotion>
                    </circle>
                    <circle cx="0" cy="0" r="4.5" fill="#38bdf8" filter="url(#shieldGlow)">
                      <animateMotion dur="1.8s" repeatCount="indefinite">
                        <mpath href="#hero-stage4-right" />
                      </animateMotion>
                    </circle>

                    {/* Left Side: Introducing Finder Card */}
                    <g transform="translate(35, 110)">
                      <rect x="0" y="0" width="145" height="68" rx="10" fill="#091b18" stroke="#10b981" strokeWidth="2" />
                      <circle cx="18" cy="22" r="7" fill="#10b981" />
                      <text x="32" y="26" fill="#ffffff" fontSize="11" fontWeight="bold">Introducing Finder</text>
                      <rect x="14" y="38" width="118" height="20" rx="4" fill="rgba(16,185,129,0.2)" />
                      <text x="73" y="52" fill="#6ee7b7" fontSize="9" fontWeight="bold" textAnchor="middle">Attribution Encrypted</text>
                    </g>

                    {/* Right Side: Verified Principal Card */}
                    <g transform="translate(420, 110)">
                      <rect x="0" y="0" width="145" height="68" rx="10" fill="#081926" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx="18" cy="22" r="7" fill="#38bdf8" />
                      <text x="32" y="26" fill="#ffffff" fontSize="11" fontWeight="bold">Verified Principal</text>
                      <rect x="14" y="38" width="118" height="20" rx="4" fill="rgba(56,189,248,0.2)" />
                      <text x="73" y="52" fill="#7dd3fc" fontSize="9" fontWeight="bold" textAnchor="middle">Bound by Master Charter</text>
                    </g>

                    {/* Trust Banner Below Shield - High contrast and 100% visible inside SVG */}
                    <g transform="translate(180, 275)">
                      <rect x="0" y="0" width="240" height="30" rx="8" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="1.5" />
                      <text x="120" y="20" fill="#fef3c7" fontSize="11" textAnchor="middle" fontWeight="bold">🔒 Zero Backchannel Leakage Permitted</text>
                    </g>
                  </g>
                )}

                {/* STAGE 5: BILATERAL DILIGENCE & EXECUTION */}
                {currentStage === 5 && (
                  <g className="transition-opacity duration-500">
                    {/* Clean Bilateral Chamber Box */}
                    <rect x="60" y="45" width="480" height="250" rx="20" fill="rgba(13,148,136,0.18)" stroke="#14b8a6" strokeWidth="2" filter="url(#glow)" />

                    {/* Chamber Header */}
                    <text x="300" y="78" fill="#5eead4" fontSize="13" fontWeight="bold" textAnchor="middle">BILATERAL DILIGENCE CHAMBER</text>
                    <text x="300" y="96" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontWeight="500">Clear Expectations • Direct Access • Defined Closing SLA</text>

                    {/* Party A: Buyer / Capital */}
                    <g transform="translate(130, 130)">
                      <circle cx="30" cy="25" r="25" fill="rgba(16,185,129,0.25)" stroke="#10b981" strokeWidth="2" />
                      <text x="30" y="30" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">BUYER</text>
                      <text x="30" y="68" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Qualified Capital</text>
                      <text x="30" y="84" fill="#a7f3d0" fontSize="9" textAnchor="middle" fontWeight="600">POF Pre-Cleared</text>
                    </g>

                    {/* Central Handshake / Momentum Vector */}
                    <g transform="translate(260, 135)">
                      <circle cx="40" cy="20" r="28" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="2" />
                      <CheckCircle2 x="28" y="8" className="w-6 h-6 text-amber-300" />
                      <text x="40" y="65" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">ALIGNED FIT</text>
                    </g>

                    {/* Party B: Mandate / Seller */}
                    <g transform="translate(390, 130)">
                      <circle cx="30" cy="25" r="25" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" strokeWidth="2" />
                      <text x="30" y="30" fill="#7dd3fc" fontSize="11" fontWeight="bold" textAnchor="middle">SELLER</text>
                      <text x="30" y="68" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Direct Principal</text>
                      <text x="30" y="84" fill="#bae6fd" fontSize="9" textAnchor="middle" fontWeight="600">Clean Specs &amp; POP</text>
                    </g>

                    {/* Forward Progression Arrow with Moving Particle Strictly on Path */}
                    <path id="hero-stage5-conduit" d="M 190 235 L 400 235" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                    <polygon points="405,235 395,230 395,240" fill="#10b981" />
                    <circle cx="0" cy="0" r="4.5" fill="#34d399" filter="url(#glow)">
                      <animateMotion dur="1.8s" repeatCount="indefinite">
                        <mpath href="#hero-stage5-conduit" />
                      </animateMotion>
                    </circle>
                    <text x="300" y="260" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">PROGRESSION TO CLOSE</text>
                    <text x="300" y="278" fill="#cbd5e1" fontSize="9" textAnchor="middle">Attribution Intact • Fee Splits Pre-Agreed</text>
                  </g>
                )}

              </svg>
            </div>

            {/* Subtle Progress Bar directly under graphic */}
            <div className="w-full h-1 bg-slate-900/90 rounded-full overflow-hidden relative my-3">
              <div 
                className="h-full transition-all duration-100 ease-linear rounded-full"
                style={{
                  width: `${((currentStage - 1) * 20) + (progress * 0.2)}%`,
                  backgroundColor: activeStage.colorAccent,
                  boxShadow: `0 0 10px ${activeStage.colorAccent}`,
                }}
              />
            </div>

            {/* Compact Control Bar: 1 2 3 4 5 Indicators + Pause/Play + Reset */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-950/90 border border-white/10 shadow-inner">
              
              {/* Small 1 2 3 4 5 Numbered Indicators */}
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((stageNum) => {
                  const isActive = stageNum === currentStage;
                  const stageObj = STAGES.find(s => s.id === stageNum) || STAGES[0];
                  return (
                    <button
                      key={stageNum}
                      onClick={() => handleStageSelect(stageNum)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center border outline-none ${
                        isActive
                          ? "bg-slate-800 text-white border-white/30 shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                          : "bg-slate-900/80 text-slate-400 border-white/5 hover:text-slate-200 hover:bg-slate-800/80"
                      }`}
                      style={{
                        borderColor: isActive ? stageObj.colorAccent : undefined,
                        color: isActive ? stageObj.colorAccent : undefined,
                      }}
                      title={`Jump to Stage ${stageNum}: ${stageObj.shortTitle}`}
                    >
                      {stageNum}
                    </button>
                  );
                })}
              </div>

              {/* Pause/Play & Reset */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-mono border border-white/10 transition-colors cursor-pointer"
                  title={isPlaying ? "Pause visual walkthrough" : "Resume visual walkthrough"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-amber-400" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setCurrentStage(1);
                    setProgress(0);
                  }}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 border border-white/10 transition-colors cursor-pointer"
                  title="Restart sequence from Stage 1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Dedicated Bottom Telemetry Bar */}
            <div className="mt-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] font-mono">
              <span className="text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeStage.colorAccent, boxShadow: `0 0 6px ${activeStage.colorAccent}` }} />
                <span>Status: <strong className="text-white font-bold">{activeStage.stateName}</strong></span>
              </span>
              <span className="text-slate-400 font-medium px-2 py-0.5 rounded bg-white/5 border border-white/5">
                {activeStage.metric}
              </span>
            </div>

          </div>

          {/* Right Explanatory Narrative Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            
            <div className="space-y-3">
              <div 
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-serif-display font-semibold tracking-[0.18em] uppercase border shadow-sm"
                style={{
                  backgroundColor: `${activeStage.colorAccent}15`,
                  color: activeStage.colorAccent,
                  borderColor: `${activeStage.colorAccent}40`,
                }}
              >
                <span className="text-xs">✦</span>
                <span>{activeStage.badge}</span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                {activeStage.shortTitle}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {activeStage.description}
              </p>
            </div>

            {/* Stage Quick Highlights */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  {currentStage === 1 && "Ingests from email, portal, or WhatsApp without losing deal metadata."}
                  {currentStage === 2 && "Strips false brokers, ghost mandates, and missing commodity criteria."}
                  {currentStage === 3 && "Matches directly against verified institutional buy boxes with zero spam."}
                  {currentStage === 4 && "Guarantees finder fee attribution and 24-month non-circumvention protection."}
                  {currentStage === 5 && "Direct bilateral connection under pre-agreed closing governance rules."}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  {currentStage === 1 && "Immediate boundary gatekeeper activates."}
                  {currentStage === 2 && "Creates a cryptographic Corporate Deal Spec."}
                  {currentStage === 3 && "Private directory access with verified proof of funds or assets."}
                  {currentStage === 4 && "Zero backchannel leakage or circumnavigation permitted."}
                  {currentStage === 5 && "Eliminates months of wasted time, closing aligned transactions faster."}
                </span>
              </div>
            </div>

            {/* Stage Jump Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => handleStageSelect(currentStage === 1 ? 5 : currentStage - 1)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 transition-colors cursor-pointer"
                id="btn-prev-stage"
              >
                Previous Step
              </button>
              <button
                onClick={() => handleStageSelect(currentStage === 5 ? 1 : currentStage + 1)}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white shadow-lg transition-all cursor-pointer"
                id="btn-next-stage"
              >
                <span>Next: Stage {currentStage === 5 ? 1 : currentStage + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

