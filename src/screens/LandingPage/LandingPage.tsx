import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PartnersSection } from "./sections/PartnersSection/PartnersSection";
import { StatisticsSection } from "./sections/StatisticsSection/StatisticsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { UniqueSellingPointsSection } from "./sections/UniqueSellingPointsSection/UniqueSellingPointsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-col w-full min-h-screen">
      <CallToActionSection />
      <TestimonialsSection />
      <AboutUsSection />
      <HeroSection />
      <FooterSection />
      <StatisticsSection />
      <UniqueSellingPointsSection />
      <PartnersSection />
    </main>
  );
};
