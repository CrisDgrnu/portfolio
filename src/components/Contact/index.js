import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';
import Me from '../../assets/images/me.jpg';

const Contact = () => {
    const [letterClass, setletterClass] = useState('text-aniamate');
    const strArray = 'Contact me'.split('');

    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover');
        }, 4000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_x9xn1wl',
                'template_cdyoiz5',
                refForm.current,
                'CeG3rPa1AULt0c1Kv'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={strArray}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - if your
                        project requires a person who is able to build scalable
                        and maintainable solutions or maybe if you have other
                        smaller requests or questions, do not hesitate to
                        contact me using below form.
                    </p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>

                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>

                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subeject"
                                        required
                                    />
                                </li>

                                <li>
                                    <textarea
                                        name="message"
                                        placeholder="Type your message"
                                        required
                                    ></textarea>
                                </li>

                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="contact-card">
                    <img src={Me} alt="Cristian photo" />

                    <div className="contact-data">
                        <h2>Cristian de Gracia Nuero</h2>
                        <p>
                            "Currently I'm working on an international startup"
                        </p>
                        <hr />
                        <div className="contact-widgets">
                            <div className="phone"></div>
                            <div className="email"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
