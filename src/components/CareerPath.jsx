function CareerPath() {
  const paths = [
    {
      number: "01",
      title: "AI / ML Researcher",
      subtitle: "Inventing and improving AI methods",
      description:
        "AI researchers work on the underlying science of artificial intelligence. Their work can involve developing new algorithms, improving model architectures, studying how models learn, or finding better ways to solve problems with machine learning.",
      work: [
        "Design and test new machine learning methods",
        "Study model behavior and learning techniques",
        "Read and write research papers",
        "Run experiments and evaluate results",
        "Work with mathematical and statistical concepts",
      ],
      learn: [
        "Linear algebra",
        "Probability and statistics",
        "Calculus",
        "Machine learning",
        "Deep learning",
        "Research methodology",
        "Python and scientific computing",
      ],
      fit: "Best suited to people who enjoy mathematics, experiments, theory, and discovering how things work.",
    },

    {
      number: "02",
      title: "Machine Learning Engineer",
      subtitle: "Building production machine learning systems",
      description:
        "Machine Learning Engineers take machine learning models from experimentation toward real-world systems. Their work sits between software engineering, data, and machine learning.",
      work: [
        "Prepare and process data",
        "Train and evaluate machine learning models",
        "Build model pipelines",
        "Deploy models into applications",
        "Monitor model performance",
        "Improve reliability and scalability",
      ],
      learn: [
        "Python",
        "Machine learning",
        "Data processing",
        "Model evaluation",
        "APIs and backend systems",
        "Cloud and deployment",
        "Software engineering",
      ],
      fit: "A strong fit if you enjoy both software engineering and working deeply with data and machine learning models.",
    },

    {
      number: "03",
      title: "AI Engineer",
      subtitle: "Building applications around AI models",
      description:
        "AI Engineers focus on turning modern AI capabilities into useful software. Instead of creating every model from scratch, they often work with existing models and build the systems around them.",
      work: [
        "Integrate AI models into applications",
        "Work with model APIs and SDKs",
        "Build retrieval and context pipelines",
        "Design AI workflows and agents",
        "Evaluate AI output",
        "Connect AI systems with databases and existing services",
      ],
      learn: [
        "Software engineering",
        "Python or another backend language",
        "AI APIs and SDKs",
        "LLM fundamentals",
        "Embeddings and retrieval",
        "Prompt and context design",
        "Evaluation and reliability",
      ],
      fit: "A good fit if you enjoy building applications and want AI to become an important part of the products you create.",
    },

    {
      number: "04",
      title: "AI-Powered Software Engineer",
      subtitle: "Software engineering with AI as a capability",
      description:
        "An AI-powered software engineer is still fundamentally a software engineer. The difference is that AI becomes another tool or capability they can use when building products.",
      work: [
        "Build complete web or mobile applications",
        "Design APIs and backend systems",
        "Use AI coding tools effectively",
        "Add AI features where they make sense",
        "Integrate third-party AI services",
        "Test and verify AI-generated code",
        "Make architecture and product decisions",
      ],
      learn: [
        "Web or application development",
        "Backend engineering",
        "Databases",
        "APIs",
        "Deployment",
        "System design",
        "AI fundamentals and AI integration",
      ],
      fit: "A strong fit if your main interest is building useful software products and you want to use AI without making machine learning your entire career.",
    },
  ];

  return (
    <section id="ai-career-paths" className="career-path-section">
      <div className="career-path-intro">
        <p className="section-number">07</p>

        <h2>Which AI path actually interests you?</h2>

        <p>
          These roles overlap, but they are not interchangeable. Understanding
          the difference can save you from spending months learning skills for
          a career you do not actually want.
        </p>
      </div>

      <div className="career-path-grid">
        {paths.map((path) => (
          <article className="career-card" key={path.title}>
            <div className="career-card-header">
              <span className="career-number">{path.number}</span>

              <div>
                <h3>{path.title}</h3>
                <p className="career-subtitle">{path.subtitle}</p>
              </div>
            </div>

            <p className="career-description">{path.description}</p>

            <div className="career-card-block">
              <h4>What the work looks like</h4>

              <ul>
                {path.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="career-card-block">
              <h4>What to learn</h4>

              <ul>
                {path.learn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="career-fit">
              <strong>Who is it for?</strong>
              <p>{path.fit}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CareerPath;