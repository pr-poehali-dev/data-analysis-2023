import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { RoomsSection } from "@/components/RoomsSection";
import { DesignsSection } from "@/components/DesignsSection";
import { PremiumBanner } from "@/components/PremiumBanner";
import { StatsSection } from "@/components/StatsSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LiveStatsWidget } from "@/components/LiveStatsWidget";
import { QuickStartDemo } from "@/components/QuickStartDemo";

export default function Index() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <RoomsSection />
      <PremiumBanner />
      <DesignsSection />
      <StatsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <LiveStatsWidget />
      <QuickStartDemo />
    </>
  );
}