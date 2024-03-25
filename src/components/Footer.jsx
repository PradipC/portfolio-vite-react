// Footer.js
import React from 'react';
import './style/Footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
             <img src="/src/assets/github_logo.png" alt="GitHub" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/linkdin_logo.png" alt="LinkedIn" /></a>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/stackoverflow_logo.png" alt="Stack Overflow" /></a>
      </div>
    </footer>
  );
};

export default Footer;
