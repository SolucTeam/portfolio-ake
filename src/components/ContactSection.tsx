import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

type Language = "fr" | "en";

const content = {
  fr: {
    title: "Contact",
    subtitle: "Intéressé par une collaboration ou une opportunité ? N'hésitez pas à me contacter.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    ctaTitle: "Parlons de votre projet",
    ctaText: "Je suis ouvert aux opportunités de collaboration et aux projets innovants.",
    ctaButton: "Envoyer un message",
  },
  en: {
    title: "Contact",
    subtitle: "Interested in a collaboration or an opportunity? Feel free to reach out.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    ctaTitle: "Let's talk about your project",
    ctaText: "I'm open to collaboration opportunities and innovative projects.",
    ctaButton: "Send a message",
  },
};

interface ContactSectionProps {
  language: Language;
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = content[language];

  return (
    <section id="contact" className="section-padding relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-mono text-primary">04.</span> {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <a
                href="mailto:k.aziz.k@live.fr"
                className="glass-card p-5 rounded-xl flex items-center gap-4 hover-lift group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">{t.email}</p>
                  <p className="text-foreground font-medium">k.aziz.k@live.fr</p>
                </div>
              </a>

              <a
                href="tel:+33752416491"
                className="glass-card p-5 rounded-xl flex items-center gap-4 hover-lift group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">{t.phone}</p>
                  <p className="text-foreground font-medium">+33 7 52 41 64 91</p>
                </div>
              </a>

              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">{t.location}</p>
                  <p className="text-foreground font-medium">Noisy-le-Grand, France</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 rounded-xl text-center flex flex-col justify-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center glow-box">
                <Send className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t.ctaTitle}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.ctaText}
              </p>
              <a
                href="mailto:k.aziz.k@live.fr?subject=Opportunité%20de%20collaboration"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-box hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                {t.ctaButton}
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-4 mt-12"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card rounded-full hover-lift group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card rounded-full hover-lift group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;