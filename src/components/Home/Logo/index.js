import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoS from '../../../assets/images/logo-s.png';
import './index.scss';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        gsap.timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 5,
            });

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        );
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            {/* <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            /> */}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42.45 52.42">
                <g id="svg-container-1" className="svg-container">
                    <path
                        ref={outlineLogoRef}
                        className="cls-1"
                        d="M23,52.3H17.91a18.14,18.14,0,0,1-9.33-2.36,16.06,16.06,0,0,1-6.24-6.68,21.63,21.63,0,0,1-2.22-10v-14a21.61,21.61,0,0,1,2.22-10A16.11,16.11,0,0,1,8.58,2.5,18.06,18.06,0,0,1,17.91.12h5.73M21.22,44.75l1.07-.4A19.38,19.38,0,0,0,26,41.54a11.24,11.24,0,0,0,2.23-4.43h7.35m0-21.8H28.18A11.5,11.5,0,0,0,26,11a11,11,0,0,0-3.68-2.9l-1.18-.43"
                    />
                    <path
                        ref={outlineLogoRef}
                        className="cls-1"
                        d="M15.35,49.94a15.93,15.93,0,0,1-6.24-6.68,21.63,21.63,0,0,1-2.22-10v-14a21.61,21.61,0,0,1,2.22-10,16,16,0,0,1,6.24-6.7A18,18,0,0,1,24.68.12,17.49,17.49,0,0,1,32.77,2a17.13,17.13,0,0,1,6.17,5.32,20,20,0,0,1,3.35,8H35A11.37,11.37,0,0,0,32.71,11,10.9,10.9,0,0,0,29,8.14a10.3,10.3,0,0,0-9.84.49,10.07,10.07,0,0,0-3.66,4.24,14.53,14.53,0,0,0-1.3,6.34v14a14.58,14.58,0,0,0,1.3,6.33,9.65,9.65,0,0,0,9.14,5.73,10.56,10.56,0,0,0,4.38-.95,10.28,10.28,0,0,0,3.65-2.81A11.12,11.12,0,0,0,35,37.11h7.34a19.85,19.85,0,0,1-3.37,8,17.31,17.31,0,0,1-6.19,5.33,17.51,17.51,0,0,1-8,1.88A18.12,18.12,0,0,1,15.35,49.94Z"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Logo;
