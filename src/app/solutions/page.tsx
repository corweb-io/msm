import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { solutionImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Découvrez les solutions MSM pour la gestion d'entreprise, l'agroalimentaire, la sécurité et l'environnement.",
};

const solutions = [
  {
    title: "Gestion d'entreprise",
    href: "/solutions/organic",
    description:
      "Logiciel de gestion complet : facturation, inventaire, commandes, rapports comptables. Tout inclus, formation et support gratuits.",
    image: solutionImages.organic,
    imageAlt: "Gestion d'entreprise MSM-ORGANIC",
  },
  {
    title: "Agroalimentaire (IAA)",
    href: "/solutions/iaa",
    description:
      "Production, vente et distribution pour l'industrie agroalimentaire — conçu pour les régions éloignées sans connectivité.",
    image: solutionImages.iaa,
    imageAlt: "Distribution agroalimentaire hors réseau",
  },
  {
    title: "Sécurité des données",
    href: "/solutions/confidentiel",
    description:
      "MSM-CONFIDENTIEL : base de données, connexion et réseau chiffrés pour protéger les données sensibles de votre entreprise.",
    image: solutionImages.confidentiel,
    imageAlt: "Sécurité et chiffrement des données",
  },
  {
    title: "Solution environnementale",
    href: "/solutions/bactrack",
    description:
      "BacTrack® : gestion intelligente des bacs de recyclage avec RFID, géolocalisation, pesage et facturation automatisée.",
    image: solutionImages.bactrack,
    imageAlt: "BacTrack gestion environnementale",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Des logiciels pour chaque défi"
        description="MSM offre des solutions novatrices qui réunissent produits, logiciels et services pour répondre à vos besoins uniques."
        image={{ src: solutionImages.organic, alt: "Solutions MSM" }}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className="group grid overflow-hidden rounded-2xl border border-msm-border bg-white transition hover:border-msm-gold/40 hover:shadow-md sm:grid-cols-[200px_1fr]"
              >
                <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[140px]">
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-msm-gold sm:inset-y-0 sm:inset-x-auto sm:left-0 sm:h-auto sm:w-1" />
                </div>
                <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-msm-navy">{solution.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-msm-muted">
                      {solution.description}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-msm-gold">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
