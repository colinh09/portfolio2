import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './ProjectDetails.css';
import Section from './Section'

const ProjectDetails = ({ project }) => (
    <div className="details-content">
        <div className="details-header">
            <div className="details-title">
                <h1>{project.name}</h1>
            </div>
            {project.githubLink && 
            <div className="details-github-link">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30}/>
                </a>
            </div>}
        </div>
        <div className="details-tech-stack">
            {project.technologies.map((tech, index) => (
                <div key={index} className="details-tech-item">{tech}</div>
            ))}
        </div>
        <div className="details-description">
            {project.sections.map((section, index) => (
                <Section key={index} section={section} />
            ))}
        </div>
    </div>
);

export default ProjectDetails;
