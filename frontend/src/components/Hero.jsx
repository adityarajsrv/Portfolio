import TextType from "./ui/TextType";

const Hero = () => {
  return (
    <div className="ml-60 mt-15 p-5 flex flex-col space-y-6 relative">
      <p className="text-lg text-gray-400 font-mono">
        <span className="text-[#27CBCB]">const</span> developer ={" "}
        <span className="text-gray-300">&quot;Aditya Raj Srivastava&quot;</span>
        ;
      </p>
      <h2 className="text-7xl font-semibold">Full-Stack Developer</h2>
      <h2 className="text-7xl font-semibold text-[#80978F]">
        <TextType
          text={[
            "Building things that matter.",
            "Creating digital experiences.",
            "Solving real-world problems.",
            "Crafting elegant solutions.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          deleteSpeed={50}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
        />
      </h2>
      <p className="text-[#80978F] text-xl mt-3 w-[50%]">
        I craft clean, thoughtful digital experiences. Currently focused on
        building tools that help people work better and live easier.
      </p>
      <div className="flex flex-row justify-start items-center space-x-5 mt-3">
        <button className="bg-[#26D868] px-7 py-3 text-gray-800 font-semibold rounded-sm cursor-pointer hover:scale-102 transition-transform duration-200">
          View Projects <span className="font-extrabold text-lg">&rarr;</span>
        </button>
        <button className="border border-gray-600 px-5 py-3 font-semibold cursor-pointer hover:bg-gray-900 transition-colors duration-200">
          Get in Touch
        </button>
      </div>
      <div className="absolute left-20 top-40 opacity-10">
        <div className="text-8xl font-mono text-gray-500">{`{ }`}</div>
      </div>
      <div className="absolute right-40 bottom-40">
        <div className="flex space-x-3 opacity-20">
          <div className="w-2 h-8 bg-[#27CBCB] rounded-full animate-pulse"></div>
          <div className="w-2 h-12 bg-[#26D868] rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-6 bg-[#80978F] rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
      <div className="absolute left-40 bottom-20 opacity-10">
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <div className="absolute right-10 top-1/3">
        <div className="grid grid-cols-2 gap-2 opacity-20">
          <div className="w-3 h-3 bg-[#27CBCB] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#26D868] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#80978F] rounded-sm"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
        </div>
      </div>
      <div className="absolute right-105 bottom-82 w-48 bg-yellow-300/95 backdrop-blur-sm py-2 px-4 rounded-2xl shadow-xl float-animation border border-yellow-400/50">
        <div className="flex justify-start mb-1">
          <div className="text-2xl text-yellow-600">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>
        <p className="text-black text-xs italic font-medium leading-relaxed">
          From concept to deployment, solve challenges, and build systems that scale.
        </p>
        <div className="mt-4 flex items-center">
          <div className="w-8 h-px bg-yellow-600 mr-3"></div>
          <span className="text-gray-800 text-xs font-semibold tracking-wide">
            CODING MANTRA
          </span>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/3">
        <div className="flex space-x-2 opacity-30">
          <div className="font-mono text-sm text-gray-500">{"// developer"}</div>
          <div className="font-mono text-sm text-gray-500">{"// designer"}</div>
          <div className="font-mono text-sm text-gray-500">{"// problem-solver"}</div>
        </div>
      </div>

      <div className="absolute top-20 right-60 opacity-10">
        <div className="text-6xl font-bold text-gray-500">{"</>"}</div>
      </div>
    </div>
  );
};

export default Hero;