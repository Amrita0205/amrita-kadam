import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Kept in sync with the "Technical Skills" section of the resume.
const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "C++"],
    color: "primary",
  },
  {
    title: "ML and Deep Learning",
    skills: ["PyTorch", "Hugging Face Transformers", "NLP", "scikit-learn", "NumPy", "pandas"],
    color: "secondary",
  },
  {
    title: "Evaluation and Probing",
    skills: ["Hallucination detection", "Hidden-state probing", "Cross-validation", "AUROC / F1 / IoU evaluation", "pytest"],
    color: "primary",
  },
  {
    title: "LLMs and Agents",
    skills: ["LangGraph", "LangChain", "CrewAI", "RAG", "ChromaDB", "Vector search", "Gemini vision", "Groq"],
    color: "secondary",
  },
  {
    title: "Engineering and Tools",
    skills: ["FastAPI", "Django", "REST APIs", "PostgreSQL", "MongoDB", "Git", "GitHub Actions (CI/CD)"],
    color: "primary",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">04.</span> Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card glow-border p-4 sm:p-6"
            >
              <h3 className={`text-lg font-bold mb-4 ${category.color === "primary" ? "text-primary" : "text-secondary"}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-300 cursor-default ${
                      category.color === "primary"
                        ? "border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50"
                        : "border-secondary/30 bg-secondary/5 text-secondary hover:bg-secondary/10 hover:border-secondary/50"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
