import { site } from "@/lib/content";

const stats = [
  { value: "25+", label: "Années d'expertise", detail: "Depuis 1998" },
  { value: site.satisfactionRate, label: "Satisfaction client", detail: "Mesurée en continu" },
  { value: "0", label: "Connexion requise", detail: "Fonctionne hors réseau" },
  { value: "100%", label: "Québécois", detail: "Indépendant et local" },
] as const;

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-b border-msm-border bg-msm-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${i > 0 ? "sm:border-l sm:border-white/10 sm:pl-8 lg:pl-6" : ""}`}
            >
              <p className="font-display text-4xl font-normal tracking-tight text-msm-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-xs text-white/50">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
