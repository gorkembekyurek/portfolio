import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
