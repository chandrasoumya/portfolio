import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [projects, setProjects] = useState(false);

    const Active = `
    border: 2px solid cyan;
    color: white;
    font-size: x-large;
    text-decoration: none;`

    const Inactive = `
    text-decoration: none;
    color: white;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;`

    const activeStyle = ()=>{
        if (home) {
            document.getElementById("homeLink").style.cssText = Active;
        }
        else {
            document.getElementById("homeLink").style.cssText = Inactive;
        }
        if (about) {
            document.getElementById("aboutLink").style.cssText = Active;
        }
        else {
            document.getElementById("aboutLink").style.cssText = Inactive;
        }
        if (projects) {
            document.getElementById("projectsLink").style.cssText = Active;
        }
        else {
            document.getElementById("projectsLink").style.cssText = Inactive;
        }
    }

    useEffect(()=>{
        activeStyle();
    })

    return (
        <div className="header">
            <div className="logo">
                <img src="./photos/logo.png" alt="logo" />
                <p><span>S</span>oumyadeep <span>C</span>handra</p>
            </div>
            <ul id="ul" >
                <li id="homeLink" onClick={() => {
                    setHome(true);
                    setAbout(false);
                    setProjects(false);
                }}><Link to="/">Home</Link></li>
                <li id="aboutLink" onClick={() => {
                    setHome(false);
                    setAbout(true);
                    setProjects(false);
                }}><Link to="/about">About</Link></li>
                <li id="projectsLink" onClick={() => {
                    setHome(false);
                    setAbout(false);
                    setProjects(true);
                }}><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
    )
}

export default Header;