import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ menu toggle

  // ✅ Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
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
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

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
  {/* Close button */}
  <div className="mobile-close" onClick={() => setMenuOpen(false)}>
    ×
  </div>

  {/* ✅ Logo at the top */}
  <div className="mobile-logo">
    <Link to="/" onClick={() => setMenuOpen(false)}>
      <img
        src="/image/log.png"
        alt="Future Charter Trading Co. Ltd"
        className="mobile-logo-img"
      />
    </Link>
  </div>

  {/* ✅ Menu links */}
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

    </>
  );
};

export default Navbar;
