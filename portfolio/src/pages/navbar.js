import React from "react";
import {Logo } from './logo';
import "../styles/nav.css"

export const Navbar = () => {

    return (
        <div className="navFullPage">
            <Logo/>
            <div className="navbarContainer">
                <div className="navLinks">
                    <a href="http://www.github.com/FullStackJustin" target="/blank"><i className="fa-brands fa-github"></i></a>
                    <br />
                    <a href="https://www.linkedin.com/in/justin-taylor-46132222a/" target="/blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    {/* <a href="/resume">Resume</a> */}
                </div>
            </div>
        </div>
    )

}