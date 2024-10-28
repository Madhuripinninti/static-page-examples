import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import your custom CSS file

const Navigation = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="horizontal-nav"><center>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            </center>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
