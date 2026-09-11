function DecisionGuide() {
  const decisions = [
    {
      question: "Do you enjoy mathematics, theory, and experiments?",
      yes:
        "Explore AI / ML research and build a strong foundation in mathematics, statistics, and machine learning.",
      no:
        "You do not need a research-heavy AI path to work with modern AI.",
    },
    {
      question: "Do you enjoy working with data and training models?",
      yes:
        "Machine Learning Engineering may be a good direction. Focus on machine learning, data pipelines, model evaluation, and production systems.",
      no:
        "You may be more interested in building software around existing AI capabilities.",
    },
    {
      question: "Do you enjoy building applications and complete products?",
      yes:
        "AI Engineering or AI-powered software engineering may fit you well. Keep your software engineering foundation strong and learn how to integrate AI effectively.",
      no:
        "Take some time to identify the kind of technical problems you actually enjoy solving before choosing a specialization.",
    },
  ];

  return (
    <section id="decision-guide" className="decision-guide">
      <div className="decision-guide-intro">
        <p className="section-number">08</p>

        <h2>How do you decide what to learn?</h2>

        <p>
          You do not have to choose your entire career from a list of job
          titles. Start with the type of work that gives you the most
          curiosity.
        </p>
      </div>

      <div className="decision-list">
        {decisions.map((decision, index) => (
          <article className="decision-item" key={decision.question}>
            <span className="decision-step">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="decision-content">
              <h3>{decision.question}</h3>

              <div className="decision-answers">
                <div className="decision-answer">
                  <span className="answer-label">YES</span>
                  <p>{decision.yes}</p>
                </div>

                <div className="decision-answer">
                  <span className="answer-label">NO</span>
                  <p>{decision.no}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="decision-conclusion">
        <h3>A simple rule</h3>

        <p>
          Do not choose a technology because everyone says it is the future.
          Choose a direction based on the problems you want to spend your time
          solving, then learn the technology that helps you solve those
          problems.
        </p>

        <p>
          Your path can also change. A web developer can move toward AI
          engineering later. A software engineer can learn machine learning.
          An ML engineer can become a systems engineer. There is no permanent
          wall between these fields.
        </p>
      </div>
    </section>
  );
}

export default DecisionGuide;