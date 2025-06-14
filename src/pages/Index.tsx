import MainLayout from "@/components/Layout/MainLayout";
import HeroSection from "@/components/UI/HeroSection";
import ServicesSection from "@/components/UI/ServicesSection";
import HowItWorksSection from "@/components/UI/HowItWorksSection";
// import TestimonialsSection from "@/components/UI/TestimonialsSection";
import CTASection from "@/components/UI/CTASection";

const Index = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-0">
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
      </div>
    </MainLayout>
  );
};

export default Index;
