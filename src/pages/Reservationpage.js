import React, { Component } from 'react'
import Footer from '../components/Footer'
import Fixie from '../assets/images/fixie-reserved.png'
import { FaChevronLeft, FaPlus, FaMinus } from 'react-icons/fa'

export default class Reservationpage extends Component {
  render() {
    return (
      <>
        <body>
          <main className="container">
            <section className="back">
              <div>
                <a href="vehicle-detail.html">
                  <FaChevronLeft />
                </a>
                <span>Reservation</span>
              </div>
            </section>

            <section className="preview">
              <div className="row pt-5">
                <div className="col">
                  <img src={Fixie} alt="Vehicle Detail" />
                </div>
                <div className="col">
                  <div className="desc">
                    <h2>Fixie-Gray Only</h2>
                    <p className="text-muted">Yogyakarta</p>
                  </div>
                  <div className="status-vehicle mb-3 d-flex flex-column">
                    <span className="text-danger mb-3 fw-bold">No prepayment</span>
                  </div>
                  <div className="day d-flex flex-row justify-content-between align-items-center pt-3">
                    <div className="col">
                      <button className="minus"><FaMinus /></button>
                    </div>
                    <div className="col-md-8">
                      <div className="count">2</div>
                    </div>
                    <div className="col">
                      <button className="plus"><FaPlus></i></button>
                    </div>
                  </div>
                  <div className="status-vehicle mb-3 pt-5 d-flex flex-column">
                    <span className="mb-3 fw-bold">Reservation Date :</span>
                  </div>
                  <div className="col-sm-5 mb-4">
                    <select className="form-select">
                      <option value="">Select Date</option>
                    </select>
                  </div>
                  <div className="col-sm-5 mb-4">
                    <select className="form-select">
                      <option value="">1 Day</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <section className="semi-footer">
              <div className="row mt-4">
                <div className="col mb-4">
                  <a href="payment.html">
                    <button className="button-filled w-100">Pay now : Rp. 178.000</button>
                  </a>
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
