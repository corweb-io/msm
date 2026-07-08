import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Clock, GraduationCap, Heart, Home } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Carrière",
  description: "Joignez-vous à l'équipe MSM — télétravail, horaires flexibles, formation continue.",
};

const perks = [
  { icon: Home, label: "Télétravail" },
  { icon: Clock, label: "Horaires flexibles" },
  { icon: GraduationCap, label: "Formation continue" },
  { icon: Heart, label: "Pet-friendly" },
];

export default function CarrierePage() {
  return (
    <>
      <PageHeader
        eyebrow="Carrière"
        title="Simplifier les affaires compliquées"
        description="Chez MSM, nous n'aimons pas la complexité. Votre défi : simplifier les affaires compliquées."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex items-start gap-4 rounded-2xl border border-msm-border bg-white p-6">
            <Briefcase className="mt-1 h-6 w-6 shrink-0 text-msm-gold" />
            <div>
              <h2 className="text-lg font-semibold text-msm-navy">Qui recherchons-nous ?</h2>
              <p className="mt-3 text-sm leading-relaxed text-msm-muted">
                Professionnels, étudiants, retraités actifs ou consultants en logiciel — faites-nous
                parvenir votre candidature dès maintenant.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {perks.map((perk) => (
              <div key={perk.label} className="rounded-xl border border-msm-border bg-white p-4 text-center">
                <perk.icon className="mx-auto h-6 w-6 text-msm-gold" />
                <p className="mt-2 text-xs font-medium text-msm-navy">{perk.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-msm-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-msm-navy-light"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Rejoignez l'équipe MSM" primaryLabel="Envoyer votre candidature" />
    </>
  );
}
