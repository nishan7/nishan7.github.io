import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                {['/', '/about', '/projects', '/experience', '/contact'].map((path, i) => {
                    const label = ['Home', 'About', 'Projects', 'Experience', 'Contact'][i];
                    return (
                        <li key={path}>
                            <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>
                                {label}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}