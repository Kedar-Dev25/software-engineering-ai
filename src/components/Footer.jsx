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
              A practical guide to software engineering in the age of AI,
              including the skills, career paths, and engineering fundamentals
              developers should focus on in 2026.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#article">Article</a>
            <a href="#ai-career-paths">AI Career Paths in 2026</a>
            <a href="#decision-guide">What Should You Learn in 2026?</a>
            <a href="#resources">Learning Resources</a>
          </nav>
        </div>

        <div className="footer-bottom">
  <span>© 2026 Kedarnath Mandal</span>

  <span>
    Written by Kedarnath Mandal · Software Product Developer & Web Developer
  </span>
</div>
      </div>
    </footer>
  );
}

export default Footer;