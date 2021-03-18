import React from "react";
import Scrollspy from 'react-scrollspy'
import Logo from "../assets/images/logo.svg";
import "../stylesheet/Navbar.css";


const Navbar = ({ sticky }) => {
    return (

        <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
            <div className="navbar--logo-holder">
                {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
                <h1> Stick'Me</h1>
            </div>
            <Scrollspy items={ ['about', 'skills', 'project', 'experience'] } currentClassName="is-current">
            <ul className="navbar--link">
                <li className="navbar--link-item"><a href="#about">About</a></li>
                <li className="navbar--link-item"><a href="#skills">Skills</a></li>
                <li className="navbar--link-item"><a href="#project">Project</a></li>
                <li className="navbar--link-item"><a href="#experience">Experience</a></li>
            </ul>
            </Scrollspy>
        </nav>

        )
    };


export default (Navbar);