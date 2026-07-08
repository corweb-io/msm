import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Déclaration de confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader title="Déclaration de confidentialité" />
      <section className="py-12 sm:py-16">
        <div className="prose prose-sm mx-auto max-w-3xl space-y-4 px-4 text-msm-muted sm:px-6">
          <p>
            MSM s'engage à veiller à ce que votre vie privée soit protégée. Les informations
            recueillies ne seront utilisées que conformément à la présente politique.
          </p>
          <h2 className="text-base font-semibold text-msm-navy">Informations recueillies</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Nom et détails de paiement</li>
            <li>Coordonnées incluant l'adresse courriel</li>
            <li>Renseignements démographiques (code postal, préférences)</li>
          </ul>
          <h2 className="text-base font-semibold text-msm-navy">Utilisation des cookies</h2>
          <p>
            Nous utilisons des cookies de trafic pour identifier les pages utilisées et améliorer
            notre site. Vous pouvez choisir d'accepter ou de refuser les cookies via le bandeau de
            consentement ou les paramètres de votre navigateur.
          </p>
          <h2 className="text-base font-semibold text-msm-navy">Sécurité</h2>
          <p>
            Des procédures physiques, électroniques et de gestion appropriées sont en place pour
            sauvegarder les informations recueillies en ligne.
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
