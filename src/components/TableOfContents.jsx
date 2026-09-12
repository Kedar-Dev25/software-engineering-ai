import { useEffect, useState } from "react";
import "../App.css";
import "../index.css";

function TableOfContents() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      id: "what-ai-does",
      label: "What AI actually does in software development",
    },
    {
      id: "ai-career-path-overview",
      label: "What are the different AI career paths?",
    },
    {
      id: "software-engineering",
      label: "What does software engineering still require?",
    },
    {
      id: "web-developer-2026",
      label: "What does software development actually include?",
    },
    {
      id: "ai-vs-engineer",
      label: "Will AI replace software engineers?",
    },
    {
      id: "where-to-start",
      label: "What should you learn first?",
    },
    {
      id: "resources",
      label: "Learning resources",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!isOpen) return;

      const toc = document.querySelector(".table-of-contents");

      if (toc && !toc.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <aside
      className={`table-of-contents ${
        isScrolled ? "toc-is-scrolled" : ""
      } ${isOpen ? "toc-is-open" : ""}`}
      aria-label="Table of contents"
    >
      <div className="toc-inner">

        <button
          className="toc-mobile-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="article-toc-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="toc-label">IN THIS ARTICLE</span>
          <span className="toc-toggle-icon" aria-hidden="true">
            {isOpen ? "⌃" : "⌄"}
          </span>
        </button>

        <nav id="article-toc-navigation">
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={handleLinkClick}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

      </div>
    </aside>
  );
}

export default TableOfContents;