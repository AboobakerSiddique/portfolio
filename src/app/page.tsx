import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import EmbeddedProjects from "@/components/EmbeddedProjects";
import BuildJourney from "@/components/BuildJourney";
import GitHubSection from "@/components/GitHubSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <FeaturedProject />
        <About />
        <EmbeddedProjects />
        <BuildJourney />
        <Skills />
        <Experience />
        <GitHubSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
