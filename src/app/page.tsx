import Hero from "@/components/home/Hero";
import ProfileCards from "@/components/home/ProfileCards";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import VMACalculator from "@/components/tools/VMACalculator";
import EnterpriseTeaser from "@/components/home/EnterpriseTeaser";
import CtaStrip from "@/components/home/CtaStrip";
import QuotesSlider from "@/components/shared/QuotesSlider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfileCards />
      <EnterpriseTeaser />
      <TestimonialsSlider />
      <QuotesSlider />
      <VMACalculator />
      <CtaStrip />
    </>
  );
}
