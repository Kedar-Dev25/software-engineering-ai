import "../App.css";
import "../index.css";

function ContactButton() {
  return (
    <a
      className="floating-contact-button"
      href="#connect-with-me"
      aria-label="Go to contact section"
    >
      Still confused?
      <span>Contact me →</span>
    </a>
  );
}

export default ContactButton;