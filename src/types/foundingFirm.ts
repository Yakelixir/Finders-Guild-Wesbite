export type RoleId =
  | "trader"
  | "originator"
  | "capital"
  | "compliance"
  | "operator"
  | "principal";

export interface RoleDetail {
  id: RoleId;
  cardHeadline: string; // e.g. "I TRADE / OPERATE A DESK"
  roleTitle: string;    // e.g. "Experienced Trader / Desk Operator"
  invitationRelevance: string; // "Why we thought of you..."
  pain: string[];
  claim: string;
  gain: string;
  whatWeNeed: string[];
  ndaRelevance: string;
  frictionRelevance: string;
  questionGuidance: {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
  };
}

export interface MediaAsset {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  mediaType: "video" | "audio" | "pdf" | "image" | "deck";
  driveId: string;
  embedUrl: string;
  duration?: string;
  transcript?: string;
}

export type AnalyticsEventType =
  | "page_view"
  | "invitation_stage_view"
  | "role_selected"
  | "hero_watch_video"
  | "rfp_open"
  | "rfp_download"
  | "rfp_page_navigate"
  | "rfp_print"
  | "rfp_page_tab_click"
  | "media_play"
  | "diagnostic_expand"
  | "evidence_methodology_open"
  | "discovery_call_click";

export interface AnalyticsEvent {
  event: AnalyticsEventType;
  timestamp: string;
  metadata?: Record<string, any>;
}
