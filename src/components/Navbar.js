import React /*{ Component }*/ from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Profile from '../assets/images/profile-image.png';
import { FiMail } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import noImage from '../assets/images/no-image.jpg';

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    dispatch({ type: 'AUTH_LOGOUT' });
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      {auth.token === null && <div className="container d-flex align-items-center">
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
              <Link className="nav-link" to="">About</Link>
            </li>
          </ul>
          <div className="toggled-action" >
            <Link to="/login">
              <Button className="outline mx-3">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="filled">Register</Button>
            </Link>
          </div>
        </div>
      </div>}

      {auth.token !== null && <div className="container d-flex align-items-center">
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
          <div className="icon-profile">
            <FiMail />
            <Link to="/profile">
              <img src={auth.userData.image? auth.userData.image:noImage} className="img-rounded-circle" alt="profile" />
            </Link>
            <FaPowerOff className='logout' onClick={onLogout} />
          </div>
        </div>
      </div>}
    </nav >
  );
};

export default Navbar;