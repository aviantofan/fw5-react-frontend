import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-home">
        <div className="container">
          <div className="row text">
            <div className="col">
              <div>
                <img src={logo} alt="Logo" />
                <span className="brand">V E H I C O O L</span>
              </div>
              <div className="description">Plan and book your perfect trip with
                expert advice, travel tips for vehicle
                information from us</div>
              <div>©2022 Vehicool. All rights reserved</div>
            </div>
            <div className="col-md-2">
              <h5>Destination</h5>
              <ul>
                <li>Bali</li>
                <li>Yogyakarta</li>
                <li>Jakarta</li>
                <li>Kalimantan</li>
                <li>Malang</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Vehicle</h5>
              <ul>
                <li>Bike</li>
                <li>Cars</li>
                <li>Motorbike</li>
                <li>Return Times</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Interests</h5>
              <ul>
                <li>Adventure Travel</li>
                <li>Art And Culture</li>
                <li>Wildlife And Nature</li>
                <li>Family Holidays</li>
                <li>Culinary Trip</li>
              </ul>
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