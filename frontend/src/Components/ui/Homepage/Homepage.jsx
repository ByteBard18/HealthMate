import React from "react";
import "./Features.css"; // Make sure this CSS file is present in the same directory

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="section-header">
        <h2>Our Features</h2>
        <p>Discover everything you can do with HealthCare Hub</p>
      </div>
      <div className="feature-grid">
        <div className="feature-card">
          <i className="fas fa-user-md feature-icon"></i>
          <h3>Find Doctors</h3>
          <p>
            Search and connect with experienced healthcare professionals in
            your area. Read reviews and book appointments instantly.
          </p>
        </div>
        <div className="feature-card">
          <i className="fas fa-hospital feature-icon"></i>
          <h3>Hospital Directory</h3>
          <p>
            Comprehensive database of hospitals with detailed information,
            specialties, and emergency services.
          </p>
        </div>
        <div className="feature-card">
          <i className="fas fa-calendar-check feature-icon"></i>
          <h3>Easy Appointments</h3>
          <p>
            Schedule and manage your medical appointments with just a few
            clicks. Get reminders and updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

