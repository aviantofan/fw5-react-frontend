import React, { /*Component*/ useEffect, useState } from 'react'
import NavLogin from '../components/NavLogin'
import { default as axios } from 'axios'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { FaChevronLeft } from 'react-icons/fa'

export const Vehiclelistpage = () => {
  const [listVehicle, setListVehicle] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState([])
  const navigate = useNavigate()
  // const { id } = useParams()

  useEffect(() => {
    if (searchParams.get('name')) {
      getDataSearchName(searchParams.get('name'))
    } if (searchParams.get('location')) {
      getDataSearchLoc(searchParams.get('location'))
    } if (searchParams.get('categoryId')) {
      getDataSearchCategory(searchParams.get('categoryId'))
    }
  }, []);

  const getDataSearchName = async (name) => {
    const { data } = await axios.get(`http://localhost:5000/vehicles?name=${name}`);
    setListVehicle(data.results);
    setPage(data.pageInfo);
  }

  const getDataSearchLoc = async (location) => {
    const { data } = await axios.get(`http://localhost:5000/vehicles?location=${location}`);
    setListVehicle(data.results);
    setPage(data.pageInfo);
  }

  const getDataSearchCategory = async (categoryId) => {
    const { data } = await axios.get(`http://localhost:5000/vehicles?categoryId=${categoryId}`);
    setListVehicle(data.results);
    setPage(data.pageInfo);
  }

  // const getListVehicle = async () => {
  //   const { data } = await axios.get(`http://localhost:5000/vehicles`);
  //   setListVehicle(data.results);
  //   setPage(data.pageInfo);
  // }

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`)
  }

  return (
    <>
      <body>
        <NavLogin />
        <main className="container">
          <section className="back pt-4">
            <Link to="/vehicleType">
              <FaChevronLeft />
              <span>Vehicle Type</span>
            </Link>
          </section>

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">Search Found Items</h2>
              </div>
            </div>
            <div className="row">
              {listVehicle.map((data) => {
                return (
                  <div className='col-sm-6 col-md-3 text-center item-list'>
                    <div className='my-2 d-inline-block position-relative'>
                      <div onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }} key={String(data.id)}>
                        <img className="img-fluid" src={data.image} alt="Vehicle Type" />
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
export default Vehiclelistpage