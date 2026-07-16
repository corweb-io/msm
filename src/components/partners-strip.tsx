import Image from "next/image";
import { partners } from "@/lib/content";
import { SectionEyebrow } from "@/components/section-eyebrow";

type PartnersStripProps = {
  /** compact = home band; featured = fuller about section */
  variant?: "compact" | "featured";
};

function PartnerMark({
  name,
  logo,
  emphasized,
}: {
  name: string;
  logo: string | null;
  emphasized?: boolean;
}) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={name}
        width={160}
        height={48}
        className="h-8 w-auto max-w-[10rem] object-contain object-left sm:h-9"
      />
    );
  }

  return (
    <span
      className={`font-display tracking-tight text-msm-navy ${
        emphasized ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
      }`}
    >
      {name}
    </span>
  );
}

export function PartnersStrip({ variant = "compact" }: PartnersStripProps) {
  if (variant === "featured") {
    return (
      <section className="border-y border-msm-border bg-msm-warm py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <SectionEyebrow>Partenaires</SectionEyebrow>
            <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy sm:text-4xl">
              Revendeur certifié
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-msm-muted sm:text-base">
              MSM est revendeur certifié de partenaires technologiques reconnus — pour le matériel
              de terrain et les paiements.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10">
            {partners.map((partner) => (
              <li key={partner.id} className="border-t border-msm-border pt-6">
                <p className="text-xs font-medium uppercase tracking-widest text-msm-gold">
                  {partner.role}
                </p>
                <div className="mt-3">
                  <PartnerMark name={partner.name} logo={partner.logo} emphasized />
                </div>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-msm-muted">
                  {partner.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-msm-border bg-msm-warm">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-6 sm:py-10">
        <div className="shrink-0">
          <p className="text-xs font-medium uppercase tracking-widest text-msm-gold">
            Partenaires certifiés
          </p>
          <p className="mt-1 text-sm text-msm-muted">Revendeur certifié</p>
        </div>
        <ul className="flex w-full flex-wrap items-center gap-x-10 gap-y-4 sm:justify-end">
          {partners.map((partner, i) => (
            <li
              key={partner.id}
              className={`flex items-center gap-3 ${
                i > 0 ? "sm:border-l sm:border-msm-border sm:pl-10" : ""
              }`}
            >
              <PartnerMark name={partner.name} logo={partner.logo} />
              <span className="sr-only"> — {partner.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
