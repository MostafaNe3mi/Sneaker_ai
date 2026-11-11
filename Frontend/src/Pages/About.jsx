import { Link } from "react-router-dom";
import "../Styles/InfoPages.css";
import "../Styles/About.css";

function About() {
  return (
    <main className="info-page about-page">
      <section className="about-content">
        <div className="about-story">
          <p className="info-page-eyebrow">Our story · Kicks With Style</p>
          <h1>Every great thing starts with a first step.</h1>
          <p className="about-intro">
            Ours started from scratch, with a love for sneakers and a simple
            question: what if finding a pair you really love felt just as good
            as wearing it?
          </p>
          <div className="about-copy">
            <p>
              We built Kicks With Style one step at a time, bringing the pairs
              we love and the drops we look forward to into one welcoming
              place. No big story about overnight success, just a small
              beginning, plenty of care, and a real passion for the details.
            </p>
            <p>
              That same care guides what we want to offer: top-quality sneakers,
              a collection worth exploring, and a shopping experience that
              feels personal. Every pair should feel like it belongs in your
              rotation, and every sneaker fan should feel at home here.
            </p>
          </div>
          <div className="about-note">
            <span aria-hidden="true" className="about-note-mark">“</span>
            <p>
              We may have started from scratch. We never plan to cut corners
              on quality.
            </p>
          </div>
          <div className="info-page-actions">
            <Link className="info-page-link" to="/in-stock">Find your next pair</Link>
            <Link className="info-page-link info-page-link-secondary" to="/upcoming">
              See what&apos;s next
            </Link>
            <Link className="info-page-link info-page-link-secondary" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
        <aside className="about-side" aria-label="Our promise">
          <div className="about-sneaker-art" aria-hidden="true">
            <span className="about-art-orbit about-art-orbit-one" />
            <span className="about-art-orbit about-art-orbit-two" />
            <span className="about-art-star">✳</span>
            <span className="about-art-word">GOOD<br />THINGS<br />TAKE<br />HEART.</span>
            <span className="about-art-caption">Built with love for the culture</span>
          </div>
          <div className="about-values">
            <p><span>01</span> Started from scratch</p>
            <p><span>02</span> Made for sneaker people</p>
            <p><span>03</span> Always reaching for quality</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default About;