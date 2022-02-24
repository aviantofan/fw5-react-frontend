import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Merapi from '../assets/images/merapi.png'
import TelukBogam from '../assets/images/teluk-bogam.png'
import Bromo from '../assets/images/bromo.png'
import Malioboro from '../assets/images/malioboro.png'
import User from '../assets/images/user-home.png'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

export default class Homepage extends Component {
  state = {
    item: [
      {
        name: 'Merapi',
        location: 'Yogyakarta'
      },
      {
        name: 'Teluk Bogam',
        location: 'Kalimantan'
      },
      {
        name: 'Bromo',
        location: 'Malang'
      },
      {
        name: 'Malioboro',
        location: 'Yogyakarta'
      }
    ]
  }
  render() {
    return (
      <>
        <body>
          <Navbar />
          <header className="header-home">
            <div className="header-content">
              <div className="container">
                <div className="mb-5">
                  <h1 className="heading2">Explore And <br /> Travel</h1>
                </div>
                <div>
                  <p className="text2">
                    Vehicle Finder
                    <div className="mb-5 line2"></div>
                  </p>
                </div>
                <form className="col-sm-12 col-lg-6">
                  <div className="row select-option">
                    <div className="col-sm-5 mb-4 option">
                      <select className="form-select">
                        <option value="">Location</option>
                      </select>
                    </div>
                    <div className="col-sm-5 mb-4 option">
                      <select className="form-select">
                        <option value="">Type</option>
                      </select>
                    </div>
                  </div>
                  <div className="row select-option">
                    <div className="col-sm-5 mb-4 option">
                      <select className="form-select">
                        <option value="">Payment</option>
                      </select>
                    </div>
                    <div className="col-sm-5 mb-5 option">
                      <select className="form-select">
                        <option value="">Date</option>
                      </select>
                    </div>
                  </div>
                  <div className="row select-option">
                    <div className="col-sm-5 option">
                      <button className="button-filled">Explore</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </header>

          <main className="container">
            <section className="destination">
              <div className="row">
                <div className="col">
                  <h2 className="home">Popular in town</h2>
                </div>
                <div className="col">
                  <div className="direction justify-content-center">
                    <Link className="section-link-view mt-2" to="/vehicleType">
                      View all
                      <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="/vehicleDetail">
                      <img className="img-fluid" src={Merapi} alt="Popular-Items" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Merapi</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="/vehicleDetail">
                      <img className="img-fluid" src={TelukBogam} alt="Popular-Items" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Teluk Bogam</h5>
                        <span>Kalimantan</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="/vehicleDetail">
                      <img className="img-fluid" src={Bromo} alt="Popular-Items" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Bromo</h5>
                        <span>Malang</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="/vehicleDetail">
                      <img className="img-fluid" src={Malioboro} alt="Popular-Items" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Malioboro</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="testimonials">
              <h2 className="testimonials">Testimonials</h2>
              <div className="row">
                <div className="col-12 col-lg-6 mt-5 left-testi">
                  <div className="comment">
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p>”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It
                      was an amazing experience to have a ride for wildlife trip!”</p>
                  </div>
                  <div className="profile">
                    <h5>Edward Newgate</h5>
                    <span>Founder Circle</span>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-5 d-flex profile-pic mb-5">
                  <div className="image d-inline-block position-relative">
                    <img src={User} alt="User-Home" />
                    <div className="row ms-auto next-prev">
                      <button className="position-absolute prev"><FaChevronLeft /></button>
                      <button className="position-absolute-left next"><FaChevronRight /></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </body>
      </>
    )
  }
}