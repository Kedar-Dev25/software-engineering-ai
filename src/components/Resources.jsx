import "../App.css";
import "../index.css";


function Resources() {
  const resources = [
    {
      category: "Web fundamentals",
      description:
        "Build a strong understanding of how the web actually works before relying heavily on frameworks.",
      links: [
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org/",
        },
      ],
    },
    {
      category: "Java & backend engineering",
      description:
        "Learn the language and backend technologies deeply enough to understand the systems you build.",
      links: [
        {
          name: "Oracle Java Documentation",
          url: "https://docs.oracle.com/en/java/",
        },
        {
          name: "Spring Documentation",
          url: "https://docs.spring.io/",
        },
        {
          name: "Spring Guides",
          url: "https://spring.io/guides",
        },
      ],
    },
    {
      category: "Frontend development",
      description:
        "Understand component-based UI development and the fundamentals behind modern frontend applications.",
      links: [
        {
          name: "React Documentation",
          url: "https://react.dev/",
        },
      ],
    },
    {
      category: "Machine learning",
      description:
        "If you want to understand machine learning beyond simply calling an AI API, start with the fundamentals.",
      links: [
        {
          name: "Google Machine Learning Crash Course",
          url: "https://developers.google.com/machine-learning/crash-course",
        },
        {
          name: "Hugging Face Course",
          url: "https://huggingface.co/learn",
        },
      ],
    },
    {
      category: "Building with AI",
      description:
        "Learn how modern AI models can be integrated into real applications and software systems.",
      links: [
        {
          name: "OpenAI Developer Documentation",
          url: "https://developers.openai.com/",
        },
        {
          name: "Hugging Face",
          url: "https://huggingface.co/docs",
        },
      ],
    },
  ];

  return (
    <section id="resources" className="resources-section">
      <div className="resources-intro">
        <p className="section-number">09</p>

        <h2>Where should you learn from?</h2>

        <p>
          Once you know which direction interests you, choose resources that
          help you build the required foundation. You do not need to consume
          dozens of courses at once.
        </p>
      </div>

      <div className="resources-list">
        {resources.map((resource) => (
          <article className="resource-group" key={resource.category}>
            <div className="resource-heading">
              <h3>{resource.category}</h3>
              <p>{resource.description}</p>
            </div>

            <div className="resource-links">
              {resource.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  <span>{link.name}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="resources-note">
        <strong>One more thing:</strong>

        <p>
          Do not measure your progress by how many courses you finish. Build
          things, break things, read documentation, debug problems, and
          gradually take on more difficult projects. Practical understanding
          compounds much faster than collecting certificates.
        </p>
      </div>
    </section>
  );
}

export default Resources;