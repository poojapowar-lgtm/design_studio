import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { navMenus } from "./navMenus";

const Header = () => {
  return (
    <header className="header">

      {/* Desktop Nav */}
      <nav className="nav-section">
        <ul className="main-navbar">
          {navMenus.map((item) => (
            <li key={item.key}>
              <Link to={item.to}>
                {item.key === "home" ? (
                  <img
                    src="/assets/images/icons/logo.PNG"
                    alt="Logo"
                    className="logo1"
                  />
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
          alt="Logo 2"
          className="logo2"
        />
      </div>

    </header>
  );
};

export default Header;