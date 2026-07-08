import type { Metadata } from "next";
import { MapPin, Scale, ScanLine, Video, Weight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Solution environnementale",
  description: "MSM BacTrack® — gestion intelligente des bacs de recyclage pour les municipalités.",
};

const features = [
  {
    icon: ScanLine,
    title: "Identification RFID",
    description:
      "Identification automatique des bacs, collecte d'information et intégration en base de données sans intervention humaine.",
  },
  {
    icon: MapPin,
    title: "Géolocalisation",
    description: "Connaissez la position d'un bac de recyclage en temps réel.",
  },
  {
    icon: Weight,
    title: "Pesage dynamique",
    description:
      "Régulateur de débit à perte de poids intégrant les variables de poids et de vitesse.",
  },
  {
    icon: Video,
    title: "Contrôle vidéo",
    description: "L'opérateur suit en temps réel le contenu des bacs de recyclage.",
  },
  {
    icon: Scale,
    title: "Facturation automatisée",
    description:
      "Tarification selon l'utilisation réelle — taille du bac, fréquence et poids. Équitable et écologique.",
  },
];

export default function BacTrackPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solution"
        title="BacTrack® — Villes intelligentes"
        description="La gestion des bacs de recyclage (vert, bleu, noir) est complexe pour les villes. MSM offre aux municipalités une solution simple pour réduire les coûts et optimiser la gestion des matières recyclables."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-msm-border bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-700">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-msm-navy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-msm-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-msm-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-msm-navy">Collecte intelligente</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-msm-gold">RFID</h3>
              <p className="mt-2 text-sm leading-relaxed text-msm-muted">
                Une puce RFID sur chaque bac permet de l'identifier. Chaque vidange est comptabilisée
                automatiquement. Moins vous jetez, plus vous gagnez.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-msm-gold">Plate-forme intégrée</h3>
              <p className="mt-2 text-sm leading-relaxed text-msm-muted">
                La plate-forme MSM connecte tous vos processus de recyclage avec un soutien spécifique
                pour diverses opérations.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-msm-gold">Tarification équitable</h3>
              <p className="mt-2 text-sm leading-relaxed text-msm-muted">
                Tarification selon la taille du bac, la fréquence des collectes et le poids — prenant
                en compte les efforts des usagers pour réduire l'empreinte écologique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Nous rencontrer" description="Discutons de la mise en place de BacTrack® pour votre municipalité." />
    </>
  );
}
