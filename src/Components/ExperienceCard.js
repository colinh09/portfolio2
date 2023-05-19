import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({company, jobTitle, duration, techStack, summary}) {
    return (
        <div className="experience-card">
            <h3>{company}</h3>
            <h4>{jobTitle}</h4>
            <h5>{duration}</h5>
            <p><strong>Tech Stack: </strong>{techStack.join(", ")}</p>
            <p>{summary}</p>
        </div>
    );
}

export default ExperienceCard;
