import React from "react";
import { Link } from "react-router-dom";

import "./footer.style.css";

export const Footer = () => {
  return (
    <div className="site-footer">
      <div className="footer-top">
        <div className="">
          <h1>Voyage Bliss</h1>
          <p>Choose your destination</p>
        </div>
        <div className="">
          <Link to="#">
            <i class="fa-brands fa-x-twitter"></i>
          </Link>

          <Link to="#">
            <i class="fa-brands fa-square-instagram"></i>
          </Link>
          <Link to="#">
            <i class="fa-brands fa-facebook"></i>
          </Link>
          <Link to="#">
            <i class="fa-brands fa-youtube"></i>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <h4>Projects</h4>
          <a href={"/#"}>Changelog</a>
          <a href={"/#"}>Status</a>
          <a href={"/#"}>License</a>
          <a href={"/#"}>All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href={"/#"}>Github</a>
          <a href={"/#"}>Issues</a>
          <a href={"/#"}>Project</a>
          <a href={"/#"}>Twitter-X</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href={"/#"}>Support</a>
          <a href={"/#"}>Troubleshooting</a>
          <a href={"/#"}>Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href={"/#"}>Terms of Service</a>
          <a href={"/#"}>Privacy Policy</a>
          <a href={"/#"}>License</a>
        </div>
      </div>
    </div>
  );
};
