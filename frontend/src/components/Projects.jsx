/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import careerquillImg from "../assets/careerquill.png";
import flowmindImg from "../assets/flowmind.png";
import proctorlyImg from "../assets/proctorly.png";
import hiremeImg from "../assets/hireme.png";

const projects = [
  {
    title: "CareerQuill",
    subtitle: "Resume Generation & ATS Scoring Platform",
    description:
      "End-to-end resume builder with ATS scoring using NLP to match resumes against job descriptions and suggest keywords.",
    highlights: [
      "6 resume templates (PDF & DOCX)",
      "NLP-based ATS scoring",
      "JWT auth & resume versioning",
    ],
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "FastAPI",
      "spaCy",
      "scikit-learn",
    ],
    github: "https://github.com/adityarajsrv/CareerQuill",
    live: "#",
    image: careerquillImg,
    accent: "from-[#27CBCB]/40",
  },
  {
    title: "FlowMind-AI",
    subtitle: "No-Code AI Workflow Builder",
    description:
      "Visual platform to design and execute AI workflows using drag-and-drop nodes, document retrieval, and LLM orchestration.",
    highlights: [
      "Visual workflow editor",
      "Semantic search (90%+ accuracy)",
      "Tiered access & orchestration",
    ],
    tech: [
      "React",
      "React Flow",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "ChromaDB",
      "Gemini LLM",
      "Docker",
    ],
    github: "https://github.com/adityarajsrv/FlowMind-AI",
    live: "https://flow-mind-ai-tan.vercel.app",
    image: flowmindImg,
    accent: "from-violet-400/40",
  },
  {
    title: "Proctorly",
    subtitle: "Real-Time Video Proctoring System",
    description:
      "Web-based proctoring system monitoring video, audio, and object detection to generate session integrity reports.",
    highlights: [
      "Face & object detection",
      "Real-time event logging",
      "PDF integrity reports",
    ],
    tech: [
      "React",
      "Tailwind",
      "MediaPipe",
      "TensorFlow.js",
      "Node.js",
      "MongoDB",
      "jsPDF",
    ],
    github: "https://github.com/adityarajsrv/Proctorly",
    live: "https://proctorly-kappa.vercel.app",
    image: proctorlyImg,
    accent: "from-amber-400/40",
  },
  {
    title: "HireMe",
    subtitle: "MERN Recruitment Platform Prototype",
    description:
      "Full-stack recruitment platform with secure authentication, profile management, and role-based access.",
    highlights: [
      "JWT auth & RBAC",
      "Profile completion tracking",
      "Cloudinary uploads",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/adityarajsrv/HireMe",
    live: "https://hire-me-inky.vercel.app",
    image: hiremeImg,
    accent: "from-cyan-400/40",
  },
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group rounded-xl border border-gray-700/40
        bg-gray-900/20 backdrop-blur overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover
            scale-105 blur-[2px]
            group-hover:blur-0 group-hover:scale-100
            transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <motion.div
          initial={{ x: "-60%" }}
          whileHover={{ x: "60%" }}
          transition={{ duration: 1.2 }}
          className={`absolute inset-0 bg-linear-to-r ${project.accent} to-transparent opacity-60`}
        />

        <div className="absolute bottom-3 left-4">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-xs text-[#27CBCB]">{project.subtitle}</p>
        </div>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
          {project.highlights.map((h) => (
            <span key={h}>• {h}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech
            .slice(0, expanded ? project.tech.length : 4)
            .map((t) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-2 py-1 text-xs rounded-md
                  bg-gray-950 border border-gray-700/40
                  text-gray-400"
              >
                {t}
              </motion.span>
            ))}

          {project.tech.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-2 py-1 text-xs rounded-md
                border border-gray-700/40
                text-[#27CBCB] hover:bg-[#27CBCB]/10
                transition-colors"
            >
              {expanded ? "− less" : `+${project.tech.length - 4}`}
            </button>
          )}
        </div>
        <div className="flex gap-4 text-gray-400 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="ml-65 p-5 space-y-8 max-w-6xl mr-36">
      <div>
        <h2 className="text-4xl font-bold text-[#27CBCB]">
          Things I&apos;ve Built
        </h2>
        <p className="mt-2 text-[#80978F] text-lg max-w-xl">
          Real-world projects focused on system design, scalability, and clean
          engineering.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div
        className="group relative flex flex-row justify-center items-center
    space-x-1 text-[#27CBCB] cursor-pointer mr-4"
      >
        <a
          href="https://github.com/adityarajsrv"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-[#27CBCB]"
        >
          <span className="relative">
            View all projects on GitHub
            <span
              className="absolute left-1/2 -bottom-1 h-0.5 w-0
        bg-[#27CBCB]
        transition-all duration-300 ease-out
        group-hover:w-full group-hover:left-0"
            />
          </span>
          <ExternalLink
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
