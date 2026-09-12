import "../App.css";
import "../index.css"

function ArticleHero() {
  return (
    <section className="article-hero" id="article">
      <div className="article-hero-content">
        <p className="article-category">SOFTWARE ENGINEERING • AI</p>

        <h1>
          Software Engineering in the Age of AI:
          <span> What Should You Actually Learn in 2026?</span>
        </h1>

        <p className="article-intro">
          AI can already write code, explain concepts, generate applications,
          and help debug software. But if AI can handle more of the coding,
          what should software engineers actually learn in 2026? This guide
          breaks down the skills, engineering fundamentals, and AI-related
          career paths that matter now — and what developers should focus on
          beyond simply learning to use AI tools.
        </p>

        <div className="article-meta">
          <span>By Kedarnath Mandal</span>
          <span>•</span>
          <span>Software Engineering & AI</span>
        </div>
        <p className="article-intro">
          I wanted to share my perspective on how AI is changing software
          development, the skills that still matter, and where I think
          developers should focus next.
        </p>

      </div>
    </section>
  );
}

export default ArticleHero;
