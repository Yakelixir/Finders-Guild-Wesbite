import { AnalyticsEventType, AnalyticsEvent } from "../types/foundingFirm";

const ANALYTICS_STORAGE_KEY = "fg_founding_analytics_events";

export function trackEvent(event: AnalyticsEventType, metadata?: Record<string, any>): void {
  const record: AnalyticsEvent = {
    event,
    timestamp: new Date().toISOString(),
    metadata,
  };

  // Safe client-side logging
  if (typeof window !== "undefined") {
    try {
      const existingRaw = window.sessionStorage.getItem(ANALYTICS_STORAGE_KEY);
      const list: AnalyticsEvent[] = existingRaw ? JSON.parse(existingRaw) : [];
      list.push(record);
      // Keep last 50 events in session storage
      window.sessionStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(list.slice(-50)));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }

  // Developer & telemetry observation
  console.log(`[FG Analytics] ${event}`, metadata || "");
}

export function getRecordedAnalyticsEvents(): AnalyticsEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(ANALYTICS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
