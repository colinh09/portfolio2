import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({company, jobTitle, duration, techStack, summary}) {
    return (
        <div className="experience-card">
            <h3>{company}</h3>
            <h4>{jobTitle}</h4>
            <h5>{duration}</h5>
            <div className="tech-tags">
                {techStack.map((tag, index) => <span key={index} className="tech-tag">{tag}</span>)}
            </div>
            <p>{summary}</p>
        </div>
    );
}

export default ExperienceCard;
