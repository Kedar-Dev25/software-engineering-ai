import "../App.css";
import "../index.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div>
            <p className="footer-brand">Software Engineering × AI</p>

            <p className="footer-description">
              A practical guide to understanding software engineering, AI,
              career paths, and what developers should actually learn.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#article">Article</a>
            <a href="#ai-career-paths">AI Career Paths</a>
            <a href="#decision-guide">Decision Guide</a>
            <a href="#resources">Resources</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Kedarnath Mandal</span>

          <span>
            Built with React
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;