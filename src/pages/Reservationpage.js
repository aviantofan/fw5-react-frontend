import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navlogin from '../components/NavLogin'
import Fixie from '../assets/images/fixie-reserved.png'
import { FaChevronLeft, FaPlus, FaMinus } from 'react-icons/fa'

export default class Reservationpage extends Component {
  render() {
    return (
      <>
        <body>
          <Navlogin />
          <main className="container">
            <section className="back">
              <div className='pt-3'>
                <Link to="/vehicles/:id">
                  <FaChevronLeft />
                </Link>
                <span>Reservation</span>
              </div>
            </section>

            <section className="preview">
              <div className="row pt-5">
                <div className="col-8 picture">
                  <img src={Fixie} className="img-fluid" alt="Vehicle Detail" />
                </div>
                <div className="col">
                  <div className="desc">
                    <h2>Fixie-Gray Only</h2>
                    <p className="text-muted">Yogyakarta</p>
                  </div>
                  <div className="status-vehicle mb-3 d-flex flex-column">
                    <span className="text-danger mb-3 fw-bold">No prepayment</span>
                  </div>
                  <div className="day d-flex row justify-content-between align-items-center">
                    <div className="col">
                      <button className="minus"><FaMinus /></button>
                    </div>
                    <div className="col">
                      <div className="count">2</div>
                    </div>
                    <div className="col">
                      <button className="plus"><FaPlus /></button>
                    </div>
                  </div>
                  <div className="status-vehicle mb-3 pt-5 d-flex flex-column">
                    <span className="mb-3 fw-bold">Reservation Date :</span>
                  </div>
                  <div className='col'>
                    <div className='row'>
                      <div className="col-12 mb-4">
                        <select className="form-select w-100">
                          <option value="">Select Date</option>
                        </select>
                      </div>
                      <div className="col-12 mb-4">
                        <select className="form-select w-100">
                          <option value="">1 Day</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="semi-footer">
              <div className="row mt-4">
                <div className="col mb-4">
                  <Link to="/payment">
                    <button className="button-filled w-100">Pay now : Rp. 178.000</button>
                  </Link>
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
