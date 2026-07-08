"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "@/lib/cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
  }, []);

  function handleChoice(choice: "accepted" | "declined") {
    setCookieConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-msm-border bg-white/95 p-4 shadow-[0_-8px_30px_rgba(12,18,34,0.12)] backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-3xl">
          <p id="cookie-consent-title" className="text-sm font-semibold text-msm-navy">
            Utilisation des cookies
          </p>
          <p id="cookie-consent-description" className="mt-1 text-sm leading-relaxed text-msm-muted">
            Nous utilisons des cookies pour analyser le trafic et améliorer votre expérience sur notre
            site. Consultez notre{" "}
            <Link href="/legal/confidentialite" className="font-medium text-msm-gold underline-offset-2 hover:underline">
              déclaration de confidentialité
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="rounded-md border border-msm-border px-4 py-2.5 text-sm font-medium text-msm-navy transition hover:border-msm-navy/20 hover:bg-msm-warm"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-md bg-msm-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-msm-navy-light"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
