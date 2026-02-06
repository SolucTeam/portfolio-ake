import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, Code2, Shield, Database, Container, GitBranch, Box } from "lucide-react";

type Language = "fr" | "en";

const skills = [
  { name: "Kubernetes", icon: Container, category: "Platform" },
  { name: "Terraform", icon: Code2, category: "IaC" },
  { name: "Docker", icon: Container, category: "Containers" },
  { name: "Azure", icon: Cloud, category: "Cloud" },
  { name: "Outscale", icon: Cloud, category: "Cloud" },
  { name: "Linux", icon: Server, category: "Systems" },
  { name: "Ansible", icon: Code2, category: "Automation" },
  { name: "CI/CD", icon: Shield, category: "DevOps" },
  { name: "VMware", icon: Server, category: "Virtualization" },
  { name: "HAProxy", icon: Database, category: "Load Balancing" },
  { name: "cdk8s", icon: Code2, category: "K8s IaC" },
  { name: "FluxCD", icon: GitBranch, category: "GitOps" },
  { name: "OMI Builder", icon: Box, category: "Image Building" },
];

const content = {
  fr: {
    title: "À propos",
    bio1: "Ingénieur SRE/Platform avec plus de",
    experience: "5 ans d'expérience",
    bio1End: "dans la conception et la maintenance de plateformes cloud-native. Passionné par l'automatisation et l'approche \"Infrastructure as Code\".",
    bio2: "Actuellement chez",
    company: "NumSpot",
    bio2End: ", je construis des infrastructures de production résilientes, des pipelines CI/CD robustes et des systèmes d'observabilité pour les services cloud souverains.",
    objectives: "// Objectifs",
    objectivesText: "Viser le modèle",
    noOps: "No Ops",
    objectivesEnd: "tout en assurant la MCO/MCS et l'évolution continue des plateformes.",
    skillsCmd: "list --skills",
  },
  en: {
    title: "About",
    bio1: "SRE/Platform Engineer with over",
    experience: "5 years of experience",
    bio1End: "in designing and maintaining cloud-native platforms. Passionate about automation and the \"Infrastructure as Code\" approach.",
    bio2: "Currently at",
    company: "NumSpot",
    bio2End: ", I build resilient production infrastructures, robust CI/CD pipelines, and observability systems for sovereign cloud services.",
    objectives: "// Goals",
    objectivesText: "Aiming for the",
    noOps: "No Ops",
    objectivesEnd: "model while ensuring operational maintenance and continuous platform evolution.",
    skillsCmd: "list --skills",
  },
};

interface AboutSectionProps {
  language: Language;
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = content[language];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-mono text-primary">01.</span> {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.bio1} <span className="text-primary font-semibold">{t.experience}</span> {t.bio1End}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.bio2} <span className="text-accent font-semibold">{t.company}</span>{t.bio2End}
            </p>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-mono text-primary mb-3 text-sm">{t.objectives}</h3>
              <p className="text-muted-foreground">
                {t.objectivesText} <span className="terminal-text">{t.noOps}</span> {t.objectivesEnd}
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-mono text-sm text-muted-foreground mb-6 flex items-center gap-2">
              <span className="text-primary">$</span> {t.skillsCmd}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="glass-card p-3 sm:p-4 rounded-lg hover-lift group cursor-default"
                >
                  <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-xs sm:text-sm text-foreground">{skill.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{skill.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
