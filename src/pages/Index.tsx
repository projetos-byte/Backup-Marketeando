import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import AndreaSection from "@/components/sections/AndreaSection";
import AboutSection from "@/components/sections/AboutSection";
import MVVSection from "@/components/sections/MVVSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CasesSection from "@/components/sections/CasesSection";
import MaterialsSection from "@/components/sections/MaterialsSection";
import NewsSection from "@/components/sections/NewsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IntroSection />
      <AndreaSection />
      <AboutSection />
      <MVVSection />
      <PartnersSection />
      <CasesSection />
      <MaterialsSection />
      <NewsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;