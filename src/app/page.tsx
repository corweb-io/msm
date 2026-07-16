import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Truck, Wheat, Shield, Recycle } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ProductHub } from "@/components/product-hub";
import { RegionStrip } from "@/components/region-strip";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { SectorGrid } from "@/components/sector-grid";
import { StatsStrip } from "@/components/stats-strip";
import { industries, valueProps } from "@/lib/content";
import { solutionImages } from "@/lib/media";

const solutionCards = [
  {
    title: "Gestion d'entreprise",
    description: "Facturation, inventaire, commandes et rapports — tout inclus, sans module caché.",
    href: "/solutions/organic",
    icon: Wheat,
    image: solutionImages.organic,
    imageAlt: "Gestion d'entreprise sur le terrain",
  },
  {
    title: "Agroalimentaire (IAA)",
    description: "Production et distribution hors réseau pour les régions éloignées et l'agriculture.",
    href: "/solutions/iaa",
    icon: Truck,
    image: solutionImages.iaa,
    imageAlt: "Distribution agroalimentaire sur route",
  },
  {
    title: "Sécurité des données",
    description: "Base de données, connexion et réseau chiffrés pour une confidentialité maximale.",
    href: "/solutions/confidentiel",
    icon: Shield,
    image: solutionImages.confidentiel,
    imageAlt: "Infrastructure de données sécurisée",
  },
  {
    title: "Solution environnementale",
    description: "BacTrack® — gestion intelligente des bacs avec RFID, pesage et facturation automatisée.",
    href: "/solutions/bactrack",
    icon: Recycle,
    image: solutionImages.bactrack,
    imageAlt: "Solution environnementale BacTrack",
  },
];

export default function HomePage() {
  const FeaturedIcon = solutionCards[0].icon;

  return (
    <>
      <HeroSection />
      <StatsStrip />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <SectionEyebrow>Pourquoi MSM</SectionEyebrow>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy sm:text-4xl">
              Conçu pour le terrain
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {valueProps.map((prop, i) => (
              <div
                key={prop.title}
                className="group relative overflow-hidden rounded-xl border border-msm-border bg-white p-6 transition hover:border-msm-gold/30 hover:shadow-md"
              >
                <span className="font-display text-5xl leading-none text-msm-gold/20 transition group-hover:text-msm-gold/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-msm-navy">{prop.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-msm-muted">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-msm-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <SectionEyebrow>Solutions</SectionEyebrow>
              <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy sm:text-4xl">
                Nos domaines d&apos;expertise
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-msm-muted sm:text-base">
                Des logiciels clé en main pour la production, la vente, la distribution et la livraison.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-msm-gold transition hover:text-msm-navy"
            >
              Toutes les solutions
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <Link
              href={solutionCards[0].href}
              className="group relative col-span-full overflow-hidden rounded-2xl border border-msm-border lg:col-span-7"
            >
              <div className="relative min-h-[280px] sm:min-h-[320px]">
                <Image
                  src={solutionCards[0].image}
                  alt={solutionCards[0].imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-msm-navy via-msm-navy/55 to-msm-navy/15" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <FeaturedIcon className="h-8 w-8 text-msm-gold" />
                  <h3 className="mt-4 text-2xl font-semibold text-white">{solutionCards[0].title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                    {solutionCards[0].description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-msm-gold">
                    En savoir plus
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="col-span-full grid gap-5 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {solutionCards.slice(1).map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group relative overflow-hidden rounded-xl border border-msm-border"
                  >
                    <div className="relative min-h-[120px] sm:min-h-[110px] lg:min-h-[108px]">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 33vw, 40vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-msm-navy/90 via-msm-navy/75 to-msm-navy/35" />
                      <div className="absolute inset-0 flex flex-col justify-center p-5">
                        <Icon className="h-5 w-5 text-msm-gold transition group-hover:text-msm-gold-light" />
                        <h3 className="mt-2 text-base font-semibold text-white">{card.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/65 line-clamp-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ProductHub />

      <RegionStrip />

      <SectorGrid
        eyebrow="Agroalimentaire"
        title="Du champ à la livraison"
        description="MSM équipe producteurs, transformateurs et distributeurs avec des outils adaptés à chaque maillon de la chaîne."
      />

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-msm-border bg-msm-navy p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2 text-msm-gold">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium uppercase tracking-widest">Secteurs desservis</span>
                </div>
                <h2 className="font-display mt-4 text-2xl tracking-tight text-white sm:text-3xl">
                  De 1 à 2 500 employés
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  Santé, construction, agroalimentaire, distribution et plus.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
