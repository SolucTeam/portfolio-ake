import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

type Language = "fr" | "en";

const Index = () => {
  const [language, setLanguage] = useState<Language>("fr");

  return (
    <div className="min-h-screen bg-background">
      <Navbar language={language} />
      <main>
        <HeroSection language={language} onLanguageChange={setLanguage} />
        <AboutSection language={language} />
        <ExperienceSection language={language} />
        <EducationSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;