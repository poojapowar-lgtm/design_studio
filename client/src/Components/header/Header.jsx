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

                {/* Home Icon only on mobile */}
                {item.key === "home" ? (
                  <IoMdHome className="mobile-home-icon" />
                ) : (
                  item.title
                )}

              </Link>
            </li>
          ))}
        </ul>
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