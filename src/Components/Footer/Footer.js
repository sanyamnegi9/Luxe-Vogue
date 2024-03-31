import React, { useEffect, useState } from "react";
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
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      console.error("enter valid email");
      return;
    }

    console.log(email);
  };
  return (
    <footer className="relative bottom-0 flex flex-col w-full px-8 pb-4 pt-12 bg-background-sec gap-8">
      <div className="flex flex-col sm:flex-row gap-8 lg:gap-6 flex-wrap justify-between">
        <div className="w-full sm:max-w-[30rem]">
          <h3 className="mb-4">A Modern day mercantile</h3>
          <p className="text-[.85rem]">
            Elevate your style with Luxe Vogue's opulent clothing and
            accessories, redefining luxury fashion with timeless classics and
            contemporary couture.
          </p>
        </div>
        <div className="w-full sm:w-fit flex flex-col capitalize">
          <h3 className="mb-4">Company</h3>
          <Link className="mb-3 footer-links hover:text-text">Visit us</Link>
          <Link className=" footer-links hover:text-text">about us</Link>
        </div>
        <div className="w-full sm:w-fit  flex flex-col capitalize ">
          <h3 className="mb-4">help</h3>
          <Link className="mb-3 footer-links hover:text-text">
            Customer service
          </Link>
          <Link className="mb-3 footer-links hover:text-text">
            return policy
          </Link>
          <Link className="mb-3 footer-links hover:text-text">shipping</Link>
          <Link className="footer-links hover:text-text">
            terms & conditions
          </Link>
        </div>
        <div className="w-full sm:w-[20rem] flex flex-col  gap-4">
          <h3>Newsletter</h3>
          <p className="text-[.85rem]">Subscribe to our Newsletter.</p>
          <form onClick={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="input w-full"
                required
                pattern={emailPattern}
              />
              <label htmlFor="" id="email" className="label">
                Email
              </label>
            </div>
            <button className="btn primary-btn w-fit max-w-[10rem] px-6 mt-3">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* social icons */}
      <div>
        <Link className="flex gap-4 text-2xl text-sec-text ">
          <FontAwesomeIcon icon={faFacebook} className="hover:text-text" />
          <FontAwesomeIcon icon={faInstagram} className="hover:text-text" />
          <FontAwesomeIcon icon={faTwitter} className="hover:text-text" />
        </Link>
      </div>

      {/* copyright */}
      <div className="text-[.8rem] uppercase">
        &copy; {new Date().getFullYear()} Luxe Vogue. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
