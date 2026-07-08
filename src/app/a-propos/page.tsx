import type { Metadata } from "next";
import { FalconWatermark } from "@/components/falcon-watermark";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos",
  description: "MSM — entreprise technologique québécoise, 100 % indépendante depuis 1998.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Mot du président"
        description="Bienvenue chez MSM, 100 % québécois et indépendant depuis 1998."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-6 text-base leading-relaxed text-msm-muted">
            <p className="font-display text-xl text-msm-navy">
              « Simplifier les affaires compliquées — c'est notre défi depuis plus de 25 ans. »
            </p>
            <p>
              MSM est une entreprise technologique qui conçoit des logiciels ultra performants
              destinés aux gens d'affaires. Le fruit de notre travail revient à notre équipe et à
              notre communauté client.
            </p>
            <p>
              Nous offrons des logiciels que vous ne retrouverez nulle part ailleurs. En affaires
              depuis plus de 25 ans, notre défi c'est de simplifier les affaires compliquées.
            </p>
            <p>
              Nous n'aimons pas la complexité, surtout celles qui nous compliquent la vie
              d'entreprise. MSM est le premier fournisseur de logiciel dédié aux régions éloignées,
              avec une expérience éprouvée en innovation dans les solutions de distribution (DSD)
              et la gestion de vente hors réseau.
            </p>
            <p>
              En tant que partenaire de premier plan, MSM offre des solutions novatrices qui
              réunissent des produits, des logiciels et des services pour répondre à vos besoins et
              à vos applications uniques. Nos solutions sont éprouvées et nos innovations
              technologiques ont reçu la reconnaissance de l'industrie.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { value: "25+", label: "Années d'expérience" },
              { value: site.satisfactionRate, label: "Satisfaction client" },
              { value: "100%", label: "Québécois et indépendant" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-msm-border bg-white p-5 text-center"
              >
                <p className="font-display text-4xl text-msm-gold">{stat.value}</p>
                <p className="mt-1 text-sm text-msm-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-msm-border bg-msm-warm py-16 sm:py-20">
        <FalconWatermark className="absolute -left-16 top-1/2 h-72 w-auto max-h-72 -translate-y-1/2 opacity-[0.06]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-msm-gold">Notre emblème</p>
              <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy">Le faucon d'or</h2>
              <p className="mt-4 text-sm leading-relaxed text-msm-muted">
                Notre logo, un faucon d'or aux ailes déployées, trouve son origine dans la mythologie
                perse. Vers 559 av. J.-C., Cyrus le Grand, fondateur de l'Empire perse achéménide,
                l'avait choisi comme étendard.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-msm-muted">
                Cyrus le Grand est l'auteur de la plus ancienne déclaration des droits de l'homme au
                monde. Pour MSM, ce symbole incarne l'indépendance, la force et l'engagement envers
                nos clients.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-2xl border border-msm-border bg-msm-navy p-10 sm:p-14">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,149,46,0.15)_0%,_transparent_70%)]" />
                <FalconWatermark className="relative mx-auto h-48 w-auto max-h-48 max-w-full object-contain opacity-90 sm:h-56 sm:max-h-56" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Avez-vous des projets ?" description="N'hésitez pas à nous contacter pour en discuter." />
    </>
  );
}
