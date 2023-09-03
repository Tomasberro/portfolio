import React from 'react';
import './Me.css';

function Me() {
    return (
        <div className="meContainer" id="me">
            <div className="meContainerInfo">
                <div className="meInfo">
                    <h1>Hello World !</h1>
                    <h3>Hi, I'm Tomas 👋👋</h3>
                    <p>
                        I'm a full-stack developer with two years of experience.<br /><br />
                        My strength is front-end development with React, and back-end with Node js, 
                        since it is what I have worked with the longest.<br /><br />
                        In my last experience I participated in a software factory developing functionalities such as payment system, authentication, crm systems, ecommerce and shopping cart. 
                        The technological stack that I used was Next js, Remix js, Mongo db, prisma, Node js, Redux and Css.
                    </p>
                </div>
                <div className="meImage"></div>
            </div>
        </div>
    )
}

export default Me
