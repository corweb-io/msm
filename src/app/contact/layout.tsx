import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez MSM pour une démo, un devis ou toute question sur nos logiciels de gestion.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
