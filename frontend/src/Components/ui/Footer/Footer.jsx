import React from "react";
import "./Footer.css"; // Import the corresponding CSS file

const Footer = () => {
  return (
    <footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Find Doctors</a></li>
            <li><a href="#">Hospital Directory</a></li>
            <li><a href="#">Emergency Services</a></li>
            <li><a href="#">Book Appointment</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><i className="fas fa-phone"></i> 24/7 Helpline: 1800-123-4567</li>
            <li><i className="fas fa-envelope"></i> support@healthcarehub.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
