"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/content";

const AFFIX_OFFSET = 100;

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [affixed, setAffixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setAffixed(window.scrollY > AFFIX_OFFSET);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinkClass = (href: string) => {
    const active = isActive(pathname, href);
    return [
      "relative rounded-md px-3 py-2 text-[15px] font-medium transition",
      active
        ? "text-white after:absolute after:bottom-1.5 after:left-3 after:right-3 after:h-px after:bg-white"
        : "text-white/90 hover:bg-white/10 hover:text-white",
    ].join(" ");
  };

  return (
    <header
      className={`left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        affixed ? "fixed bg-msm-navy py-1 shadow-md" : "absolute bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex min-h-16 max-w-6xl items-center justify-between overflow-visible px-4 py-2 sm:px-6">
        <Logo onClick={() => setMobileOpen(false)} />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) =>
            "children" in item ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-white/90 transition hover:bg-white/10 hover:text-white">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-msm-border bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 transition hover:bg-msm-navy/5"
                      >
                        <span className="block text-sm font-medium text-msm-navy">{child.label}</span>
                        <span className="mt-0.5 block text-xs text-msm-muted">{child.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-msm-gold px-5 py-2 text-sm font-semibold text-msm-navy transition hover:bg-msm-gold-light"
          >
            Nous contacter
          </Link>
        </div>

        <button
          type="button"
          className={`rounded-md border p-2 transition lg:hidden ${
            mobileOpen
              ? "border-white/60 bg-transparent text-white"
              : "border-white/50 text-white hover:border-white/80 hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#0f1419] transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto px-0 pb-8 pt-20">
          {"children" in nav[0] && (
            <>
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex w-full items-center justify-between border-b border-white/6 px-7 py-4 text-left text-[17px] font-medium text-white"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {solutionsOpen && (
                <div className="bg-white/3">
                  {nav[0].children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block border-b border-white/4 px-7 py-3 pl-11 text-sm text-white/75 transition hover:bg-white/4 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="block font-medium text-white">{child.label}</span>
                      <span className="mt-0.5 block text-xs text-white/45">{child.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-white/6 px-7 py-4 text-[17px] font-medium transition hover:bg-white/4 ${
                isActive(pathname, item.href) ? "text-msm-gold" : "text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 px-6">
            <a
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              className="mb-4 flex items-center justify-center gap-2 text-sm text-white/60"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="block rounded-md bg-msm-gold px-4 py-3.5 text-center text-base font-semibold text-msm-navy transition hover:bg-msm-gold-light"
              onClick={() => setMobileOpen(false)}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
