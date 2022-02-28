import React, { /*Component*/ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navlogin from '../components/NavLogin'
// import Payment from '../assets/images/payment.png'
import { FaChevronLeft } from 'react-icons/fa'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'

export const Paymentpage = () => {
  const [vehicle, setVehicle] = useState({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    getDataComponent(id)
  })

  useEffect(() => {
    console.log(vehicle)
  })

  const getDataComponent = async (id) => {
    const { data } = await getData(`http://localhost:5000/vehicles/${id}`)
    setVehicle(data.results)
  }

  const goToReservation = (id) => {
    navigate(`/reservation/${id}`)
  }

  return (
    <>
      <body>
        <Navlogin />
        <main className="container">
          <section className="back pt-4">
            <div onClick={() => goToReservation(vehicle?.id)} style={{ cursor: 'pointer' }} key={String(vehicle?.id)}>
              <FaChevronLeft />
              <span>Payment</span>
            </div>
          </section>

          <section className="preview">
            <div className="row pt-5">
              <div className="col-5 picture">
                <img src={vehicle?.image} className="img-fluid payment" alt="Reserved" />
              </div>
              <div className="col">
                <div className="desc">
                  <h2 className="mb-0">{vehicle?.name}</h2>
                  <p className="text-muted mb-4">{vehicle?.loc}</p>
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
                    <span>Quantity : {vehicle?.qty} bikes</span>
                  </div>
                </div>
                <div className="col">
                  <div className=" date mb-3 d-flex flex-column">
                    <div className='row d-inline-flex'>
                      <div className='col text-center'>
                        <span>Reservation Date :</span>
                      </div>
                      <div className='col text-center'>
                        <div className="dates">
                          <span className="text-muted">Jan 18-20-2021</span>
                        </div>
                      </div>
                    </div>
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
            <div className="row mt-4 mb-4">
              <div className="col-sm-4 mb-2  pt-2">
                <div className="text fw-bold d-flex flex-column">
                  <span>Payment code:</span>
                </div>
              </div>
              <div className="col-sm-4 mb-2  text-center">
                <div className="code d-flex flex-column">
                  <span>#FG1209878YZS
                    <button className="button-copy mx-2">Copy</button>
                  </span>
                </div>
              </div>
              <div className="col-sm-4">
                <select className="form-select d-flex flex-column">
                  <option value="">Select payment methods</option>
                </select>
              </div>
            </div>
          </section>

          <section className="semi-footer">
            <div className="row mt-4">
              <div className="col mb-4">
                <Link to="/history">
                  <button className="button-filled w-100">Finish payment : <span className="text-danger">59:30</span></button>
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

export default Paymentpage