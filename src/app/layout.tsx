import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Source_Sans_3 } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/content";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `MSM — ${site.tagline}`,
    template: `%s | MSM`,
  },
  description: site.description,
  metadataBase: new URL("https://msm.ca"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
