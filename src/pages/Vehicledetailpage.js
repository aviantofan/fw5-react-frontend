import React, { Component } from 'react'
import Footer from '../components/Footer'
import Fixie from '../assets/images/fixie-white-width.png'
import FixieS from '../assets/images/fixie-white-width2.png'
import { FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from 'react-icons/fa'

export default class Vehicledetailpage extends Component {
  render() {
    return (
      <>
        <body>
          <main className="container">
            <section className="back">
              <div>
                <a href="#">
                  <i className="fa-solid fa-chevron-left fa-2xl "></i>
                </a>
                <span>Detail</span>
              </div>
            </section>

            <section className="preview">
              <div className="row pt-5">
                <div className="col">
                  <img src={Fixie} alt="Vehicle Detail" />
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-1">
                      <button className="prev"><FaChevronLeft /></button>
                    </div>
                    <div className="col-md-5">
                      <img src={FixieS} className="img-fluid" alt="Vehicle Detail" />
                    </div>
                    <div className="col-md-5 text-end">
                      <img src={FixieS} className="img-fluid" alt="Vehicle Detail" />
                    </div>
                    <div className="col-md-1">
                      <button className="next"><FaChevronRight /></button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="desc">
                    <h2>Fixie-Gray Only</h2>
                    <p className="text-muted">Yogyakarta</p>
                  </div>
                  <div className="status-vehicle mb-3 d-flex flex-column">
                    <span className="text-success fw-bold my-2">Available</span>
                    <span className="text-danger mb-3">No prepayment</span>
                  </div>
                  <div className="info">
                    <div className="mb-2">
                      Capacity: 1 Person
                    </div>
                    <div className="mb-2">
                      Type : Bike
                    </div>
                    <div>
                      Reservation before 2 PM
                    </div>
                  </div>
                  <div className="price mt-4 mb-4 text-end">
                    Rp.78.000/day
                  </div>
                  <div className="day d-flex flex-row justify-content-between align-items-center">
                    <div className="col">
                      <button className="plus"><FaPlus /></button>
                    </div>
                    <div className="col-md-8">
                      <div className="count">2</div>
                    </div>
                    <div className="col">
                      <button className="minus"><FaMinus /></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="semi-footer">
              <div className="row mt-4">
                <div className="col">
                  <a href="#">
                    <button className="button-dark">Chat Admin</button>
                  </a>
                </div>
                <div className="col">
                  <a href="reservation.html">
                    <button className="button-filled">Reservation</button>
                  </a>
                </div>
                <div className="col mb-4">
                  <button className="button-like"><i className="fa-solid fa-heart fa-2xl"></i>
                    <span>Like</span>
                  </button>
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
