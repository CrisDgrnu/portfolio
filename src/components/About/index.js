import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import jsLogo from '../../assets/images/brands/js.svg';
import javaLogo from '../../assets/images/brands/java.svg';
import pythonLogo from '../../assets/images/brands/python.svg';
import reactLogo from '../../assets/images/brands/react.svg';
import angularLogo from '../../assets/images/brands/angular.svg';
import phoenixLogo from '../../assets/images/brands/phoenix.svg';

const About = () => {
    const [letterClass, setletterClass] = useState('text-aniamate');

    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hi! My name is Cristian, a Computer Science and
                    Software Engineer graduated that has been coding
                    independently for 3 years to improve my skills and
                    learn new things, if you have arrived here looking for
                    a professional and passionate developer, you have came
                    to the right place!
                </p>

                <p>
                    My long term goal is to keep improving my skills to be
                    able to solve whatever challenge I meet. Also I would
                    love to work in a company where the people is something
                    more than a number.
                </p>

                <p>
                    Talking about my daily routine, during the day I'm a
                    Java developer, but during the night I always try to
                    spend some time making my own projects to learn new
                    technolohgies and skills. At the moment I'm so
                    interested in JavaScript, Python and Elixir.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <img src={jsLogo} alt="" />
                    </div>

                    <div className="face2">
                        <div>
                            <img src={javaLogo} alt="" />
                        </div>
                    </div>

                    <div className="face3">
                        <div>
                            <img src={pythonLogo} alt="" />
                        </div>
                    </div>

                    <div className="face4">
                        <div>
                            <img src={angularLogo} alt="angular" />
                        </div>
                    </div>

                    <div className="face5">
                        <div>
                            <img src={reactLogo} alt="" />
                        </div>
                    </div>

                    <div className="face6">
                        <div>
                            <img src={phoenixLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
