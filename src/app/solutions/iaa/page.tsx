import type { Metadata } from "next";
import { Check, Quote } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agroalimentaire (IAA)",
  description: "MSM IAA — logiciels de production, vente et distribution pour l'industrie agroalimentaire hors réseau.",
};

const capabilities = [
  "Liste de prix par client",
  "Calcul de commission en temps réel (DSD)",
  "Facturation au format professionnel",
  "Gestionnaire de produits et services",
  "Multi-société, multi-accès, multilingue (FR-EN)",
  "Vente et retour simplifié",
  "Synchronisation sécurisée en fin de journée",
  "Connexion au système comptable",
  "Exportation des données sécurisée",
  "Base de données chiffrée",
];

const requirements = [
  "Un simple PC Windows© pour la mise en place de base",
  "Un portable ou tablette Windows© suffit pour la distribution",
  "Équipements standards : MIL-STD 810G, IP54",
  "Lecteur de code-barres portable, imprimantes standard",
];

export default function IAAPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solution"
        title="Industrie agroalimentaire (IAA)"
        description="Production, vente et facturation pour producteurs, distributeurs et manufacturiers — même sans internet, cellulaire, Wi-Fi ou électricité."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-msm-gold/30 bg-msm-gold/5 p-6 sm:p-8">
            <Quote className="h-6 w-6 text-msm-gold" />
            <blockquote className="mt-4 text-base leading-relaxed text-msm-navy sm:text-lg">
              « Avec cette dernière génération de système de gestion, nous sommes maintenant à
              l'avant-garde de l'industrie. Nous sommes très satisfaits des performances et nous
              envisageons l'avenir avec optimisme. »
            </blockquote>
            <p className="mt-4 text-sm font-medium text-msm-muted">
              Pierre-Karl Lambert, directeur général — Boulangerie Lacroix
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-msm-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-msm-navy">Le défi des régions éloignées</h2>
              <p className="mt-4 text-sm leading-relaxed text-msm-muted">
                Les terres agricoles sont éloignées des centres urbains, souvent difficilement
                accessibles en hiver. Le service internet haute vitesse, le réseau cellulaire et
                parfois même l'électricité sont absents ou instables.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-msm-muted">
                MSM a développé une solution applicative complète pour la distribution autonome à
                très faible coût — avec ou sans internet, cellulaire, Wi-Fi ou alimentation
                électrique.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-msm-navy">Configuration minimum</h2>
              <ul className="mt-4 space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-msm-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-msm-gold" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-msm-navy">Fonctions principales</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3 rounded-lg border border-msm-border bg-white px-4 py-3 text-sm text-msm-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-msm-gold" />
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Contacter pour une démo IAA"
        description={`Appelez-nous au ${site.phoneSales} ou demandez un rendez-vous en ligne.`}
        secondaryLabel={`Appeler ${site.phoneSales}`}
        secondaryHref={`tel:${site.phoneSales.replace(/\D/g, "")}`}
      />
    </>
  );
}
