import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Left Section - Blog Info */}
      <div className="footer-section about">
        <h2 className="blog-name">
          <span className="icon">The</span> Siren
        </h2>
        <p className="blog-description">
          The Siren is an informational website published on the World Wide Web for providing details of different categories.
        </p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* Center Section - Links */}
      <div className="footer-section links">
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bollywood">Bollywood</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/hollywood">Hollywood</Link></li>
            <li><Link to="/fitness">Fitness</Link></li>
            <li><Link to="/food">Food</Link></li>
          </ul>
        </div>
      </div>
        <div className="resources">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Contact us</li>
          </ul>
        </div>

      {/* Right Section - Message and Back to Top */}
      <div className="footer-section message">
        <p className="message-text">Get Ready to Enjoy on the Blog-Machine !!!</p>
        <button onClick={handleBackToTop} className="back-to-top">
          <i className="fas fa-arrow-up"></i> Back To Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
