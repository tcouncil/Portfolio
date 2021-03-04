import React from 'react';

export default function Contact() {
    return (
        <>
            <div className="contactForm">
                <form action="https://formspree.io/f/xqkgwwov" method="POST">
                    <p>Fill out this form with your message and I'll get back to you shortly!</p>
                    <div className="contactFormBorder">
                        <label for="user-name">Name</label><br />
                        <input required id="user-name" type="text" name="name" /><br />

                        <label for="user-email">Email</label><br />
                        <input required id="user-email" type="text" name="email" /><br />

                        <label for="user-message">Message</label><br />
                        <textarea required id="user-message" name="message"></textarea><br />

                        <button className='button' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}