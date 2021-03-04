import React from 'react';
import ProjectCard from './ProjectCard';
import PasteType from '../images/project-pt.png';
import Tseudo from '../images/project-tseudo.png';
import Decoder from '../images/project-decoder.png';

export default function Projects() {
    return (
        <>
            <div className='projects-group'>
                <ProjectCard
                    title='pasteType'
                    image={PasteType}
                    description='A small project I put together where you can copy and paste text to test your accuracy and speed. Mainly built to practice lines of code I wanted to memorize.'
                    stack='React Javascript CSS'
                    github='https://github.com/tcouncil/PasteType'
                    live='http://pastetype.councilstudios.com'
                />
                <ProjectCard
                    title='Tseudo'
                    image={Tseudo}
                    description='A casual ongoing project that is a generated platformer. Play your way through the darkness and gain insight to "enhance" your perception. By gaining orbs you gain speed and sight.'
                    stack='Phaser 3 Javascript'
                    github='https://github.com/tcouncil/tseudo'
                    live='http://tseudo.councilstudios.com'
                />
                <ProjectCard
                    title='Decoder Ring'
                    image={Decoder}
                    description='An application that encodes & decodes messages three different ways. I made it for my first capstone project at Thinkful.'
                    stack='Javascript'
                    github='https://github.com/tcouncil/decoder'
                    live='https://tcouncil.github.io/decoder/index.html'
                />
            </div>
            <p className='about'>More Projects Coming Soon!</p>
        </>
    )
}