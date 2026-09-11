function TableOfContents() {
  const sections = [
    {
      id: "what-ai-does",
      label: "What AI actually does",
    },
    {
      id: "ai-career-paths",
      label: "The different paths into AI",
    },
    {
      id: "ai-researcher",
      label: "AI / ML Researcher",
    },
    {
      id: "ml-engineer",
      label: "Machine Learning Engineer",
    },
    {
      id: "ai-engineer",
      label: "AI Engineer",
    },
    {
      id: "ai-powered-software",
      label: "AI-Powered Software Engineer",
    },
    {
      id: "software-engineering",
      label: "What software engineering still requires",
    },
    {
      id: "web-developer-2026",
      label: "What should a web developer learn in 2026?",
    },
    {
      id: "ai-vs-engineer",
      label: "What AI can and cannot replace",
    },
    {
      id: "where-to-start",
      label: "Where should you start?",
    },
    {
      id: "resources",
      label: "Learning resources",
    },
  ];

  return (
    <aside className="table-of-contents" aria-label="Table of contents">
      <div className="toc-inner">
        <p className="toc-label">ON THIS PAGE</p>

        <nav>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </aside>
  );
}

export default TableOfContents;