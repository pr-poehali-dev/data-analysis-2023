import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { RoomsSection } from "@/components/RoomsSection";
import { DesignsSection } from "@/components/DesignsSection";
import { StatsSection } from "@/components/StatsSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <RoomsSection />
      <DesignsSection />
      <StatsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}