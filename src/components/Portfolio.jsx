import React from 'react';
import Project from './Project';

// Placeholder image URLs for projects
const project1Image = 'https://www.artic.edu/iiif/2/28067/full/843,/0/default.jpg'; // Vincent van Gogh's Starry Night
const project2Image = 'https://www.burgerfuzion.com/wp-content/uploads/2020/04/Classic-Cheeseburger-BurgerFuzion-1.jpg'; // Delicious burger

function Portfolio() {
  const projects = [
    {
      title: 'Starry Night',
      image: project1Image,
      deployedLink: 'https://griffinb97.github.io/Starry-Night/index.html',
      githubLink: 'https://github.com/GriffinB97/Starry-Night',
    },
    {
      title: 'Flavor Direction',
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
