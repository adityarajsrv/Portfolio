import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "adityarajsrvofficial@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/adityarajsrv",
      label: "GitHub",
      color: "hover:text-gray-100 hover:bg-gray-800",
      border: "border-gray-800"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/adityarajsrv",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-900/20",
      border: "border-blue-900/30"
    },
  ];

  return (
    <section className="max-w-2xl ml-120 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/50 to-gray-900/30 rounded-3xl -z-10" />
        <div className="absolute inset-0 bg-[radial-linear(circle_at_30%_20%,rgba(39,203,203,0.1),transparent_50%)] -z-10" />
        <div className="text-center space-y-8 p-8 rounded-2xl border border-gray-800/50 bg-linear-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-gray-300">Available for opportunities</span>
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-400">
              Get in Touch
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-lg">
              Open to collaborations, interesting projects, and new opportunities
            </p>
          </div>
          <div className="relative max-w-sm mx-auto">
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full"
            >
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-800 bg-linear-to-r from-gray-900/50 to-gray-800/30 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
                    <Mail className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-gray-200 font-medium">{email}</p>
                  </div>
                </div>
                <div className={`p-2 rounded-lg transition-all duration-300 ${copied ? 'bg-emerald-900/30 text-emerald-400' : 'bg-gray-800/50 text-gray-400 group-hover:bg-gray-700/50 group-hover:text-gray-300'}`}>
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>
            </motion.button>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg bg-emerald-900/20 border border-emerald-800/30 text-emerald-400 text-xs"
              >
                Copied to clipboard
              </motion.div>
            )}
          </div>
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">Connect elsewhere</p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border ${link.border} bg-gray-900/30 backdrop-blur-sm ${link.color} transition-all duration-300 group`}
                >
                  <div className="transition-transform group-hover:scale-110">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-current">
                    {link.label}
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="pt-6 border-t border-gray-800/30">
            <div className="inline-flex items-center gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Currently open to:</span>
              </div>
              <span className="text-gray-300">Full-time roles • Contract work • Collaborations</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;