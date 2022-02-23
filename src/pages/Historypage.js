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
          <main class="row main-section">
            <section class="upper col-12 col-xl-8 ps-5">
              <div class="row form-section">
                <div class="col search-bar">
                  <form class="container d-flex position-relative">
                    <input class="form-control" type="search" placeholder="Search history" />
                    <button type="submit" class="btn position-absolute end-0">
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div class="col-3">
                  <select class="form-select select-bar">
                    <option class="d-none disabled">Filter</option>
                    <option value="type">Type</option>
                    <option value="data-added">Data Added</option>
                    <option value="name">Name</option>
                    <option value="favorite">Favorite Product</option>
                  </select>
                </div>
              </div>
              <div class="container today-history">
                <div class="text-muted description">Today</div>
                <a class="d-flex align-items-center justify-content-between border-bottom" href="#">
                  <span>Please finish your payment for vespa for Vespa Rental Jogja</span>
                  <FaChevronRight />
                </a>
                <a class="d-flex align-items-center justify-content-between border-bottom" href="#">
                  <span>Your payment has been confirmed!</span>
                  <FaChevronRight />
                </a>
              </div>
              <div class="container weekly-history">
                <div class="text-muted head-weekly">A week ago</div>
                <div class="d-flex align-items-center history-contain">
                  <div class="row history-data">
                    <div class="col-3">
                      <div class="vehicle-image1">
                        <img src={Vespa} alt="" />
                      </div>
                    </div>
                    <div class="col des">
                      <div class="detail-1">
                        <h5 class="m-0 fw-bold">Vespa Matic</h5>
                        <span>Jan 18 to 21 2021</span>
                      </div>
                      <div class="mt-4 detail-2">
                        <h5 class="m-0 fw-bold">Prepayment: Rp. 245.000</h5>
                        <span class="text-success status">Has been returned</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center history-contain">
                  <div class="row history-data">
                    <div class="col-3">
                      <div class="vehicle-image2">
                        <img src={Motorbike} alt="" />
                      </div>
                    </div>
                    <div class="col des">
                      <div class="detail-1">
                        <h5 class="m-0 fw-bold">Vespa Matic</h5>
                        <span>Jan 18 to 21 2021</span>
                      </div>
                      <div class="mt-4 detail-2">
                        <h5 class="m-0 fw-bold">Prepayment: Rp. 245.000</h5>
                        <span class="text-success status">Has been returned</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="down col-12 col-lg-5 col-xl-4 pe-5">
              <div class="border  text-center">
                <h5 class="fw-bold">New Arrival</h5>
                <div class="new-arival">
                  <a href="#">
                    <div class="vehicle1">
                      <img src={Lambo} alt="" />
                    </div>
                    <div class="highlight">
                      <h6 class="fw-bold">Lamborghini</h6>
                      <span class="text-muted">South Jakarta</span>
                    </div>
                  </a>
                </div>
                <div class="new-arival">
                  <a href="#">
                    <div class="vehicle2">
                      <img src={Jeep} alt="" />
                    </div>
                    <div class="highlight">
                      <h6 class="fw-bold">White Jeep</h6>
                      <span class="text-muted">Kalimantan</span>
                    </div>
                  </a>
                </div>
                <div class="new-arival">
                  <a href="#">
                    <span class="text-muted">View more</span>
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
