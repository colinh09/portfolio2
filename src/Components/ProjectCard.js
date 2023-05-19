import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

function ProjectCard({name, tags, summary, githubUrl}) {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3>{name}</h3>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub size={22}/>
                </a>
            </div>
            <div className="project-tags">
                {tags.map((tag, index) => <span key={index} className="project-tag">{tag}</span>)}
            </div>
            <p>{summary}</p>
        </div>
    );
}

export default ProjectCard;
