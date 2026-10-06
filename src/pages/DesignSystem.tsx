import React, { useState } from "react";
import {
  ShieldCheck,
  Check,
  Copy,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  BookOpen,
  Code2,
  Lock,
  ExternalLink,
  ChevronRight,
  FileText,
  Sliders,
  Eye,
  CheckCircle2,
  RefreshCw,
  Sun,
  Moon
} from "lucide-react";
import { safeScrollTo } from "../utils/scroll";

interface ScriptBlockProps {
  title: string;
  context: string;
  text: string;
}

export const ScriptBlock: React.FC<ScriptBlockProps> = ({ title, context, text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#C9A76A]/40 transition-all duration-300 group shadow-xl">
      <div className="flex justify-between items-start mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#C9A76A] uppercase tracking-[0.3em] mb-2 block font-semibold">
            {context}
          </span>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide">
            {title}
          </h3>
        </div>
        <button
          onClick={handleCopy}
          className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-black/40 text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono shrink-0"
          title="Copy script"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-bold">COPIED</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-[#C9A76A]" />
              <span className="text-slate-300">COPY</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-black/60 rounded-xl p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-gray-300 border border-white/5 whitespace-pre-wrap selection:bg-[#C9A76A]/30 selection:text-white">
        {text}
      </div>
    </div>
  );
};

export const DesignSystem: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
  const [realm, setRealm] = useState<"void" | "sanctuary">("void");
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"tokens" | "typography" | "components" | "archetypes">("tokens");
  const [showGrid, setShowGrid] = useState<boolean>(true);

  // Forensic Audit checklist simulation state
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    mandate: true,
    allocation: true,
    sgs: false,
    escrow: true,
    kyc: true,
  });

  const toggleChecklist = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colorTokens = [
    {
      name: "ink",
      hex: "#0B0C0E",
      role: "Deep Obsidian",
      desc: "Primary dark canvas, card backdrops, void depth",
      bgClass: "bg-[#0B0C0E]",
      textDark: false,
    },
    {
      name: "porcelain",
      hex: "#F7F7F5",
      role: "Archival Warm White",
      desc: "Editorial background, light canvas, high-legibility text on dark",
      bgClass: "bg-[#F7F7F5]",
      textDark: true,
    },
    {
      name: "graphite",
      hex: "#2B2F33",
      role: "Basalt Slate",
      desc: "Mid-tone card elevation, subtle structural borders, muted surfaces",
      bgClass: "bg-[#2B2F33]",
      textDark: false,
    },
    {
      name: "gold",
      hex: "#C9A76A",
      role: "Antique Bullion",
      desc: "Sovereignty accent, primary CTAs, conviction highlights, seal rings",
      bgClass: "bg-[#C9A76A]",
      textDark: true,
    },
    {
      name: "aurora",
      hex: "#6BA6FF",
      role: "Photonic Laser Blue",
      desc: "High-energy states, active quantum labs, telemetry indicators, glow",
      bgClass: "bg-[#6BA6FF]",
      textDark: true,
    },
    {
      name: "mist",
      hex: "#E7EAEF",
      role: "Soft Boundary Slate",
      desc: "Light-mode dividers, table rules, scrollbar tracks",
      bgClass: "bg-[#E7EAEF]",
      textDark: true,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans-ui relative ${
        realm === "void"
          ? "bg-[#0B0C0E] text-[#F7F7F5]"
          : "bg-[#F7F7F5] text-[#0B0C0E]"
      }`}
    >
      {/* Sub-Millimeter Ambient Grid Texture (Section 4D) */}
      {showGrid && (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-15">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="design-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A76A" strokeWidth="0.5" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#design-grid)" />
          </svg>
        </div>
      )}

      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 backdrop-blur-xl border-b transition-colors border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#C9A76A]/10 border border-[#C9A76A]/40 flex items-center justify-center text-[#C9A76A]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase">
                FINDERS GUILD
              </div>
              <div className="text-[10px] font-mono text-[#C9A76A] tracking-wider uppercase">
                DESIGN SYSTEM &amp; BLUEPRINT V1.05
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Ambient Grid Toggle */}
            <button
              onClick={() => setShowGrid(!showGrid)}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono hover:border-white/30 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sliders className="w-3 h-3 text-[#C9A76A]" />
              <span className="hidden sm:inline">Grid:</span>
              <span className={showGrid ? "text-[#C9A76A] font-bold" : "text-gray-400"}>
                {showGrid ? "ON" : "OFF"}
              </span>
            </button>

            {/* Atmospheric Dual-Realm Toggle (Section 1) */}
            <div className="flex items-center p-1 rounded-xl bg-black/50 border border-white/10 text-xs font-mono">
              <button
                onClick={() => setRealm("void")}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  realm === "void"
                    ? "bg-[#2B2F33] text-white font-bold shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Moon className="w-3 h-3 text-[#6BA6FF]" />
                <span>Deep Void</span>
              </button>
              <button
                onClick={() => setRealm("sanctuary")}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  realm === "sanctuary"
                    ? "bg-[#F7F7F5] text-[#0B0C0E] font-bold shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Sun className="w-3 h-3 text-[#C9A76A]" />
                <span>Sanctuary</span>
              </button>
            </div>

            <button
              onClick={onNavigateHome}
              className="px-3.5 py-1.5 rounded-xl bg-[#C9A76A] text-[#0B0C0E] hover:bg-[#d6b77e] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(201,167,106,0.3)]"
            >
              <span>Guild Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Showcase */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 space-y-20">
        
        {/* Header Hero Section */}
        <section className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A76A]/40 bg-[#C9A76A]/10 text-[11px] font-mono tracking-widest text-[#C9A76A] uppercase font-semibold">
            <span>SOVEREIGN DESIGN CONSTITUTION</span>
          </div>
          <h1 className="font-crimson text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08]">
            Digital Sanctuary &amp;
            <br />
            <span className="italic text-[#C9A76A]">Institutional Sovereignty</span>
          </h1>
          <p className="font-inter font-light text-base sm:text-lg leading-relaxed opacity-80 max-w-3xl">
            The visual language bridges high-prestige institutional credibility with cutting-edge sovereign technology. It rejects generic corporate templates in favor of a dual-realm atmospheric system designed for private deal-making, telemetry, and forensic alignment.
          </p>
        </section>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 gap-2 sm:gap-6 overflow-x-auto pb-1 text-xs font-mono uppercase tracking-wider">
          {[
            { id: "tokens", label: "01 // Color Tokens" },
            { id: "typography", label: "02 // Typographic Hierarchy" },
            { id: "components", label: "03 // UI Primitives" },
            { id: "archetypes", label: "04 // Page Archetypes" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 border-b-2 whitespace-nowrap cursor-pointer transition-all ${
                activeTab === tab.id
                  ? "border-[#C9A76A] text-[#C9A76A] font-bold"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ===================================================================== */}
        {/* TAB 1: SEMANTIC COLOR TOKEN MATRIX */}
        {/* ===================================================================== */}
        {activeTab === "tokens" && (
          <section className="space-y-10 animate-fadeIn">
            <div className="space-y-2">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase tracking-wider">
                Semantic Color Token Matrix
              </h2>
              <p className="font-inter text-sm opacity-70">
                Click any swatch to copy its hexadecimal token or Tailwind class identifier.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorTokens.map((token) => (
                <div
                  key={token.name}
                  onClick={() => copyToClipboard(token.hex, token.name)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4 hover:border-[#C9A76A]/40 transition-all cursor-pointer group shadow-lg"
                >
                  <div
                    className={`h-28 rounded-xl ${token.bgClass} border border-white/10 flex items-center justify-center relative overflow-hidden`}
                  >
                    <span
                      className={`font-mono text-xs font-bold tracking-widest uppercase ${
                        token.textDark ? "text-[#0B0C0E]" : "text-[#F7F7F5]"
                      }`}
                    >
                      {token.name}
                    </span>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      {copiedToken === token.name ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>CLICK TO COPY</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold uppercase tracking-wider text-[#C9A76A]">
                        {token.name}
                      </span>
                      <span className="font-mono text-xs text-gray-400">{token.hex}</span>
                    </div>
                    <div className="text-xs font-semibold">{token.role}</div>
                    <div className="text-xs opacity-60 font-inter">{token.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tailwind Configuration Snippet */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#C9A76A] uppercase tracking-widest font-bold">
                  TAILWIND CONFIGURATION SPECIFICATION
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n        ink: '#0B0C0E',\n        porcelain: '#F7F7F5',\n        graphite: '#2B2F33',\n        aurora: '#6BA6FF',\n        gold: '#C9A76A',\n        mist: '#E7EAEF',\n      }\n    }\n  }\n}`,
                      "tailwind"
                    )
                  }
                  className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5 text-[#C9A76A]" />
                  <span>Copy Config</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-gray-300 overflow-x-auto leading-relaxed p-4 rounded-xl bg-black/80 border border-white/5">
{`// tailwind.config.js / @theme (CSS)
colors: {
  ink: '#0B0C0E',        // Deep Obsidian
  porcelain: '#F7F7F5',  // Archival Warm White
  graphite: '#2B2F33',   // Basalt Slate
  gold: '#C9A76A',       // Antique Bullion
  aurora: '#6BA6FF',     // Photonic Laser Blue
  mist: '#E7EAEF',       // Soft Boundary Slate
}`}
              </pre>
            </div>
          </section>
        )}

        {/* ===================================================================== */}
        {/* TAB 2: TYPOGRAPHIC HIERARCHY */}
        {/* ===================================================================== */}
        {activeTab === "typography" && (
          <section className="space-y-12 animate-fadeIn">
            <div className="space-y-2">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase tracking-wider">
                Typographic Hierarchy &amp; Pairings
              </h2>
              <p className="font-inter text-sm opacity-70">
                Four bespoke type styles orchestrate sovereign authority, display gravitas, document precision, and forensic telemetry.
              </p>
            </div>

            <div className="space-y-8">
              {/* Cinzel */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs font-mono">
                  <span className="text-[#C9A76A] font-bold">1. CINZEL (ROMAN MONUMENTAL SERIF)</span>
                  <span className="text-gray-400">Class: font-cinzel tracking-widest uppercase</span>
                </div>
                <div className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-widest uppercase">
                  FINDERS GUILD // SOVEREIGN ALLIANCE
                </div>
                <p className="text-xs sm:text-sm font-inter opacity-70">
                  Role: Sovereign brand identities, uppercase seal inscriptions, heraldic chapter headings.
                </p>
              </div>

              {/* Crimson Pro */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs font-mono">
                  <span className="text-[#C9A76A] font-bold">2. CRIMSON PRO (EDITORIAL DISPLAY SERIF)</span>
                  <span className="text-gray-400">Class: font-crimson text-4xl sm:text-6xl tracking-tight</span>
                </div>
                <div className="font-crimson text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                  “The Ability to Move, <span className="italic text-[#C9A76A]">The Conviction to Act.”</span>
                </div>
                <p className="text-xs sm:text-sm font-inter opacity-70">
                  Role: Heroic display headlines, philosophical thesis statements, italicized emphasis.
                </p>
              </div>

              {/* Inter */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs font-mono">
                  <span className="text-[#C9A76A] font-bold">3. INTER (PRECISION SANS-SERIF)</span>
                  <span className="text-gray-400">Class: font-inter font-light text-sm md:text-base leading-relaxed</span>
                </div>
                <div className="font-inter text-sm sm:text-base leading-relaxed opacity-90 max-w-3xl">
                  Market access is no longer the bottleneck. True sovereign execution depends on cognitive alignment, cryptographic evidence gates, and the deterministic verification of counterparty authority before exposure.
                </div>
                <p className="text-xs sm:text-sm font-inter opacity-70">
                  Role: High-density body copy, institutional documentation, analytical prose.
                </p>
              </div>

              {/* System Monospace */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs font-mono">
                  <span className="text-[#C9A76A] font-bold">4. SYSTEM MONOSPACE</span>
                  <span className="text-gray-400">Class: font-mono text-xs uppercase tracking-[0.2em]</span>
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#6BA6FF] bg-black/60 p-4 rounded-xl border border-white/10">
                  HASH // 0x9F42B7C1A // STATUS: DETERMINISTIC_CLEARANCE // LATENCY: 12MS
                </div>
                <p className="text-xs sm:text-sm font-inter opacity-70">
                  Role: Forensic audit tags, cryptographic hashes, copyable scripts, telemetry metadata.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================== */}
        {/* TAB 3: REUSABLE UI PRIMITIVES */}
        {/* ===================================================================== */}
        {activeTab === "components" && (
          <section className="space-y-16 animate-fadeIn">
            <div className="space-y-2">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase tracking-wider">
                Reusable UI Components &amp; Primitives
              </h2>
              <p className="font-inter text-sm opacity-70">
                Interactive implementations of the tactile script vault, glassmorphism bento panels, and forensic checklists.
              </p>
            </div>

            {/* A. Tactile Script Vault Block (ScriptBlock) */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#C9A76A] uppercase tracking-wider font-bold">
                PRIMITIVE A // TACTILE SCRIPT VAULT BLOCK (SCRIPTBLOCK)
              </div>
              <ScriptBlock
                title="The Counterparty Verification Script"
                context="HIGH-CONVICTION BROKER BOUNDARY"
                text={`"We operate exclusively under direct mandate with verified chain-of-title. Before introducing our principal buyers, we require confirmed SGS laboratory assay reports and active TSR clearance. 

If this allocation is directly under your control, confirm your signatory authority by returning the standardized deal sheet. Otherwise, we do not expose relationships across unverified intermediary chains."`}
              />
            </div>

            {/* B. Bento Translucent Panels (Glassmorphism) */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#C9A76A] uppercase tracking-wider font-bold">
                PRIMITIVE B // BENTO TRANSLUCENT PANELS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    num: "01",
                    title: "Priority Alignment",
                    desc: "Granular mapping of stakeholder velocity and execution mandate.",
                  },
                  {
                    num: "02",
                    title: "Evidence Gating",
                    desc: "Cryptographic assay validation and proof-of-product inspection.",
                  },
                  {
                    num: "03",
                    title: "Attribution Locking",
                    desc: "Irrevocable transaction carry and compounding network equity.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-8 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group hover:border-[#C9A76A]/40 hover:bg-white/10 transition-all duration-300 shadow-xl"
                  >
                    <div className="w-12 h-12 bg-[#C9A76A]/10 rounded-xl flex items-center justify-center text-[#C9A76A] mb-6 font-mono font-bold text-sm">
                      {item.num}
                    </div>
                    <h4 className="font-serif text-2xl text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* E. Forensic Audit Checklist Rows */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#C9A76A] uppercase tracking-wider font-bold">
                PRIMITIVE E // FORENSIC AUDIT CHECKLIST ROWS
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-3">
                {[
                  {
                    id: "mandate",
                    cat: "STAGE 01 // MANDATE",
                    title: "Signatory Authority Audit",
                    desc: "Direct principal mandate confirmed without multi-tier broker degradation.",
                  },
                  {
                    id: "allocation",
                    cat: "STAGE 02 // ALLOCATION",
                    title: "Confirmed Refinery / Wellhead Volume",
                    desc: "Allocation locked via verifiable tank storage receipt (TSR) or pipeline injector schedule.",
                  },
                  {
                    id: "sgs",
                    cat: "STAGE 03 // LAB ASSAY",
                    title: "Independent SGS / Saybolt Verification",
                    desc: "Chemical composite specs matching ASTM / EN590 standards within last 72 hours.",
                  },
                  {
                    id: "escrow",
                    cat: "STAGE 04 // CLEARING",
                    title: "Institutional Paymaster & Escrow",
                    desc: "Tier-1 bank escrow instructions with non-circumvention fee protection.",
                  },
                ].map((row) => (
                  <div
                    key={row.id}
                    onClick={() => toggleChecklist(row.id)}
                    className="p-4 rounded-xl border border-white/5 bg-black/40 hover:border-[#C9A76A]/40 transition-all flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-[#C9A76A] transition-colors">
                        {row.cat}
                      </div>
                      <div className="font-serif text-sm sm:text-base font-bold text-white">
                        {row.title}
                      </div>
                      <div className="text-xs text-gray-400 font-light max-w-xl">
                        {row.desc}
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                        checklist[row.id]
                          ? "bg-[#C9A76A] border-[#C9A76A] text-[#0B0C0E] shadow-[0_0_12px_rgba(201,167,106,0.5)]"
                          : "border-white/20 bg-black/40 group-hover:border-[#C9A76A]"
                      }`}
                    >
                      {checklist[row.id] && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* ===================================================================== */}
        {/* TAB 4: CORE PAGE LAYOUT ARCHETYPES */}
        {/* ===================================================================== */}
        {activeTab === "archetypes" && (
          <section className="space-y-10 animate-fadeIn">
            <div className="space-y-2">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase tracking-wider">
                Four Core Page Layout Archetypes
              </h2>
              <p className="font-inter text-sm opacity-70">
                Architectural patterns powering the Finders Guild institutional platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Archetype 1 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
                <div className="text-xs font-mono text-[#6BA6FF] uppercase tracking-wider font-bold">
                  ARCHETYPE 01
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  The Atmospheric Void Canvas
                </h3>
                <p className="text-sm font-light text-gray-300 leading-relaxed">
                  Deep obsidian field (`#0B0C0E`), centered heroic headlines in Crimson Pro (`text-5xl md:text-8xl`), real-time vector or physics simulations, and minimalist chrome with logo suppression to maximize focus.
                </p>
                <div className="text-xs font-mono text-gray-400">Routes: /, /founding-trading-firm</div>
              </div>

              {/* Archetype 2 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
                <div className="text-xs font-mono text-[#C9A76A] uppercase tracking-wider font-bold">
                  ARCHETYPE 02
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  The Archival Sanctuary
                </h3>
                <p className="text-sm font-light text-gray-300 leading-relaxed">
                  Warm porcelain stone surface (`#F7F7F5`), classical proportions, wide reading margins, and solemn affirmation oaths for foundational governance documents and treaties.
                </p>
                <div className="text-xs font-mono text-gray-400">Routes: /charter, /governance</div>
              </div>

              {/* Archetype 3 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  ARCHETYPE 03
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Classified Playbook &amp; Script Vault
                </h3>
                <p className="text-sm font-light text-gray-300 leading-relaxed">
                  Multi-tabbed dossiers, copyable communication scripts, quick clipboard injections, and velocity qualification matrices for active deal operators.
                </p>
                <div className="text-xs font-mono text-gray-400">Routes: /_playbook</div>
              </div>

              {/* Archetype 4 */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4">
                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">
                  ARCHETYPE 04
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  The Alignment Gate
                </h3>
                <p className="text-sm font-light text-gray-300 leading-relaxed">
                  Multi-step stateful evaluation, cognitive risk scans, and deterministic progression unlocks based on conviction and market etiquette scoring.
                </p>
                <div className="text-xs font-mono text-gray-400">Routes: /two-paths, /assessment</div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Persistent Lower Blueprint Bar */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-gray-500 uppercase tracking-widest">
        <span>Finders Guild Institutional Blueprint // Protocol v1.05 Signed // System Coherent</span>
      </footer>

    </div>
  );
};
