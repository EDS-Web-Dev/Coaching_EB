import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProfileCards from "@/components/home/ProfileCards";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import VMACalculator from "@/components/tools/VMACalculator";
import CtaStrip from "@/components/home/CtaStrip";
import QuotesSlider from "@/components/shared/QuotesSlider";

export const metadata: Metadata = {
  title: "KTL Running Coach — Coach Trail & Running au Maroc",
  description: "Coach Trail & Running personnalisé au Maroc. Que tu veuilles débuter la course à pied, ou préparer ton marathon, semi-marathon ou ton premier trail avec un suivi individuel, des plans adaptés et un coach passionné.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "KTL Running Coach — Coach Trail & Running au Maroc",
    description: "Que tu veuilles débuter la course à pied, ou préparer ton marathon, semi-marathon ou ton premier trail avec un suivi individuel et des plans adaptés.",
    url: "https://ktl-running.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfileCards />
      <TestimonialsSlider />
      <QuotesSlider />
      <VMACalculator />
      <CtaStrip />
    </>
  );
}
