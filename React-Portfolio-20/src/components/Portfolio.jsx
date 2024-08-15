import React from 'react';
import Project from './Project';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';

function Portfolio() {
  const projects = [
    {
      title: 'Starry Night',
      image: project1Image,
      deployedLink: 'https://griffinb97.github.io/Starry-Night/index.html',
      githubLink: 'https://github.com/GriffinB97/Starry-Night',
    },
    {
      title: 'Flavor direction',
      image: project2Image,
      deployedLink: 'https://the-flavor-direction.onrender.com/',
      githubLink: 'https://github.com/GriffinB97/The-Flavor-Direction',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
