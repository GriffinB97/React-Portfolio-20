import React from 'react';

function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img
          src="https://placedog.net/400/400" // URL of a puppy image
          alt="Griffin Baker"
          className="avatar"
        />
        <p>
          Hello! I'm Griffin Baker, and I am a passionate web developer learning to build dynamic and responsive web applications using modern technologies like React, Node.js, and more.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
