import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, Crosshair, Gauge, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Microscope, value: "0.985–0.989", label: "Hallucination-detection AUROC across 4 LLMs" },
    { icon: Crosshair, value: "0.29 → 0.89", label: "Highlight IoU after fixing a silent failure" },
    { icon: Gauge, value: "176s → 2.2s", label: "Page extraction latency, Veda AI" },
    { icon: Users, value: "150+", label: "Students mentored, CodeSoc" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              I'm a final-year Computer Science student at{" "}
              <span className="text-primary font-medium">IIIT Raichur</span>{" "}
              (graduating August 2027) and a{" "}
              <span className="text-secondary font-medium">
                mechanistic interpretability research intern at Moleculyst
              </span>
              , where I reproduce published LLM hallucination-detection methods
              and test whether they hold up on other open models.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Before that I spent six months as a{" "}
              <span className="text-secondary font-medium">
                Backend Developer Intern at TerraBiz
              </span>
              , building production REST APIs in Node.js and Express. My
              projects ship with evaluation harnesses, and two of my favourite
              fixes were{" "}
              <span className="text-primary font-medium">silent failures</span>:
              a fallback that produced plausible-looking highlights in Veda AI,
              and a seed collision that inverted a published model's
              predictions.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              As{" "}
              <span className="text-secondary font-medium">
                Tech Coordinator of CodeSoc
              </span>{" "}
              (2024–2025), I mentored 150+ students in data structures and
              algorithms and organised the Code Conflux hackathon.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-3">
                Relevant Coursework:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Probability and Statistics",
                  "Linear Algebra",
                  "Calculus",
                  "Discrete Mathematics",
                  "Foundations of Machine Learning",
                  "Deep Learning",
                  "Natural Language Processing",
                  "Agentic AI",
                  "Data Structures and Algorithms",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full border border-border"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass-card glow-border p-4 sm:p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
