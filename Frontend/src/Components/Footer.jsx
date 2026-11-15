import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-follow">Follow us</p>

      <div className="footer-socials" aria-label="Social media">
        <span className="footer-social-icon social-instagram" role="img" aria-label="Instagram" />
        <span className="footer-social-icon social-facebook" role="img" aria-label="Facebook" />
        <span className="footer-social-icon social-x" role="img" aria-label="X" />
        <span className="footer-social-icon social-tiktok" role="img" aria-label="TikTok" />
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