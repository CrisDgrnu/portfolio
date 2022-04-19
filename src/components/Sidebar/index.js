import React, { useState } from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo-sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faHome,
    faEnvelope,
    faBurger,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [active, setActive] = useState(false);
    const [actualPage, setActualPage] = useState('Home');

    const navigate = (navTo) => {
        setActive(false);
        setActualPage(navTo);
    };

    return (
        <>
            <div className={active ? 'nav-bar' : 'nav-bar-closed nav-bar'}>
                <Link className="logo" to="/">
                    <img src={LogoS} alt="logo" />
                    <img
                        className="sub-logo"
                        src={LogoSubtitle}
                        alt="cristian"
                    />
                </Link>

                <nav>
                    <NavLink
                        exact="true"
                        className="nav-link"
                        activeclassname="active"
                        to="/"
                        onClick={() => navigate('Home')}
                    >
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                        <span>Home</span>
                    </NavLink>

                    <NavLink
                        exact="true"
                        activeclassname="active"
                        className="about-link nav-link"
                        to="/about"
                        onClick={() => navigate('About')}
                    >
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                        <span>About</span>
                    </NavLink>

                    <NavLink
                        exact="true"
                        activeclassname="active"
                        className="contact-link nav-link"
                        to="/contact"
                        onClick={() => navigate('Contact')}
                    >
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                        <span>Contact</span>
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/cristian-de-gracia-nuero-4821aa17b/"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                color="#4d4d4e"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/CrisDgrnu"
                        >
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="mobile-navbar">
                <Link className="logo" to="/">
                    <img src={LogoS} alt="logo" />
                </Link>

                <p className="actual-page">{actualPage}</p>
                <button
                    className="burger-button"
                    onClick={() => setActive(true)}
                >
                    <FontAwesomeIcon icon={faBurger} color="#ffd700" />
                </button>
            </div>
        </>
    );
};

export default Sidebar;
