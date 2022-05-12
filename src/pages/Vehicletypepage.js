import React, { /*Component*/useState, useEffect } from 'react';
import { default as axios } from 'axios';
import Footer from '../components/Footer';
// import Navlogin from '../components/NavLogin'
import Input from '../components/Input';
import { FaChevronRight, FaSearch } from 'react-icons/fa';
import { Link, useNavigate /*useSearchParams*/ } from 'react-router-dom';
import { getVehiclePopular } from '../redux/actions/vehiclePopular';
import { getCategoryCar } from '../redux/actions/vehicleCategoryCar';
import { getCategoryMotorbike } from '../redux/actions/vehicleCategoryMotorbike';
import { getCategoryBike } from '../redux/actions/vehicleCategoryBike';
import { connect, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import noImage from '../assets/images/no-image.jpg';

export const Vehicletypepage = ({ getVehiclePopular, getCategoryCar, getCategoryMotorbike, getCategoryBike }) => {
  const { vehiclePopular: Popular, vehicleCategoryCar: Car, vehicleCategoryMotorbike: Motorbike, vehicleCategoryBike: Bike } = useSelector(state => state);

  const navigate = useNavigate();

  useEffect(() => {
    getVehiclePopular();
    getCategoryCar();
    getCategoryMotorbike();
    getCategoryBike();
  }, []);

  const dataEmpty= [
    {image : noImage, name: 'Unknown', location:'No Location'},
    {image : noImage, name: 'Unknown', location:'No Location'},
    {image : noImage, name: 'Unknown', location:'No Location'},
    {image : noImage, name: 'Unknown', location:'No Location'},
  ];

  const handleSearch = async (event) => {
    event.preventDefault();
    const name = event.target.elements['name'].value;
    navigate(`/vehicles?name=${name}`, { replace: true });
  };

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`);
  };

  return (
    <>
      <section>
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
                  <Link to='/vehicleList'>
                    <button className="button-transparent mt-2">
                    View all
                      <FaChevronRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {!Popular.isError && <div className='row my-5'>
                {Popular.vehiclePopular?.map((data, idx) => {
                  return (
                    <div key={idx} className='col-sm-6 col-md-3 text-center item-list'>
                      <div className='my-2 d-inline-block position-relative'>
                        <div onClick={() => goToDetail(data.vehicleId)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)}>
                          <img className="img-fluid image-preview" src={data.image ? data.image : noImage} alt={data.name} />
                          <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                            <h5>{data.vehicleName ? data.vehicleName : 'UNKNOWN'}</h5>
                            <span>{data.location ? data.location : 'No Location'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>}
              {Popular.isError && <div className='row my-5'>
                {dataEmpty.map((data, idx) => {
                  return (
                    <div key={idx} className='col-sm-6 col-md-3 text-center item-list'>
                      <div className='my-2 d-inline-block position-relative'>
                        <img className="img-fluid image-preview" src={data.image} alt={data.name} />
                        <div className=' highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end'>
                          <h5>{data.name}</h5>
                          <span>{data.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>}
            </div>
          </section>

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">Cars</h2>
              </div>
              <div className="col">
                <div className="direction justify-content-center">
                  <Link to ='/vehicleList'>
                    <button className="button-transparent mt-2">
                    View all
                      <FaChevronRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {Car.vehicleCategoryCar.map((data, idx) => {
                return (
                  <div key={idx} className='col-sm-6 col-md-3 text-center item-list'>
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
          </section>

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">Motorbike</h2>
              </div>
              <div className="col">
                <div className="direction justify-content-center">
                  <Link to='/vehicleList'>
                    <button className="button-transparent mt-2">
                    View all
                      <FaChevronRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {Motorbike.vehicleCategoryMotorbike.map((data, idx) => {
                return (
                  <div key={idx} className='col-sm-6 col-md-3 text-center item-list'>
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
          </section>

          <section className="destination">
            <div className="row">
              <div className="col">
                <h2 className="home">Bike</h2>
              </div>
              <div className="col">
                <div className="direction justify-content-center">
                  <Link to='/vehicleList'>
                    <button className="button-transparent mt-2">
                    View all
                      <FaChevronRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {Bike.vehicleCategoryBike.map((data, idx) => {
                return (
                  <div key={idx} className='col-sm-6 col-md-3 text-center item-list'>
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
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
};

const mapStateToProps = state => ({ vehiclePopular: state.vehiclePopular, vehicleCategoryCar: state.vehicleCategoryCar, vehicleCategoryMotorbike: state.vehicleCategoryMotorbike, vehicleCategoryBike: state.vehicleCategoryBike });

const mapDispatchToProps = { getVehiclePopular, getCategoryCar, getCategoryMotorbike, getCategoryBike };

export default connect(mapStateToProps, mapDispatchToProps)(Vehicletypepage);