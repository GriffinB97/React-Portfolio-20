import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        <a href="#" onClick={(e) => e.preventDefault()}>Download My Resume</a>
        {/* Will update with one later */}
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
        {/* Will update with more later */}
      </ul>
      <p>Resume will be updated later. Please check back soon!</p>
    </section>
  );
}

export default Resume;
