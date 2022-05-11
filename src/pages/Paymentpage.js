import React, { /*Component*/ useEffect /*useState*/ } from 'react';
import Footer from '../components/Footer';
import NumberFormat from 'react-number-format';
import { FaChevronLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getVehicleDetail } from '../redux/actions/vehicleDetail';
import { postTransaction } from '../redux/actions/transactions';
import Navbar from '../components/Navbar';

export const Paymentpage = ({ getVehicleDetail }) => {
  // const [vehicleDetail, setVehicle] = useState({})
  const { vehicleDetail: Detail } = useSelector(state => state);
  const  transactions  = useSelector(state => state.transactions);
  const auth = useSelector(state => state.auth);
  const counter = useSelector(state => state.counter);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getVehicleDetail(id);
  }, []);

  const onPay = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    const userId = auth.userData.id;
    const vehicleId = Detail.vehicleDetail.id;
    const rentStartDate = transactions.data.rentStartDate;
    const rentEndDate = transactions.data.rentEndDate;
    const prepayment = Detail.vehicleDetail.price * counter.num;
    const isReturned = '0';
    const data = { userId, vehicleId, rentStartDate, rentEndDate, prepayment, isReturned };
    console.log(data);
    dispatch(postTransaction(token, data));
    navigate('/history');
  };

  const goToReservation = (id) => {
    navigate(`/reservation/${id}`);
  };

  return (
    <>
      <body>
        <Navbar />
        <main className="container">
          <section className="back pt-4">
            <div onClick={() => goToReservation(Detail.vehicleDetail.id)} style={{ cursor: 'pointer' }} key={String(Detail.vehicleDetail.id)}>
              <FaChevronLeft />
              <span>Payment</span>
            </div>
          </section>

          <section className="preview">
            <div className="row pt-5">
              <div className="col-5 picture">
                <img src={Detail.vehicleDetail.image} className="img-fluid payment" alt="Reserved" />
              </div>
              <div className="col">
                <div className="desc">
                  <h2 className="mb-0">{Detail.vehicleDetail.name}</h2>
                  <p className="text-muted mb-4">{Detail.vehicleDetail.loc}</p>
                </div>
                <div className="status-v mb-3 d-flex flex-column">
                  <span className="text-muted fw-bold">No Prepayment</span>
                </div>
                <div className="status d-flex flex-column">
                  <span className="mb-2 fw-bold">#FG1209878YZS</span>
                </div>
                <div className="code d-flex flex-column">
                  <Button className="filled"> Copy booking code</Button>
                </div>
              </div>
            </div>

            <section className="data">
              <div className="row pt-5">
                <div className="col-md-5">
                  <div className="qty mb-3 d-flex flex-column">
                    <span>Quantity : {counter.num} {Detail.vehicleDetail.categoryName}</span>
                  </div>
                </div>
                <div className="col">
                  <div className=" date mb-3 d-flex flex-column">
                    <div className='row d-inline-flex'>
                      <div className='col text-center'>
                        <span>Reservation Date :</span>
                      </div>
                      <div className='col text-center'>
                        <div className="dates">
                          <span className="text-muted">{transactions?.data.rentStartDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-5">
                  <div className="details mb-3 d-flex flex-column">
                    <span className="fw-bold mb-2">Order Details :</span>
                    <span className="mb-2">{counter.num} {Detail.vehicleDetail.categoryName} : <NumberFormat value={Detail.vehicleDetail.price * counter.num} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} /></span>
                    {/* <span className="mb-3">1 Bike : Rp. 78.000</span> */}
                    <span>Total : <NumberFormat value={Detail.vehicleDetail.price * counter.num} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} /></span>
                  </div>
                </div>
                <div className="col">
                  <div className="identity mb-3 d-flex flex-column">
                    <span className="fw-bold">Identity :</span>
                    <span>{auth.userData.name} {auth.userData.phone}</span>
                    <span>{auth.userData.email}</span>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="semi-footer">
            <div className="row mt-4 mb-4">
              <div className="col-sm-4 mb-2  pt-2">
                <div className="text fw-bold d-flex flex-column">
                  <span>Payment code:</span>
                </div>
              </div>
              <div className="col-sm-4 mb-2  text-center">
                <div className="code d-flex flex-column">
                  <span>#FG1209878YZS
                    <Button className="copy mx-2">Copy</Button>
                  </span>
                </div>
              </div>
              <div className="col-sm-4">
                <select className="form-select d-flex flex-column">
                  <option value="">Select payment methods</option>
                </select>
              </div>
            </div>
          </section>

          <section className="semi-footer">
            <div className="row mt-4">
              <div className="col mb-4">
                <Button onClick={onPay} className="filled w-100">Finish payment : <span className="text-danger">59:30</span></Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  );
};
const mapStateToProps = state => ({ vehicleDetail: state.vehicleDetail});

const mapDispatchToProps = { getVehicleDetail };

export default connect(mapStateToProps, mapDispatchToProps)(Paymentpage);