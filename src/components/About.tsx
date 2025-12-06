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
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate Computer Science student at{" "}
              <span className="text-primary font-medium">IIIT Raichur</span>, driven by the 
              intersection of AI and software development. My journey in tech started with 
              curiosity and has evolved into building real-world applications.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently working as a <span className="text-secondary font-medium">Backend Developer Intern at TerraBiz</span>, 
              where I develop scalable APIs and optimize database architectures. I specialize in 
              <span className="text-primary"> Agentic AI systems</span>, full-stack development, and competitive programming.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              As the <span className="text-secondary font-medium">Tech Coordinator of CodeSoc</span>, 
              I've mentored 150+ students and organized hackathons that bring together innovative minds.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-3">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {["Agentic AI", "Machine Learning", "Computer Networks", "DSA", "Bioinformatics"].map((course) => (
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
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass-card glow-border p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
