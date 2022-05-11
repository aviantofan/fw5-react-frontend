import React, { /*Component*/useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NumberFormat from 'react-number-format';
import Lambo from '../assets/images/lambo-history.png';
import Jeep from '../assets/images/jeep-history.png';
import { FaChevronRight, FaChevronDown, FaSearch } from 'react-icons/fa';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import { connect, useSelector } from 'react-redux';
import { getHistory } from '../redux/actions/history';


export const Historypage = ({getHistory}) => {
  const auth = useSelector(state => state.auth);
  const {history : histories} = useSelector(state => state);
  const [history, setHistory] = useState([]);
  const {id} = (auth.userData);

  useEffect(() => {
    window.scrollTo(0, 0);
    if(auth.isSuccess){
      getHistory(id);
    }
  }, [auth.isSuccess]);

  return (
    <>
      <section>
        <Navbar />
        <main className="container">
          <div className='row gx-1 main-section pt-4'>
            <section className="upper col-sm-8 ps-2">
              <div className="row form-section">
                <div className="col search-bar mb-2">
                  <form className="container d-flex position-relative px-0">
                    <Input className="form-control" type="search" placeholder="Search history" />
                    <button type="submit" className="btn position-absolute top-50 end-0 translate-middle-y">
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div className="col-sm-3">
                  <select className="form-select select-bar">
                    <option className="d-none disabled">Filter</option>
                    <option value="type">Type</option>
                    <option value="data-added">Data Added</option>
                    <option value="name">Name</option>
                    <option value="favorite">Favorite Product</option>
                  </select>
                </div>
              </div>
              <div className="container today-history mx-0">
                <div className="text-muted description">Today</div>
                <Link className="d-flex align-items-center justify-content-between border-bottom" to="/payment">
                  <span>Please finish your payment for vespa for Vespa Rental Jogja</span>
                  <FaChevronRight />
                </Link>
                <Link className="d-flex align-items-center justify-content-between border-bottom" to="">
                  <span>Your payment has been confirmed!</span>
                  <FaChevronRight />
                </Link>
              </div>
              <div className="container weekly-history mb-3">
                <div className="text-muted head-weekly">A week ago</div>
                <div className="d-flex align-items-center">
                  <div className="row history-data">
                    {histories.history.map((data, idx) => {
                      return (
                        <div key={idx} className='d-flex my-3 history-contain'>
                          <div className="col-3">
                            <div className="vehicle-image h-50 img-fluid">
                              <img className='img-fluid' src={data.image} alt="" />
                            </div>
                          </div>
                          <div className="col mx-5">
                            <div className="detail-1">
                              <h5 className="m-0 fw-bold">{data.vehicleName}</h5>
                              <span>{data.rentStartDate} to {data.rentEndDate}</span>
                            </div>
                            <div className="mt-4 detail-2">
                              <h5 className="m-0 fw-bold">Prepayment: <NumberFormat value={data.prepayment} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} /></h5>
                              {data.isReturned === 1 &&
                              <span className="text-success status">Has been returned</span>
                              }
                              {data.isReturned === 0 &&
                              <span className="text-danger status">Not yet returned</span>
                              }
                            </div>
                          </div>
                        </div>
                      );
                    })} 
                  </div>
                </div>
              </div>
            </section>

            <section className="down col-sm-4 mb-4 px-4">
              <div className="border  text-center">
                <h5 className="fw-bold">New Arrival</h5>
                <div className="my-2 d-inline-block position-relative">
                  <Link to="">
                    <img className='img-fluid' src={Lambo} alt="" />
                    <div className="highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end">
                      <h5>Lamborghini</h5>
                      <span>South Jakarta</span>
                    </div>
                  </Link>
                </div>
                <div className="my-2 d-inline-block position-relative">
                  <Link to="">
                    <img className='img-fluid' src={Jeep} alt="" />
                    <div className="highlight position-absolute text-start bg-white bottom-0 start-0 rounded-end">
                      <h5>White Jeep</h5>
                      <span>Kalimantan</span>
                    </div>
                  </Link>
                </div>
                <div className="new-arival">
                  <Link to="">
                    <span className="text-muted">View more</span>
                    <div>
                      <FaChevronDown />
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
};

const mapStateToProps = state => ({ history: state.history });

const mapDispatchToProps = { getHistory };

export default connect(mapStateToProps, mapDispatchToProps)(Historypage);