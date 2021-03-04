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
                        <p>Full-stack web developer from Northern Colorado.</p>
                        <Button to='/about' text='About' />
                        <Button to='/projects' text='Projects' />
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