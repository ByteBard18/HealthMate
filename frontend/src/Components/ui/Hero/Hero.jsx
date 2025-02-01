import React from "react";
import "./Hero.css"; // Import the corresponding CSS file

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Your Complete Healthcare Solution</h1>
          <p>
            Experience healthcare like never before. Connect with doctors, find
            hospitals, manage appointments, and access your medical records - all
            in one place.
          </p>
        </div>
        <i className="fas fa-chevron-down scroll-indicator"></i>
      </div>
    </section>
  );
};

export default Hero;