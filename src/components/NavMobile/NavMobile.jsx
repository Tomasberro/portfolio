import React from 'react';

import { FaRegTimesCircle } from "react-icons/fa";

import './NavMobile.css';

function hideMenu(){
    setTimeout(()=>{
        document.getElementById('NavMobile').style.display='none';
    },2000)
}

export default function NavMobile() {
  return (
    <div className='menuMobileContainer'>

        <div className='menuMobile'>
            <div id='closeIcon' className='closeIcon' onClick={hideMenu}>
                <FaRegTimesCircle />
            </div>   
            <div><a href="/">Home</a></div>
            <div><a href="#me" onClick={hideMenu}>About</a></div>
            <div><a href="#webWorks" onClick={hideMenu}>Web</a></div>
            {/* <div><a href="#designWorks" onClick={hideMenu}>diseño</a></div> */}
            <div><a href="#contact" onClick={hideMenu}>Contact</a></div>
        </div>

    </div>
  )
}
