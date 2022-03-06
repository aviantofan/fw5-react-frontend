import React, { /*Component*/useState, useEffect } from 'react'
import { default as axios } from 'axios'
import Footer from '../components/Footer'
// import Navlogin from '../components/NavLogin'
import Input from '../components/Input'
import { FaChevronRight, FaSearch } from 'react-icons/fa'
import { /*Link*/ useNavigate /*useSearchParams*/ } from 'react-router-dom'
import { getVehiclePopular } from '../redux/actions/vehiclePopular'
import { getCategoryCar } from '../redux/actions/vehicleCategoryCar'
import { getCategoryMotorbike } from '../redux/actions/vehicleCategoryMotorbike'
import { getCategoryBike } from '../redux/actions/vehicleCategoryBike'
import { connect, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

export const Vehicletypepage = ({ getVehiclePopular, getCategoryCar, getCategoryMotorbike, getCategoryBike }) => {
  const [vehiclePopular, setVehiclePopular] = useState([])
  const [vehicleCategoryCar, setVehicleCategoryCar] = useState([])
  const [vehicleCategoryMotorbike, setVehicleCategoryMotorbike] = useState([])
  const [vehicleCategoryBike, setVehicleCategoryBike] = useState([])
  const [pagePopular, setPagePopular] = useState({})
  const [pageCar, setPageCar] = useState({})
  const [pageMotorbike, setPageMotorbike] = useState({})
  const [pageBike, setPageBike] = useState({})
  const { vehiclePopular: Popular, vehicleCategoryCar: Car, vehicleCategoryMotorbike: Motorbike, vehicleCategoryBike: Bike } = useSelector(state => state)

  const navigate = useNavigate()

  useEffect(() => {
    getVehiclePopular()
    getCategoryCar()
    getCategoryMotorbike()
    getCategoryBike()
  }, [])

  // const getVehiclePopular = async () => {
  //   const { data } = await axios.get('http://localhost:5000/vehicles/p/populars?limit=4')
  //   setVehiclePopular(data.results)
  //   setPagePopular(data.pageInfo)
  // }

  // const getCategoryCar = async () => {
  //   const { data } = await axios.get('http://localhost:5000/vehicles/category?categoryId=1&limit=4')
  //   setVehicleCategoryCar(data.results)
  //   setPageCar(data.pageInfo)
  // }

  // const getCategoryMotorbike = async () => {
  //   const { data } = await axios.get('http://localhost:5000/vehicles/category?categoryId=2&limit=4')
  //   setVehicleCategoryMotorbike(data.results)
  //   setPageMotorbike(data.pageInfo)
  // }

  // const getCategoryBike = async () => {
  //   const { data } = await axios.get('http://localhost:5000/vehicles/category?categoryId=3&limit=4')
  //   setVehicleCategoryBike(data.results)
  //   setPageBike(data.pageInfo)
  // }

  const getNextDataPopular = async (url) => {
    const { data } = await axios.get(url)
    setVehiclePopular([
      ...vehiclePopular,
      ...data.results
    ])
    setPagePopular(data.pageInfo)
  }

  const getNextDataCategoryCar = async (url) => {
    const { data } = await axios.get(url)
    setVehicleCategoryCar([
      ...vehicleCategoryCar,
      ...data.results
    ])
    setPageCar(data.pageInfo)
  }

  const getNextDataCategoryMotorbike = async (url) => {
    const { data } = await axios.get(url)
    setVehicleCategoryMotorbike([
      ...vehicleCategoryMotorbike,
      ...data.results
    ])
    setPageMotorbike(data.pageInfo)
  }

  const getNextDataCategoryBike = async (url) => {
    const { data } = await axios.get(url)
    setVehicleCategoryBike([
      ...vehicleCategoryBike,
      ...data.results
    ])
    setPageBike(data.pageInfo)
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    const name = event.target.elements["name"].value;
    navigate(`/vehicles?name=${name}`, { replace: true })
  }

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`)
  }

  return (
    <>
      <body>
        <Navbar />
        <main className="container">
          <section className="search">
            <div className="pt-4">
              <form id="search" onSubmit={handleSearch} className="position-relative round">
                <Input name='name' placeholder="Search vehicle (ex. cars, cars name)" className="w-100 search-input" type="text" />
                <button type='submit' className="search-type"><FaSearch /></button>
              </form>
            </div>
          </section>

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">Popular in town</h2>
              </div>
              <div className="col">
                <div className="direction justify-content-center">
                  <button onClick={() => getNextDataPopular(pagePopular.next)} className="button-transparent mt-2">
                    View all
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {Popular.vehiclePopular.map((data, idx) => {
                return (
                  <div className='col-sm-6 col-md-3 text-center item-list'>
                    <div className='my-2 d-inline-block position-relative'>
                      <div onClick={() => goToDetail(data.vehicleId)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)}>
                        <img className="img-fluid image-preview" src={data.image} alt="Vehicle Type" />
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

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">Cars</h2>
              </div>
              <div className="col">
                <div className="direction justify-content-center">
                  <button onClick={() => getNextDataCategoryCar(pageCar.next)} className="button-transparent mt-2">
                    View all
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {Car.vehicleCategoryCar.map((data, idx) => {
                return (
                  <div className='col-sm-6 col-md-3 text-center item-list'>
                    <div className='my-2 d-inline-block position-relative'>
                      <div onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }} key={String(data.id)}>
                        <img className="img-fluid image-preview" src={data.image} alt="Vehicle Type" />
                        <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                          <h5>{data.name}</h5>
                          <span>{data.loc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">Motorbike</h2>
              </div>
              <div className="col">
                <div className="direction justify-content-center">
                  <button onClick={() => getNextDataCategoryMotorbike(pageMotorbike.next)} className="button-transparent mt-2">
                    View all
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {Motorbike.vehicleCategoryMotorbike.map((data, idx) => {
                return (
                  <div className='col-sm-6 col-md-3 text-center item-list'>
                    <div className='my-2 d-inline-block position-relative'>
                      <div onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }} key={String(data.id)}>
                        <img className="img-fluid image-preview" src={data.image} alt="Vehicle Type" />
                        <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                          <h5>{data.name}</h5>
                          <span>{data.loc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">Bike</h2>
              </div>
              <div className="col">
                <div className="direction justify-content-center">
                  <button onClick={() => getNextDataCategoryBike(pageBike.next)} className="button-transparent mt-2">
                    View all
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {Bike.vehicleCategoryBike.map((data, idx) => {
                return (
                  <div className='col-sm-6 col-md-3 text-center item-list'>
                    <div className='my-2 d-inline-block position-relative'>
                      <div onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }} key={String(data.id)}>
                        <img className="img-fluid image-preview" src={data.image} alt="Vehicle Type" />
                        <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                          <h5>{data.name}</h5>
                          <span>{data.loc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  )
}

const mapStateToProps = state => ({ vehiclePopular: state.vehiclePopular, vehicleCategoryCar: state.vehicleCategoryCar, vehicleCategoryMotorbike: state.vehicleCategoryMotorbike, vehicleCategoryBike: state.vehicleCategoryBike })

const mapDispatchToProps = { getVehiclePopular, getCategoryCar, getCategoryMotorbike, getCategoryBike }

export default connect(mapStateToProps, mapDispatchToProps)(Vehicletypepage)