import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json({ limit: "10mb" }));

// Lazy GoogleGenAI client
let aiClient: GoogleGenAI | null = null;
function getGeminiAI(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    geminiConfigured: !!process.env.GEMINI_API_KEY,
  });
});

// Institutional Ingestion & cNLP Alignment Gateway Endpoint
app.post("/api/ingest-deal", async (req, res) => {
  const { rawText, source = "portal_submission", contextNotes } = req.body;

  if (!rawText || typeof rawText !== "string" || !rawText.trim()) {
    return res.status(400).json({ error: "rawText parameter is required." });
  }

  const ai = getGeminiAI();

  // If Gemini API is configured, run the institutional prompt
  if (ai) {
    try {
      const systemInstruction = `Role & Objective: You are the Finders Guild Institutional & Alignment Gateway. Your objective is to ingest raw, unstructured deal flow (WhatsApp text snippets, manual portal entries, and attached documents) and structure them into compliant "Corporate Deal Cards" while simultaneously running a cognitive NLP (cNLP) scan to map team execution risk.
Core Tasks & Rules of Engagement:
1. 3-Tier Deal Structuring: Extract commodity specs into asset_category, specific_asset, and instrument_type. If specific grades or jurisdictions are missing, do not guess; set them to null.
2. Deterministic Etiquette Coaching: If core institutional metrics (like target_ask_usd or specific_asset) are missing, you must set is_schema_complete to false and generate a feedback_prompt coaching the user on what specific data to provide to meet market etiquette.
3. Reality Mapping & Execution Risk: Analyze the human communication layer of the text/documents. Evaluate the team dynamics to provide a "7-Day Read" on where execution risks are forming. Identify any execution blindspots based on the MiliMatch framework: Priorities, Ownership, Decisions, Handoffs, or Pressure.
4. One First Action: Generate exactly one straightforward first action to resolve the identified execution friction.
REQUIRED JSON SCHEMA OUTPUT: You must return ONLY a valid JSON object matching the schema. Do not include markdown formatting or json tags. Do not hallucinate missing financial data.`;

      const prompt = `Ingest and scan this deal text submission (Source: ${source}):\n\n${rawText}\n\nAdditional Context: ${contextNotes || "None"}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              deal_title: {
                type: Type.STRING,
                description: "A professional, 5-8 word title",
              },
              asset_category: {
                type: Type.STRING,
                description: "Energy, Metals, Ags & Softs, Freight & Shipping, Deep Tech, Biotech, Real Estate",
              },
              specific_asset: {
                type: Type.STRING,
                nullable: true,
                description: "Specific grade or product (e.g. Bonny Light Crude, Lithium Hydroxide Battery Grade, Copper Cathodes Grade A), or null",
              },
              instrument_type: {
                type: Type.STRING,
                nullable: true,
                description: "Physical Cargo/Asset, Plain Vanilla Options or Swaps, Customizable Options, Digital and Barrier Options, Structured Products",
              },
              target_ask_usd: {
                type: Type.INTEGER,
                nullable: true,
                description: "Integer USD target ask or valuation if explicitly stated, or null",
              },
              jurisdiction: {
                type: Type.STRING,
                nullable: true,
                description: "Primary legal or shipping jurisdiction, or null",
              },
              execution_risk_trajectory: {
                type: Type.STRING,
                description: "Aligned, Fracturing, Critical Risk",
              },
              milimatch_blindspot_drivers: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "One or more of: Priorities, Ownership, Decisions, Handoffs, Pressure",
              },
              first_action_response: {
                type: Type.STRING,
                description: "Exactly one straightforward first action to resolve the identified execution friction",
              },
              is_schema_complete: {
                type: Type.BOOLEAN,
                description: "True if key metrics (specific_asset, target_ask_usd, etc.) are present",
              },
              feedback_prompt: {
                type: Type.STRING,
                description: "Deterministic etiquette coaching on missing data points",
              },
            },
            required: [
              "deal_title",
              "asset_category",
              "execution_risk_trajectory",
              "milimatch_blindspot_drivers",
              "first_action_response",
              "is_schema_complete",
              "feedback_prompt",
            ],
          },
        },
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json({
        success: true,
        source: "gemini_cognitive_nlp",
        data: parsed,
      });
    } catch (err: any) {
      console.warn("Gemini deal parsing error, utilizing deterministic heuristic fallback:", err?.message);
    }
  }

  // Deterministic Intelligent Fallback (Heuristic NLP)
  const lower = rawText.toLowerCase();
  
  // Detect asset category
  let assetCategory = "Energy";
  if (lower.includes("copper") || lower.includes("lithium") || lower.includes("gold") || lower.includes("iron") || lower.includes("nickel") || lower.includes("bauxite") || lower.includes("metals")) {
    assetCategory = "Metals";
  } else if (lower.includes("soy") || lower.includes("wheat") || lower.includes("sugar") || lower.includes("coffee") || lower.includes("fertilizer") || lower.includes("corn")) {
    assetCategory = "Ags & Softs";
  } else if (lower.includes("lng") || lower.includes("crude") || lower.includes("diesel") || lower.includes("solar") || lower.includes("hydrogen") || lower.includes("bunkering")) {
    assetCategory = "Energy";
  } else if (lower.includes("vessel") || lower.includes("freight") || lower.includes("charter") || lower.includes("capesize") || lower.includes("supramax")) {
    assetCategory = "Freight & Shipping";
  } else if (lower.includes("ai") || lower.includes("quantum") || lower.includes("semiconductor") || lower.includes("compute")) {
    assetCategory = "Deep Tech";
  } else if (lower.includes("pharma") || lower.includes("clinical") || lower.includes("biotech") || lower.includes("oncology")) {
    assetCategory = "Biotech";
  } else if (lower.includes("logistics facility") || lower.includes("land") || lower.includes("property") || lower.includes("real estate") || lower.includes("terminal")) {
    assetCategory = "Real Estate";
  }

  // Extract dollar amount
  let targetAsk: number | null = null;
  const dollarMatch = rawText.match(/\$?(\d{1,3}(?:,\d{3})+|\d+)(?:\s*(?:m|million|b|billion|k))?/i);
  if (dollarMatch) {
    const rawVal = dollarMatch[1].replace(/,/g, "");
    let num = parseInt(rawVal, 10);
    const fullMatch = dollarMatch[0].toLowerCase();
    if (fullMatch.includes("b") || fullMatch.includes("billion")) num *= 1000000000;
    else if (fullMatch.includes("m") || fullMatch.includes("million")) num *= 1000000;
    else if (fullMatch.includes("k")) num *= 1000;
    if (!isNaN(num) && num > 10000) {
      targetAsk = num;
    }
  }

  // Specific asset heuristic
  let specificAsset: string | null = null;
  if (lower.includes("bonny light")) specificAsset = "Bonny Light Crude Oil";
  else if (lower.includes("lithium hydroxide")) specificAsset = "Battery Grade Lithium Hydroxide (LiOH)";
  else if (lower.includes("copper cathode")) specificAsset = "Grade A Copper Cathodes (99.99%)";
  else if (lower.includes("lng")) specificAsset = "Liquefied Natural Gas (FOB/DES)";
  else if (lower.includes("gold dore") || lower.includes("bullion")) specificAsset = "LBMA Good Delivery Gold Bullion";
  else if (lower.includes("data center")) specificAsset = "Tier-3 AI Compute Infrastructure Facility";
  else {
    // fallback extraction from first sentence
    const firstPhrase = rawText.split(/[.\n]/)[0].slice(0, 45).trim();
    if (firstPhrase.length > 5) specificAsset = firstPhrase;
  }

  // Blindspot heuristic detection based on language markers
  const blindspots: string[] = [];
  if (lower.includes("asap") || lower.includes("urgent") || lower.includes("today only") || lower.includes("pressure") || lower.includes("rushed")) {
    blindspots.push("Pressure");
  }
  if (lower.includes("who is signing") || lower.includes("middleman") || lower.includes("broker chain") || lower.includes("mandate letter") || lower.includes("not direct")) {
    blindspots.push("Ownership");
  }
  if (lower.includes("waiting on board") || lower.includes("unclear") || lower.includes("committee") || lower.includes("hesitating")) {
    blindspots.push("Decisions");
  }
  if (lower.includes("forwarding this") || lower.includes("received from a friend") || lower.includes("introduced by") || lower.includes("pass along")) {
    blindspots.push("Handoffs");
  }
  if (blindspots.length === 0) {
    blindspots.push("Priorities");
  }

  const isComplete = targetAsk !== null && specificAsset !== null;
  const riskTrajectory = blindspots.length >= 2 ? "Fracturing" : blindspots.includes("Pressure") ? "Critical Risk" : "Aligned";

  const feedbackPrompt = isComplete
    ? "Document contains institutional specification and clear volumetric/capital sizing."
    : `Market Etiquette Notice: ${!targetAsk ? "Missing explicit target transaction ask or volume in USD. " : ""}${!specificAsset ? "Asset grade or specifications require ISO/ASTM standardization before institutional matching. " : ""}Please provide official spec sheet or verified buyer/seller mandate for clearance.`;

  const firstAction = blindspots.includes("Ownership")
    ? "Request proof of direct principal authority (PCO/LOI) and execute Finders Guild bilateral attribution shield."
    : blindspots.includes("Pressure")
    ? "Slow transaction tempo to establish verifiable chain of custody before disclosing buyer identity."
    : "Review verified match candidates against counterparty Process Intake Memo.";

  return res.json({
    success: true,
    source: "deterministic_institutional_gateway",
    data: {
      deal_title: `${assetCategory}: ${specificAsset || "Scouting Opportunity"} Intake`,
      asset_category: assetCategory,
      specific_asset: specificAsset,
      instrument_type: lower.includes("option") ? "Plain Vanilla Options or Swaps" : lower.includes("structured") ? "Structured Products" : "Physical Cargo/Asset",
      target_ask_usd: targetAsk,
      jurisdiction: lower.includes("singapore") ? "Singapore" : lower.includes("rotterdam") ? "Rotterdam, NL" : lower.includes("houston") ? "Houston, USA" : lower.includes("geneva") ? "Geneva, CH" : lower.includes("uae") || lower.includes("dubai") ? "Dubai, UAE" : null,
      execution_risk_trajectory: riskTrajectory,
      milimatch_blindspot_drivers: blindspots,
      first_action_response: firstAction,
      is_schema_complete: isComplete,
      feedback_prompt: feedbackPrompt,
    },
  });
});

async function startServer() {
  // In development, hook Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve dist static files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Finders Guild Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
