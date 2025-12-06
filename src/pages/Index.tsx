import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Amrita Kadam | Software Developer & AI Engineer</title>
        <meta
          name="description"
          content="Amrita Kadam - B.Tech CSE student at IIIT Raichur specializing in Agentic AI, Full-Stack Development, and Machine Learning. Backend Developer Intern at TerraBiz."
        />
        <meta property="og:title" content="Amrita Kadam | Portfolio" />
        <meta
          property="og:description"
          content="Software Developer & AI Engineer specializing in Agentic Systems, LangChain, and Full-Stack Development."
        />
      </Helmet>

      <div className="relative min-h-screen">
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
