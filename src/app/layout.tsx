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
  ],
  authors: [{ name: "Éric Bitsch" }],
  creator: "Éric Bitsch",
  metadataBase: new URL("https://ktl-running.com"),
  icons: {
    icon: "/images/logo-ktl.svg",
    shortcut: "/images/logo-ktl.svg",
    apple: "/images/logo-ktl.svg",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${oswald.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
