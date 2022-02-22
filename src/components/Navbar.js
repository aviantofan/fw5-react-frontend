import React, { Component } from 'react'
import logo from '../assets/images/logo.png'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className='img-fluid' src={logo} alt="logo" />
          </a>
          <div className="brand">
            <span>V E H I C O O L</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Vehicle</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <div className="toggled-action">
              <a href="#">
                <button className="button-outline mx-3">Login</button>
              </a>
              <a href="#">
                <button className="button-filled">Register</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}