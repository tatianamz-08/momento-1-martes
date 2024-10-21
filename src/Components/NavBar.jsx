// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CLA</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Computer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Laptop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link'><i class="bi bi-search"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
