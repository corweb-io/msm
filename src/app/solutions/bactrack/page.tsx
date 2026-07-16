import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Scale, ScanLine, Video, Weight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { ImageFeature } from "@/components/image-feature";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { bactrackImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Solution environnementale",
  description:
    "MSM BacTrack® — gestion intelligente des bacs de recyclage avec RFID, géolocalisation, pesage et facturation pour les municipalités.",
};

const features = [
  {
    icon: ScanLine,
    title: "Identification RFID",
    description:
      "La technologie RFID identifie le bac, collecte et édite l'information, puis l'intègre en base de données — sans intervention humaine.",
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
      "Un régulateur de débit à perte de poids intègre les variables de poids et de vitesse pour le pesage dynamique.",
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
      "Après identification et pesage, le logiciel prépare une facturation détaillée selon l'utilisation réelle — la quantité de déchets produite. Équitable, avec un contrôle efficace des coûts.",
  },
];

export default function BacTrackPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solution environnementale"
        title="BacTrack® — Villes intelligentes, bacs intelligents"
        description="La gestion des bacs de recyclage (vert, bleu, noir) est complexe pour les villes. MSM BacTrack®, doté de la technologie MSM-RFID, simplifie l'identification, la géolocalisation, le pesage, le contrôle vidéo et la facturation automatisée — pour réduire les coûts d'opérations et mieux gérer les matières recyclables et résiduelles."
        image={{ src: bactrackImages.hero, alt: "BacTrack — bacs intelligents en milieu résidentiel" }}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ImageFeature
            src={bactrackImages.sensor}
            alt="Capteur MSM et bac intelligent pour la collecte municipale"
          >
            <h2 className="text-xl font-semibold text-msm-navy">Collecte intelligente</h2>
            <p className="mt-4 text-sm leading-relaxed text-msm-muted">
              Logiciel RFID pour la gestion des bacs de recyclage. Une plate-forme qui relie
              identification, géolocalisation, pesage et facturation — pour une gestion équitable et
              écologique des matières recyclables et résiduelles.
            </p>
            <div className="mt-8 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-msm-gold">MSM-RFID</h3>
                <p className="mt-2 text-sm leading-relaxed text-msm-muted">
                  Une puce RFID sur chaque bac l&apos;identifie à chaque vidange. La fréquence
                  d&apos;utilisation du service de collecte est comptabilisée automatiquement —
                  pour maîtriser votre utilisation. Moins vous jetez, plus vous gagnez.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-msm-gold">Plate-forme intégrée</h3>
                <p className="mt-2 text-sm leading-relaxed text-msm-muted">
                  La plate-forme MSM connecte tous vos processus de recyclage et offre un soutien
                  spécifique pour diverses opérations de recyclage.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-msm-gold">Tarification équitable</h3>
                <p className="mt-2 text-sm leading-relaxed text-msm-muted">
                  Tarification selon la taille du bac, la fréquence des collectes et le poids du
                  bac. Équitable, avantageuse et écologique, elle tient compte des efforts des
                  usagers pour réduire l&apos;empreinte écologique.
                </p>
              </div>
            </div>
          </ImageFeature>
        </div>
      </section>

      <section className="border-y border-msm-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <SectionEyebrow>Fonctions</SectionEyebrow>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy">
              Une solution complète pour les municipalités
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ImageFeature
            src={bactrackImages.system}
            alt="Architecture BacTrack — camion, GPS, GPRS, RFID et terminal terrain"
            reverse
            aspect="landscape"
            fit="contain"
          >
            <SectionEyebrow>Notre technologie</SectionEyebrow>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy">
              Du bac au centre de contrôle
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-msm-muted">
              BacTrack® relie le terrain et le bureau : identification RFID du bac, terminal embarqué,
              géolocalisation GPS et synchronisation GPRS/Wi-Fi. Les données de collecte alimentent
              la plate-forme MSM pour le suivi des opérations et la facturation.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-msm-muted">
              <li className="flex gap-2">
                <span className="font-semibold text-msm-gold">RFID</span>
                Identification automatique du bac à chaque collecte
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-msm-gold">GPS / GPRS</span>
                Position et transmission des données en temps réel
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-msm-gold">Terminal</span>
                Interface terrain pour l&apos;opérateur et le suivi vidéo
              </li>
            </ul>
          </ImageFeature>
        </div>
      </section>

      <section className="border-t border-msm-border bg-msm-warm py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-msm-navy lg:col-span-5">
              <Image
                src={bactrackImages.hardware}
                alt="Composant matériel MSM Environnement"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-msm-gold" />
            </div>
            <div className="lg:col-span-7">
              <SectionEyebrow>Matériel MSM</SectionEyebrow>
              <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy">
                Conçu pour le terrain
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-msm-muted">
                Les composants MSM Environnement — capteurs et modules RFID — s&apos;intègrent aux
                bacs municipaux (vert, bleu, noir) pour une collecte fiable, mesurable et facturable
                selon l&apos;usage réel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Nous rencontrer" description="Discutons de la mise en place de BacTrack® pour votre municipalité." />
    </>
  );
}
