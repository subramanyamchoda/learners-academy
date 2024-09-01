import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Link } from 'react-router-dom';

function Header() {
    const navbar = [
        { to1: "/learners-academy/home", name: "Home" },
        { to1: "/learners-academy/About", name: "About" },
        { to1: "/learners-academy/Register", name: "Register" },
        { to1: "/learners-academy/Login", name: "Login" }
    ];
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <img src="images/log.jpeg" className="logo1" width="50px" alt="Logo" />
                <Link to="/home" className="navbar-brand text-white fw-bold fs-4 text-st">
                    Learners Academy
                </Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {navbar.map((nav, index) => (
                            <li className="nav-item text-st" key={index}>
                                <Link 
                                    className="nav-link text-white fw-bold fs-4 text-st" 
                                    to={nav.to1}
                                >
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
