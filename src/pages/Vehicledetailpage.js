import React, { useEffect /*useState*/ /*Component*/ } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
// import Buttonplusminus from '../components/Buttonplusminus'
// import Navlogin from '../components/NavLogin'
import NumberFormat from 'react-number-format';
// import Fixie from '../assets/images/fixie-white-width.png'
// import FixieS from '../assets/images/fixie-white-width2.png'
import { FaChevronLeft, FaChevronRight, FaHeart, FaPlus, FaMinus } from 'react-icons/fa';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
// import { getData } from '../helpers/http'
import Button from '../components/Button';
import { getVehicleDetail } from '../redux/actions/vehicleDetail';
import { increment, decrement } from '../redux/actions/counter';
import Navbar from '../components/Navbar';
import noImage from '../assets/images/no-image.jpg';

export const Vehicledetailpage = ({ getVehicleDetail }) => {
  // const [vehicleDetail, setVehicle] = useState({})
  const { vehicleDetail: Detail } = useSelector(state => state);
  const auth = useSelector(state => state.auth);
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


  // const getDataComponent = async (id) => {
  //   const { data } = await getData(`http://localhost:5000/vehicles/${id}`)
  //   setVehicle(data.results)
  // }

  const goToReservation = (id) => {
    if(auth.token){
      navigate(`/reservation/${id}`);
    }else{
      navigate('/login');
    }
  };

  return (
    <section>
      <Navbar />
      {auth.userData.role ==='user' || auth.userData.role ===undefined &&
      <main className="container">
        <section className="back">
          <div className='pt-3'>
            <Link to="/vehicleType">
              <FaChevronLeft />
              <span>Detail</span>
            </Link>
          </div>
        </section>

        <section className="preview">
          <div className="row pt-5 pic">
            <div className="col text-center">
              <img src={Detail.vehicleDetail?.image} className="img-fluid detail" alt="Vehicle Detail" />
              <div className='position-relative'>
                <div className='position-absolute top-50 start-0 translate-middle'>
                  <button className="prev"><FaChevronLeft /></button>
                </div>
                <div className="row align-items-center justify-content-center pic-preview">
                  <div className="col text-center">
                    <img src={Detail.vehicleDetail.image} className="img-fluid detail1 mb-0" alt="Vehicle Detail" />
                  </div>
                  <div className="col text-center">
                    <img src={Detail.vehicleDetail.image} className="img-fluid detail1 mb-0" alt="Vehicle Detail" />
                  </div>
                </div>
                <div className='position-absolute top-50 start-100 translate-middle'>
                  <button className="next"><FaChevronRight /></button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="desc">
                <h2>{Detail.vehicleDetail.name}</h2>
                <p className="text-muted">{Detail.vehicleDetail.loc}</p>
              </div>
              <div className="status-vehicle mb-3 d-flex flex-column">
                {Detail.vehicleDetail.isAvailable === 1 &&
                  <span className="text-success fw-bold my-2">Available</span>
                }
                {Detail.vehicleDetail.isAvailable === 0 &&
                  <span className="text-danger fw-bold my-2">Not Available</span>
                }
                {Detail.vehicleDetail.isPrepay === 1 &&
                  <span className="text-success mb-3">Prepayment</span>
                }
                {Detail.vehicleDetail.isPrepay === 0 &&
                  <span className="text-danger mb-3">No prepayment</span>
                }
              </div>
              <div className="info">
                <div className="mb-2">
                  Capacity: {Detail.vehicleDetail.capacity} Person
                </div>
                <div className="mb-2">
                  Type : {Detail.vehicleDetail.categoryName}
                </div>
                <div>
                  Reservation before {Detail.vehicleDetail.reservationBefore}
                </div>
              </div>
              <div className="price mt-4 mb-4 text-end">
                <NumberFormat value={Detail.vehicleDetail.price * counter.num} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} suffix={'/Day'} />
              </div>
              <div className="day d-flex row justify-content-between align-items-center">
                <div className="col">
                  <button onClick={onInc} className="plus"><FaPlus /></button>
                </div>
                <div className="col">
                  <div className="count">{counter.num}</div>
                </div>
                <div className="col">
                  <button onClick={onDec} className="minus"><FaMinus /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="semi-footer">
          <div className="row mt-4 mb-4">
            <div className="col-sm-5 ">
              <Link to="">
                <Button className="dark w-100 mb-2">Chat Admin</Button>
              </Link>
            </div>
            <div className="col-sm-5 mb-2">
              <Button onClick={() => goToReservation(Detail.vehicleDetail.id)} style={{ cursor: 'pointer' }} key={String(Detail.vehicleDetail.id)} className="filled w-100">Reservation</Button>
            </div>
            <div className="col sm-4">
              <Button className="like w-100">
                <FaHeart />
                <span className='mx-2'>Like</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      }
      {auth.userData.role ==='admin' &&
      <main className="container">
        <section className="back">
          <div className='pt-3'>
            <Link to="/vehicleType">
              <FaChevronLeft />
              <span>Update item</span>
            </Link>
          </div>
        </section>

        <section className="preview">
          <div className="row pt-5 pic">
            <div className="col text-center" style={{ cursor: 'pointer' }}>
              <img src={noImage} className="img-fluid add" alt="Vehicle Detail" />
            </div>
            <div className="col">
              <div className="desc">
                <div className="mb-3">
                  <input placeholder='Name' id='name' className="d-block w-100 input-underline" type="text" />
                </div>
                <div className="mb-3">
                  <input placeholder='Color' id='color' className="d-block w-100 input-underline" type="text" />
                </div>
                <div className="mb-3">
                  <input placeholder='Location' id='loc' className="d-block w-100 input-underline" type="text" />
                </div>
                <div className="mb-3">
                  <input placeholder='Capacity' id='capacity' className="d-block w-100 input-underline" type="text" />
                </div>
                <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}} className='mb-2'>Status</label>
                <select name='isAvailable' className="form-select  w-100 mb-5">
                  <option value="" style={{ display: 'none' }}>Select Status</option>
                  <option value="1" className='text-success'>Available</option>
                  <option value="0" className='text-danger'>Full Booked</option>
                </select>
              </div>
              <div className="day d-flex row justify-content-between align-items-center">
                <div className="col">
                  <button onClick={onInc} className="plus"><FaPlus /></button>
                </div>
                <div className="col">
                  <div className="count">{counter.num}</div>
                </div>
                <div className="col">
                  <button onClick={onDec} className="minus"><FaMinus /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="semi-footer">
          <div className="row mt-4">
            <div className="col mb-4">
              <div className="mb-3">
                <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Price</label>
                <input id='price' style={{ height:45 }} className="d-block w-100 form-control" type="text" />
              </div>
              <div className="mb-3">
                <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Reservation Before</label>
                <input id='reservationBefore' style={{ height:45 }} className="d-block w-100 form-control" type="text" />
              </div>
              <select name='categoryId' className="form-select w-100 mb-3 py-3 px-4" style={{backgroundColor:'#072227', color : '#4FBDBA'}}>
                <option style={{ display: 'none' }}>Category</option>
                <option value="1" >Car</option>
                <option value="2" >Motorbike</option>
                <option value="3" >Bike</option>
              </select>
              <Button className="filled w-100"  style={{ cursor: 'pointer' }}>
               Update Item
              </Button>
            </div>
          </div>
        </section>
      </main>
      }
      <Footer />
    </section>
  );
};

