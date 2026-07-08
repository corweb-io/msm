import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/content";

const hubModules = products.filter((p) => p.id !== "central");

export function ProductHub() {
  return (
    <section className="relative overflow-hidden border-y border-msm-border bg-[#f0ece4] py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(12,18,34,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,18,34,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md lg:pt-4">
            <p className="font-mono text-xs uppercase tracking-widest text-msm-gold">Architecture</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-msm-navy sm:text-4xl">
              Une suite, un système
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-msm-muted sm:text-base">
              <span className="font-mono text-sm font-medium text-msm-navy">MSM-CENTRAL</span> est le
              cœur du système. Combinez les modules selon vos besoins — production, vente, distribution
              et livraison.
            </p>
            <Link
              href="/produits"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-msm-gold transition hover:text-msm-navy"
            >
              Voir tous les produits
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="relative flex aspect-square items-center justify-center">
              {/* Connector lines */}
              <svg
                aria-hidden
                className="absolute inset-0 h-full w-full text-msm-gold/25"
                viewBox="0 0 400 400"
                fill="none"
              >
                {hubModules.map((_, i) => {
                  const angle = (i / hubModules.length) * 2 * Math.PI - Math.PI / 2;
                  const x = 200 + Math.cos(angle) * 130;
                  const y = 200 + Math.sin(angle) * 130;
                  return (
                    <line key={i} x1="200" y1="200" x2={x} y2={y} stroke="currentColor" strokeWidth="1" />
                  );
                })}
              </svg>

              {/* Central hub */}
              <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-msm-gold bg-msm-navy shadow-lg shadow-msm-navy/30 sm:h-32 sm:w-32">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-msm-gold sm:text-xs">
                  Cœur
                </span>
                <span className="font-mono text-xs font-semibold text-white sm:text-sm">MSM-CENTRAL</span>
              </div>

              {/* Orbiting modules */}
              {hubModules.map((product, i) => {
                const angle = (i / hubModules.length) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + Math.cos(angle) * 42;
                const y = 50 + Math.sin(angle) * 42;
                return (
                  <div
                    key={product.id}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="flex max-w-[88px] flex-col items-center rounded-lg border border-msm-border bg-white px-2 py-2 text-center shadow-sm transition hover:border-msm-gold/50 hover:shadow-md sm:max-w-[96px] sm:px-2.5 sm:py-2.5">
                      <span className="font-mono text-[9px] font-semibold leading-tight text-msm-navy sm:text-[10px]">
                        {product.name.replace("MSM-", "")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
