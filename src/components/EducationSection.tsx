import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Building } from "lucide-react";

const education = [
  {
    degree: "Master II – Ingénierie Réseaux et Systèmes",
    school: "Université Paris Saclay",
    location: "Sceaux 92",
    year: "2022",
    partnership: "En partenariat avec AFTI-Numérique School",
  },
  {
    degree: "Master I – Administrateur Systèmes, Réseaux et Sécurité",
    school: "AFTI-Numérique (Groupe AFORP)",
    location: "Issy-les-Moulineaux 92",
    year: "2021",
  },
  {
    degree: "Bachelor II – Intégrateur Concepteur Systèmes, Réseaux et Sécurité",
    school: "AFTI-Numérique (Groupe AFORP)",
    location: "Issy-les-Moulineaux 92",
    year: "2020",
  },
  {
    degree: "Bachelor I – Informatique",
    school: "YNOV-CAMPUS Paris",
    location: "Nanterre 92",
    year: "2019",
  },
];

const certifications = [
  { name: "Azure Administrator", icon: "☁️" },
  { name: "VMware", icon: "🖥️" },
  { name: "HAProxy", icon: "⚖️" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-mono text-primary">03.</span> Formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 rounded-xl hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-bold text-foreground">{edu.degree}</h3>
                      <span className="font-mono text-primary text-sm shrink-0">{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Building className="w-4 h-4" />
                      <span>{edu.school}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                    {edu.partnership && (
                      <p className="text-xs text-accent mt-2 font-mono">{edu.partnership}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <span className="text-xl">{cert.icon}</span>
                    <span className="font-mono text-sm text-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="font-bold text-foreground mb-6">Langues</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Français</span>
                    <span className="font-mono text-xs text-primary">Natif</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Anglais</span>
                    <span className="font-mono text-xs text-primary">Professionnel</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
