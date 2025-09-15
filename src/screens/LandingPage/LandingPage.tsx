import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PartnersSection } from "./sections/PartnersSection/PartnersSection";
import { StatisticsSection } from "./sections/StatisticsSection/StatisticsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { UniqueSellingPointsSection } from "./sections/UniqueSellingPointsSection/UniqueSellingPointsSection";
import { FloatingParticles, GradientOrb, ScrollParticles, InteractiveParticles } from "../../components/SpecialEffects";
import { InteractiveCursor } from "../../components/CursorEffects";

export const LandingPage = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-col w-full min-h-screen relative overflow-hidden">
      {/* Interactive Cursor */}
      <InteractiveCursor />

      {/* Special Effects */}
      <FloatingParticles />
      <ScrollParticles />
      <InteractiveParticles />
      <GradientOrb className="w-96 h-96 -top-48 -left-48" />
      <GradientOrb className="w-80 h-80 top-1/2 -right-40" />
      <GradientOrb className="w-64 h-64 bottom-0 left-1/3" />

      {/* Content Sections */}
      <div className="relative z-10">
        <CallToActionSection />
        <TestimonialsSection />
        <AboutUsSection />
        <HeroSection />
        <FooterSection />
        <StatisticsSection />
        <UniqueSellingPointsSection />
        <PartnersSection />
      </div>
    </main>
  );
};
