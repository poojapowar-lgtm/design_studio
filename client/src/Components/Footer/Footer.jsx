import React from "react";
import { FaArrowUp } from "react-icons/fa";
// import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
// import socialIconsData from "../socialIconsData";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Top Section */}



      <div className="footer-container">
        <div className="footer-links">
          <img
            className="ft-logo1"
            src="/assets/images/icons/logo.png"
            alt="Logo 1"
          />
          <p className="ft-address">
            MIT Art, Design and Technology University,Rajbaug,  <br />
            Loni Kalbhor, Solapur Highway,
            Pune, 412201. Maharashtra , India
          </p>

        </div>

        <div className="links-section">
          <div className="footer-links">
            <h4>STUDIO</h4>
            <ul>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Services</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>WORK</h4>
            <ul>
              <li>All Project</li>
              <li>Branding</li>
              <li>Digital</li>
            </ul>
          </div>


          <div className="footer-links">
            <h4>CONNECT</h4>
            <ul>
              <li>Instagram</li>
              <li>contact</li>
            </ul>
          </div>

        </div>

      </div>
      <p className="bottom-text">
        MIT-DESIGN STUDIO Pune © 2026. All Rights Reserved. Designed & Developed by
        MIT-ADT Website Department.
      </p>
      {/* back to top button */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}


    </footer>
  );
};

export default Footer;
