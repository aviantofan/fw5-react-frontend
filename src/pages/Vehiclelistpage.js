import React, { useEffect, useState } from 'react';
import { default as axios } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaChevronLeft, FaChevronCircleDown } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { connect, useSelector } from 'react-redux';
import { getVehicleList } from '../redux/actions/vehicleList';
import Button from '../components/Button';

export const Vehiclelistpage = ({getVehicleList}) => {
  const [vehicleList, setVehicleList] = useState([]);
  const { vehicleList : List } = useSelector(state => state);
  const [page, setPage] = useState({});
  const navigate = useNavigate();

  const getNextData = async (url) => {
    const { data } = await axios.get(url);
    setVehicleList([
      ...vehicleList,
      ...data.results
    ]);
    console.log(data.results);
    setPage(data.pageInfo);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getVehicleList();
  }, []);

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`);
  };

  return (
    <>
      <section>
        <Navbar />
        <main className="container">
          <section className="back">
            <div className='pt-3'>
              <Link to="/">
                <FaChevronLeft />
                <span>Vehicle List</span>
              </Link>
            </div>
          </section>
          <section>
            <div className='row mt-4'>
              <div className='col'>
                <select name='paymentMethod' className="form-select" >
                  <option value="" style={{ display: 'none' }}>Sort</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                </select>
              </div>
              <div className='col'>
                <select name='paymentMethod' className="form-select" >
                  <option value="desc" style={{ display: 'none' }}>Z-A</option>
                  <option value="asc">A-Z</option>
                </select>
              </div>
              <div className='col'>
                <Button type="submit" className="filled w-100 h-100">Explore</Button>
              </div>
            </div>
          </section>
          <section className="destination">
            <div className="row text-center mb-5" >
              <div className="col">
                <h2 className="home mb-4">List Of All Items</h2>
              </div>
            </div>
            <div className="row">
              {List.vehicleList?.map((data, idx) => {
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
            <div className='row text-center mb-5'>
              <section className='back mb-5'>
                <button onClick={() => getNextData(List.pageInfo.next)} className='button-transparent pt-3'>
                  <FaChevronCircleDown />
                  <span>View More</span>
                </button>
              </section>
            </div>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
};

const mapStateToProps = state => ({ vehicleList : state.vehicleList });

const mapDispatchToProps = { getVehicleList };

export default connect(mapStateToProps, mapDispatchToProps)(Vehiclelistpage);