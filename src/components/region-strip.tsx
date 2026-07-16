import Image from "next/image";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { regions } from "@/lib/media";

type RegionStripProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function RegionStrip({
  eyebrow = "Présence terrain",
  title = "Des régions éloignées aux centres urbains",
  description = "MSM est le premier fournisseur de logiciels dédié aux régions éloignées du Québec — là où la connectivité n'est pas garantie.",
}: RegionStripProps) {
  return (
    <section className="border-y border-msm-border bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-display mt-4 text-3xl tracking-tight text-msm-navy sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-msm-muted sm:text-base">{description}</p>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto pb-2 [scrollbar-width:thin]">
        <div className="mx-auto flex w-max max-w-none gap-4 px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-6">
          {regions.map((region) => (
            <figure
              key={region.id}
              className="group relative w-[220px] shrink-0 overflow-hidden rounded-xl sm:w-[240px]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={region.image}
                  alt={region.title}
                  fill
                  sizes="240px"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-msm-navy/85 via-msm-navy/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-sm font-semibold text-white">{region.title}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
