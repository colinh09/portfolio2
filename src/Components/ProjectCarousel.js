import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from './ProjectCard';
import './ProjectCarousel.css';

function ProjectCarousel({projects}) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="project-carousel">
            <Carousel 
                responsive={responsive}
                infinite={true}
                arrows
                centerMode
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </Carousel>
        </div>
    );
}

export default ProjectCarousel;
