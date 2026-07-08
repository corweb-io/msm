import type { Metadata } from "next";
import { Lock, Server, Shield, Wifi } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sécurité des données",
  description: "MSM-CONFIDENTIEL — base de données, connexion et réseau chiffrés pour protéger vos données d'entreprise.",
};

const pillars = [
  {
    icon: Lock,
    title: "Base de données chiffrée",
    description: "Vos données restent confidentielles même en cas de vol ou de perte d'équipement.",
  },
  {
    icon: Wifi,
    title: "Connexion chiffrée",
    description: "Communiquez en toute sécurité depuis n'importe où dans le monde.",
  },
  {
    icon: Server,
    title: "Nuagique confidentiel",
    description: "Gérez vos données en toute sécurité sur serveur dédié ou dans les nuages.",
  },
  {
    icon: Shield,
    title: "Entreprise en sécurité",
    description: "Mises à jour permanentes pour une protection continue de vos opérations critiques.",
  },
];

export default function ConfidentielPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solution"
        title="MSM-CONFIDENTIEL®"
        description="La confidentialité est un droit. Protégez vos données sans mesures compliquées — base intelligente dotée d'une connexion chiffrée."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="max-w-3xl text-base leading-relaxed text-msm-muted">
            Souvenez-vous des gros titres annonçant la perte ou le vol de milliers de données.
            MSM-CONFIDENTIEL® est une base confidentielle pour des données confidentielles. Elle
            s'installe sur tous types d'ordinateurs et serveurs Microsoft© pour garantir un niveau
            de confidentialité presque absolu.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-msm-border bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-msm-navy/5 text-msm-navy">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-msm-navy">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-msm-muted">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-msm-border bg-msm-navy py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-semibold text-white">Utilisé sur des millions de postes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            La flexibilité et l'évolutivité de MSM-CONFIDENTIEL® permettent de répondre aux besoins
            les plus exigeants des entreprises à mission critique en temps réel.
          </p>
        </div>
      </section>

      <CTASection
        title="Protégez vos données dès aujourd'hui"
        secondaryLabel={site.phoneTollFree}
        secondaryHref={`tel:${site.phoneTollFree.replace(/\D/g, "")}`}
      />
    </>
  );
}
