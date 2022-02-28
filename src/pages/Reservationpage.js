import React, { /*Component*/ useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Reversebutton from '../components/Reversebutton'
import Navlogin from '../components/NavLogin'
import NumberFormat from 'react-number-format'
// import Fixie from '../assets/images/fixie-reserved.png'
import { FaChevronLeft } from 'react-icons/fa'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'

export const Reservationpage = () => {
  const [vehicle, setVehicle] = useState({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    getDataComponent(id)
  }, [])

  useEffect(() => {
    console.log(vehicle)
  })

  const getDataComponent = async (id) => {
    const { data } = await getData(`http://localhost:5000/vehicles/${id}`)
    setVehicle(data.results)
  }

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`)
  }

  const goToPayment = (id) => {
    navigate(`/payment/${id}`)
  }

  return (
    <>
      <body>
        <Navlogin />
        <main className="container">
          <section className="back">
            <div className='pt-3' onClick={() => goToDetail(vehicle?.id)} style={{ cursor: 'pointer' }} key={String(vehicle?.id)}>
              <FaChevronLeft />
              <span>Reservation</span>
            </div>
          </section>

          <section className="preview">
            <div className="row pt-5">
              <div className="col-8 picture">
                <img src={vehicle?.image} className="img-fluid reservation" alt="Vehicle Detail" />
              </div>
              <div className="col">
                <div className="desc">
                  <h2>{vehicle?.name}</h2>
                  <p className="text-muted">{vehicle?.loc}</p>
                </div>
                <div className="status-vehicle mb-3 d-flex flex-column">
                  <span className="text-danger mb-3 fw-bold">No prepayment</span>
                </div>
                <Reversebutton></Reversebutton>
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
                <button className="button-filled w-100" onClick={() => goToPayment(vehicle?.id)} style={{ cursor: 'pointer' }} key={String(vehicle?.id)}>
                  Pay Now : <NumberFormat value={vehicle?.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={"Rp. "} />
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

export default Reservationpage