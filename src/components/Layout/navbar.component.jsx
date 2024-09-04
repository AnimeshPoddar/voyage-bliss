import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.style.css";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="site-icon">Voyage Bliss</h1>
      <div className="menu-icons">
        <i
          onClick={() => setDrawerOpen(!drawerOpen)}
          className={
            !drawerOpen ? "fa-solid fa-bars-staggered" : "fa-solid fa-xmark"
          }
        ></i>
      </div>

      <ul className={drawerOpen ? "navbar-links active" : "navbar-links"}>
        <li>
          <Link className="link" to="/">
            <i className="fa-solid fa-house-chimney"></i>Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about-us">
            <i className="fa-solid fa-circle-info"></i>About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/services">
            <i className="fa-solid fa-briefcase"></i>Services
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact-us">
            <i className="fa-regular fa-id-badge"></i>Contact Us
          </Link>
        </li>
        <li>
          <Link className="signup-link" to="/sign-up">
            <i className="fa-regular fa-id-badge"></i>Sign Up
          </Link>
        </li>
        {/* <button className="sign-up-button">Sign Up</button> */}
      </ul>
    </nav>
  );
};
