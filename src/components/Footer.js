import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row gx-0">
            <div className="col desc">
              <div className='row d-inline-block'>
                <div className='col'>
                  <Link to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                  <span className="brand align-middle mx-3">V E H I C O O L</span>
                </div>
                <div className="col description">Plan and book your perfect trip with
                  expert advice, travel tips for vehicle
                  information from us</div>
              </div>
            </div>
            <div className='col d-block p-2'>
              <div className='row d-flex '>
                <div className="col-md-4 destination">
                  <h5>Destination</h5>
                  <ul>
                    <li>Bali</li>
                    <li>Yogyakarta</li>
                    <li>Jakarta</li>
                    <li>Kalimantan</li>
                    <li className='mb-3'>Malang</li>
                  </ul>
                </div>
                <div className="col-md-4 vehicle">
                  <h5>Vehicle</h5>
                  <ul>
                    <li>Bike</li>
                    <li>Cars</li>
                    <li>Motorbike</li>
                    <li>Return Times</li>
                    <li className='mb-3'>FAQs</li>
                  </ul>
                </div>
                <div className="col-sm-4 interest">
                  <h5>Interest</h5>
                  <ul>
                    <li>Adventure Travel</li>
                    <li>Art And Culture</li>
                    <li>Wildlife And Nature</li>
                    <li>Family Holidays</li>
                    <li className='mb-3'>Culinary Trip</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col copyright'>
              <div>©2022 Vehicool. All rights reserved</div>
            </div>
          </div>
          <div className="link-social">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </footer>
    )
  }
}