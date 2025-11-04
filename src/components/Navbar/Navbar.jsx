import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ✅ Desktop Navbar (unchanged) */}
      <nav
        className={`navbar navbar-expand-lg fixed-top shadow-sm ${
          show ? "nav-show" : "nav-hide"
        }`}
      >
        <div className="container">
          {/* ✅ Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/image/log_hd.png"
              alt="Future Charter Trading Co. Ltd"
              className="me-2 nav-logo"
            />
          </Link>

          {/* ✅ Mobile toggle button */}
          <div
            className="mobile-hamburger d-lg-none"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>

          {/* ✅ Desktop Menu */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navMenu"
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item d-none d-lg-block">
                <NavLink to="/services" className="nav-link">
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item d-none d-lg-block">
                <NavLink to="/contact" className="nav-link">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Overlay Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {/* ✅ Header Row (close on left + logo on right) */}
        <div className="mobile-menu-header">
          <div className="mobile-hamburger" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </div>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/image/log.png" alt="Future Charter Trading Co. Ltd" />
          </Link>
        </div>

        {/* ✅ Menu Links */}
        <div className="mobile-links">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            SERVICES
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
