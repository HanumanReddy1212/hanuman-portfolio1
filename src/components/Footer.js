import React from 'react';
import { FaHome, FaMailBulk, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './FooterStyles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <FaHome size={20} style={{ color: 'teal' }} />
          <p>Irving, Texas</p>
        </div>
        <div className="footer-item">
          <FaPhone size={20} style={{ color: 'teal' }} />
          <p>425-500-8216</p>
        </div>
        <div className="footer-item">
          <FaMailBulk size={20} style={{ color: 'teal' }} />
          <p>hsolleti@asu.edu</p>
        </div>
        <div className="footer-item">
          <FaLinkedin size={20} style={{ color: 'teal' }} />
          <a href="https://www.linkedin.com/in/hanumanreddy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-item">
          <FaGithub size={20} style={{ color: 'teal' }} />
          <a href="https://github.com/HanumanReddy1212" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
