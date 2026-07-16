import type { Metadata } from "next";
import { Headphones, MessageSquare, Phone, Wrench } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { site } from "@/lib/content";
import { pageImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Support technique",
  description: "Support technique gratuit MSM — formulaire de contact, téléphone et diagnostic automatique.",
};

const channels = [
  {
    icon: Phone,
    title: "Téléphone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\D/g, "")}`,
  },
  {
    icon: MessageSquare,
    title: "Formulaire de contact",
    value: "Envoyez-nous un message",
    href: "/contact",
  },
  {
    icon: Wrench,
    title: "Utilitaire MSM-STG",
    value: "Menu Aide → Support technique",
    href: null,
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Support technique gratuit"
        description="Depuis toujours, MSM assure un support technique de qualité. Un outil de diagnostic signale automatiquement les problèmes."
        image={{ src: pageImages.support, alt: "Équipe de support technique MSM" }}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {channels.map((channel) => (
              <div key={channel.title} className="rounded-2xl border border-msm-border bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-msm-gold/10 text-msm-gold">
                  <channel.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-msm-navy">{channel.title}</h3>
                {channel.href ? (
                  <a href={channel.href} className="mt-2 block text-sm text-msm-gold hover:underline">
                    {channel.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-msm-muted">{channel.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-msm-border bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Headphones className="mt-1 h-6 w-6 shrink-0 text-msm-gold" />
              <div>
                <h3 className="text-lg font-semibold text-msm-navy">Comment obtenir de l'aide</h3>
                <p className="mt-3 text-sm leading-relaxed text-msm-muted">
                  Pour garantir un traitement rapide, détaillez avec précision les manipulations
                  permettant de reproduire le cas. Utilisez l'utilitaire MSM-STG accessible par le
                  menu Aide « ? » → « Support technique ». Préparez votre numéro de série.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-msm-muted">
                  Votre domaine d'affaires est stratégique ? Un service privilégié avec contact
                  direct auprès d'un concepteur est disponible sur demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Besoin d'assistance ?"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </>
  );
}
