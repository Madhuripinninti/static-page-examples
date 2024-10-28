import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Import a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Go To Profile</button>
      </div>

      <div className="button-container">
        <Link to="/contact">
          <button className="nav-button">Contact</button>
        </Link>
        <Link to="/about">
          <button className="nav-button">About</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
