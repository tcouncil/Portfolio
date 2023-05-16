import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='project-card'>
            <ProjectCard
                title={images[currentIndex].title}
                image={images[currentIndex].image}
                description={images[currentIndex].description}
                stack={images[currentIndex].stack}
                github={images[currentIndex].repo}
            />
            <button className='button' onClick={goToPrevious}>&lt;</button>
            <button className='button' onClick={goToNext}>&gt;</button>
        </div>


    );
};

export default Slideshow;
