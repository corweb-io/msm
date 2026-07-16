import Image from "next/image";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { sectors } from "@/lib/media";

type SectorGridProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function SectorGrid({
  eyebrow = "Secteurs",
  title = "Adapté à votre industrie",
  description = "Des logiciels conçus pour les réalités du terrain — production, transformation et distribution.",
}: SectorGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-msm-muted sm:text-base">{description}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              className="group overflow-hidden rounded-xl border border-msm-border bg-white transition hover:border-msm-gold/35 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-msm-gold" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-msm-navy">{sector.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-msm-muted">{sector.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
