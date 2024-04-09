// components/Projects.js

import React from 'react';

function Projects() {
  // Example project data
  const projects = [
    { id: 1, title: 'Sudoku', description: 'simple Sudoku Game using HTML, CSS, JavaScript', link: 'https://github.com/sidharthsherla/Sudoku' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', link: 'https://example.com/project2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', link: 'https://example.com/project3' },
    // Add more project data as needed
  ];

  // Function to redirect to project link
  const redirectToLink = (link) => {
    window.location.href = link;
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card" onClick={() => redirectToLink(project.link)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
