import Image from "next/image";

type ImageFeatureProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
  /** Image on the right instead of left */
  reverse?: boolean;
  className?: string;
};

export function ImageFeature({
  src,
  alt,
  children,
  reverse = false,
  className = "",
}: ImageFeatureProps) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-12 ${className}`}
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-span-5 ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-msm-gold" />
      </div>
      <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>{children}</div>
    </div>
  );
}
