import React from 'react';
import { Link } from 'react-router-dom';
import Portrait from '../images/tcouncil.png';
import Button from './Button';


export default function Landing() {
    return (
        <>
            <div className='landing'>
                <div className='landing-name-pic'>
                    <div>
                        <h1>Travis Council</h1>
                        <p><strong>Software Developer</strong> from <strong>Colorado</strong></p>
                        <p>Back in <em>College</em> Pursuing a Degree in <strong>Database Administration</strong></p>
                        <p>Graduating End of <strong>2023</strong></p>
                        <Button to='/about' text='About' />
                        {/*<Button to='/projects' text='Projects' />*/}
                        <Button to='/contact' text='Contact' />
                    </div>
                    <Link to='/about'>
                        <img className='portrait' src={Portrait} alt='Portrait of Travis Council' />
                    </Link>
                </div>
            </div>
        </>
    )
}