import { motion } from "framer-motion";

type Language = "fr" | "en";

const content = {
  fr: {
    tagline: "Conçu avec passion",
    rights: "Tous droits réservés.",
  },
  en: {
    tagline: "Built with passion",
    rights: "All rights reserved.",
  },
};

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  const t = content[language];

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p className="font-mono">
            <span className="text-primary">&lt;</span>
            {t.tagline}
            <span className="text-primary"> /&gt;</span>
          </p>
          <p>© {new Date().getFullYear()} Aziz Kone. {t.rights}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;