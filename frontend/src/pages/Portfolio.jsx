import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Stack from "../components/Stack";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-[#101318] text-gray-300">
      <Navbar />
      <Hero />
      <div className="flex flex-row items-center ml-50 mt-30 p-5 space-x-3">
        <p className="cursor-pointer text-[#27CBCB] ">
          /about
        </p>
        <div className="bg-gray-700 h-0.5 w-full mr-30 rounded-lg"></div>
      </div>
      <About />
      <div className="flex flex-row items-center ml-50 mt-20 p-5 space-x-3">
        <p className="cursor-pointer text-[#27CBCB] ">
          /stack
        </p>
        <div className="bg-gray-700 h-0.5 w-full mr-30 rounded-lg"></div>
      </div>
      <Stack />
      <div className="flex flex-row items-center ml-50 mt-20 p-5 space-x-3">
        <p className="cursor-pointer text-[#27CBCB] ">
          /projects
        </p>
        <div className="bg-gray-700 h-0.5 w-full mr-30 rounded-lg"></div>
      </div>
      <Projects />
    </div>
  );
};

export default Portfolio;