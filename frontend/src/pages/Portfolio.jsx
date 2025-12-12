import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-[#101318] text-gray-300">
      <Navbar />
      <Hero />
      <div className="flex flex-row items-center ml-60 mt-30 p-5 space-x-3">
        <p className="cursor-pointer text-[#27CBCB] ">
          /about
        </p>
        <div className="bg-gray-700 h-0.5 w-full mr-30 rounded-lg"></div>
      </div>
      <About />
    </div>
  );
};

export default Portfolio;