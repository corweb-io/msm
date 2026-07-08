import { brandLogo } from "@/lib/brand";

type FalconWatermarkProps = {
  className?: string;
};

export function FalconWatermark({ className = "" }: FalconWatermarkProps) {
  return (
    <img
      src={brandLogo.src}
      alt=""
      aria-hidden
      width={brandLogo.width}
      height={brandLogo.height}
      className={`pointer-events-none block w-auto select-none object-contain object-left ${className}`}
      decoding="async"
    />
  );
}
