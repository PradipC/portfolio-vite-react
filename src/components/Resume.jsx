// Resume.js
import React from 'react';
import './style/Resume.css'; // Import CSS file

const Resume = () => {
  return (
    <section className="page-container" >
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Download my resume:</h3>
        <p><a href="#" download>Resume</a></p>
      </div>
      <div className="resume-section">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>JQuery</li>
          <li>React</li>
        </ul>
      </div>
      <div className="resume-section">
        <h3>Backend Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySql</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
