import React from "react";
import "./Stats.css"; // Make sure this CSS file is present in the same directory

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Registered Doctors</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>Partner Hospitals</p>
        </div>
        <div className="stat-item">
          <h3>50,000+</h3>
          <p>Happy Patients</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
