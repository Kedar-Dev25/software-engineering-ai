import { useState } from "react";
import "../App.css";
import "../index.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="site-logo" onClick={closeMenu}>
          Software Engineering × AI
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#article" onClick={closeMenu}>
            Article
          </a>

          <a href="#resources" onClick={closeMenu}>
            Learning Resources
          </a>

          <a
            href="https://github.com/Kedar-Dev25"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub ↗
          </a>
        </nav>

        <button
          className={`mobile-menu-toggle ${
            isMenuOpen ? "mobile-menu-toggle-open" : ""
          }`}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-navigation ${
            isMenuOpen ? "mobile-navigation-open" : ""
          }`}
          aria-label="Mobile navigation"
        >
          <a href="#article" onClick={closeMenu}>
            <span>Article</span>
            <span>→</span>
          </a>

          <a href="#resources" onClick={closeMenu}>
            <span>Learning Resources</span>
            <span>→</span>
          </a>

          <a
            href="https://github.com/Kedar-Dev25"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;