import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project }) => (
  <div className="project-card-wrapper">
    <div className="card project-card">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-card-img"
        />
      ) : null}
      <div className="project-card-content">
        <div className="project-card-body">
          <h3 className="project-title">{project.title}</h3>
          {project.client ? (
            <p className="project-client">{project.client}</p>
          ) : project.university ? (
            <p className="project-university">{project.university}</p>
          ) : null}
          <p className="project-description">{project.description}</p>
          <h3 className="project-subtitle">Technology</h3>
          <div className="project-technology">
            {project.technology.map(tech => (
              <p key={tech}>{tech}</p>
            ))}
          </div>
        </div>
        {project.repo || project.demoUrl ? (
          <div className="project-card-footer">
            {project.repo ? (
              <a
                href={project.repo}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faGithub} />
                Repo
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                className="btn btn-main"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faEye} />
                Live Demo
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default ProjectCard;
