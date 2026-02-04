import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { DifferentialsSection } from "@/components/landing/DifferentialsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { WhatYouGetSection } from "@/components/landing/WhatYouGetSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { ForWhoSection } from "@/components/landing/ForWhoSection";
import { CTASection } from "@/components/landing/CTASection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { UrgencyBanner } from "@/components/landing/UrgencyBanner";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden pt-10">
      <UrgencyBanner />
      <HeroSection />
      <ProblemSection />
      <DifferentialsSection />
      <BenefitsSection />
      <WhatYouGetSection />
      <BonusSection />
      <ForWhoSection />
      <CTASection variant="intermediate" />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
