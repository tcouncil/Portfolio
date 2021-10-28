import React from 'react';
import Thinkful from '../images/thinkful.jpg';

export default function Landing() {
    return (
        <>
            <div className='about'>
                <div>
                    <div className='about-q'>
                        <p className='about-p'>After witnessing several coding bootcamps popping up all over the internet, I took the dive into jumpstarting my software engineering skills
                            by joining the Thinkful software engineering immersion course. I decided to contiue my education in Information Systems by attending Front Range Community College
                            pursuing a degree in Database Administration. <em>I'm set to graduate in 2023</em>.</p>
                        <q className='about-p'>Life is a highway of information much like the internet,
                            which might explain why I live most of my life on the internet. My enthusiasm for exploring the web
                            started when I was just 8 years old, when I had my own AOL dialup account and a Windows 95 machine with a whopping 333mhz processor.
                            I had it good. Witnessing the beast of the internet grow each and everyday, I became addicted.</q><br /><br />
                    </div>
                    {/* 
                    <div className='about-duo'>
                        <div className='about-name-pic'>
                            <img className='portrait' src={Twife} alt='Travis & His Wife' />
                            <div className='about-q'>
                                <p>Happily married to a beautiful, supportive and wonderful woman. We were high school sweethearts who tied the knot back in 2018.</p>
                            </div>
                        </div>
                        <div className='about-name-pic'>
                            <img className='portrait' src={Tson} alt='Travis & His Son' />
                            <div className='about-q'>
                                <p>Welcomed a son in November of 2020. Couldn't be happier with the greatest gift a man could receive!</p>
                            </div>
                        </div>
                    </div>
                    <div className='about-duo'>
                        <div className='about-name-pic'>
                            <div className='about-q'>
                                <p>Whenever I have free-time, I like to go out hiking and camping in the beautiful Colorado mountains!</p>
                            </div>
                            <img className='portrait' src={Thike} alt='Travis & His Wife' />
                        </div>
                        <div className='about-name-pic'>
                            <div className='about-q'>
                                <p>I also enjoy just getting out and about. Even if it's just for a quick coffee with a friend!</p>
                            </div>
                            <img className='portrait' src={Tfriend} alt='Travis & His Son' />
                        </div>
                    </div>
                    */}
                </div>
            </div>
            <div className='about' id='certs'>
                <h3>Certifications</h3>
                <div className='about-duo'>
                    <img className='cert' src={Thinkful} alt='Thinkful Certificate' />
                    <div>
                        <a href='https://freecodecamp.org/certification/travis-council/responsive-web-design' target='_blank' rel="noreferrer" >freeCodeCamp • Responsive Web Design</a><br />
                        <a href='https://www.udemy.com/certificate/UC-d2e3ad1c-d8ab-4233-bf9c-238437afe75d/' target='_blank' rel="noreferrer">Udemy • Asynchronous JavaScript</a><br />
                    </div>
                </div>
            </div>
        </>
    )
}