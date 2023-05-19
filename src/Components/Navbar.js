import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="name">
                Colin Hwang
            </div>
            <div className="links">
                <NavLink 
                    to="/" 
                    className={"nav-link " + (location.pathname === '/' ? "active-link" : "")}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/projects" 
                    className={"nav-link " + (location.pathname === '/projects' ? "active-link" : "")}
                >
                    Projects
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
