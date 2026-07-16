import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { ImageFeature } from "@/components/image-feature";
import { faqOrganic, industries, pricingPlans } from "@/lib/content";
import { productImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Gestion d'entreprise",
  description: "Logiciel de gestion d'entreprise MSM-ORGANIC — facturation, inventaire, tout inclus avec support gratuit.",
};

const features = [
  "Facturation et gestion des stocks",
  "Rapports comptables personnalisables — ou créés sur mesure",
  "Multi-société et multi-usager",
  "Import/export de vos données existantes",
  "Installation sur PC, réseau ou nuage",
  "Base de données chiffrée et exportable",
  "Formation, support et mises à jour inclus",
];

export default function OrganicPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solution"
        title="Logiciel de gestion d'entreprise"
        description="MSM-ORGANIC offre une gestion simple et ultra performante pour dirigeants et gestionnaires. Tous les modules livrés en standard — pas de surprise, ni d'extra à payer."
        image={{ src: productImages.organic, alt: "MSM-ORGANIC" }}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ImageFeature
            src={productImages.organic}
            alt="Gestion d'inventaire et d'entrepôt avec MSM-ORGANIC"
          >
            <h2 className="text-xl font-semibold text-msm-navy">Pourquoi choisir MSM-ORGANIC ?</h2>
            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-msm-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-msm-gold" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-msm-border bg-white p-6">
              <h3 className="text-lg font-semibold text-msm-navy">Secteurs desservis</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span key={industry} className="rounded-full bg-msm-navy/5 px-3 py-1 text-xs text-msm-navy">
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-msm-muted">
                De 1 à 2 500 employés sur une ou plusieurs bases de données. Entreprises de toutes
                tailles, avec ou sans réseau.
              </p>
            </div>
          </ImageFeature>
        </div>
      </section>

      <section className="border-y border-msm-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-msm-navy">Tarification</h2>
          <p className="mt-2 text-sm text-msm-muted">
            Installation, formation, support et mises à jour inclus pour tous les forfaits.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlighted ? "border-msm-gold bg-msm-gold/5" : "border-msm-border bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="text-xs font-medium uppercase tracking-wider text-msm-gold">Populaire</span>
                )}
                <h3 className="mt-1 text-lg font-semibold text-msm-navy">{plan.name}</h3>
                <p className="mt-3">
                  <span className="text-3xl font-semibold text-msm-navy">{plan.price}</span>
                  <span className="text-sm text-msm-muted">{plan.period}</span>
                </p>
                <p className="mt-1 text-xs text-msm-muted">{plan.extra}</p>
                <p className="mt-4 text-sm text-msm-muted">{plan.ideal}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-msm-muted">
                      <Check className="h-3.5 w-3.5 text-msm-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 block rounded-lg bg-msm-navy py-2.5 text-center text-sm font-medium text-white transition hover:bg-msm-navy-light"
                >
                  Contacter
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-msm-muted">
            <Link href="/tarifs" className="font-medium text-msm-gold hover:underline">
              Voir tous les détails tarifaires →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-msm-navy">Questions fréquentes</h2>
          <dl className="mt-8 space-y-6">
            {faqOrganic.map((item) => (
              <div key={item.q} className="border-b border-msm-border pb-6">
                <dt className="text-sm font-semibold text-msm-navy">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-msm-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection title="Souhaitez-vous une démo ?" description="Indiquez-nous la date et l'heure qui vous conviennent pour un rendez-vous." />
    </>
  );
}
