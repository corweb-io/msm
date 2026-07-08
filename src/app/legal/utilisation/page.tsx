import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
};

export default function UtilisationPage() {
  return (
    <>
      <PageHeader title="Conditions d'utilisation" />
      <section className="py-12 sm:py-16">
        <div className="prose prose-sm mx-auto max-w-3xl px-4 text-msm-muted sm:px-6">
          <p>
            Le site Internet msm.ca est un service de la société {site.legalName}. Les présentes
            conditions générales d'utilisation encadrent la mise à disposition des services du site
            et leur utilisation par l'utilisateur.
          </p>
          <p>
            L'accès au site par l'utilisateur signifie son acceptation des présentes conditions. En
            cas de non-acceptation, l'utilisateur doit renoncer à l'accès aux services proposés.
          </p>
          <p>
            Le site est accessible gratuitement en tout lieu à tout utilisateur ayant un accès à
            Internet. Tous les frais supportés par l'utilisateur pour accéder au service sont à sa
            charge.
          </p>
          <p>
            Tant le présent site que les modalités et conditions de son utilisation sont régis par
            les lois du Québec. En cas de contestation, les tribunaux québécois seront seuls
            compétents.
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
