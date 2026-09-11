function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="site-logo">
          Software Engineering × AI
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#article">Article</a>
          <a href="#resources">Resources</a>
          <a
            href="https://github.com/Kedar-Dev25"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;