import Image from "next/image";

type ImageFeatureProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
  /** Image on the right instead of left */
  reverse?: boolean;
  className?: string;
  /** Aspect ratio of the image frame */
  aspect?: "portrait" | "landscape" | "square";
  /** How the image fills the frame */
  fit?: "cover" | "contain";
};

const aspectClass = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export function ImageFeature({
  src,
  alt,
  children,
  reverse = false,
  className = "",
  aspect = "portrait",
  fit = "cover",
}: ImageFeatureProps) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-12 ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl lg:col-span-5 ${aspectClass[aspect]} ${
          fit === "contain" ? "border border-msm-border bg-white" : ""
        } ${reverse ? "lg:order-2" : ""}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className={fit === "contain" ? "object-contain p-4" : "object-cover"}
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-msm-gold" />
      </div>
      <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>{children}</div>
    </div>
  );
}
