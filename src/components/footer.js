import React from "react";
import "./footer.css";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">  
          <h2 className="text-[20px] font-semibold tracking-wide">Shion House</h2>
          <p1>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </p1>

          <div className="footer-social">
            <span><FaTwitter /></span>
            <span><FaFacebookF /></span>
            <span><FaPinterestP /></span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick links</h3>
          <ul>
            <li>Image Licensin</li>
            <li>Style Guide</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Shop Category</h3>
          <ul>
            <li>Image Licensin</li>
            <li>Style Guide</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Partners</h3>
          <ul>
            <li>Image Licensin</li>
            <li>Style Guide</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="footer-col">
          <h3>Get in touch</h3>
          <p>(89) 982–278 356</p>
          <p>demo@colorlib.com</p>
          <p>67/A, Colorlib, Green road, NYC</p>
        </div>

      </div>

      <p className="footer-copy">
        Copyright ©2025 All rights reserved | This template is made with 💜 by Colorlib
      </p>
    </footer>
  );
};

export default Footer;
