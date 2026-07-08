import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FalconWatermark } from "@/components/falcon-watermark";
import { site } from "@/lib/content";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "Prêt à simplifier vos opérations ?",
  description = "Contactez-nous pour une démo personnalisée ou pour discuter de vos projets.",
  primaryLabel = "Demander une démo",
  primaryHref = "/contact",
  secondaryLabel = `Appeler ${site.phone}`,
  secondaryHref = `tel:${site.phone.replace(/\D/g, "")}`,
}: CTASectionProps) {
  return (
    <section className="msm-grain relative overflow-hidden bg-msm-navy py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(201,149,46,0.08)_0%,_transparent_60%)]" />
      <FalconWatermark className="absolute left-1/2 top-1/2 h-96 w-auto max-h-96 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
          {description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-md bg-msm-gold px-6 py-3.5 text-sm font-semibold text-msm-navy transition hover:bg-msm-gold-light"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={secondaryHref}
            className="inline-flex items-center rounded-md border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
