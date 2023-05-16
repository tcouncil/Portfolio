import React from 'react';
import ImagePH from '../images/project-placeholder.png'

export default function ProjectCard({
    title = 'title',
    description = 'description',
    stack = '#', github = '#', live = '#', image = ImagePH }) {
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <h6>{title}</h6>
                    <a href={github} target='_blank' rel="noreferrer">
                        <img className='mb-1' src={image} alt={title} />
                    </a>
                </div>
                <div className='col-6'>
                    <p>{description}</p>
                    <a href={github} target='_blank' rel="noreferrer" className='button' >Repo</a>
                <p>Tech Stack: {stack}</p>
                </div>
            </div>
        </>
    )
}