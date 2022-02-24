import React, { useState, useEffect } from 'react'
import { default as axios } from 'axios'
import Footer from '../components/Footer'
import Navlogin from '../components/NavLogin'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

export const Vehiclelistpage = () => {
  const [vehicle, setVehicle] = useState([])
  const [page, setPage] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const name = searchParams.get('name')

    if (name) {
      const url = (name) => `http://localhost:5000/vehicles?name=${name}`
      document.getElementById('search').elements['search'].value = name
      getNextData(url(name), true)
    } else {
      getVehicle()
    }
  }, [])

  const getVehicle = async () => {
    const { data } = await axios.get('http://localhost:5000/vehicles')
    setVehicle(data.results)
    setPage(data.pageInfo)
  }

  const getNextData = async (url, replace = false) => {
    try {
      setErrorMsg(null)
      const { data } = await axios.get(url)
      if (replace) {
        setVehicle(data.results)
      } else {
        setVehicle([
          ...vehicle,
          ...data.results
        ])
      }
      setPage(data.pageInfo)
    } catch (e) {
      if (e.message.includes('404')) {
        setErrorMsg('Data not found!')
        setVehicle([])
        setPage({
          next: null
        })
      }
    }
  }

  const onSearch = async (event) => {
    event.preventDefault();
    const url = (name) => `http://localhost:5000/vehicles?name=${name}`
    const name = event.target.elements["search"].value
    setSearchParams({ name })
    await getNextData(url(name), true)
  }

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`)
  }

  return (
    <>
      <body>
        <Navlogin />
        <main className="container">
          <section className="search">
            <div className="mb-5">
              <div className="position-relative">
                <form id='search' onSubmit={onSearch} className='input-group'>
                  <input name="search" placeholder="Search vehicle (ex. cars, cars name)" className="w-100 search-input " type="text" />
                  <div>
                    <button type="submit" className="search-type"><FaSearch /></button>
                  </div>
                </form>
              </div>
            </div>
            {errorMsg !== null &&
              <div className='row my-5'>
                <div className='col'>
                  <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                    <span>{errorMsg}</span>
                    <button onClick={() => setErrorMsg(null)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                </div>
              </div>
            }
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
                  <div onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }} key={String(data.id)} className='col-md-3 text-center item-list'>
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