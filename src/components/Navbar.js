import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: 'linear-gradient(90deg, #1f4037, #99f2c8)', // Gradient background
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid">
        {/* Brand Logo and Name */}
        <Link
          className="navbar-brand text-white fw-bold"
          to="/"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '40px',
              height: '40px',
              marginRight: '10px',
              borderRadius: '50%',
              border: '2px solid white',
            }}
          />
          Dashboard
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'white' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/settings">
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/logout"
                style={{
                  backgroundColor: '#e63946',
                  borderRadius: '20px',
                  padding: '5px 15px',
                  fontWeight: 'bold',
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
