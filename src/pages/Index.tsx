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
        <title>Amrita Kadam | ML Research Intern</title>
        <meta
          name="description"
          content="Amrita Kadam: final-year B.Tech CSE student at IIIT Raichur and mechanistic interpretability research intern at Moleculyst. LLM hallucination detection, evaluation and multi-agent systems."
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