const mapStateToProps = state => ({ vehicleDetail: state.vehicleDetail });

const mapDispatchToProps = { getVehicleDetail };

export default connect(mapStateToProps, mapDispatchToProps)(Vehicledetailpage);


// export default class Vehicledetailpage extends Component {
//   render() {
//     return (
//       <>
// <body>
//   <Navlogin />
//   <main className="container">
//     <section className="back">
//       <div>
//         <Link to="">
//           <i className="fa-solid fa-chevron-left"></i>
//         </Link>
//         <span>Detail</span>
//       </div>
//     </section>

//     <section className="preview">
//       <div className="row pt-5">
//         <div className="col">
//           <img src={Fixie} alt="Vehicle Detail" />
//           <div className="row align-items-center justify-content-center">
//             <div className="col-md-1">
//               <button className="prev"><FaChevronLeft /></button>
//             </div>
//             <div className="col-md-5">
//               <img src={FixieS} className="img-fluid" alt="Vehicle Detail" />
//             </div>
//             <div className="col-md-5 text-end">
//               <img src={FixieS} className="img-fluid" alt="Vehicle Detail" />
//             </div>
//             <div className="col-md-1">
//               <button className="next"><FaChevronRight /></button>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="desc">
//             <h2>Fixie-Gray Only</h2>
//             <p className="text-muted">Yogyakarta</p>
//           </div>
//           <div className="status-vehicle mb-3 d-flex flex-column">
//             <span className="text-success fw-bold my-2">Available</span>
//             <span className="text-danger mb-3">No prepayment</span>
//           </div>
//           <div className="info">
//             <div className="mb-2">
//               Capacity: 1 Person
//             </div>
//             <div className="mb-2">
//               Type : Bike
//             </div>
//             <div>
//               Reservation before 2 PM
//             </div>
//           </div>
//           <div className="price mt-4 mb-4 text-end">
//             Rp.78.000/day
//           </div>
//           <div className="day d-flex flex-row justify-content-between align-items-center">
//             <div className="col">
//               <button className="plus"><FaPlus /></button>
//             </div>
//             <div className="col-md-8">
//               <div className="count">2</div>
//             </div>
//             <div className="col">
//               <button className="minus"><FaMinus /></button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <section className="semi-footer">
//       <div className="row mt-4">
//         <div className="col">
//           <Link to="">
//             <button className="button-dark">Chat Admin</button>
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/reservation">
//             <button className="button-filled">Reservation</button>
//           </Link>
//         </div>
//         <div className="col mb-4">
//           <button className="button-like"><i className="fa-solid fa-heart fa-2xl"></i>
//             <span>Like</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   </main>
//   <Footer />
// </body>
//       </>
//     )
//   }
// }
