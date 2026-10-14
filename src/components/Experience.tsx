import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Github } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  link?: { label: string; href: string };
  description: string[];
};

// Kept word-for-word in sync with the resume (src/assets/Resume.pdf).
const experiences: ExperienceItem[] = [
  {
    title: "Mechanistic Interpretability Research Intern",
    company: "Moleculyst",
    location: "Remote",
    period: "Jul 2026 – Present",
    link: { label: "Reproduction code and results", href: "https://github.com/Amrita0205/MULTIHALUDET" },
    description: [
      "Reproduced MultiHaluDet (ACL 2026 workshop), which detects LLM hallucinations by probing a frozen model's hidden states: matched its HaluEval result on Mistral-7B (AUROC 0.985 vs. 0.984 reported), then extended it to Qwen2.5-7B, Phi-3.5-mini and Yi-1.5-9B. All four scored 0.985–0.989; the 3.8B Phi-3.5 matched the 7–9B models at half the GPU memory.",
      "Found a validation bug in the released code: a cross-validation seed collision inverted the meta-learner's predictions (AUROC 0.015); decorrelating the folds restored out-of-fold AUROC from 0.41 to 0.98. Added failure accounting and feature health checks so an incompatible model fails loudly instead of producing plausible-looking scores.",
      "Probe residual-stream activations of frozen Gemma models with linear and difference-in-means probes, using PyTorch, TransformerLens, SAELens and Gemma Scope.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company: "TerraBiz",
    location: "Remote",
    period: "Feb 2025 – Aug 2025",
    description: [
      "Built and deployed production REST APIs in Node.js and Express.js.",
      "Reduced query latency by restructuring MongoDB schemas and adding targeted indexes.",
    ],
  },
];

const achievements = [
  {
    title: "Summer of Bitcoin 2026",
    href: "https://www.summerofbitcoin.org/",
    text: "Selected for the Summer of Bitcoin 2026 developer challenge round, a global open-source program; built a Bitcoin transaction analyser and a BIP-174 PSBT builder.",
  },
  {
    title: "Tech Coordinator, CodeSoc, IIIT Raichur (2024–2025)",
    text: "Mentored 150+ students in data structures and algorithms; organised the Code Conflux hackathon and the InterIIIT UDBHAV round.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">02.</span> Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 hidden md:block" />
                
                <div className="glass-card glow-border p-4 sm:p-6 md:p-8 group hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-between gap-2 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-secondary font-medium text-sm sm:text-base hover:underline">
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-secondary font-medium text-sm sm:text-base">{exp.company}</p>
                      )}
                    </div>
                    <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.link && (
                    <a
                      href={exp.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-muted/50 hover:bg-primary/20 border border-primary/30 hover:border-primary rounded-lg text-xs sm:text-sm text-foreground hover:text-primary transition-all duration-300"
                    >
                      <Github size={14} />
                      {exp.link.label}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:pl-20"
        >
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            Achievements and Leadership
          </h3>
          <ul className="space-y-3">
            {achievements.map((item) => (
              <li key={item.title} className="glass-card p-4 sm:p-5 text-sm sm:text-base text-muted-foreground">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:underline">
                    {item.title}
                  </a>
                ) : (
                  <span className="text-secondary font-medium">{item.title}</span>
                )}
                <span className="block mt-1">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
