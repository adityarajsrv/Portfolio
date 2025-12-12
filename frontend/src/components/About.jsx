import { useState } from 'react';
import ProfileCard from "./ui/ProfileCard";
import profileImg from "../assets/profile.png";
import profile from "../assets/passport_size.jpg";
import { X, Download, ExternalLink } from 'lucide-react';

const About = () => {
  const [showResume, setShowResume] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; 
    link.download = 'Aditya_Raj_Srivastava_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-start ml-65 p-5 space-x-8">
        <ProfileCard
          name="Aditya Raj Srivastava"
          title="Full-Stack Developer"
          handle="adityarajsrv"
          status="Final Year Student"
          contactText="Let's Connect"
          miniAvatarUrl={profile}
          avatarUrl={profileImg}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
        <div className="flex flex-col justify-center space-y-8 max-w-xl mr-40">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-tight">
              A developer who {" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#27CBCB] to-[#26D868]">
                cares about the details
              </span>
            </h2>
          </div>
          <div className="space-y-3">
            <div className="relative pl-6">
              <div className="absolute left-0 top-2 w-1 h-20 bg-linear-to-b from-[#27CBCB] to-[#26D868] rounded-full"></div>
              <p className="text-gray-300 text-base leading-relaxed">
                Final year Computer Science student with a solid foundation in
                software development, committed to creating{" "}
                <span className="text-[#27CBCB]">scalable and reliable</span>{" "}
                full-stack applications. Passionate about writing code that&apos;s
                not just functional but also clean and maintainable.
              </p>
            </div>
            <div className="bg-linear-to-br from-gray-900/50 to-transparent p-5 rounded-xl border border-gray-800/50">
              <p className="text-[#80978F] text-base leading-relaxed italic">
                &quot;Curiosity drives how I approach technology - from solving
                coding problems to developing{" "}
                <span className="text-gray-300">intuitive, useful software</span>.
                I enjoy transforming abstract ideas into tangible, usable
                solutions.&quot;
              </p>
            </div>
          </div>
          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-semibold text-[#80978F]">Interests</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#27CBCB] mr-2"></div>
                <span className="text-sm text-gray-400">
                  Software Development
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#26D868] mr-2"></div>
                <span className="text-sm text-gray-400">Web Technologies</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#27CBCB] mr-2"></div>
                <span className="text-sm text-gray-400">AI & Automation</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#26D868] mr-2"></div>
                <span className="text-sm text-gray-400">Problem-Solving</span>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <button 
              onClick={() => setShowResume(true)}
              className="group w-full bg-transparent border border-gray-700 px-6 py-3 text-gray-300 font-medium rounded-lg cursor-pointer hover:border-[#27CBCB] hover:text-[#27CBCB] transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View Full Resume</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
      {showResume && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-[#101318] rounded-2xl w-full max-w-6xl h-[90vh] overflow-hidden border border-gray-800 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-800 bg-linear-to-r from-[#101318] to-gray-900/50">
              <div>
                <h3 className="text-2xl font-bold text-[#27CBCB]">Resume</h3>
                <p className="text-gray-400 text-sm mt-1">Aditya Raj Srivastava • Full-Stack Developer</p>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Open in New Tab</span>
                </a>
                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-[#27CBCB] to-[#26D868] text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => setShowResume(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors ml-2"
                >
                  <X size={24} className="text-gray-400" />
                </button>
              </div>
            </div>
            <div className="h-[calc(90vh-80px)] p-6">
              <iframe
                src="/Resume.pdf"
                className="w-full h-full rounded-lg border border-gray-800 bg-white"
                title="Resume PDF Viewer"
              />
            </div>
            <div className="p-4 border-t border-gray-800 bg-gray-900/30 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <span>File: resume.pdf</span>
                <span className="mx-3">•</span>
                <span>Size: ~2.1 MB</span>
              </div>
              <button
                onClick={() => setShowResume(false)}
                className="px-6 py-2 border border-gray-700 text-gray-400 rounded-lg hover:border-gray-600 hover:text-gray-300 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;