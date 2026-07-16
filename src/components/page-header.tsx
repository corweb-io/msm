import Image from "next/image";
import { FalconWatermark } from "@/components/falcon-watermark";
import { SectionEyebrow } from "@/components/section-eyebrow";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
};

export function PageHeader({ eyebrow, title, description, image }: PageHeaderProps) {
  return (
    <div className="msm-grain relative overflow-hidden border-b border-msm-navy-light bg-msm-navy">
      {image ? (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-msm-navy via-msm-navy/90 to-msm-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-msm-navy/70 via-transparent to-msm-navy/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,_rgba(201,149,46,0.1)_0%,_transparent_50%)]" />
      )}
      <FalconWatermark className="absolute -right-12 top-1/2 h-64 w-auto max-h-64 -translate-y-1/2 opacity-[0.06] sm:h-80 sm:max-h-80 lg:-right-4" />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
        {eyebrow && <SectionEyebrow light>{eyebrow}</SectionEyebrow>}
        <h1 className="font-display mt-4 max-w-3xl text-3xl tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">{description}</p>
        )}
      </div>
    </div>
  );
}
