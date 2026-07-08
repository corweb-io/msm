export const COOKIE_CONSENT_KEY = "msm-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setCookieConsent(value: CookieConsentValue) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent("msm-cookie-consent", { detail: value }));
}

export function hasAnalyticsConsent() {
  return getCookieConsent() === "accepted";
}
