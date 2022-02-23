import React, { Component } from 'react'
import Footer from '../components/Footer'
import Vespa from '../assets/images/vespa-history.png'
import Motorbike from '../assets/images/motorbike-history.png'
import Lambo from '../assets/images/lambo-history.png'
import Jeep from '../assets/images/jeep-history.png'
import { FaChevronRight, FaChevronDown, FaSearch } from 'react-icons/fa'

export default class Historypage extends Component {
  render() {
    return (
      <>
        <body>
          <main className="row main-section">
            <section className="upper col-12 col-xl-8 ps-5">
              <div className="row form-section">
                <div className="col search-bar">
                  <form className="container d-flex position-relative">
                    <input className="form-control" type="search" placeholder="Search history" />
                    <button type="submit" className="btn position-absolute end-0">
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div className="col-3">
                  <select className="form-select select-bar">
                    <option className="d-none disabled">Filter</option>
                    <option value="type">Type</option>
                    <option value="data-added">Data Added</option>
                    <option value="name">Name</option>
                    <option value="favorite">Favorite Product</option>
                  </select>
                </div>
              </div>
              <div className="container today-history">
                <div className="text-muted description">Today</div>
                <a className="d-flex align-items-center justify-content-between border-bottom" href="#">
                  <span>Please finish your payment for vespa for Vespa Rental Jogja</span>
                  <FaChevronRight />
                </a>
                <a className="d-flex align-items-center justify-content-between border-bottom" href="#">
                  <span>Your payment has been confirmed!</span>
                  <FaChevronRight />
                </a>
              </div>
              <div className="container weekly-history">
                <div className="text-muted head-weekly">A week ago</div>
                <div className="d-flex align-items-center history-contain">
                  <div className="row history-data">
                    <div className="col-3">
                      <div className="vehicle-image1">
                        <img src={Vespa} alt="" />
                      </div>
                    </div>
                    <div className="col des">
                      <div className="detail-1">
                        <h5 className="m-0 fw-bold">Vespa Matic</h5>
                        <span>Jan 18 to 21 2021</span>
                      </div>
                      <div className="mt-4 detail-2">
                        <h5 className="m-0 fw-bold">Prepayment: Rp. 245.000</h5>
                        <span className="text-success status">Has been returned</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center history-contain">
                  <div className="row history-data">
                    <div className="col-3">
                      <div className="vehicle-image2">
                        <img src={Motorbike} alt="" />
                      </div>
                    </div>
                    <div className="col des">
                      <div className="detail-1">
                        <h5 className="m-0 fw-bold">Vespa Matic</h5>
                        <span>Jan 18 to 21 2021</span>
                      </div>
                      <div className="mt-4 detail-2">
                        <h5 className="m-0 fw-bold">Prepayment: Rp. 245.000</h5>
                        <span className="text-success status">Has been returned</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="down col-12 col-lg-5 col-xl-4 pe-5">
              <div className="border  text-center">
                <h5 className="fw-bold">New Arrival</h5>
                <div className="new-arival">
                  <a href="#">
                    <div className="vehicle1">
                      <img src={Lambo} alt="" />
                    </div>
                    <div className="highlight">
                      <h6 className="fw-bold">Lamborghini</h6>
                      <span className="text-muted">South Jakarta</span>
                    </div>
                  </a>
                </div>
                <div className="new-arival">
                  <a href="#">
                    <div className="vehicle2">
                      <img src={Jeep} alt="" />
                    </div>
                    <div className="highlight">
                      <h6 className="fw-bold">White Jeep</h6>
                      <span className="text-muted">Kalimantan</span>
                    </div>
                  </a>
                </div>
                <div className="new-arival">
                  <a href="#">
                    <span className="text-muted">View more</span>
                  </a>
                  <div>
                    <FaChevronDown />
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
