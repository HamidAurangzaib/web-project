import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import './adminnavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <a className="navbar-brand" style={{fontFamily: "sans-serif"}} href="/">
          Shadi Karo
        </a>
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <a className="nav-link1" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link1" href="/about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link1" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link1" href="/contact">
                Contact
              </a>
            </li>
            {/* Add Font Awesome icons */}
            <li className="nav-item mx-2">
              <a className="nav-link1" href="/">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link1" href="/">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            {/* End of Font Awesome icons */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
