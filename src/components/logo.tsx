import Link from "next/link";
import { brandLogo } from "@/lib/brand";
import { site } from "@/lib/content";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
  onClick?: () => void;
};

export function Logo({ variant = "header", className = "", onClick }: LogoProps) {
  const isFooter = variant === "footer";
  const alt = `${site.name} — ${site.tagline}`;

  const image = (
    <img
      src={brandLogo.src}
      alt={isFooter ? alt : ""}
      aria-hidden={isFooter ? undefined : true}
      width={brandLogo.width}
      height={brandLogo.height}
      className={`block w-auto object-contain object-left ${
        isFooter ? "max-h-14 sm:max-h-16" : "max-h-11 sm:max-h-12"
      } ${className}`}
      decoding="async"
    />
  );

  if (isFooter) {
    return <div className="overflow-visible">{image}</div>;
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center overflow-visible rounded-sm py-1 outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-msm-gold"
      onClick={onClick}
      aria-label={alt}
    >
      {image}
    </Link>
  );
}
