import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import User from '../assets/images/user-home.png';
import { Link, useNavigate /*useSearchParams*/ } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import Input from '../components/Input';
import { getVehiclePopular } from '../redux/actions/vehiclePopular';
import { connect, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import noImage from '../assets/images/no-image.jpg';

export const Homepage = ({ getVehiclePopular }) => {
  const [vehiclePopular, setVehiclePopular] = useState([]);
  const [page, setPage] = useState({});
  const navigate = useNavigate();
  const { vehiclePopular: Popular } = useSelector(state => state);

  useEffect(() => {
    getVehiclePopular();
  }, []);

  const dataEmpty= [
    {image : noImage, name: 'Unknown', location:'No Location'},
    {image : noImage, name: 'Unknown', location:'No Location'},
    {image : noImage, name: 'Unknown', location:'No Location'},
    {image : noImage, name: 'Unknown', location:'No Location'},
  ];

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const location = event.target.elements['location'].value;
    const categoryId = event.target.elements['categoryId'].value;
    const paymentMethod = event.target.elements['paymentMethod'].value;
    navigate(`/vehicles?location=${location}&categoryId=${categoryId}&paymentMethod=${paymentMethod}`, { replace: true });
  };
  return (
    <>
      <body>
        <Navbar />
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
              <form id="search" onSubmit={handleSearch} className="col-sm-12 col-lg-6">
                <div className="row select-option">
                  <div className="col-sm-5 mb-4 option">
                    <select name='location' className="form-select" >
                      <option value="" style={{ display: 'none' }}>Location</option>
                      <option value="south jakarta">South Jakarta</option>
                      <option value="yogyakarta">Yogyakarta</option>
                      <option value="malang">Malang</option>
                      <option value="kalimantan">Kalimantan</option>
                    </select>
                  </div>
                  <div className="col-sm-5 mb-4 option">
                    <select name='categoryId' className="form-select">
                      <option value="" style={{ display: 'none' }}>Type</option>
                      <option value="1">Car</option>
                      <option value="2">Motorbike</option>
                      <option value="3">Bike</option>
                    </select>
                  </div>
                </div>
                <div className="row select-option">
                  <div className="col-sm-5 mb-4 option">
                    <select name='paymentMethod' className="form-select" >
                      <option value="" style={{ display: 'none' }}>Payment</option>
                      <option value="Cash">Cash</option>
                      <option value="Transfer">Transfer</option>
                      <option value="Excash">Excash</option>
                    </select>
                  </div>
                  <div className="col-sm-5 mb-5 option">
                    <Input className="form-option" type="date"></Input>
                  </div>
                </div>
                <div className="row select-option">
                  <div className="col-sm-5 option">
                    <Button type="submit" className="filled">Explore</Button>
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
                  <Link to='/vehicleList'>
                    <button /*onClick={() => getNextData(Popular.pageInfo.next)}*/ className="button-transparent mt-2">
                    View all
                      <FaChevronRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {Popular.isLoading &&
                <Skeleton height={150} containerClassName='row' count={8} wrapper={({ children }) => (<div className='col-md-3'>{children}</div>)} />
              }
              {!Popular.isLoading && <div className='row'>
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
              </div>}
              {!Popular.isLoading && <div className='row'>
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
              </div>}
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
  );
};
const mapStateToProps = state => ({ vehiclePopular: state.vehiclePopular });

const mapDispatchToProps = { getVehiclePopular };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);