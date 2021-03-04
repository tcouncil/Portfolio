import React from 'react';
import ImagePH from '../images/project-placeholder.png'

export default function ProjectCard({
    title = 'title',
    description = 'description',
    stack = '#', github = '#', live = '#', image = ImagePH }) {
    return (
        <>
            <div className='project-card'>
                <h4>{title}</h4>
                <a href={live} target='_blank' rel="noreferrer">
                    <img src={image} alt={title} />
                </a>
                <br />
                <br />
                <a href={github} target='_blank' rel="noreferrer" className='button' >Repo</a>
                <a href={live} target='_blank' rel="noreferrer" className='button' >Live</a>
                <p>{description}</p>
                <p>Tech Stack: {stack}</p>

            </div>
        </>
    )
}