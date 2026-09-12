import "../App.css";
import "../index.css";

function TableOfContents() {
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
      label: "What should a web developer learn in 2026?",
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