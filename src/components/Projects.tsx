import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Youtube } from "lucide-react";
import thumbnailCareerAdvisor from "@/assets/thumbnail-career-advisor.png";
import thumbnailBlogAgent from "@/assets/thumbnail-blog-agent.png";
import thumbnailVeda from "@/assets/thumbnail-veda.jpg";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  live?: string;
  thumbnail?: string;
  highlights?: string[];
  featured: boolean;
};

// Featured projects are kept word-for-word in sync with the resume
// (src/assets/Resume.pdf). Other projects carry no claims beyond what the
// repo shows.
const projects: Project[] = [
  {
    title: "Veda AI — Assessment Extraction and Answer Mapping",
    description:
      "A deployed vision-LLM pipeline that reads a printed question paper and a handwritten answer sheet, maps every answer to its question, highlights its ink and grades it.",
    tech: ["Python", "FastAPI", "Gemini", "Next.js", "pytest"],
    github: "https://github.com/Amrita0205/Extraction-and-Answer-Mapping-Veda-AI",
    live: "https://extraction-and-answer-mapping-veda-nine.vercel.app",
    thumbnail: thumbnailVeda,
    highlights: [
      "Shipped a deployed vision-LLM pipeline (FastAPI, Gemini vision, Next.js) that reads a printed question paper and a handwritten answer sheet, then extracts the questions, maps each answer to its question, highlights its exact ink region and grades it.",
      "Designed a five-stage mapping ladder (written label, embedded label, IDF-weighted overlap, model adjudication, sequence) so assignment is order-independent: out-of-sequence answers, split sub-parts and page-spanning answers all resolve.",
      "Debugged a silent failure: a strict length check rejected valid bounding boxes and fell back to plausible-looking whole-page highlights instead of erroring. Snapping boxes to ink took overlap from IoU 0.29 to 0.89 and whole-page fallbacks to 0 of 52 regions; cut page extraction latency from 176s to 2.2s.",
      "Built a synthetic ground-truth harness (pytest) and a 14-subject evaluation sweep: F1 1.00 extraction on the synthetic sheet, 90% mean extraction coverage across subjects, and 16 of 17 answers correctly mapped on an independently labelled sheet whose 35/40 grade the pipeline matched exactly.",
    ],
    featured: true,
  },
  {
    title: "Agentic AI Career Advisor",
    description:
      "Team project (four people): a multi-agent career advisor built on LangGraph.",
    tech: ["Python", "LangGraph", "LangChain", "ChromaDB", "PostgreSQL", "Groq"],
    github: "https://github.com/anandn1/career-advisor",
    demo: "https://youtu.be/56Xtd1PNetw",
    thumbnail: thumbnailCareerAdvisor,
    highlights: [
      "Team of four. Wrote the supervisor that orchestrates the LangGraph agents (job-market analysis, skill-gap detection, resume strategy, mock interviews, learning-path planning) over a shared session state, taking the system to a working end-to-end pipeline.",
      "Advice is grounded with RAG over ChromaDB (embeddinggemma-300m); selected by IIIT Dharwad faculty for research collaboration.",
    ],
    featured: true,
  },
  {
    title: "Blog Writing Agent — Multi-Agent Content Pipeline",
    description:
      "Four CrewAI agents that research a topic and produce a publication-ready blog post plus social posts.",
    tech: ["Python", "CrewAI", "Groq", "litellm"],
    github: "https://github.com/Amrita0205/Blog_writing_AI_agent",
    thumbnail: thumbnailBlogAgent,
    highlights: [
      "Built a four-agent CrewAI pipeline (Researcher, Writer, Editor, Social) producing a publication-ready post plus platform variants on Groq llama-3.3-70b; resolved a litellm/openai dependency conflict and added rate-limit retries for stable runs.",
    ],
    featured: true,
  },
  {
    title: "Bit Lens — Bitcoin Transaction Analyser",
    description:
      "Summer of Bitcoin 2026 developer challenge, week 1: a Bitcoin transaction analyser with a CLI that emits machine-checkable JSON and a web visualiser.",
    tech: ["Python", "Bitcoin", "SegWit"],
    github: "https://github.com/Amrita0205/Summer-of-Bitcoin-week1-BIT-LENS-challenge",
    demo: "https://www.youtube.com/watch?v=arhDI3FLk-4",
    featured: false,
  },
  {
    title: "Coin Smith — PSBT Transaction Builder",
    description:
      "Summer of Bitcoin 2026 developer challenge, week 2: a BIP-174 PSBT transaction builder with greedy coin selection and dust-safe change.",
    tech: ["Python", "Bitcoin", "BIP-174"],
    github: "https://github.com/Amrita0205/Summer-of-Bitcoin-week2-COIN-SMITH-challenge",
    demo: "https://www.youtube.com/watch?v=UiFWWvqCxC4",
    featured: false,
  },
  {
    title: "MLOps Prediction API",
    description:
      "MLflow experiment tracking and a model registry behind a FastAPI prediction endpoint, built on the Iris dataset to learn the MLOps workflow.",
    tech: ["Python", "MLflow", "FastAPI", "scikit-learn"],
    github: "https://github.com/Amrita0205/MLops_prediction_iris_dataset",
    featured: false,
  },
  {
    title: "College NSS Website",
    description:
      "Web app to track student participation hours for NSS events, with an admin portal for allocating hours and Google sign-in.",
    tech: ["Next.js", "MongoDB", "Google OAuth"],
    demo: "https://youtu.be/GUeC_hvlNzo",
    featured: false,
  },
  {
    title: "LoveNote",
    description:
      "Simple CRUD notes web app — create, read, update and delete notes. Deployed on Render.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Amrita0205/LoveNote",
    live: "https://lovenote.onrender.com",
    featured: false,
  },
  {
    title: "Code Conflux Hackathon Website",
    description:
      "Official website for the Code Conflux Hackathon organized by CodeSoc at IIIT Raichur.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    live: "https://code-conflux-szk5-amrita0205s-projects.vercel.app/",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">03.</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 md:space-y-24 mb-16 md:mb-24">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:grid lg:grid-cols-12 gap-4 items-start lg:items-center ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                {/* Project Image/Preview */}
                <div
                  className={`w-full lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="glass-card glow-border aspect-video overflow-hidden rounded-xl relative">
                      
                      {/* FIXED: Overlay does NOT block clicks */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none" />

                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center gap-3 p-6">
                          <span className="text-5xl sm:text-6xl font-bold gradient-text">
                            {project.title.charAt(0)}
                          </span>
                          <span className="font-mono text-xs sm:text-sm text-muted-foreground text-center max-w-xs">
                            {project.title}
                          </span>
                          <div className="flex gap-2 mt-1">
                            {project.tech.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 text-[10px] font-mono text-primary/70 bg-primary/5 rounded-full border border-primary/20"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`w-full lg:col-span-6 ${
                    index % 2 === 1
                      ? "lg:order-1 lg:col-start-1"
                      : "lg:col-start-6"
                  } lg:row-start-1`}
                >
                  <p className="text-primary font-mono text-xs sm:text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 md:mb-4">
                    {project.title}
                  </h3>

                  <div className="glass-card p-4 sm:p-6 mb-4">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {project.description}
                    </p>

                    {project.highlights && (
                      <ul className="mt-3 md:mt-4 space-y-2 hidden sm:block">
                        {project.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div
                    className={`flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links - FIXED WITH z-20 */}
                  <div
                    className={`flex flex-wrap gap-2 sm:gap-3 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-muted/50 hover:bg-primary/20 border border-primary/30 hover:border-primary rounded-lg text-foreground hover:text-primary transition-all duration-300 group"
                      >
                        <Github size={16} />
                        <span className="text-xs sm:text-sm font-medium">
                          GitHub
                        </span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500 rounded-lg text-foreground hover:text-red-400 transition-all duration-300 group"
                      >
                        <Youtube size={16} />
                        <span className="text-xs sm:text-sm font-medium">
                          Demo
                        </span>
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 hover:border-secondary rounded-lg text-foreground hover:text-secondary transition-all duration-300 group"
                      >
                        <ExternalLink size={16} />
                        <span className="text-xs sm:text-sm font-medium">
                          Live
                        </span>
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
          <h3 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8 text-muted-foreground">
            Other Noteworthy Projects
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="glass-card glow-border p-4 sm:p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative"
                >
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-base sm:text-lg">
                        📁
                      </span>
                    </div>

                    <div className="flex gap-2 sm:gap-3 relative z-20">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 rounded bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                        >
                          <Github size={14} />
                          <span className="text-xs">Code</span>
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 rounded bg-muted/50 hover:bg-red-500/20 text-muted-foreground hover:text-red-400 transition-all"
                        >
                          <Youtube size={14} />
                          <span className="text-xs">Demo</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 rounded bg-muted/50 hover:bg-secondary/20 text-muted-foreground hover:text-secondary transition-all"
                        >
                          <ExternalLink size={14} />
                          <span className="text-xs">Live</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-muted-foreground"
                      >
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
