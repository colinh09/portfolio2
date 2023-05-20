import React from 'react';
import './TechStack.css';

function TechStack({title, techs}) {
    return (
        <div className="tech-stack">
            <h3>{title}:</h3>
            <div className="tech-icons">
                {techs.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <div key={index} className="tech-icon">
                            <IconComponent />
                            {/* <span className="tooltip">{tech.name}</span> */}
                        </div>
                    );                    
                })}
            </div>
        </div>
    );
}

export default TechStack;