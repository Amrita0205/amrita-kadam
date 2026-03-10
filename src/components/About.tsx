import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Code2, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, value: "500+", label: "DSA Problems Solved" },
    { icon: Award, value: "Top 1.3%", label: "AlgoUniversity Hackathon" },
    { icon: GraduationCap, value: "8.51", label: "CGPA" },
    { icon: Users, value: "150+", label: "Students Mentored" },
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
              I'm a passionate Computer Science student at{" "}
              <span className="text-primary font-medium">IIIT Raichur</span>,
              driven by the intersection of AI and software development. My
              journey in tech started with curiosity and has evolved into
              building real-world applications.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Currently diving deeper into Machine Learning, having completed my
              role as a
              <span className="text-secondary font-medium">
                {" "}
                Backend Developer Intern at TerraBiz
              </span>
              , where I built scalable APIs, improved data workflows, and
              contributed to core backend architecture. I work extensively with
              <span className="text-primary font-medium">
                {" "}
                Agentic AI systems
              </span>
              , full-stack development, and also enjoy competitive programming.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              As the{" "}
              <span className="text-secondary font-medium">
                Tech Coordinator of CodeSoc
              </span>
              , I've mentored 150+ students and organized hackathons that bring
              together innovative minds.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Currently a{" "}
              <span className="text-primary font-medium">
                Summer of Bitcoin Bootcamp participant
              </span>
              , where I'm diving deep into Bitcoin protocol engineering — building
              transaction analyzers, PSBT constructors, and block parsers from
              scratch in Python.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-3">
                Relevant Coursework:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Agentic AI",
                  "Machine Learning",
                  "Bitcoin Protocol",
                  "Computer Networks",
                  "DSA",
                  "Bioinformatics",
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
