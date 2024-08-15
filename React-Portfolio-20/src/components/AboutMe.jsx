import React from 'react';
import avatar from '../assets/avatar.jpg'; // Add an avatar image in the assets folder

function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src={avatar} alt="Your Name" className="avatar" />
        <p>
          Hello! I'm [Your Name], a passionate web developer with experience in building dynamic and responsive web applications using modern technologies like React, Node.js, and more. I love solving problems, learning new skills, and sharing my knowledge with the community. In my free time, I enjoy working on open-source projects, reading tech blogs, and exploring new tools and frameworks.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
