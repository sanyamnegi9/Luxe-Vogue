import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>A Modern day mercantile</h3>
          <p>
            Thoughtful curiosities for the body & home. Visit us in Boulder,
            Colorado.
          </p>
        </div>
        <div>
          <h3>COMPANY</h3>
          <Link>Visit Us</Link>
          <Link>About Us</Link>
          <Link>Journal</Link>
        </div>
        <div>
          <h3>HELP</h3>
          <Link>Customer Service</Link>
          <Link>Return Policy</Link>
          <Link>Gift Cards</Link>
          <Link>Terms & Conditions</Link>
        </div>
        <div className="newsletter">
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
          <InstagramIcon />
        </Link>

        <Link>
          <FacebookIcon />
        </Link>

        <Link>
          <TwitterIcon />
        </Link>
      </div>
      <div className="copyright">&copy; 2023 Luxe Vogue</div>
    </footer>
  );
};

export default Footer;
