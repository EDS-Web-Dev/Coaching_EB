import type { Metadata } from "next";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KTL Running Coach — Coach Trail & Running au Maroc",
    template: "%s | KTL Running Coach",
  },
  description:
    "Coach Trail & Running personnalisé basé au Maroc. Préparation marathon, semi-marathon, trail et ultra-trail. Suivi à distance ou en présentiel. Kiffe Ta Life.",
  keywords: [
    "coach running Maroc", "coach trail Maroc", "coaching course à pied Maroc",
    "préparation marathon Maroc", "préparation trail Maroc", "coach running Casablanca",
    "programme course à pied", "coaching ultra trail", "KTL Running Coach", "Eric Bitsch coach",
    "running Casablanca", "trail Casablanca", "coach sportif Casablanca", "coach sportif Maroc",
    "running Maroc", "trail Maroc", "marathon Casablanca", "semi-marathon Maroc",
    "préparation trail Casablanca", "coaching running Casablanca",
  ],
  authors: [{ name: "Éric Bitsch" }],
  creator: "Éric Bitsch",
  metadataBase: new URL("https://ktl-running.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/logo-ktl.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "KTL Running Coach",
    title: "KTL Running Coach — Coach Trail & Running au Maroc",
    description: "Coach Trail & Running personnalisé basé au Maroc. Préparation marathon, semi-marathon, trail et ultra-trail. Suivi à distance ou en présentiel.",
    url: "https://ktl-running.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "KTL Running Coach — Coach Trail & Running au Maroc",
    description: "Coach Trail & Running personnalisé basé au Maroc. Préparation marathon, semi-marathon, trail et ultra-trail.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ktl-running.com/#eric-bitsch",
      name: "Éric Bitsch",
      jobTitle: "Coach Trail & Running",
      description:
        "Coach Trail & Running passionné basé au Maroc, finisher de la Diagonale des Fous (Grand Raid de la Réunion 2025), marathonien et ultra-traileur avec plus de 13 ans d'expérience.",
      url: "https://ktl-running.com/a-propos",
      sameAs: [
        "https://www.instagram.com/ericbitsch/",
        "https://www.strava.com/athletes/37327428",
        "https://www.youtube.com/@ericbitsch7489",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ktl-running.com/#business",
      name: "KTL Running Coach",
      description:
        "Coaching Trail & Running personnalisé au Maroc. Préparation marathon, semi-marathon, trail et ultra-trail. Suivi à distance ou en présentiel.",
      url: "https://ktl-running.com",
      founder: { "@id": "https://ktl-running.com/#eric-bitsch" },
      address: {
        "@type": "PostalAddress",
        addressCountry: "MA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: "https://ktl-running.com/contact",
      },
      sameAs: [
        "https://www.instagram.com/ericbitsch/",
        "https://www.strava.com/athletes/37327428",
        "https://www.youtube.com/@ericbitsch7489",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Programmes de coaching Trail & Running",
        url: "https://ktl-running.com/offres",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${oswald.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
