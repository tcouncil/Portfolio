import React from 'react';
import Portrait from '../images/tcouncil.png';
import Button from './Button';
import Contact from './Contact';

export default function Landing() {
    return (
        <>
            <div className='landing container'>
                <div className='landing-card'>
                    <img className='portrait' src={Portrait} alt='Portrait of Travis Council' />
                    <hr id="landing-hr" />
                    <p><i>
                        "For forward-thinking businesses seeking a passionate and detail-oriented software developer,
                        I offer expertise in cutting-edge technologies and a commitment to delivering exceptional results.
                        With a deep passion for technology and a keen eye for detail, I bring innovative solutions and
                        meticulous attention to every project. By leveraging my skills, I help businesses thrive in the
                        rapidly evolving digital landscape, ensuring efficient and robust software development that
                        exceeds expectations. Together, let's shape the future with precision and dedication."</i></p>

                    <div className='row'>
                        <div className='col-6'>
                            <h5>Skills</h5>
                            <p>Outline your technical skills, programming languages, frameworks, and tools that you are proficient in. Highlight specific areas where you excel or have a deep understanding.</p>
                        </div>
                        <div className='col-6'>
                            <h5>Background and Education</h5>
                            <p>
                                Provide a summary of your educational background, including degrees, certifications, or relevant coursework. Mention any notable achievements or distinctions during your studies.
                            </p>
                        </div>
                    </div>
                    <hr id="landing-hr" />
                </div>

            </div>
        </>
    )
}