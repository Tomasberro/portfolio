import React from 'react';
import './Footer.css';
import git from '../../assets/redes/git.png';
import linkedin from '../../assets/redes/linkedin.png';
import twitter from '../../assets/redes/twitter.png';
import whatsapp from '../../assets/redes/whatsapp.png';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerMe">
                 &copy; All rights reserved Tomas Berrotaran 2023
            </div>
            
            <div className="footerSocialMedia">
                <div className="footerRed">
                    <a href="https://github.com/Tomasberro" target="_blank" rel="noreferrer">
                        <img src={git} alt="GitHub" className="hvr-grow-shadow"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tomás-berrotarán-dev/?locale=en_US" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="Linkedin" className="hvr-grow-shadow"/></a>
                    <a href="https://twitter.com/tomiberrotaran" target="_blank" rel="noreferrer">
                        <img src={twitter} alt="Twitter" className="hvr-grow-shadow"/>
                    </a>
                    <a href="https://wa.me/5493516435714" target="_blank" rel="noreferrer">
                        <img src={whatsapp} alt="Whatsapp" className="hvr-grow-shadow"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
