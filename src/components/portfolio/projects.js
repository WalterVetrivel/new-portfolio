import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjectCard from './project-card';

const Projects = ({ projects }) => (
  <section className="section projects">
    <div className="section-heading-wrapper projects-heading">
      <h1 className="section-heading">My Projects</h1>
    </div>
    <div className="section-content projects-content">
      {projects.map((project, index) => (
        <React.Fragment key={project.category}>
          <h3 className="projects-category">
            <FontAwesomeIcon icon={project.icon} />
            {project.category}
          </h3>
          <div className="projects-list">
            {project.projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          {index < projects.length - 1 ? <hr /> : null}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default Projects;
