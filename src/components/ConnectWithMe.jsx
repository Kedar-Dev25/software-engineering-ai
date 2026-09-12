import "../App.css";
import "../index.css";

function ConnectWithMe() {
  return (
    <section
      className="connect-with-me"
      id="connect-with-me"
      aria-labelledby="connect-with-me-title"
    >
      <div className="connect-with-me-content">
        <p className="article-category">STILL FIGURING THINGS OUT?</p>

        <h2 id="connect-with-me-title">
          Not sure what to learn or where to start?
        </h2>

        <p className="connect-with-me-text">
          If you’re confused about what to learn, which direction to take,
          or how AI fits into your career, you can reach out. If you have
          a question about this article or something you’re building, I’m
          happy to hear from you.
        </p>

        <div className="connect-with-me-links">
          <a
            href="https://www.linkedin.com/in/kedarnath-mandal-74299a399/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>LinkedIn</strong>
              <small>Ask a question or connect</small>
            </span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://wa.me/919114564601?text=Hi%20Kedarnath%2C%20I%20read%20your%20article%20and%20wanted%20to%20ask%20something."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>WhatsApp</strong>
              <small>Send a message</small>
            </span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://github.com/Kedar-Dev25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <strong>GitHub</strong>
              <small>See what I’m building</small>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConnectWithMe;