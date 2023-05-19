import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/'); // Start with Home as active

    return (
      <nav className="navbar">
        <div className="name">
          Colin Hwang
        </div>
        <div className="links">
          <NavLink 
            to="/" 
            onClick={() => setActiveLink('/')}
            className={"nav-link " + (activeLink === '/' ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            onClick={() => setActiveLink('/projects')}
            className={"nav-link " + (activeLink === '/projects' ? "active-link" : "")}
          >
            Projects
          </NavLink>
        </div>
      </nav>
    );
};

export default Navbar;
