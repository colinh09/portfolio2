import React, { useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import ProjectDetails from '../Components/ProjectDetails';
import projects from '../Json/projectPosts.json';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(projects[0]);

    const projectsByYear = projects.reduce((groups, project) => {
        const year = project.year;
        if (!groups[year]) {
            groups[year] = [];
        }
        groups[year].push(project);
        return groups;
    }, {});

    return (
        <div className="projects">
            <nav className="projects-nav">
                {Object.entries(projectsByYear).sort(([a], [b]) => b - a).map(([year, projects], index) => (
                    <div key={year}>
                        <h3>{year}</h3>
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                className={`projects-nav-item ${project === activeProject ? 'active' : ''}`}
                                onClick={() => setActiveProject(project)}
                            >
                                <div className="project-name-status">
                                    <h2>{project.name} <i>{project.isCompleted ? '' : ' - Work in progress'}</i></h2>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </nav>
            <div className="projects-details">
                <ProjectDetails project={activeProject} />
            </div>
        </div>
    );
};

export default Projects;
