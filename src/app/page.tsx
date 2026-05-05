import Hero from "@/components/home/Hero";
import ProfileCards from "@/components/home/ProfileCards";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import ToolsPreview from "@/components/home/ToolsPreview";
import CtaStrip from "@/components/home/CtaStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfileCards />
      <TestimonialsSlider />
      <ToolsPreview />
      <CtaStrip />
    </>
  );
}
