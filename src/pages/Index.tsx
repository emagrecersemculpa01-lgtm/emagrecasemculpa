import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { DifferentialsSection } from "@/components/landing/DifferentialsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { WhatYouGetSection } from "@/components/landing/WhatYouGetSection";
import { ForWhoSection } from "@/components/landing/ForWhoSection";
import { CTASection } from "@/components/landing/CTASection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <DifferentialsSection />
      <BenefitsSection />
      <WhatYouGetSection />
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
