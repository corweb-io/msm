import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { ProductHub } from "@/components/product-hub";
import { products } from "@/lib/content";
import { productImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Produits",
  description: "Découvrez la suite complète de produits MSM — CENTRAL, ENTREPRISE, ORGANIC, ROUTE, COMPTOIR, KIOSK, XERO et CONFIDENTIEL.",
};

export default function ProduitsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Produits"
        title="Suite de logiciels intégrée"
        description="MSM-CENTRAL est le cœur du système. Combinez les modules selon vos besoins pour une solution optimale en production, vente, distribution et livraison."
        image={{ src: productImages.central, alt: "Suite logicielle MSM" }}
      />

      <ProductHub />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {products.map((product) => {
              const image =
                productImages[product.id as keyof typeof productImages] ?? productImages.custom;
              return (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-xl border border-msm-border bg-white transition hover:border-msm-gold/30 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-msm-gold" />
                  </div>
                  <div className="p-6">
                    <span className="font-product text-sm font-semibold text-msm-navy">{product.name}</span>
                    <p className="mt-1 text-sm font-medium text-msm-gold">{product.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-msm-muted">{product.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="msm-grain relative mt-12 overflow-hidden rounded-2xl bg-msm-navy p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,149,46,0.1)_0%,_transparent_60%)]" />
            <div className="relative">
              <h3 className="font-display text-xl text-white">Ouverture technologique</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                MSM est ouvert à toutes les technologies : XML, Excel, PDF, HTML, Word et plus. Connexion
                aux systèmes comptables, facturation EDI, envoi par courriel et paiements en ligne.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
