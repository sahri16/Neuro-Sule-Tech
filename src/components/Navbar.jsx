import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img src="/assets/logo-Borcelle.svg" alt="Logo" /> Neural Soul Tech
        </NavLink>

        {/* Navbar Toggle Button */}
        <button className="navbar-toggler" onClick={() => setIsNavOpen(!isNavOpen)}>
          <span className="navbar-toggler-icon">
            <img src="/assets/menu.png" alt="Menu" height={30} width={30} />
          </span>
        </button>

        {/* Navbar Links */}
        <div className={`navbar-links ${isNavOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About Us</NavLink>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown" ref={dropdownRef}>
              <a href="#services" className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }}>
                Services
              </a>
              <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                <NavLink to="/services/birthday-cake" className="dropdown-item" activeClassName="active">Birthday Cake</NavLink>
                <NavLink to="/services/chocolate-cake" className="dropdown-item" activeClassName="active">Chocolate Cake</NavLink>
                <NavLink to="/services/party-cake" className="dropdown-item" activeClassName="active">Party Cake</NavLink>
                <NavLink to="/services/cup-cake" className="dropdown-item" activeClassName="active">Cup Cake</NavLink>
                <NavLink to="/services/slice-cake" className="dropdown-item" activeClassName="active">Slice Cake</NavLink>
              </div>
            </li>

            <li>
              <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="nav-btn">
            <div className="contect-btn"><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
