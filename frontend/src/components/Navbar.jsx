import { useEffect, useState, useRef } from "react";

const sections = ["about", "stack", "projects", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-20
    px-15 flex justify-between items-center font-mono
    transition-all duration-300 ease-out
    ${hidden ? "-translate-y-full" : "translate-y-0"}
    ${
      scrolled
        ? "bg-[#101318]/80 backdrop-blur border-b border-[#27CBCB]/20 shadow-[0_8px_30px_rgba(39,203,203,0.15)]"
        : "bg-transparent"
    }
  `}
    >
      <a href="#top" onClick={scrollToTop}>
        <h1 className="text-2xl font-bold cursor-pointer text-gray-400 hover:text-[#27CBCB] transition-colors">
          <pre>&lt;/aditya&gt;</pre>
        </h1>
      </a>
      <div className="flex items-center space-x-5 text-lg">
        {sections.map((item) => {
          const isActive = active === item;

          return (
            <a
              key={item}
              href={`#${item}`}
              className={`relative px-2 py-1 rounded-md transition-all duration-200
                ${
                  isActive
                    ? "text-[#27CBCB]"
                    : "text-gray-400 hover:text-[#27CBCB]"
                }
              `}
            >
              /{item}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#27CBCB]
                  transition-all duration-300
                  ${isActive ? "w-full" : "w-0"}
                `}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
