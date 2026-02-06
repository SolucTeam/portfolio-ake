import { motion } from "framer-motion";

const Footer = () => {
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
            Conçu avec passion
            <span className="text-primary"> /&gt;</span>
          </p>
          <p>© {new Date().getFullYear()} Aziz Kone. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
