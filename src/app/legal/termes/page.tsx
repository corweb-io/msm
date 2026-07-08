import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Conditions générales",
};

export default function TermesPage() {
  return (
    <>
      <PageHeader title="Termes et conditions générales" />
      <section className="py-12 sm:py-16">
        <div className="prose prose-sm mx-auto max-w-3xl space-y-4 px-4 text-msm-muted sm:px-6">
          <p>
            Les présentes conditions générales de vente s'appliquent à toutes les ventes,
            livraisons et prestations fournies par MSM à ses clients au Canada et ailleurs.
          </p>
          <h2 className="text-base font-semibold text-msm-navy">Paiement</h2>
          <p>
            Sauf autorisation contraire, le paiement doit être effectué dans un délai de sept (7)
            jours net à compter de la date de facturation. Toute première commande doit être réglée à
            la commande.
          </p>
          <h2 className="text-base font-semibold text-msm-navy">Garantie</h2>
          <p>
            Les conditions de garantie propres à chaque produit sont fournies lors de la livraison.
          </p>
          <h2 className="text-base font-semibold text-msm-navy">Propriété intellectuelle</h2>
          <p>
            Les documents et programmes informatiques restent la propriété intellectuelle de MSM.
            Toute copie nécessite une autorisation expresse.
          </p>
          <h2 className="text-base font-semibold text-msm-navy">Droit applicable</h2>
          <p>
            Tous les contrats avec MSM sont régis par les lois de la province de Québec. En cas de
            litige, le tribunal du siège social de MSM sera seul compétent.
          </p>
          <p className="mt-8 text-sm">
            {site.legalName}
            <br />
            {site.address.street}, {site.address.suite}
            <br />
            {site.address.city} {site.address.postal}
          </p>
        </div>
      </section>
    </>
  );
}
