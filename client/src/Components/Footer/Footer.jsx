import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            src="/assets/images/icons/logo_white.png"
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
              <li>
                <Link to="/about-us">About Us</Link>
              </li>

              <li>
                <Link to="/about-us">Our Team</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>WORK</h4>
            <ul>
              <li>
                <Link to="/work">All Projects</Link>
              </li>

              <li>
                <Link to="/work">Branding</Link>
              </li>

              <li>
                <Link to="/work">Industrial Design</Link>
              </li>
            </ul>
          </div>


          <div className="footer-links">
            <h4>CONNECT</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/mitiddesignstudio?igsi=MWFzczYyc2U4b3hzbA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                 <Link to="/contact">contact</Link></li>
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
