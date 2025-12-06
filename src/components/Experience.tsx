import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Back End Developer Intern",
    company: "TerraBiz",
    location: "Remote",
    period: "Feb 2025 – Aug 2025",
    description: [
      "Developed scalable RESTful APIs using Node.js and Express.js for web applications",
      "Designed and optimized MongoDB database schemas, enhancing data security",
      "Collaborated with cross-functional teams to integrate backend logic, improving system efficiency",
    ],
  },
  {
    title: "Tech Coordinator",
    company: "CodeSoc - DSA Club, IIIT Raichur",
    location: "IIIT Raichur",
    period: "2023 – 2025",
    description: [
      "Mentored 150+ students in Data Structures, Algorithms, and Competitive Programming",
      "Organized Code Conflux Hackathon, showcasing innovative student projects",
      "Conducted the InterIIIT hackathon round-1 UDBHAV organized by IIIT Sricity",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
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
                
                <div className="glass-card glow-border p-6 md:p-8 group hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-secondary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
