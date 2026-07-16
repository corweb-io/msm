import type { Metadata } from "next";
import Image from "next/image";
import { Check, Quote } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { ImageFeature } from "@/components/image-feature";
import { RegionStrip } from "@/components/region-strip";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { SectorGrid } from "@/components/sector-grid";
import { site } from "@/lib/content";
import { iaaImages, productImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Agroalimentaire (IAA)",
  description: "MSM IAA — logiciels de production, vente et distribution pour l'industrie agroalimentaire hors réseau.",
};

const capabilities = [
  "Liste de prix par client (inclusion/exclusion de produits)",
  "Calcul de prix en pourcentage ou en montant",
  "Calcul de commission en temps réel (DSD)",
  "Facturation professionnelle, papier ou courriel",
  "Gestionnaire de produits, services et transferts vers le camion",
  "Multi-société, multi-accès, multilingue (FR-EN)",
  "Vente et retour simplifié",
  "Synchronisation sécurisée en fin de journée",
  "Connexion au système comptable",
  "Exportation des données et base chiffrée",
];

const requirements = [
  "Un simple PC Windows© pour la mise en place de base",
  "Un portable ou tablette Windows© suffit pour la distribution",
  "Pour une utilisation multi-usagers, contactez-nous pour une solution optimale",
  "Lecteur de code-barres portable, imprimantes standard",
];

const hardware = [
  {
    title: "MIL-STD 810G",
    description:
      "Tests de catégorie militaire : −32 °C à 49 °C, chutes jusqu'à 122 cm et vibrations à 7,7 g par axe.",
    image: iaaImages.milstd,
    alt: "Certification MIL-STD 810G",
  },
  {
    title: "IP54",
    description: "Protection limitée contre la poussière et contre les éclaboussures d'eau.",
    image: iaaImages.ip54,
    alt: "Conformité IP54 pluie et poussière",
  },
  {
    title: "Tablette robuste",
    description: "Écran lié au tactile pour un meilleur contraste — conçu pour le terrain.",
    image: iaaImages.tablet,
    alt: "Tablette industrielle pour la distribution",
  },
  {
    title: "Dragonne",
    description: "Tenez et manipulez la tablette d'une seule main, confortablement et en sécurité.",
    image: iaaImages.handle,
    alt: "Tablette avec dragonne de transport",
  },
  {
    title: "Clavier portfolio",
    description: "Convertit la tablette en ordinateur portable et la protège hors utilisation.",
    image: iaaImages.keyboard,
    alt: "Clavier portfolio pour tablette",
  },
  {
    title: "Lecteur code-barres",
    description: "Lecture rapide des produits et inventaires en livraison ou au comptoir.",
    image: iaaImages.scanner,
    alt: "Lecteur de code-barres portable",
  },
];

const included = [
  "Le coût d'acquisition inclut l'installation, la configuration et la formation",
  "Ouverture aux standards courants : XML, Excel, PDF, HTML, Word et plus",
  "Technologies éprouvées pour une utilisation réelle sur le terrain",
];

const advantages = [
  "Route de distribution autonome à très faible coût (DSD)",
  "Avec ou sans internet, cellulaire, Wi-Fi ou électricité",
  "Matériel standard à faible coût — ordinateurs, tablettes, imprimantes",
  "Information fluide entre siège, ventes et distribution sur route",
];

const reasons = [
  "Échec avec un autre fournisseur",
  "Coût trop élevé des autres solutions",
  "Manque de service ou support défaillant",
  "Délais trop longs au service à la clientèle",
];

