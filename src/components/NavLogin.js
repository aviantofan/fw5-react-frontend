import React, { Component } from 'react';
import Logo from '../assets/images/logo.png';
import Profile from '../assets/images/profile-image.png';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';

export default class NavLogin extends Component {
  render() {
    return (
      <>
        <body>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link className="navbar-brand text-center" to="/">
                <img src={Logo} alt="logo" />
                <div className="brand brand d-inline align-middle">
                  <span className='mx-2'>V E H I C O O L</span>
                </div>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/vehicleType">Vehicle</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/history">History</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">About</Link>
                  </li>
                </ul>
                <div className="icon-profile">
                  <FiMail />
                  <Link to="/profile">
                    <img src={Profile} className="img-rounded-circle" alt="profile" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </body>
      </>
    );
  }
}
