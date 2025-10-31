import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ Show navbar on scroll up, hide on scroll down
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
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm ${
        show ? "nav-show" : "nav-hide"
      }`}
    >
      <div className="container">
        {/* ✅ Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://futurecharter-ksa.com/wp-content/uploads/2024/12/Future-Charter-Trading-Company-Saudi-Arabia-Logo.png"
            alt="Future Charter Trading Co. Ltd"
            className="me-2 nav-logo"
          />
        </Link>

        {/* ✅ Mobile 3 lines */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Menu items */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
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
            {/* These only show on desktop */}
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
  );
};

export default Navbar;
