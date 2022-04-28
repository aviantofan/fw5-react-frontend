import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NumberFormat from 'react-number-format';
import { FaChevronLeft, FaChevronRight, FaHeart, FaPlus, FaMinus } from 'react-icons/fa';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { getVehicleDetail, updateDataVehicle, deleteVehicle } from '../redux/actions/vehicleDetail';
import { increment, decrement } from '../redux/actions/counter';
import Navbar from '../components/Navbar';
import noImage from '../assets/images/no-image.jpg';
import Skeleton from 'react-loading-skeleton';

export const Vehicledetailpage = ({ getVehicleDetail }) => {
  const { vehicleDetail: Detail } = useSelector(state => state);
  const auth = useSelector(state => state.auth);
  const { id } = useParams();
  const navigate = useNavigate();
  const counter = useSelector(state => state.counter);
  const hiddenFileInput = useRef(null);  
  const [updateVehicle, setUpdateVehicle] = useState({});
  const [name, setName] = useState(`${Detail.vehicleDetail?.name}`);
  const [color, setColor] = useState(`${Detail.vehicleDetail?.color}`);
  const [loc, setLoc] = useState(`${Detail.vehicleDetail?.loc}`);
  const [isPrepay, setIsPrepay] = useState(`${Detail.vehicleDetail?.isPrepay}`);
  const [price, setPrice] = useState(`${Detail.vehicleDetail?.price}`);
  const [capacity, setCapacity] = useState(`${Detail.vehicleDetail?.capacity}`);
  const [image, setImage] = useState();
  const [stock, setStock] = useState(`${Detail.vehicleDetail?.stock}`);
  const [isAvailable, setIsAvailable] = useState(`${Detail.vehicleDetail?.isAvailable}`);
  const [categoryId, setCategoryId] = useState(`${Detail.vehicleDetail?.categoryId}`);
  const [reservationBefore, setReservationBefore] = useState(`${Detail.vehicleDetail.reservationBefore}`);
  const [paymentMethod, setPaymentMethod] = useState();
  const dispatch = useDispatch();

  const{
    categoryName, 
  } = Detail.vehicleDetail;

  useEffect(()=>{
    setImage(Detail.vehicleDetail.image);
    setName(Detail.vehicleDetail.name);
    setColor(Detail.vehicleDetail.color);
    setLoc(Detail.vehicleDetail.loc);
    setIsPrepay(Detail.vehicleDetail.isPrepay);
    setCapacity(Detail.vehicleDetail.capacity);
    setStock(Detail.vehicleDetail.stock);
    setIsAvailable(Detail.vehicleDetail.isAvailable);
    setCategoryId(Detail.vehicleDetail.categoryId);
    setReservationBefore(Detail.vehicleDetail.reservationBefore);
    setPaymentMethod(Detail.vehicleDetail.paymentMethod);
    setPrice(Detail.vehicleDetail.price);
  }, 
  [
    Detail.vehicleDetail.image,
    Detail.vehicleDetail.name, 
    Detail.vehicleDetail.color,
    Detail.vehicleDetail.loc,
    Detail.vehicleDetail.isPrepay,
    Detail.vehicleDetail.capacity,
    Detail.vehicleDetail.stock,
    Detail.vehicleDetail.isAvailable,
    Detail.vehicleDetail.categoryId,
    Detail.vehicleDetail.reservationBefore,
    Detail.vehicleDetail.price,
    Detail.vehicleDetail.paymentMethod]);

  const onInc = () => {
    dispatch(increment());
  };
  const onDec = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getVehicleDetail(id);
  }, []);

  const goToReservation = (id) => {
    if(auth.token){
      navigate(`/reservation/${id}`);
    }else{
      navigate('/login');
    }
  };

  const uploadFile = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const fileInputHandler = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];
    reader.readAsDataURL(image); 
    
    reader.onload = () => {
      setImage(reader.result);
    };
    
    const data = {image};
    dispatch(updateDataVehicle(data, id));
  };

  const paymentMethodChange = (e) => {
    const isRadio = e.target.type === 'radio';

    if (isRadio) {
      setPaymentMethod(e.target.id);
      if (paymentMethod === Detail.vehicleDetail.paymentMethod) {
        setUpdateVehicle({
          ...updateVehicle,
          paymentMethod: e.target.id
        });
      } else {
        setUpdateVehicle({
          ...updateVehicle,
          paymentMethod: ''
        });
      }
    }
  };

  const update = (e) => {
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const loc = document.getElementById('loc').value;
    const capacity = document.getElementById('capacity').value;
    const isAvailable = document.getElementById('isAvailable').value;
    const isPrepay = document.getElementById('isPrepay').value;
    const categoryId = document.getElementById('categoryId').value;
    const price = document.getElementById('price').value;
    const reservationBefore = document.getElementById('reservationBefore').value;
    const stock = document.getElementById('stock').value;
    const paymentMethod = updateVehicle.paymentMethod;
    const data = {name, color, loc, capacity, isAvailable, isPrepay, categoryId, price, stock, reservationBefore, paymentMethod};
    dispatch(updateDataVehicle(data, id));
  };

  const deleteData = (e) =>{
    dispatch(deleteVehicle(id));
    if(Detail.isSuccess === true){
      navigate('/vehicleType');
    }
  };

  return (
    <section>

      {auth.userData.role ===undefined &&
      <section>
        <Navbar />
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
                <img src={image ? image : noImage} className="img-fluid detail" alt="Vehicle Detail" />
                <div className='position-relative'>
                  <div className='position-absolute top-50 start-0 translate-middle'>
                    <button className="prev"><FaChevronLeft /></button>
                  </div>
                  <div className="row align-items-center justify-content-center pic-preview">
                    <div className="col text-center">
                      <img src={image ? image : noImage} className="img-fluid detail1 mb-0" alt="Vehicle Detail" />
                    </div>
                    <div className="col text-center">
                      <img src={image ? image : noImage} className="img-fluid detail1 mb-0" alt="Vehicle Detail" />
                    </div>
                  </div>
                  <div className='position-absolute top-50 start-100 translate-middle'>
                    <button className="next"><FaChevronRight /></button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="desc">
                  <h2>{name}</h2>
                  <p className="text-muted">{loc}</p>
                </div>
                <div className="status-vehicle mb-3 d-flex flex-column">
                  {isAvailable === 1 &&
                  <span className="text-success fw-bold my-2">Available</span>
                  }
                  {isAvailable === 0 &&
                  <span className="text-danger fw-bold my-2">Not Available</span>
                  }
                  {isPrepay === 1 &&
                  <span className="text-success mb-3">Prepayment</span>
                  }
                  {isPrepay === 0 &&
                  <span className="text-danger mb-3">No prepayment</span>
                  }
                </div>
                <div className="info">
                  <div className="mb-2">
                  Capacity: {capacity} Person
                  </div>
                  <div className="mb-2">
                  Type : {categoryName}
                  </div>
                  <div>
                  Reservation before {reservationBefore}
                  </div>
                </div>
                <div className="price mt-4 mb-4 text-end">
                  <NumberFormat value={price * counter.num} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} suffix={'/Day'} />
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
        <Footer/>
      </section>
      }

      {/* ROLE USER */}

      {auth.userData.role ==='user' &&
      <section>
        <Navbar />
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
                <img src={image} className="img-fluid detail" alt="Vehicle Detail" />
                <div className='position-relative'>
                  <div className='position-absolute top-50 start-0 translate-middle'>
                    <button className="prev"><FaChevronLeft /></button>
                  </div>
                  <div className="row align-items-center justify-content-center pic-preview">
                    <div className="col text-center">
                      <img src={image} className="img-fluid detail1 mb-0" alt="Vehicle Detail" />
                    </div>
                    <div className="col text-center">
                      <img src={image} className="img-fluid detail1 mb-0" alt="Vehicle Detail" />
                    </div>
                  </div>
                  <div className='position-absolute top-50 start-100 translate-middle'>
                    <button className="next"><FaChevronRight /></button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="desc">
                  <h2>{name}</h2>
                  <p className="text-muted">{loc}</p>
                </div>
                <div className="status-vehicle mb-3 d-flex flex-column">
                  {isAvailable === 1 &&
                  <span className="text-success fw-bold my-2">Available</span>
                  }
                  {isAvailable === 0 &&
                  <span className="text-danger fw-bold my-2">Not Available</span>
                  }
                  {isPrepay === 1 &&
                  <span className="text-success mb-3">Prepayment</span>
                  }
                  {isPrepay === 0 &&
                  <span className="text-danger mb-3">No prepayment</span>
                  }
                </div>
                <div className="info">
                  <div className="mb-2">
                  Capacity: {capacity} Person
                  </div>
                  <div className="mb-2">
                  Type : {categoryName}
                  </div>
                  <div>
                  Reservation before {reservationBefore}
                  </div>
                </div>
                <div className="price mt-4 mb-4 text-end">
                  <NumberFormat value={price * counter.num} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} suffix={'/Day'} />
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
        <Footer/>
      </section>
      }
      
      {/* ROLE ADMIN */}

      {auth.userData.role ==='admin' &&
      <section>
        <Navbar />
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
            {Detail.isLoading == true &&
                <Skeleton height={150} containerClassName='row' count={8} wrapper={({ children }) => (<div className='col-md-3'>{children}</div>)} />
            }
            <div className="row pt-5 pic">
              <div className="col text-center" style={{ cursor: 'pointer' }}>
                <img src={image||noImage} className="img-fluid add" alt="Vehicle Detail" onClick={(e) => uploadFile(e)} />
                <input type="file"
                  ref={hiddenFileInput}
                  className='d-none'
                  name='image'
                  accept='profileImage'
                  onChange={(e) => fileInputHandler(e)}
                />
              </div>
              <div className="col">
                <div className="desc">
                  <div className="mb-3">
                    <input 
                      placeholder='Name' 
                      id='name' 
                      name='name' 
                      className="d-block w-100 input-underline" 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      placeholder='Color' 
                      id='color' 
                      name='color' 
                      className="d-block w-100 input-underline" 
                      type="text" 
                      value={color} 
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      placeholder='Location' 
                      id='loc' 
                      name='loc' 
                      className="d-block w-100 input-underline" 
                      type="text" 
                      value={loc} 
                      onChange={(e) => setLoc(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      placeholder='Capacity' 
                      id='capacity' 
                      name='capacity' 
                      className="d-block w-100 input-underline" 
                      type="text" 
                      value={capacity} 
                      onChange={(e) => setCapacity(e.target.value)}
                    />
                  </div>
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Status</label>
                  <select name='isAvailable' id='isAvailable' className="form-select  w-100 mb-3" value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)}>
                    <option   style={{ display: 'none' }}>Select Status</option>
                    <option value="1" className='text-success'>Available</option>
                    <option value="0" className='text-danger'>Full Booked</option>
                  </select>
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}} className='mb-2'>Category</label>
                  <select name='categoryId' id='categoryId' className="form-select w-100 mb-3 py-3 px-4" value={categoryId} style={{backgroundColor:'#072227', color : '#4FBDBA'}} onChange={(e) => setCategoryId(e.target.value)}>
                    <option style={{ display: 'none' }}>Category</option>
                    <option value="1" >Car</option>
                    <option value="2" >Motorbike</option>
                    <option value="3" >Bike</option> 
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col mb-4">
                <div className="mb-3">
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Price</label>
                  <input 
                    id='price' 
                    name='price' 
                    style={{ height:45 }} 
                    className="d-block w-100 form-control" 
                    type="text" 
                    value={price}                   
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Reservation Before</label>
                  <input 
                    id='reservationBefore' 
                    name='reservationBefore' 
                    style={{ height:45 }} 
                    className="d-block w-100 form-control" 
                    type="text" 
                    value={reservationBefore}
                    onChange={(e) => setReservationBefore(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Stock</label>
                  <input 
                    id='stock' 
                    name='stock' 
                    style={{ height:45 }} 
                    className="d-block w-100 form-control" 
                    type="text" 
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Prepayment</label>
                <select name='isPrepay' id='isPrepay' className="form-select  w-100 mb-3" value={isPrepay} onChange={(e) => setIsPrepay(e.target.value)}>
                  <option   style={{ display: 'none' }}>Select Status</option>
                  <option value="1" className='text-success'>Has Prepayment</option>
                  <option value="0" className='text-danger'>No Prepayment</option>
                </select>
                <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Payment Method</label>
                <section className='addvehicle'>
                  <div className="d-flex justify-content-center mb-5">
                    <div className="me-5">
                      <label className="radio-button" htmlFor="Cash">
                        <input 
                          type="radio" 
                          name="paymentMethod"
                          id='Cash'
                          onChange={paymentMethodChange} 
                          checked={paymentMethod === 'Cash'}
                          value='Cash'/>
                        <div className="checkmark"></div>
                        <div className="text">Cash</div>
                      </label>
                    </div>
                    <div className="me-5">
                      <label className="radio-button" htmlFor="Transfer">
                        <input 
                          type="radio"
                          name="paymentMethod"
                          id='Transfer'
                          onChange={paymentMethodChange} 
                          checked={paymentMethod === 'Transfer'}
                          value='Transfer'/>
                        <div className="checkmark"></div>
                        <div className="text">Transfer</div>
                      </label>
                    </div>
                    <div>
                      <label className="radio-button" htmlFor="Excash">
                        <input 
                          type="radio"
                          name="paymentMethod"
                          id='Excash'
                          onChange={paymentMethodChange} 
                          checked={paymentMethod === 'Excash'}
                          value='Excash'/>
                        <div className="checkmark"></div>
                        <div className="text">Excash</div>
                      </label>
                    </div>
                  </div>
                </section>
                <div className='row text-center'>
                  <div className='col'>
                    <Button className="filled w-50" style={{ cursor: 'pointer', fontWeight:'bold' }} onClick={update}>Update Item</Button>
                  </div>
                  <div className='col'>
                    <Button  className="dark w-50" style={{ color:'#32DBC6', cursor: 'pointer', fontWeight:'bold' }} onClick={deleteData}>Delete Item</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
      }
    </section>
  );
};

const mapStateToProps = state => ({ vehicleDetail: state.vehicleDetail });

const mapDispatchToProps = { getVehicleDetail };

export default connect(mapStateToProps, mapDispatchToProps)(Vehicledetailpage);