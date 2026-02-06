import { motion } from "framer-motion";
import { Terminal, ChevronDown, Globe } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

type Language = "fr" | "en";

const content = {
  fr: {
    whoami: "whoami",
    role: "SRE / Platform Engineer",
    description: "Construction de plateformes résilientes, automatisation de l'infrastructure et excellence opérationnelle dans les environnements cloud-native.",
    cta1: "Voir mes expériences",
    cta2: "Me contacter",
    scroll: "défiler",
  },
  en: {
    whoami: "whoami",
    role: "SRE / Platform Engineer",
    description: "Building resilient platforms, automating infrastructure, and ensuring operational excellence in cloud-native environments.",
    cta1: "View my experience",
    cta2: "Contact me",
    scroll: "scroll",
  },
};

interface HeroSectionProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const HeroSection = ({ language, onLanguageChange }: HeroSectionProps) => {
  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Animated Particles */}
      <ParticlesBackground />
      
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow z-[1]" style={{ animationDelay: '2s' }} />
      
      {/* Language Toggle */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={() => onLanguageChange(language === "fr" ? "en" : "fr")}
        className="fixed top-20 right-4 md:top-6 md:right-6 z-50 glass-card px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform"
      >
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
        <span className="font-mono text-xs sm:text-sm font-semibold">
          {language === "fr" ? "EN" : "FR"}
        </span>
      </motion.button>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Terminal badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> {t.whoami}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            <span className="text-foreground">Aziz </span>
            <span className="text-gradient glow-text">Kone</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-medium text-muted-foreground">
              <span className="text-primary">&lt;</span>
              {t.role}
              <span className="text-primary"> /&gt;</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
          >
            {t.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
          >
            <a
              href="#experience"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-box hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              {t.cta1}
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 glass-card font-semibold rounded-lg hover-lift border border-primary/30 hover:border-primary/60 text-sm sm:text-base"
            >
              {t.cta2}
            </a>
          </motion.div>

          {/* Scroll indicator - now inside the content flow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1.5 text-primary cursor-pointer"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest">{t.scroll}</span>
              <div className="relative">
                <ChevronDown className="w-5 h-5" />
                <div className="absolute inset-0 animate-ping">
                  <ChevronDown className="w-5 h-5 opacity-30" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
