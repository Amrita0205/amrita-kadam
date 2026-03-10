import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    color: "primary",
  },
  {
    title: "Technologies",
    skills: ["Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Socket.io", "REST APIs"],
    color: "secondary",
  },
  {
    title: "AI/ML",
    skills: ["Machine Learning", "YOLOv8", "OCR", "OpenCV", "Scikit-learn", "NumPy", "Pandas"],
    color: "primary",
  },
  {
    title: "Agentic Systems",
    skills: ["LangChain", "LangGraph", "Multi-Agent Systems", "Groq LLMs", "ChromaDB", "Vector Search", "RAG Pipelines"],
    color: "secondary",
  },
  {
    title: "Bitcoin Protocol",
    skills: ["Bitcoin Protocol", "BIP-141 SegWit", "BIP-174 PSBT", "Script Parsing", "Block Parsing", "Coin Selection", "RBF / Locktime"],
    color: "primary",
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
    color: "secondary",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

        {/* Competitive Programming Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-muted-foreground">
            Competitive Programming
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {[
              { platform: "LeetCode", problems: "500+", link: "https://leetcode.com/u/Amrita0205/", color: "text-amber-500" },
              { platform: "Codeforces", problems: "200+", link: "https://codeforces.com/profile/Amrita_0205", color: "text-blue-500" },
              { platform: "GeeksforGeeks", problems: "200+", link: "#", color: "text-green-500" },
            ].map((item, index) => (
              <motion.a
                key={item.platform}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card glow-border px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 group"
              >
                <span className={`text-xl sm:text-2xl font-bold ${item.color}`}>{item.problems}</span>
                <div>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {item.platform}
                  </span>
                  <p className="text-xs text-muted-foreground">problems solved</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
