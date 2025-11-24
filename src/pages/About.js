import React from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/images/about1.jpeg";
import about2 from "../assets/images/about2.jpeg";
import "./About.css";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="about-page">

      {/* BREADCRUMB */}
      <div className="breadcrumb-section">
        <div className="breadcrumb">
          <Link to="/">HOME</Link> <span>&gt;</span> <span>ABOUT</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h2>OUR STORY</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br></br>  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br></br> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  <br></br>in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="about-img">
            <img src={about1} alt="About" />
          </div>
        </div>
      </section>

      <section className="our-journey">
        <div className="container">
          <h2>JOURNY START FROM </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br></br>  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br></br> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  <br></br>in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="about-img">
            <img src={about2} alt="About" />
          </div>
        </div>
      </section>

      { /* 2020 */}
      <section className="twenty-twenty">
        <div className="container">
          <h2>2020</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br></br>  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br></br> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  <br></br>in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>
      {/* FOOTER */}
        <Footer />
    </div>
  );
};

export default About;