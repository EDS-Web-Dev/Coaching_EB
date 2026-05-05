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
    default: "Coach Eric — Coach Trail & Running",
    template: "%s | Coach Eric",
  },
  description:
    "Coach Trail & Running personnalisé basé au Maroc. Programmes pour débutants, reprise après blessure et performance ultra. Dépassez vos limites, quel que soit le terrain.",
  keywords: ["coaching trail", "running coach", "ultra trail", "programme course", "coaching sportif", "coach trail Maroc", "coach run Maroc", "coach running Maroc", "trail Maroc", "coaching trail Maroc"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Coach Eric",
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
