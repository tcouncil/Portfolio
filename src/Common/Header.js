import React from 'react';
import Button from './Button';

export default function Header() {
    return (
        <>
            <header>
                <h1>Travis Council</h1>
                <div className='header-nav'>
                    <Button to='/about' text='About' />
                    <Button to='/projects' text='Projects' />
                    <Button to='/contact' text='Contact' />
                </div>
            </header>
        </>
    )
}