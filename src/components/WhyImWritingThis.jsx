import { useState } from "react";
import "../App.css";
import "../index.css";

function WhyImWritingThis() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="why-im-writing-this">
      <div className="why-im-writing-this-content">

        <button
          className="why-im-writing-this-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="why-im-writing-this-body"
          onClick={() => setIsOpen((open) => !open)}
        >
          <div>
            <p className="article-category">A NOTE FROM A CS STUDENT</p>

            <h2>
              Are Engineering Schools and Colleges Preparing Us for the Future
              — or Just to Pass Exams and Study an Outdated Syllabus?
            </h2>

            <span className="why-im-writing-this-hint">
              {isOpen ? "Close note ↑" : "Read why I wrote this →"}
            </span>
          </div>

          <span className="why-im-writing-this-icon" aria-hidden="true">
            {isOpen ? "⌃" : "⌄"}
          </span>
        </button>

        <div
          id="why-im-writing-this-body"
          className={`why-im-writing-this-body ${
            isOpen ? "why-im-writing-this-body-open" : ""
          }`}
        >
          <p>
            <strong>I’m a computer science student myself,</strong> and this
            question comes from something I’ve experienced firsthand. In my
            own classroom, we’re still learning C programming and Data
            Structures — subjects that are valuable foundations for
            understanding how software works. But as a student, it can be
            frustrating to spend so much time thinking about
            <strong> finishing units, preparing for exams, and remembering
            what might come in the question paper,</strong> while the software
            industry outside the classroom is changing so quickly. At some
            point, you start wondering whether you’re actually preparing for
            the future, or simply preparing to pass the next exam.
          </p>

          <p className="why-im-writing-this-question">
            <strong>
              At some point, you start wondering whether you’re actually
              preparing for the future, or simply preparing to pass the next
              exam.
            </strong>
          </p>

          <p>
            Meanwhile, outside the classroom, developers are already working
            with
            <span className="why-im-writing-this-highlight">
              {" "}AI-assisted coding tools, large language models, automation,
              cloud platforms, APIs, and increasingly intelligent development
              workflows.
            </span>{" "}
            AI can now generate code, explain unfamiliar concepts, help debug
            applications, and speed up parts of the development process.
            <strong> The nature of software development is changing,</strong>{" "}
            and students entering this industry will experience that change
            firsthand.
          </p>

          <p>
            That doesn’t mean traditional computer science education is
            useless. <strong>Fundamentals still matter,</strong> and they
            probably matter more than we sometimes realize. The real problem
            begins when the syllabus becomes the boundary of a student’s
            learning instead of the starting point. Learning what is required
            for an exam and learning what is required to build something useful
            are not always the same thing.
          </p>

          <p className="why-im-writing-this-focus">
            <span className="why-im-writing-this-highlight">
              The real problem begins when the syllabus becomes the boundary
              of a student’s learning instead of the starting point.
            </span>
          </p>

          <p>
            A student can learn the fundamentals in class and still
            <strong> look beyond them.</strong> They can explore modern
            development tools, understand how AI is changing software
            engineering, <strong>build real products, contribute to open
            source, experiment with ideas,</strong> and learn from problems
            that don’t appear in a textbook or question paper.
          </p>

          <p>
            And that last part matters.{" "}
            <strong>
              A career in technology does not have to mean only preparing for
              a job and waiting for someone to hire you.
            </strong>{" "}
            Some students may become engineers, some may become product
            builders, and some may turn an idea into something useful that
            people actually want to use.{" "}
            <span className="why-im-writing-this-highlight">
              The classroom can give you a foundation, but it doesn’t have to
              define how far you can go.
            </span>
          </p>

          <p>
            The goal of this article isn’t to argue that students should stop
            learning computer science fundamentals. It’s to encourage students
            to
            <strong> look beyond the syllabus, understand what is happening
            in the industry around them,</strong> and make sure their learning
            keeps moving even when the curriculum doesn’t.
          </p>

          <blockquote>
            Learn the fundamentals. Understand the industry. Build beyond the
            classroom.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default WhyImWritingThis;