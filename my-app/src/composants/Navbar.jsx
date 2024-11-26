import React from "react";
import {NavLink} from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return <nav className="Navbar">
        <NavLink to="/">
            <div className="Nav_Logo">
            <img src="./LOGO (1).png" alt="Logo" />
        </div>
        </NavLink>
        <NavLink to = "/"> 
            <div>Accueil</div>
        </NavLink>
        <NavLink to = "/About">
            <div>A Propos</div>
        </NavLink>
        
    </nav>
}

export default Navbar; 