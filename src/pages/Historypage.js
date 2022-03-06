import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
// import Navlogin from '../components/NavLogin'
import Vespa from '../assets/images/vespa-history.png'
import Motorbike from '../assets/images/motorbike-history.png'
import Lambo from '../assets/images/lambo-history.png'
import Jeep from '../assets/images/jeep-history.png'
import { FaChevronRight, FaChevronDown, FaSearch } from 'react-icons/fa'
import Input from '../components/Input'
import Navbar from '../components/Navbar'

export default class Historypage extends Component {
  render() {
    return (
      <>
        <body>
          <Navbar />
          <main className="container">
            <div className='row gx-1 main-section pt-4'>
              <section className="upper col-sm-8 ps-2">
                <div className="row form-section">
                  <div className="col search-bar mb-2">
                    <form className="container d-flex position-relative px-0">
                      <Input className="form-control" type="search" placeholder="Search history" />
                      <button type="submit" className="btn position-absolute top-50 end-0 translate-middle-y">
                        <FaSearch />
                      </button>
                    </form>
                  </div>
                  <div className="col-sm-3">
                    <select className="form-select select-bar">
                      <option className="d-none disabled">Filter</option>
                      <option value="type">Type</option>
                      <option value="data-added">Data Added</option>
                      <option value="name">Name</option>
                      <option value="favorite">Favorite Product</option>
                    </select>
                  </div>
                </div>
                <div className="container today-history mx-0">
                  <div className="text-muted description">Today</div>
                  <Link className="d-flex align-items-center justify-content-between border-bottom" to="/payment">
                    <span>Please finish your payment for vespa for Vespa Rental Jogja</span>
                    <FaChevronRight />
                  </Link>
                  <Link className="d-flex align-items-center justify-content-between border-bottom" to="">
                    <span>Your payment has been confirmed!</span>
                    <FaChevronRight />
                  </Link>
                </div>
                <div className="container weekly-history mb-3">
                  <div className="text-muted head-weekly">A week ago</div>
                  <div className="d-flex align-items-center history-contain">
                    <div className="row history-data">
                      <div className="col-3">
                        <div className="vehicle-image1 img-fluid">
                          <img className='img-fluid' src={Vespa} alt="" />
                        </div>
                      </div>
                      <div className="col">
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
                          <img className='img-fluid' src={Motorbike} alt="" />
                        </div>
                      </div>
                      <div className="col">
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

              <section className="down col-sm-4 mb-4 px-4">
                <div className="border  text-center">
                  <h5 className="fw-bold">New Arrival</h5>
                  <div className="my-2 d-inline-block position-relative">
                    <Link to="">
                      <img className='img-fluid' src={Lambo} alt="" />
                      <div className="highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end">
                        <h5>Lamborghini</h5>
                        <span>South Jakarta</span>
                      </div>
                    </Link>
                  </div>
                  <div className="my-2 d-inline-block position-relative">
                    <Link to="">
                      <img className='img-fluid' src={Jeep} alt="" />
                      <div className="highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end">
                        <h5>White Jeep</h5>
                        <span>Kalimantan</span>
                      </div>
                    </Link>
                  </div>
                  <div className="new-arival">
                    <Link to="">
                      <span className="text-muted">View more</span>
                      <div>
                        <FaChevronDown />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </main>
          <Footer />
        </body>
      </>
    )
  }
}
