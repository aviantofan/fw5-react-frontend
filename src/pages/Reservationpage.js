import React, { /*Component*/ useEffect /*useState*/ } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NumberFormat from 'react-number-format';
import { FaChevronLeft, FaPlus, FaMinus } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getVehicleDetail } from '../redux/actions/vehicleDetail';
import { getDataTransaction } from '../redux/actions/transactions';
import { increment, decrement } from '../redux/actions/counter';

export const Reservationpage = ({ getVehicleDetail }) => {
  // const [vehicleDetail, setVehicle] = useState({})
  const { vehicleDetail: Detail } = useSelector(state => state);
  const { id } = useParams();
  const navigate = useNavigate();
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();
  const onInc = () => {
    dispatch(increment());
  };
  const onDec = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    getVehicleDetail(id);
  }, []);

  const goToDetail = (id) => {
    navigate(`/vehicles/${id}`);
  };

  const goToPayment = (id) => {
    const rentStartDate = document.getElementById('rentStartDate').value;
    const rentEndDate = document.getElementById('rentEndDate').value;
    const data = {rentStartDate, rentEndDate};
    console.log(data);
    dispatch(getDataTransaction(data));
    navigate(`/payment/${id}`);
  };

  return (
    <>
      <body>
        <Navbar />
        <main className="container">
          <section className="back">
            <div className='pt-3' onClick={() => goToDetail(Detail.vehicleDetail.id)} style={{ cursor: 'pointer' }} key={String(Detail.vehicleDetail.id)}>
              <FaChevronLeft />
              <span>Reservation</span>
            </div>
          </section>

          <section className="preview">
            <div className="row pt-5">
              <div className="col-8 picture">
                <img src={Detail.vehicleDetail.image} className="img-fluid reservation" alt="Vehicle Detail" />
              </div>
              <div className="col">
                <div className="desc">
                  <h2>{Detail.vehicleDetail.name}</h2>
                  <p className="text-muted">{Detail.vehicleDetail.loc}</p>
                </div>
                <div className="status-vehicle mb-3 d-flex flex-column">
                  <span className="text-danger mb-3 fw-bold">No prepayment</span>
                </div>
                <div className="day d-flex row justify-content-between align-items-center">
                  <div className="col">
                    <button onClick={onDec} className="minus"><FaMinus /></button>
                  </div>
                  <div className="col">
                    <div className="count">{counter.num}</div>
                  </div>
                  <div className="col">
                    <button onClick={onInc} className="plus"><FaPlus /></button>
                  </div>
                </div>
                <div className="status-vehicle mb-3 pt-5 d-flex flex-column">
                  <span className="mb-3 fw-bold">Reservation Date :</span>
                </div>
                <div className='col'>
                  <div className='row'>
                    <div className="col-12 mb-4">
                      <input id='rentStartDate' className="form-option w-100" type="date"></input>
                    </div>
                    <div className="col-12 mb-4">
                      <input id='rentEndDate' className="form-option w-100" type="date"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="semi-footer">
            <div className="row mt-4">
              <div className="col mb-4">
                <Button className="filled w-100" onClick={() => goToPayment(Detail.vehicleDetail.id)} style={{ cursor: 'pointer' }} key={String(Detail.vehicleDetail.id)}>
                  Pay Now : <NumberFormat value={Detail.vehicleDetail.price * counter.num} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} />
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </>
  );
};

const mapStateToProps = state => ({ vehicleDetail: state.vehicleDetail });

const mapDispatchToProps = { getVehicleDetail };

export default connect(mapStateToProps, mapDispatchToProps)(Reservationpage);