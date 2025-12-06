import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Youtube } from "lucide-react";
import thumbnailCareerAdvisor from "@/assets/thumbnail-career-advisor.png";
import thumbnailNss from "@/assets/thumbnail-nss.png";

const projects = [
  {
    title: "Agentic AI Career Advisor",
    description:
      "Multi-agent AI system for personalized career guidance using LangGraph and Groq LLMs, enabling real-time job analysis and candidate feedback. Selected by IIIT Dharwad faculty for collaboration with a perfect 10/10 score.",
    tech: ["Python", "LangChain", "LangGraph", "Groq", "ChromaDB", "PostgreSQL"],
    github: "https://github.com/anandn1/career-advisor",
    demo: "https://youtu.be/56Xtd1PNetw",
    thumbnail: thumbnailCareerAdvisor,
    highlights: [
      "Autonomous agents for job-market analysis, resume optimization, skill-gap detection",
      "Vector-based retrieval using ChromaDB and Gemma 300M embeddings",
      "Demonstrated all major Agentic capabilities",
    ],
    featured: true,
  },
  {
    title: "College NSS Website",
    description:
      "Full-stack web application to manage student participation hours for NSS events. Features an admin portal for hour allocation and Google authentication integration.",
    tech: ["Next.js", "MongoDB", "Google OAuth"],
    demo: "https://youtu.be/GUeC_hvlNzo",
    thumbnail: thumbnailNss,
    highlights: [
      "Hour tracking system based on event participation",
      "Admin-only portal for hour allocation",
      "Secure authentication with Google Client",
    ],
    featured: true,
  },
  {
    title: "ISS Real-Time Tracker",
    description:
      "Real-time International Space Station tracker built during the ISS Coding Hackathon. Placed in Top 50 among 1,500+ participants.",
    tech: ["Node.js", "Leaflet.js", "MongoDB", "Socket.io"],
    highlights: [
      "Live ISS position tracking on interactive map",
      "Real-time data updates using WebSockets",
    ],
    featured: false,
  },
  {
    title: "Code Conflux Hackathon Website",
    description:
      "Official website for the Code Conflux Hackathon organized by CodeSoc at IIIT Raichur, showcasing innovative student projects.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    live: "https://code-conflux-szk5-amrita0205s-projects.vercel.app/",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">03.</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                {/* Project Image/Preview with Thumbnail */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="glass-card glow-border aspect-video overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                          <span className="text-4xl font-bold gradient-text">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`lg:col-span-6 ${
                    index % 2 === 1
                      ? "lg:order-1 lg:col-start-1"
                      : "lg:col-start-6"
                  } lg:row-start-1`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="glass-card p-6 mb-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    {project.highlights && (
                      <ul className="mt-4 space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced Links Section */}
                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-primary/20 border border-primary/30 hover:border-primary rounded-lg text-foreground hover:text-primary transition-all duration-300 group"
                      >
                        <Github size={18} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500 rounded-lg text-foreground hover:text-red-400 transition-all duration-300 group"
                      >
                        <Youtube size={18} className="text-red-500 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Demo Video</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 hover:border-secondary rounded-lg text-foreground hover:text-secondary transition-all duration-300 group"
                      >
                        <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Live Site</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-center mb-8 text-muted-foreground">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="glass-card glow-border p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-lg">📁</span>
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 rounded bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                        >
                          <Github size={16} />
                          <span className="text-xs">Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 rounded bg-muted/50 hover:bg-secondary/20 text-muted-foreground hover:text-secondary transition-all"
                        >
                          <ExternalLink size={16} />
                          <span className="text-xs">Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
