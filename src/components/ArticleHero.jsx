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
          AI can write code, explain concepts, generate applications, and
          assist with debugging. So what does a software engineer actually
          need to learn now? This guide explores the different paths between
          software engineering and AI, from AI research and machine learning
          to AI-powered software development.
        </p>

        <div className="article-meta">
          <span>By Kedarnath Mandal</span>
          <span>•</span>
          <span>Software Engineering & AI</span>
        </div>
      </div>
    </section>
  );
}

export default ArticleHero;