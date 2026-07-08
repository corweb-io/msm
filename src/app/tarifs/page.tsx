import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { pricingPlans, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarifs",
  description: "Tarification transparente MSM — installation, formation, support et mises à jour inclus.",
};

const included = [
  "Installation et configuration",
  "Formation en standard",
  "Support technique gratuit",
  "Mises à jour incluses",
  "Multi-société et multi-usager",
  "Export libre de vos données",
];

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs"
        title="Transparent et tout inclus"
        description="Pas de surprise, ni d'extra à payer. Choisissez le forfait adapté à votre rythme d'activité."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  plan.highlighted ? "border-msm-gold bg-msm-gold/5 shadow-md" : "border-msm-border bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="text-xs font-medium uppercase tracking-wider text-msm-gold">Recommandé</span>
                )}
                <h2 className="mt-1 text-xl font-semibold text-msm-navy">{plan.name}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-semibold text-msm-navy">{plan.price}</span>
                  <span className="text-sm text-msm-muted">{plan.period}</span>
                </p>
                <p className="mt-1 text-xs text-msm-muted">{plan.extra}</p>
                <p className="mt-4 flex-1 text-sm text-msm-muted">{plan.ideal}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-msm-muted">
                      <Check className="h-4 w-4 text-msm-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-medium transition ${
                    plan.highlighted
                      ? "bg-msm-gold text-msm-navy hover:bg-msm-gold-light"
                      : "bg-msm-navy text-white hover:bg-msm-navy-light"
                  }`}
                >
                  Contacter
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-msm-border bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-msm-navy">Toujours inclus</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-msm-muted">
                  <Check className="h-4 w-4 text-msm-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-msm-muted">
              Questions ? Appelez-nous au{" "}
              <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-medium text-msm-gold hover:underline">
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
