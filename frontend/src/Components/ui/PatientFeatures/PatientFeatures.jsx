import React from "react";
import "./PatientFeatures.css"; // Make sure this CSS file is in the same directory

const PatientFeatures = () => {
  return (
    <section id="features-patient" className="section">
      <div className="section-header">
        <h2>Patient Features</h2>
        <p>Everything you need to manage your healthcare journey</p>
      </div>
      <div className="feature-grid">
        <div className="feature-card">
          <i className="fas fa-notes-medical feature-icon"></i>
          <h3>Medical Records</h3>
          <p>Access and manage your complete medical history, prescriptions, and test results in one secure place.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-bell feature-icon"></i>
          <h3>Reminders</h3>
          <p>Never miss an appointment or medication with our smart reminder system.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-video feature-icon"></i>
          <h3>Telemedicine</h3>
          <p>Connect with doctors virtually for consultations from the comfort of your home.</p>
        </div>
      </div>
    </section>
  );
};

export default PatientFeatures;
