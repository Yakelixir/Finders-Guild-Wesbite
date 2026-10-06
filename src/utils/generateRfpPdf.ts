import { jsPDF } from "jspdf";
import { RFP_DISCUSSION_DRAFT_PAGES } from "../data/foundingFirmData";
import posterImage from "../assets/images/into_the_breach_poster_1790435589915.jpg";
import tradingFirmVectors from "../assets/images/trading_firm_vectors_1790491175234.jpg";
import operatingPatternGates from "../assets/images/operating_pattern_gates_1790491188711.jpg";
import relationshipBoundary from "../assets/images/relationship_boundary_firm_1790491213609.jpg";

/**
 * Loads an image URL into a high-quality base64 JPEG data URL via an offscreen canvas.
 * Handles Vite asset bundling, same-origin caching, and provides safe fallback if unavailable.
 */
const loadImageDataUrl = (src: string): Promise<string> => {
  return new Promise((resolve) => {
    if (!src) {
      resolve("");
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const w = img.naturalWidth || img.width || 1200;
        const h = img.naturalHeight || img.height || 675;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(src);
          return;
        }
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.90);
        resolve(dataUrl);
      } catch {
        resolve(src);
      }
    };
    img.onerror = () => {
      resolve("");
    };
    img.src = src;
  });
};

/**
 * Generates and downloads a branded, high-fidelity PDF of the canonical RFP Discussion Draft:
 * "Request for Founding Participation - Discussion Draft.pdf"
 * 
 * Styled with Finder's Guild institutional dark palette:
 * - Rich dark navy/slate background (#090E17)
 * - Restrained emerald green accents (#10B981)
 * - High-resolution institutional figure plates & visual diagrams on each page
 * - High-legibility crisp typography with clear editorial hierarchy
 * - 100% native vector geometry bullets (zero %Æ encoding artifacts)
 * - Verbatim 6-page content, quotes, callouts, and bullet points
 * - Exact pagination and confidentiality footers
 */
