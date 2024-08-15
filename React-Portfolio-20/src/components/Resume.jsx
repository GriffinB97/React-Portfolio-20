import React from 'react';
import resumePDF from '../assets/your-resume.pdf'; // resume PDF here

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        <a href={resumePDF} download="Would go here">Download My Resume</a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>HTML & CSS</li>
        <li>SQL & NoSQL</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
}

export default Resume;
