import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navlogin from '../components/NavLogin'
import Merapi from '../assets/images/merapi.png'
import TelukBogam from '../assets/images/teluk-bogam.png'
import Bromo from '../assets/images/bromo.png'
import Malioboro from '../assets/images/malioboro.png'
import Lamborghini from '../assets/images/lambo.png'
import JeepWhite from '../assets/images/jeep-white.png'
import Vespa from '../assets/images/vespa.png'
import Honda from '../assets/images/honda.png'
import Fixie from '../assets/images/fixie.png'
import FixieWhite from '../assets/images/fixie-white.png'
import SportBike from '../assets/images/sports.png'
import Onthel from '../assets/images/onthel.png'
import { FaChevronRight, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Vehicletypepage extends Component {
  render() {
    return (
      <>
        <body>
          <Navlogin />
          <main className="container">
            <section className="search">
              <div className="mb-5">
                <div className="position-relative">
                  <input placeholder="Search vehicle (ex. cars, cars name)" className="w-100 search-input" type="text" />
                  <button className="search-type"><FaSearch fa-xl /></button>
                </div>
              </div>
            </section>

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
                    <Link to="">
                      <img className="img-fluid" src={Merapi} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Merapi</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={TelukBogam} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Teluk Bogam</h5>
                        <span>Kalimantan</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Bromo} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Bromo</h5>
                        <span>Malang</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Malioboro} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Malioboro</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="destination">
              <div className="row">
                <div className="col">
                  <h2 className="home">Cars</h2>
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
                    <Link to="">
                      <img className="img-fluid" src={Merapi} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Van</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Lamborghini} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Lamborghini</h5>
                        <span>South Jakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Bromo} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Jeep</h5>
                        <span>Malang</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={JeepWhite} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>White Jeep</h5>
                        <span>Kalimantan</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="destination">
              <div className="row">
                <div className="col">
                  <h2 className="home">Motorbike</h2>
                </div>
                <div className="col">
                  <div className="direction justify-content-center">
                    <Link className="section-link-view mt-2" to="vehicle-type.html">
                      View all
                      <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Vespa} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Vespa</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={TelukBogam} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Honda KLX</h5>
                        <span>Kalimantan</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Honda} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Honda</h5>
                        <span>Malang</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Malioboro} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Matic Bike</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="destination">
              <div className="row">
                <div className="col">
                  <h2 className="home">Bike</h2>
                </div>
                <div className="col">
                  <div className="direction justify-content-center">
                    <Link className="section-link-view mt-2" to="vehicle-type.html">
                      View all
                      <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Fixie} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Fixie</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={SportBike} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Sport Bike</h5>
                        <span>Kalimantan</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={Onthel} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Onthel</h5>
                        <span>Malang</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-sm-6 col-md-3 text-center item-list'>
                  <div className='my-2 d-inline-block position-relative'>
                    <Link to="">
                      <img className="img-fluid" src={FixieWhite} alt="Vehicle Type" />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>Fixie Gray</h5>
                        <span>Yogyakarta</span>
                      </div>
                    </Link>
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
