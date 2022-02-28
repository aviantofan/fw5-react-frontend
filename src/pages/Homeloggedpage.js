import React, { useState, useEffect } from 'react'
import { default as axios } from 'axios'
import NavLogin from '../components/NavLogin'
import Footer from '../components/Footer'
// import Merapi from '../assets/images/merapi.png'
import User from '../assets/images/user-home.png'
import { /*Link*/ useNavigate /*useSearchParams*/ } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

export const Homeloggedpage = () => {
  const [vehiclePopular, setVehiclePopular] = useState([])
  const [page, setPage] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    getVehiclePopular()
  }, [])

  const getVehiclePopular = async () => {
    const { data } = await axios.get('http://localhost:5000/vehicles/p/populars?limit=4')
    setVehiclePopular(data.results)
    setPage(data.pageInfo)
  }

  const getNextData = async (url) => {
    const { data } = await axios.get(url)
    setVehiclePopular([
      ...vehiclePopular,
      ...data.results
    ])
    setPage(data.pageInfo)
  }

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`)
  }

  return (
    <>
      <body>
        <NavLogin />
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
                      <option>Type</option>
                      <option value="">Cars</option>
                      <option value="">Motorbike</option>
                      <option value="">Bike</option>
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
                    <select className="form-select" type="date">
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
                  <button onClick={() => getNextData(page.next)} className="button-transparent mt-2">
                    View all
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {vehiclePopular.map((data, idx) => {
                return (
                  <div className='col-sm-6 col-md-3 text-center item-list'>
                    <div className='my-2 d-inline-block position-relative'>
                      <div onClick={() => goToDetail(data.vehicleId)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)}>
                        <img className="img-fluid" src={data.image} alt={data.name} />
                        <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                          <h5>{data.vehicleName}</h5>
                          <span>{data.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="testimonials">
            <h2 className="testimonials">Testimonials</h2>
            <div className="row testi">
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
              <div className="col-12 col-lg-6 mt-5 d-flex profile-pic mb-5 text-center">
                <div className="img-fluid position-relative">
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

export default Homeloggedpage