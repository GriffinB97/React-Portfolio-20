import React from 'react';
import avatar from '../assets/avatar.jpg'; // Add an avatar image in the assets folder

function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src={avatar} alt="Griffin Baker" className="avatar" />
        <p>
          Hello! I'm Griffin Baker, and I am passionate web developer learning to build dynamic and responsive web applications using modern technologies like React, Node.js, and more.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
