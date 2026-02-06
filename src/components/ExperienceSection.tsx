import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

type Language = "fr" | "en";

const experiencesFr = [
  {
    title: "Site Reliability Engineer (Platform Engineer)",
    company: "NumSpot",
    location: "France",
    period: "Août 2023 - Présent",
    description: [
      "Conception et déploiement de plateformes de production et non-production",
      "Mise en place d'infrastructures CI/CD et systèmes d'observabilité",
      "Maintien en conditions opérationnelles (MCO/MCS) selon les principes d'immutabilité",
      "Contribution à l'amélioration continue vers un modèle No Ops",
    ],
    technologies: ["Kubernetes", "Terraform", "GitOps", "Prometheus", "Grafana", "cdk8s", "FluxCD"],
  },
  {
    title: "Ingénieur Système Linux | DevOps (Alternance)",
    company: "Cloud-Temple",
    location: "France",
    period: "Sept 2019 - Mai 2023",
    description: [
      "Supervision et maintien en condition opérationnelle des SI clients",
      "Traitement des incidents et demandes selon les SLAs définis",
      "Veille technologique et amélioration continue des systèmes d'information",
      "Gestion de projets d'automatisation et déploiement de clusters Kubernetes",
    ],
    technologies: ["Terraform", "Ansible", "Docker", "Linux", "VMware"],
  },
  {
    title: "Assistant Responsable d'Exploitation (Stage)",
    company: "Cloud-Temple",
    location: "France",
    period: "Juil 2019 - Sept 2019",
    description: [
      "Supervision et maintien en condition opérationnelle",
      "Traitement des incidents selon les SLAs",
      "Implémentation et monitoring des sauvegardes",
    ],
    technologies: ["Linux", "Monitoring", "Backup Solutions"],
  },
];

const experiencesEn = [
  {
    title: "Site Reliability Engineer (Platform Engineer)",
    company: "NumSpot",
    location: "France",
    period: "Aug 2023 - Present",
    description: [
      "Design and deployment of production and non-production platforms",
      "Implementation of CI/CD infrastructure and observability systems",
      "Operational maintenance (MCO/MCS) following immutability principles",
      "Contributing to continuous improvement towards a No Ops model",
    ],
    technologies: ["Kubernetes", "Terraform", "GitOps", "Prometheus", "Grafana", "cdk8s", "FluxCD"],
  },
  {
    title: "Linux System Engineer | DevOps (Apprenticeship)",
    company: "Cloud-Temple",
    location: "France",
    period: "Sep 2019 - May 2023",
    description: [
      "Supervision and operational maintenance of client IT systems",
      "Incident and request handling according to defined SLAs",
      "Technology watch and continuous improvement of information systems",
      "Automation project management and Kubernetes cluster deployment",
    ],
    technologies: ["Terraform", "Ansible", "Docker", "Linux", "VMware"],
  },
  {
    title: "Operations Manager Assistant (Internship)",
    company: "Cloud-Temple",
    location: "France",
    period: "Jul 2019 - Sep 2019",
    description: [
      "Supervision and operational maintenance",
      "Incident handling according to SLAs",
      "Backup implementation and monitoring",
    ],
    technologies: ["Linux", "Monitoring", "Backup Solutions"],
  },
];

const content = {
  fr: {
    title: "Expériences",
    experiences: experiencesFr,
  },
  en: {
    title: "Experience",
    experiences: experiencesEn,
  },
};

interface ExperienceSectionProps {
  language: Language;
}

const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = content[language];

  return (
    <section id="experience" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-mono text-primary">02.</span> {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-12">
            {t.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-box" />
                
                <div className="glass-card p-6 md:p-8 rounded-xl hover-lift">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2 font-mono">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;