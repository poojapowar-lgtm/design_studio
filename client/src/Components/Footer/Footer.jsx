import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
import socialIconsData from "../socialIconsData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
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
            src="/assets/images/icons/logo.PNG"
            alt="Logo 1"
          />
          <p className="ft-address">
            MIT Art, Design and Technology University,Rajbaug,  <br />
            Loni Kalbhor, Solapur Highway,
            Pune, 412201. Maharashtra , India
          </p>
          <p className="bottom-text">
            MIT-DESIGN STUDIO Pune © 2026. All Rights Reserved. Designed & Developed by
            MIT-ADT Website Department.
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



        {/* <div className="footer-links">
          <div className="footer-social">
            <div className="footer-social-icons">
              {socialIconsData.map(({ url, network, bgColor }, index) => (
                <SocialIcon
                  key={index}
                  className="foot-social-icons"
                  url={url}
                  network={network}
                  bgColor={bgColor}
                />
              ))}
            </div>
          </div>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8228655029525!2d74.02029187595625!3d18.49168107005449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9784f39a613%3A0x189ffd59802ec685!2sMIT%20School%20of%20Food%20Technology%2C%20MIT%20ADT%20University%2C%20Pune!5e0!3m2!1sen!2sin!4v1773135364412!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

        </div> */}

      </div>

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
