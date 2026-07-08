import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { connection } from "next/server";
import { FalconWatermark } from "@/components/falcon-watermark";
import { heroVideos, site } from "@/lib/content";

function pickRandomVideo() {
  return heroVideos[Math.floor(Math.random() * heroVideos.length)];
}

export async function HeroSection() {
  await connection();
  const videoSrc = pickRandomVideo();

  return (
    <section className="msm-grain relative flex min-h-screen items-center overflow-hidden bg-msm-navy">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
      />
      {/* Darker on the left for text contrast; lighter on the right so video reads through */}
      <div className="absolute inset-0 bg-gradient-to-r from-msm-navy/95 via-msm-navy/70 via-40% to-msm-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-msm-navy/50 via-transparent to-msm-navy/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(201,149,46,0.1)_0%,_transparent_55%)]" />
      {/* Localized scrim so the logo watermark stays legible over the video */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_50%,_rgba(12,18,34,0.55)_0%,_transparent_55%)]" />

      <FalconWatermark className="absolute right-16 top-1/2 h-[min(50vw,300px)] w-auto max-h-[min(50vw,300px)] -translate-y-1/2 opacity-[0.18] drop-shadow-[0_0_40px_rgba(12,18,34,0.7)] sm:right-24 lg:right-36 lg:opacity-[0.22]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-msm-gold">
            100% québécois · Depuis {site.founded}
          </p>
          <h1 className="font-display mt-6 text-[2.75rem] leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Logiciels d&apos;ici{" "}
            <span className="text-msm-gold">pour les gens d&apos;affaires</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            MSM conçoit des solutions de gestion qui fonctionnent partout — même sans internet,
            cellulaire ou électricité. Simplifiez les affaires compliquées.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-msm-gold px-6 py-3.5 text-sm font-semibold text-msm-navy transition hover:bg-msm-gold-light"
            >
              Demander une démo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions/organic"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Découvrir nos solutions
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-8">
            <p className="inline-flex items-baseline gap-3 text-sm text-white/50">
              <span>Satisfaction client</span>
              <span className="font-semibold text-msm-gold">{site.satisfactionRate}</span>
            </p>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
            <p className="inline-flex items-baseline gap-3 text-sm text-white/50">
              <span>Support</span>
              <span className="font-semibold text-white/80">gratuit</span>
            </p>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
            <p className="inline-flex items-baseline gap-3 text-sm text-white/50">
              <span>Tout</span>
              <span className="font-semibold text-white/80">inclus</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
