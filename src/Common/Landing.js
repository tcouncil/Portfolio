import React from 'react';
import { Link } from 'react-router-dom';
import Portrait from '../images/tcouncil.png';
import Button from './Button';
import Contact from './Contact';
import Slideshow from './Slideshow';

import Showcase_1 from '../images/project-decoder.png'
import Showcase_2 from '../images/project-placeholder.png'
import Showcase_3 from '../images/project-pt.png'
import Showcase_4 from '../images/project-tseudo.png'

export default function Landing() {
    const images = [
        {
            image: Showcase_1,
            title: 'Decoder',
            description: 'A small project For the Thinkful Bootcamp',
            stack: '',
            repo: '',
            live: ''
        },
        {
            image: Showcase_2,
            title: 'Placeholder',
            description: 'A small project For the Thinkful Bootcamp',
            stack: '',
            repo: '',
            live: ''
        },
        {
            image: Showcase_3,
            title: 'Pastetype',
            description: 'A small project For the Thinkful Bootcamp',
            stack: '',
            repo: '',
            live: ''
        },
        {
            image: Showcase_4,
            title: 'Placeholder',
            description: 'A small project For the Thinkful Bootcamp',
            stack: '',
            repo: '',
            live: ''
        }
    ];

    return (
        <>
            <div className='landing'>
                <div className='landing-card'>
                    <img className='portrait' src={Portrait} alt='Portrait of Travis Council' />
                    <h1>Travis Council</h1>
                    <hr id="landing-hr" />
                    <p><b>Recent Graduate with a Strong Foundation in Database Administration and Programming based in Denver, CO.</b></p>
                    <p><i>
                        "I recently graduated with an Associates of Applied Science in Database Administration from Front Range Community College in Spring 2023.
                        Additionally, I hold a programming certificate obtained from a prestigious programming bootcamp in May of 2021.
                        With this solid educational background and passion for technology, I bring a fresh perspective and an array of skills to the table."</i></p>

                    <div className='row'>
                        <div className='col-6'>
                            <h5 className='mb-0'>Showcase</h5>
                            <Slideshow images={images} />
                        </div>
                        <div className='col-6'>
                            <h5 className='mb-0'>Contact</h5>
                            <Contact />
                        </div>
                    </div>
                    <hr id="landing-hr" />
                    <Button to='/about' text='About' />
                </div>

            </div>
        </>
    )
}