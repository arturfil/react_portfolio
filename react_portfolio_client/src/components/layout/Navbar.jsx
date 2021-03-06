import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

// TODO: import logo

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container">
            <a
              href="/"
              className="navbar-brand elegant btn-landing"
              style={{ color: 'white' }}
            >
              Arturo Filio
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto red-color">
                <li className="nav-item">
                  <Link
                    className="nav-link hov-anim a-links"
                    to="/"
                    style={{ color: 'white' }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link hov-anim a-links"
                    to="/aboutMe"
                    style={{ color: 'white' }}
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link hov-anim a-links"
                    to="/myServices"
                    style={{ color: 'white' }}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/myProjects"
                    className="nav-link hov-anim a-links"
                    style={{ color: 'white' }}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    to="/contactMe"
                    className="nav-link hov-anim a-links"
                    style={{ color: 'white' }}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
