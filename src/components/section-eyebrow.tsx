import { brandLogo } from "@/lib/brand";

type SectionEyebrowProps = {
  children: React.ReactNode;
  light?: boolean;
};

export function SectionEyebrow({ children, light = false }: SectionEyebrowProps) {
  return (
    <p
      className={`flex items-center gap-2.5 text-sm font-medium uppercase tracking-widest ${
        light ? "text-msm-gold" : "text-msm-gold"
      }`}
    >
      <img
        src={brandLogo.src}
        alt=""
        aria-hidden
        width={brandLogo.width}
        height={brandLogo.height}
        className="block h-8 w-auto max-h-8 shrink-0 object-contain object-left opacity-90"
        decoding="async"
      />
      {children}
    </p>
  );
}
