import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/content";

const footerLinks = {
  solutions: [
    { label: "Gestion d'entreprise", href: "/solutions/organic" },
    { label: "Agroalimentaire (IAA)", href: "/solutions/iaa" },
    { label: "Sécurité des données", href: "/solutions/confidentiel" },
    { label: "BacTrack®", href: "/solutions/bactrack" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Produits", href: "/produits" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Carrière", href: "/carriere" },
    { label: "Support", href: "/support" },
  ],
  legal: [
    { label: "Conditions d'utilisation", href: "/legal/utilisation" },
    { label: "Confidentialité", href: "/legal/confidentialite" },
    { label: "Conditions générales", href: "/legal/termes" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-msm-border bg-msm-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {site.legalName}
              <br />
              100 % québécois et indépendant depuis {site.founded}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-msm-gold">Solutions</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-msm-gold">Entreprise</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-msm-gold">Contact</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-white/70">
              <p>
                {site.address.street}
                <br />
                {site.address.suite}
                <br />
                {site.address.city} {site.address.postal}
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="transition hover:text-white">
                  {site.phone}
                </a>
              </p>
              <p>
                <Link href="/contact" className="transition hover:text-white">
                  Formulaire de contact
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {site.legalName} — Tous droits réservés
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/50 transition hover:text-white/80">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
