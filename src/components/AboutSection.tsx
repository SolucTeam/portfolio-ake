import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, Code2, Shield, Database, Container } from "lucide-react";

const skills = [
  { name: "Kubernetes", icon: Container, category: "Platform" },
  { name: "Terraform", icon: Code2, category: "IaC" },
  { name: "Docker", icon: Container, category: "Containers" },
  { name: "Azure", icon: Cloud, category: "Cloud" },
  { name: "Linux", icon: Server, category: "Systems" },
  { name: "Ansible", icon: Code2, category: "Automation" },
  { name: "CI/CD", icon: Shield, category: "DevOps" },
  { name: "VMware", icon: Server, category: "Virtualization" },
  { name: "HAProxy", icon: Database, category: "Load Balancing" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <span className="font-mono text-primary">01.</span> À propos
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
              Ingénieur SRE/Platform avec plus de <span className="text-primary font-semibold">5 ans d'expérience</span> dans 
              la conception et la maintenance de plateformes cloud-native. Passionné par l'automatisation 
              et l'approche "Infrastructure as Code".
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actuellement chez <span className="text-accent font-semibold">NumSpot</span>, je construis des 
              infrastructures de production résilientes, des pipelines CI/CD robustes et des systèmes 
              d'observabilité pour les services cloud souverains.
            </p>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-mono text-primary mb-3 text-sm">// Objectifs</h3>
              <p className="text-muted-foreground">
                Viser le modèle <span className="terminal-text">No Ops</span> tout en assurant la MCO/MCS 
                et l'évolution continue des plateformes.
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
              <span className="text-primary">$</span> list --skills
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 rounded-lg hover-lift group cursor-default"
                >
                  <skill.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-sm text-foreground">{skill.name}</p>
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
