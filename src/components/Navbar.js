import React /*{ Component }*/ from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Button from './Button'
import { Navigate } from 'react-router-dom'
import Profile from '../assets/images/profile-image.png'
import { FiMail } from 'react-icons/fi'
import { FaPowerOff } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand text-center" to="/">
          <img className='img-fluid' src={logo} alt="logo" />
          <div className='brand d-inline align-middle'>
            <span className='mx-2'>V E H I C O O L</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
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
          {auth.token !== null && <div className="icon-profile">
            <FiMail />
            <Link to="/profile">
              <img src={Profile} className="img-rounded-circle" alt="profile" />
            </Link>
            <FaPowerOff className='logout' onClick={() => dispatch({ type: 'AUTH_LOGOUT' })} />
          </div>}
          {auth.token === null && <div className="toggled-action">
            <Link to="/login">
              <Button className="outline mx-3">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="filled">Register</Button>
            </Link>
          </div>}
        </div>
      </div>
    </nav >
  )
}

export default Navbar