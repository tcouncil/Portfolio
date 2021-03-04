import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to = '#', text = 'Button' }) {
    return (
        <>
            <Link to={to}><button className='button'>{text}</button></Link>
        </>
    )
}