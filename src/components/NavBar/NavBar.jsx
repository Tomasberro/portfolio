import React from 'react';
import logo from '../../assets/Logo-Code-2.png';
import { FaBars } from "react-icons/fa";
import logo192 from '../../assets/logo192.png';

import './NavBar.css'

function showMenu(){
    document.getElementById('NavMobile').style.display='block';
    document.getElementById('menuMobileContainer').style.left='0';
}

function NavBar() {
    return (
        <div className="navBarContainer">

            <div className="navBarLogo">
                <img src={logo192} alt="logo" />
                <div className="navBarName">
                <h2 className='tomas'>Tomas Berrotaran</h2>
                <h3 className='fullstack'>Full Stack Developer</h3>
                </div>
            </div>

            <div className='mobileIcon' onClick={showMenu}>
                <FaBars />
            </div>

            <div className="navBarMenu">
                <a href="/">Home</a>
                <a href="#me">About</a>
                <a href="#webWorks">Web</a>
                {/* <a href="#designWorks">diseño</a> */}
                <a href="#contact">Contact</a>
            </div>

        </div>
    )
}

export default NavBar
