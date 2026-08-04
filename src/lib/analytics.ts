declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

const CALL_CONVERSION_LABEL = "AW-18366122950/g3JnCL2h7NscEMaX07VE";

/**
 * Google Ads "Click to call" conversion snippet, adapted to navigate the
 * caller (tel: links can't be awaited) instead of relying on onclick's
 * return value.
 */
export function reportCallConversion(url: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") {
    window.location.href = url;
    return;
  }
  window.gtag("event", "conversion", {
    send_to: CALL_CONVERSION_LABEL,
    value: 1.0,
    currency: "INR",
    event_callback: () => {
      window.location.href = url;
    },
  });
}
