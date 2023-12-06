import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>A Modern day mercantile</h3>
          <p>
            Elevate your style with Luxe Vogue's opulent clothing and
            accessories, redefining luxury fashion with timeless classics and
            contemporary couture
          </p>
        </div>
        <div className="footer-section">
          <h3>COMPANY</h3>
          <Link>Visit Us</Link>
          <Link>About Us</Link>
          <Link>Journal</Link>
        </div>
        <div className="footer-section">
          <h3>HELP</h3>
          <Link>Customer Service</Link>
          <Link>Return Policy</Link>
          <Link>Gift Cards</Link>
          <Link>Terms & Conditions</Link>
        </div>
        <div className="footer-section newsletter">
          <h3>NEWSLETTER</h3>
          <p>We send only the best mail.</p>
          <input
            type="email"
            className="email-input"
            placeholder="Email"
            required
          />
          <button className="btn" type="submit">
            Subscribe
          </button>
        </div>
      </div>
      <div className="social-icons">
        <Link>
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </Link>

        <Link>
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </Link>

        <Link>
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </Link>
      </div>
      <div className="copyright">&copy; 2023 Luxe Vogue</div>
    </div>
  );
};

export default Footer;