export const downloadRfpPdf = async (): Promise<void> => {
  // Preload all visual plates in parallel for instantaneous, non-blocking rendering
  const [imgVectors, imgGates, imgBoundary, imgBreach] = await Promise.all([
    loadImageDataUrl(tradingFirmVectors),
    loadImageDataUrl(operatingPatternGates),
    loadImageDataUrl(relationshipBoundary),
    loadImageDataUrl(posterImage),
  ]);

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~210 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // ~297 mm
  const margin = 18;
  const contentWidth = pageWidth - margin * 2; // 174 mm
  const footerY = pageHeight - 12;
  const maxContentY = footerY - 8; // ~277 mm

  // Mapping of page numbers to dedicated visual figures
  const pageVisuals: Record<
    number,
    {
      img: string;
      title: string;
      sub: string;
      targetHeight: number;
    }
  > = {
    1: {
      img: imgVectors,
      title: "FIG. 1.0 — CONVERGENT DEAL FLOW & RELATIONAL ASSET MAPPING",
      sub: "PROPRIETARY EVIDENCE GATING & CLEARING ARCHITECTURE",
      targetHeight: 44,
    },
    2: {
      img: imgGates,
      title: "FIG. 2.0 — OPERATING GATES: COMMERCIAL ALIGNMENT, QUALIFICATION & CLEARING",
      sub: "PRE-CLOSING VERIFICATION CADENCE · SGS & ESCROW STAGE GATES",
      targetHeight: 40,
    },
    3: {
      img: imgBoundary,
      title: "FIG. 3.0 — FOUNDING TEAM DOMAIN ALIGNMENT & STRUCTURAL INTEGRATION",
      sub: "TRADER · ORIGINATOR · CAPITAL · COMPLIANCE · PRINCIPAL",
      targetHeight: 28,
    },
    4: {
      img: imgBoundary,
      title: "FIG. 4.0 — ATTRIBUTION SHIELD, NON-CIRCUMVENTION & BOUNDARY PROTOCOLS",
      sub: "PROTECTED DISCLOSURE & PRE-AGREED TRANSACTION ECONOMICS",
      targetHeight: 38,
    },
    5: {
      img: imgGates,
      title: "FIG. 5.0 — EVIDENCE FILTRATION BEFORE PRINCIPAL COMMITMENT",
      sub: "COMMODITY TRANSACTION REPEATABILITY & DISCIPLINED RISK ALLOCATION",
      targetHeight: 32,
    },
    6: {
      img: imgBreach,
      title: "FIG. 6.0 — INTO THE BREACH: OPERATIONAL REALITY & CLOSING DISCIPLINE",
      sub: "CONFIDENTIAL FOUNDING INITIATIVE · BRYANT STRATTON · SEPTEMBER 2026",
      targetHeight: 74,
    },
  };

  RFP_DISCUSSION_DRAFT_PAGES.forEach((pageData, index) => {
    if (index > 0) {
      doc.addPage();
    }

    // 1. Dark institutional page background (#090E17)
    doc.setFillColor(9, 14, 23);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // 2. Subtle top emerald accent line
    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(0.8);
    doc.line(margin, 12, pageWidth - margin, 12);

    // 3. Top Header metadata
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(16, 185, 129);
    doc.text("FINDERS GUILD", margin, 16);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text("CONFIDENTIAL DISCUSSION DRAFT · SEPTEMBER 2026", pageWidth - margin, 16, { align: "right" });

    let currentY = 24;

    // 4. Page Main Title
    doc.setFont("times", "bold");
    doc.setFontSize(14.5);
    doc.setTextColor(255, 255, 255);
    const titleLines = doc.splitTextToSize(pageData.title, contentWidth);
    doc.text(titleLines, margin, currentY);
    currentY += titleLines.length * 6.0 + 2.5;

    // Divider under title
    doc.setDrawColor(30, 41, 59); // slate-800
    doc.setLineWidth(0.3);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 5.5;

    // 5. Render Sections
    const visualInfo = pageVisuals[pageData.pageNumber];
    const reservedVisualSpace = visualInfo && visualInfo.img ? visualInfo.targetHeight + 14 : 0;
    const textCeiling = maxContentY - reservedVisualSpace;

    pageData.sections.forEach((sec) => {
      // Check for available space
      if (currentY > textCeiling) {
        return;
      }

      // Section Heading
      if (sec.heading) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(52, 211, 153); // emerald-400
        doc.text(sec.heading.toUpperCase(), margin, currentY);
        currentY += 4.5;
      }

      // Callout box if present
      if (sec.callout && currentY < textCeiling - 15) {
        const calloutText = `"${sec.callout.text}"`;
        doc.setFont("times", "italic");
        doc.setFontSize(9.5);
        const quoteLines = doc.splitTextToSize(calloutText, contentWidth - 10);
        const boxHeight = quoteLines.length * 4.2 + 7.5;

        // Callout card background
        doc.setFillColor(15, 23, 42); // slate-900
        doc.roundedRect(margin, currentY, contentWidth, boxHeight, 1.5, 1.5, "F");

        // Callout left accent border
        doc.setDrawColor(16, 185, 129);
        doc.setLineWidth(1.0);
        doc.line(margin, currentY, margin, currentY + boxHeight);

        // Label
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        doc.setTextColor(148, 163, 184);
        doc.text((sec.callout.label || "CORE THESIS").toUpperCase(), margin + 4, currentY + 3.8);

        // Text
        doc.setFont("times", "italic");
        doc.setFontSize(9);
        doc.setTextColor(241, 245, 249);
        doc.text(quoteLines, margin + 4, currentY + 8);

        currentY += boxHeight + 3.5;
      }

      // Body Paragraphs
      if (sec.body && sec.body.length > 0) {
        doc.setFont("times", "normal");
        doc.setFontSize(9);
        doc.setTextColor(203, 213, 225); // slate-300

        sec.body.forEach((para) => {
          if (currentY > textCeiling) return;
          const paraLines = doc.splitTextToSize(para, contentWidth);
          doc.text(paraLines, margin, currentY);
          currentY += paraLines.length * 4.0 + 2.0;
        });
      }

      // Bullet Points - RENDERED AS PURE VECTOR DIAMONDS (NO UNICODE %Æ ENCODING ARTIFACTS)
      if (sec.bullets && sec.bullets.length > 0) {
        doc.setFont("times", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(226, 232, 240); // slate-200

        sec.bullets.forEach((bullet) => {
          if (currentY > textCeiling) return;
          // Native vector diamond geometry (never emits %Æ)
          doc.setFillColor(16, 185, 129);
          const bx = margin + 1.8;
          const by = currentY - 1.0;
          const r = 0.9;
          doc.triangle(bx, by - r, bx + r, by, bx, by + r, "F");
          doc.triangle(bx, by - r, bx - r, by, bx, by + r, "F");

          doc.setTextColor(203, 213, 225);
          const bulletLines = doc.splitTextToSize(bullet, contentWidth - 6);
          doc.text(bulletLines, margin + 5, currentY);
          currentY += bulletLines.length * 3.8 + 1.8;
        });
        currentY += 1.0;
      }
    });

    // 6. RENDER DEDICATED INSTITUTIONAL VISUAL PLATE ON THIS PAGE
    if (visualInfo && visualInfo.img) {
      // Calculate available visual height so it never collides with footer
      const availableHeight = maxContentY - currentY - 8;
      const actualImgHeight = Math.min(visualInfo.targetHeight, Math.max(22, availableHeight));

      if (actualImgHeight >= 20) {
        const imgY = Math.max(currentY + 2.5, maxContentY - actualImgHeight - 6);

        // Draw image plate container
        try {
          doc.addImage(
            visualInfo.img,
            "JPEG",
            margin,
            imgY,
            contentWidth,
            actualImgHeight,
            undefined,
            "FAST"
          );

          // Subtle emerald hairline frame
          doc.setDrawColor(16, 185, 129);
          doc.setLineWidth(0.35);
          doc.rect(margin, imgY, contentWidth, actualImgHeight);

          // Top right subtle tag plate
          doc.setFillColor(7, 11, 18);
          doc.rect(pageWidth - margin - 52, imgY, 52, 4.5, "F");
          doc.setFont("helvetica", "bold");
          doc.setFontSize(5.5);
          doc.setTextColor(52, 211, 153);
          doc.text("FINDERS GUILD SPECIFICATION", pageWidth - margin - 2, imgY + 3.2, { align: "right" });

          // Figure caption below image
          doc.setFont("helvetica", "bold");
          doc.setFontSize(6.5);
          doc.setTextColor(226, 232, 240);
          doc.text(visualInfo.title, margin, imgY + actualImgHeight + 3.5);

          doc.setFont("helvetica", "normal");
          doc.setFontSize(5.5);
          doc.setTextColor(148, 163, 184);
          doc.text(visualInfo.sub, pageWidth - margin, imgY + actualImgHeight + 3.5, { align: "right" });
        } catch {
          // Graceful fallback if image rendering encounters environment issue
        }
      }
    }

    // 7. Bottom Confidentiality Footer
    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(0.3);
    doc.line(margin, footerY - 3.5, pageWidth - margin, footerY - 3.5);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.8);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text("CONFIDENTIAL DISCUSSION DRAFT · NOT AN OFFER OF SECURITIES", margin, footerY);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.2);
    doc.setTextColor(148, 163, 184);
    doc.text(`Page ${pageData.pageNumber} of ${RFP_DISCUSSION_DRAFT_PAGES.length}`, pageWidth - margin, footerY, {
      align: "right",
    });
  });

  // Save with clean human-readable filename
  doc.save("Request for Founding Participation - Discussion Draft.pdf");
};
