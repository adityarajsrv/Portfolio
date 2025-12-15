import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Background from "../components/ui/Background";

const Portfolio = () => {
  return (
    <div className="relative w-full min-h-screen text-gray-300 overflow-x-hidden">
      <Background />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-10">
        <div className="flex flex-row items-center ml-50 mt-25 p-5 space-x-3">
          <p className="cursor-pointer text-[#27CBCB]">/about</p>
          <div className="bg-gray-700 h-0.5 w-full mr-30 rounded-lg" />
        </div>
        <About />
      </section>
      <section id="stack" className="scroll-mt-10">
        <div className="flex flex-row items-center ml-50 mt-20 p-5 space-x-3">
          <p className="cursor-pointer text-[#27CBCB]">/stack</p>
          <div className="bg-gray-700 h-0.5 w-full mr-30 rounded-lg" />
        </div>
        <Stack />
      </section>
      <section id="projects" className="scroll-mt-10">
        <div className="flex flex-row items-center ml-50 mt-20 p-5 space-x-3">
          <p className="cursor-pointer text-[#27CBCB]">/projects</p>
          <div className="bg-gray-700 h-0.5 w-full mr-30 rounded-lg" />
        </div>
        <Projects />
      </section>
      <section id="contact" className="scroll-mt-10">
        <div className="flex flex-row items-center ml-50 mt-20 p-5 space-x-3">
          <p className="cursor-pointer text-[#27CBCB]">/contact</p>
          <div className="bg-gray-700 h-0.5 w-full mr-30 rounded-lg" />
        </div>
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
