"use client";

import Link from "next/link";
import { useActionState } from "react";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/content";
import { initialContactFormState } from "@/lib/contact-form";
import { sendContactMessage } from "./actions";

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialContactFormState);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contactez-nous"
        description="Demandez une démo, posez vos questions ou discutez de vos projets avec notre équipe."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {state.status === "success" ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <h2 className="text-lg font-semibold text-green-800">Message envoyé</h2>
                  <p className="mt-2 text-sm text-green-700">
                    Merci pour votre message. Notre équipe vous contactera sous peu.
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-5">
                  {state.status === "error" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                      {state.message}
                    </div>
                  )}

                  <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Site web</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-msm-navy">
                        Nom *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-lg border border-msm-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-msm-gold focus:ring-2 focus:ring-msm-gold/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-msm-navy">
                        Société
                      </label>
                      <input
                        id="company"
                        name="company"
                        className="mt-1.5 w-full rounded-lg border border-msm-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-msm-gold focus:ring-2 focus:ring-msm-gold/20"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-msm-navy">
                        Téléphone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="mt-1.5 w-full rounded-lg border border-msm-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-msm-gold focus:ring-2 focus:ring-msm-gold/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-msm-navy">
                        Courriel *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-lg border border-msm-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-msm-gold focus:ring-2 focus:ring-msm-gold/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-msm-navy">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-1.5 w-full rounded-lg border border-msm-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-msm-gold focus:ring-2 focus:ring-msm-gold/20"
                    />
                  </div>
                  <p className="text-xs text-msm-muted">
                    * Les champs marqués d'une étoile sont obligatoires.
                  </p>
                  <button
                    type="submit"
                    disabled={pending}
                    className="rounded-lg bg-msm-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-msm-navy-light disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {pending ? "Envoi en cours…" : "Envoyer"}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-msm-border bg-white p-6">
                <h2 className="text-lg font-semibold text-msm-navy">Coordonnées</h2>
                <address className="mt-4 space-y-3 text-sm not-italic text-msm-muted">
                  <p>
                    {site.address.street}
                    <br />
                    {site.address.suite}
                    <br />
                    {site.address.city}
                    <br />
                    {site.address.postal}
                  </p>
                  <p>
                    <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="text-msm-gold hover:underline">
                      {site.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${site.phoneSales.replace(/\D/g, "")}`} className="text-msm-gold hover:underline">
                      Ventes : {site.phoneSales}
                    </a>
                  </p>
                  <p>
                    Pour toute demande écrite, utilisez le{" "}
                    <span className="font-medium text-msm-navy">formulaire de contact</span>.
                  </p>
                </address>
                <a
                  href="https://www.google.ca/maps/dir//MSM,+Ren%C3%A9-L%C3%A9vesque+Boulevard+West,+Montreal,+QC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-msm-gold hover:underline"
                >
                  Obtenir l'itinéraire →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
