import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-follow">Follow us</p>

      <div className="footer-socials" aria-label="Social media">
        <span className="footer-social-icon" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle className="footer-social-dot" cx="17.5" cy="6.5" r="1" />
          </svg>
        </span>
        <span className="footer-social-icon" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h1.7V1.4C17 1.2 15.8 1 14.4 1 11.2 1 9 2.9 9 6.5V9H6v4h3v8h5Z" />
          </svg>
        </span>
        <span className="footer-social-icon" aria-label="X">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
          </svg>
        </span>
        <span className="footer-social-icon" aria-label="TikTok">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.6 7.2a6.4 6.4 0 0 1-4.1-1.5v8.1a6.1 6.1 0 1 1-5.3-6.1v3.3a2.8 2.8 0 1 0 2 2.7V1h3.3c.2 2.1 1.9 3.8 4.1 4v2.2Z" />
          </svg>
        </span>
      </div>

      <Link className="footer-contact-link" to="/contact">
        Questions? Contact us
      </Link>

      <p className="footer-copyright">
        <span aria-hidden="true">&copy;</span> {currentYear} Kicks
        With Style. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;