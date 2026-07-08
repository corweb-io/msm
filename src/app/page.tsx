import Link from "next/link";
import { ArrowRight, MapPin, Truck, Wheat, Shield, Recycle } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ProductHub } from "@/components/product-hub";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { StatsStrip } from "@/components/stats-strip";
import { industries, valueProps } from "@/lib/content";

const solutionCards = [
  {
    title: "Gestion d'entreprise",
    description: "Facturation, inventaire, commandes et rapports — tout inclus, sans module caché.",
    href: "/solutions/organic",
    icon: Wheat,
    accent: "from-msm-gold/20 to-transparent",
  },
  {
    title: "Agroalimentaire (IAA)",
    description: "Production et distribution hors réseau pour les régions éloignées et l'agriculture.",
    href: "/solutions/iaa",
    icon: Truck,
    accent: "from-emerald-900/10 to-transparent",
  },
  {
    title: "Sécurité des données",
    description: "Base de données, connexion et réseau chiffrés pour une confidentialité maximale.",
    href: "/solutions/confidentiel",
    icon: Shield,
    accent: "from-msm-navy/10 to-transparent",
  },
  {
    title: "Solution environnementale",
    description: "BacTrack® — gestion intelligente des bacs avec RFID, pesage et facturation automatisée.",
    href: "/solutions/bactrack",
    icon: Recycle,
    accent: "from-green-900/10 to-transparent",
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
                Nos domaines d'expertise
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
              className={`group relative col-span-full overflow-hidden rounded-2xl border border-msm-border bg-gradient-to-br ${solutionCards[0].accent} p-8 transition hover:border-msm-gold/40 hover:shadow-lg lg:col-span-7`}
            >
              <FeaturedIcon className="h-8 w-8 text-msm-gold" />
              <h3 className="mt-6 text-2xl font-semibold text-msm-navy">{solutionCards[0].title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-msm-muted">
                {solutionCards[0].description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-msm-gold">
                En savoir plus
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>

            <div className="col-span-full grid gap-5 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {solutionCards.slice(1).map((card) => {
                const Icon = card.icon;
                return (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`group relative overflow-hidden rounded-xl border border-msm-border bg-gradient-to-br ${card.accent} p-5 transition hover:border-msm-gold/40 hover:shadow-md`}
                >
                  <Icon className="h-5 w-5 text-msm-navy/70 transition group-hover:text-msm-gold" />
                  <h3 className="mt-3 text-base font-semibold text-msm-navy">{card.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-msm-muted line-clamp-2">
                    {card.description}
                  </p>
                </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ProductHub />

      <section className="py-16 sm:py-20">
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
