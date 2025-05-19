
import MainLayout from "@/components/Layout/MainLayout";
import HeroSection from "@/components/UI/HeroSection";
import ServicesSection from "@/components/UI/ServicesSection";
import HowItWorksSection from "@/components/UI/HowItWorksSection";
import TestimonialsSection from "@/components/UI/TestimonialsSection";
import CTASection from "@/components/UI/CTASection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
