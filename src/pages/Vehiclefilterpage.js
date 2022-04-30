import React, { /*Component*/ useEffect, useState } from 'react';
import { default as axios } from 'axios';
import { Link, useNavigate, /*useParams*/ useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaChevronLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export const Vehiclefilterpage = () => {
  const [listVehicle, setListVehicle] = useState([]);
  const [searchParams, /*setSearchParams*/] = useSearchParams();
  const [/*page*/, setPage] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);
    if (searchParams.get('name')) {
      getDataSearchName(searchParams.get('name'));
    } 
    if (searchParams.get('location')) {
      getDataFilter(
        searchParams.get('location'),
        searchParams.get('categoryId'),
        searchParams.get('paymentMethod')
      ); 
    }
    if (searchParams.get('categoryId')) {
      getDataFilter(
        searchParams.get('location'),
        searchParams.get('categoryId'),
        searchParams.get('paymentMethod')
      ); 
    }
    if (searchParams.get('paymentMethod')) {
      getDataFilter(
        searchParams.get('location'),
        searchParams.get('categoryId'),
        searchParams.get('paymentMethod')
      ); 
    }
  },[]);

  const getDataSearchName = async (name) => {
    const { data } = await axios.get(`http://localhost:5000/vehicles?name=${name}`);
    setListVehicle(data.results);
    setPage(data.pageInfo);
  };

  const getDataFilter = async (location, categoryId, paymentMethod) => {
    const { data } = await axios.get(`http://localhost:5000/vehicles?location=${location}&categoryId=${categoryId}&paymentMethod=${paymentMethod}&limit=10&sort&order`);
    setListVehicle(data.results);
    setPage(data.pageInfo);
  };

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`);
  };

  return (
    <>
      <body>
        <Navbar />
        <main className="container">
          <section className="back">
            <div className='pt-3'>
              <Link to="/">
                <FaChevronLeft />
                <span>Search Item</span>
              </Link>
            </div>
          </section>
          <section className="destination">
            <div className="row mb-4">
              <div className="col">
                <h2 className="home mb-3">Items Found</h2>
              </div>
            </div>
            <div className="row mb-5">
              {listVehicle.map((data, idx) => {
                return (
                  <div key={idx} className='col-sm-6 col-md-3  text-center item-list'>
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
                );
              })}
            </div>
            <div className='mb-5'></div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  );
};
export default Vehiclefilterpage;