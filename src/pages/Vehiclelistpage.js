import React, { useState, useEffect } from 'react'
import { default as axios } from 'axios'
import Footer from '../components/Footer'
import Navlogin from '../components/NavLogin'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

export const Vehiclelistpage = () => {
  const [vehicle, setVehicle] = useState([])
  const [page, setPage] = useState({})

  useEffect(() => {
    getVehicle()
  }, [])

  const getVehicle = async () => {
    const { data } = await axios.get('http://localhost:5000/vehicles')
    setVehicle(data.results)
    setPage(data.pageInfo)
  }

  const getNextData = async (url) => {
    const { data } = await axios.get(url)
    setVehicle([
      ...vehicle,
      ...data.results
    ])
    setPage(data.pageInfo)
  }
  return (
    <>
      <body>
        <Navlogin />
        <main className="container">
          <section className="search">
            <div className="mb-5">
              <div className="position-relative">
                <input placeholder="Search vehicle (ex. cars, cars name)" className="w-100 search-input" type="text" />
                <button className="search-type"><FaSearch /></button>
              </div>
            </div>
          </section>

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">All Vehicle List</h2>
              </div>
            </div>
            <div className="row">
              {vehicle.map((data, idx) => {
                return (
                  <div className='col-md-3 text-center item-list'>
                    <div className='my-2 d-inline-block position-relative'>
                      <img className="img-fluid" src={data.image} alt={data.name} />
                      <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                        <h5>{data.name}</h5>
                        <span>{data.loc}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {page.next !== null &&
              <div className='row my-5'>
                <div className='col-md-12 text-center nextList'>
                  <span className='d-block'>View More</span>
                  <button onClick={() => getNextData(page.next)} className='button-filled'>
                    <FaChevronDown />
                  </button>
                </div>
              </div>
            }
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}

export default Vehiclelistpage 