export default function IAAPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solution"
        title="Industrie agroalimentaire (IAA)"
        description="Production, vente et facturation pour producteurs, distributeurs, manufacturiers, revendeurs et courtiers — même sans internet, cellulaire, Wi-Fi ou électricité."
        image={{ src: iaaImages.tablet, alt: "Tablette robuste pour la distribution IAA" }}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-msm-gold/30 bg-msm-gold/5 p-6 sm:p-8">
            <Quote className="h-6 w-6 text-msm-gold" />
            <blockquote className="mt-4 text-base leading-relaxed text-msm-navy sm:text-lg">
              « Avec cette dernière génération de système de gestion, nous sommes maintenant à
              l&apos;avant-garde de l&apos;industrie. Nous sommes très satisfaits des performances et nous
              envisageons l&apos;avenir avec optimisme. »
            </blockquote>
            <p className="mt-4 text-sm font-medium text-msm-muted">
              Pierre-Karl Lambert, directeur général — Boulangerie Lacroix
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-msm-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ImageFeature
            src={productImages.route}
            alt="Livraison et distribution sur route avec suivi numérique"
          >
            <h2 className="text-xl font-semibold text-msm-navy">Le défi des régions éloignées</h2>
            <p className="mt-4 text-sm leading-relaxed text-msm-muted">
              Les terres agricoles sont loin des centres urbains, souvent difficiles d&apos;accès en
              hiver. Internet haute vitesse, réseau cellulaire et parfois même l&apos;électricité y
              sont absents ou instables.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-msm-muted">
              MSM IAA est une gamme complète pour la production, la vente et la facturation. Les
              données circulent entre la plateforme centrale, l&apos;équipe de vente et la distribution
              sur route — sans redondance pour l&apos;administration, avec un lien direct vers le
              système comptable.
            </p>
            <ul className="mt-6 space-y-3">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-msm-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-msm-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-msm-navy">Configuration minimum</h3>
            <ul className="mt-4 space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-sm text-msm-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-msm-gold" />
                  {req}
                </li>
              ))}
            </ul>
          </ImageFeature>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <SectionEyebrow>Équipements</SectionEyebrow>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy">
              Standards, robustes, prêts pour le terrain
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-msm-muted">
              Choisissez nos équipements ou utilisez les vôtres — du matériel standard, facile à
              configurer, à la hauteur de vos attentes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hardware.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-msm-border bg-white"
              >
                <div className="relative aspect-[16/10] bg-msm-navy/5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-msm-gold" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-msm-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-msm-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-msm-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ImageFeature
            src={iaaImages.dashboard}
            alt="Tablette terrain avec tableaux de bord MSM"
            aspect="landscape"
            fit="contain"
          >
            <h2 className="text-xl font-semibold text-msm-navy">Inclus et ouvert</h2>
            <p className="mt-3 text-sm leading-relaxed text-msm-muted">
              Une solution complète dès le départ — formation, standards ouverts et outils conçus
              pour l&apos;usage réel sur route.
            </p>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-msm-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-msm-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </ImageFeature>
        </div>
      </section>

      <RegionStrip
        title="Là où vos équipes livrent"
        description="De l'Abitibi à la Côte-Nord, MSM équipe les opérations hors réseau partout au Québec."
      />

      <SectorGrid
        eyebrow="Industrie"
        title="Tous les secteurs agroalimentaires"
        description="Une même suite logicielle, adaptée aux spécificités de chaque filière."
      />

      <section className="border-t border-msm-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ImageFeature
            src={iaaImages.bakery}
            alt="Production et vente en boulangerie artisanale"
            reverse
          >
            <h2 className="text-xl font-semibold text-msm-navy">Fonctions principales</h2>
            <p className="mt-3 text-sm leading-relaxed text-msm-muted">
              Commissions, facturation EDI, routes DSD, commandes et production (OMS) — moins
              d&apos;erreurs de transcription, plus de contrôle, moins de paperasse.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 rounded-lg border border-msm-border bg-white px-4 py-3 text-sm text-msm-muted"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-msm-gold" />
                  {cap}
                </li>
              ))}
            </ul>
          </ImageFeature>
        </div>
      </section>

      <section className="border-t border-msm-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-msm-navy">Pourquoi passer à MSM IAA ?</h2>
          <p className="mt-2 max-w-2xl text-sm text-msm-muted">
            Si l&apos;une de ces situations vous parle, il est temps de regarder du côté de MSM.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 rounded-lg border border-msm-border bg-msm-warm/40 px-4 py-3 text-sm text-msm-muted"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-msm-gold" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Demander une démo IAA"
        description={`Appelez-nous au ${site.phoneSales} ou prenez rendez-vous en ligne.`}
        secondaryLabel={`Appeler ${site.phoneSales}`}
        secondaryHref={`tel:${site.phoneSales.replace(/\D/g, "")}`}
      />
    </>
  );
}
