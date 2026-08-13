import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { navMenus } from "./navMenus";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">

      {/* Mobile Hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <RxHamburgerMenu />
      </button>

      {/* Logo 1 */}
      <Link to="/" className="header-logo-link">
        <img
          src="/assets/images/icons/logo.png"
          alt="Logo"
          className="logo1"
        />
      </Link>

      {/* Desktop / Main Navigation */}
      <nav className={`nav-section ${menuOpen ? "mobile-menu-open" : ""}`}>

        {/* Mobile Close Button */}
        <button
          className="mobile-close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <IoClose />
        </button>

        <ul className="main-navbar">
          {navMenus.map((item) => (
            <li key={item.key}>
              <Link to={item.to} onClick={closeMenu}>
                {item.key === "home" ? (
                  <IoMdHome className="mobile-home-icon" />
                ) : (
                  item.title
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Map */}
        <div className="mobile-map">
          <p> MIT-ADT Campus, Rajbaugh, Solapur – Pune Highway Near Bharat
            Petrol Pump, Loni-Kalbhor, Maharashtra – 412201</p>
          <iframe
            className="map"
            title="Map location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8228655029525!2d74.02029187595625!3d18.49168107005449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9784f39a613%3A0x189ffd59802ec685!2sMIT%20School%20of%20Food%20Technology%2C%20MIT%20ADT%20University%2C%20Pune!5e0!3m2!1sen!2sin!4v1773135364412!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </nav>

      {/* Right Logo */}
      <div className="logo-section">
        <img
          src="/assets/images/icons/logo2.avif"
          alt="Logo2"
          className="logo2"
        />
      </div>

    </header>
  );
};

export default Header;