import React from "react";
import { NavLink } from "react-router-dom";
import "../style/footer.css"; // Ensure this file exists

function Footer() {
  return (
    <footer>
      <video autoPlay loop muted playsInline className="background-video-footer">
        <source src="/assets/159052-818026310_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-footer"></div>
      <div className="footer-content">
        <div className="top-footer">
          <div className="footer-logo">
            <img src="/assets/logo-Borcelle.svg" alt="Logo" />
            <p>
              Transforming Ideas into Digital Excellence. Elevate your online
              presence with our innovative solutions and strategic digital
              services.
            </p>
            <div className="social-icon">
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-facebook"></i>
              <i className="bx bxl-telegram"></i>
              <i className="bx bxl-linkedin"></i>
              <i className="bx bxl-instagram"></i>
            </div>
          </div>

          <div className="footer-text">
            <div className="footer-service ser-com">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">WordPress Website</a></li>
                <li><a href="#">E-commerce Solutions</a></li>
                <li><a href="#">Shopify Store</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Graphic Designing</a></li>
                <li><a href="#">UI/UX Designing</a></li>
              </ul>
            </div>
            <div className="footer-company ser-com">
              <h3>Company</h3>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="bottom-footer">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
