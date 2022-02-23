import React, { Component } from 'react'
import Footer from '../components/Footer'
import Payment from '../assets/images/payment.png'
import { FaChevronLeft } from 'react-icons/fa'

export default class Paymentpage extends Component {
  render() {
    return (
      <>
        <body>
          <main className="container">
            <section className="back">
              <div>
                <a href="#">
                  <FaChevronLeft />
                </a>
                <span>Payment</span>
              </div>
            </section>

            <section className="preview">
              <div className="row pt-5">
                <div className="col-md-5">
                  <img src={Payment} alt="Reserved Image" />
                </div>
                <div className="col">
                  <div className="desc">
                    <h2 className="mb-0">Fixie-Gray Only</h2>
                    <p className="text-muted mb-4">Yogyakarta</p>
                  </div>
                  <div className="status-v mb-3 d-flex flex-column">
                    <span className="text-muted fw-bold">No Prepayment</span>
                  </div>
                  <div className="status d-flex flex-column">
                    <span className="mb-2 fw-bold">#FG1209878YZS</span>
                  </div>
                  <div className="code d-flex flex-column">
                    <button className="button-filled"> Copy booking code</button>
                  </div>
                </div>
              </div>

              <section className="data">
                <div className="row pt-5">
                  <div className="col-md-5">
                    <div className="qty mb-3 d-flex flex-column">
                      <span>Quantity : 2 bikes</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className=" date mb-3 d-flex flex-column">
                      <span>Reservation Date :
                        <div className="dates d-inline-block">
                          <span className="text-muted">Jan 18-20-2021</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row pt-3">
                  <div className="col-md-5">
                    <div className="details mb-3 d-flex flex-column">
                      <span className="fw-bold mb-2">Order Details :</span>
                      <span className="mb-2">1 Bike : Rp. 78.000</span>
                      <span className="mb-3">1 Bike : Rp. 78.000</span>
                      <span>Total : 178.000</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="identity mb-3 d-flex flex-column">
                      <span className="fw-bold">Identity :</span>
                      <span>Samantha Doe (+6290987682)</span>
                      <span>samanthadoe@mail.com</span>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <section className="semi-footer">
              <div className="row mt-4">
                <div className="col-md-3 pt-2">
                  <div className="text fw-bold d-flex flex-column">
                    <span>Payment code:</span>
                  </div>
                </div>
                <div className="col">
                  <div className="code d-flex flex-column">
                    <span>#FG1209878YZS
                      <button className="button-copy">Copy</button>
                    </span>
                  </div>
                </div>
                <div className="col mb-4">
                  <select className="form-select d-flex flex-column">
                    <option value="">Select payment methods</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="semi-footer">
              <div className="row mt-4">
                <div className="col mb-4">
                  <a href="history.html">
                    <button className="button-filled w-100">Finish payment : <span className="text-danger">59:30</span></button>
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
