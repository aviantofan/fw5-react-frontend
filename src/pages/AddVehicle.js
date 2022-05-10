import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaPlus, FaMinus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { increment, decrement } from '../redux/actions/counter';
import Navbar from '../components/Navbar';
import noImage from '../assets/images/no-image.jpg';
import Input from '../components/Input';
import {insertVehicle} from '../redux/actions/vehicle';

export const AddVehicle = () => {
  // const navigate = useNavigate();
  const counter = useSelector(state => state.counter);
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState();
  const [input, setInput] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInc = () => {
    dispatch(increment());
  };
  const onDec = () => {
    dispatch(decrement());
  };

  const paymentMethodChange = (e) => {
    e.target.type === 'radio';
    setPaymentMethod(e.target.id);
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
    setInput ({image});
  };

  const addItem =(e)=>{
    e.preventDefault();
    if(image){
      const image = input.image;
      const name = e.target.elements['name'].value;
      const color = e.target.elements['color'].value;
      const loc = e.target.elements['loc'].value;
      const isAvailable = e.target.elements['isAvailable'].value;
      const capacity = e.target.elements['capacity'].value;
      const categoryId = e.target.elements['categoryId'].value;
      const reservationBefore = e.target.elements['reservationBefore'].value;
      const paymentMethod = e.target.elements['paymentMethod'].value;
      const price = e.target.elements['price'].value;
      const stock = counter.num;
      const data = {image, name, color, loc, isAvailable, capacity, categoryId, reservationBefore, paymentMethod, price, stock};
      console.log(data);
      dispatch(insertVehicle(data));
    }else{
      const name = e.target.elements['name'].value;
      const color = e.target.elements['color'].value;
      const loc = e.target.elements['loc'].value;
      const isAvailable = e.target.elements['isAvailable'].value;
      const capacity = e.target.elements['capacity'].value;
      const categoryId = e.target.elements['categoryId'].value;
      const reservationBefore = e.target.elements['reservationBefore'].value;
      const paymentMethod = e.target.elements['paymentMethod'].value;
      const price = e.target.elements['price'].value;
      const stock = counter.num;
      const data = {name, color, loc, isAvailable, capacity, categoryId, reservationBefore, paymentMethod, price, stock};
      console.log(data);
      dispatch(insertVehicle(data));
    }
  };
  
  return (
    <section>
      <Navbar />
      <main className="container">
        <section className="back">
          <div className='pt-3'>
            <Link to="/vehicleType">
              <FaChevronLeft />
              <span>Add new item</span>
            </Link>
          </div>
        </section>

        <section className="preview">
          <div className='row mt-5'>
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
          <form onSubmit={addItem}>
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
                    <input placeholder='Name' id='name' name='name' className="d-block w-100 input-underline" type="text" />
                  </div>
                  <div className="mb-3">
                    <input placeholder='Color' id='color' name='color' className="d-block w-100 input-underline" type="text" />
                  </div>
                  <div className="mb-3">
                    <input placeholder='Location' id='loc' name='loc' className="d-block w-100 input-underline" type="text" />
                  </div>
                  <div className="mb-3">
                    <input placeholder='Capacity' id='capacity' name='capacity' className="d-block w-100 input-underline" type="text" />
                  </div>
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}} className='mb-2'>Status</label>
                  <select name='isAvailable' className="form-select  w-100 mb-5">
                    <option value="" style={{ display: 'none' }}>Select Status</option>
                    <option value="1" className='text-success'>Available</option>
                    <option value="0" className='text-danger'>Full Booked</option>
                  </select>
                  <select name='categoryId' className="form-select w-100 mb-3 py-3 px-4" style={{backgroundColor:'#072227', color : '#4FBDBA'}}>
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
                  <Input id='price' name='price' style={{ height:45 }} className="d-block w-100 form-control" type="text" />
                </div>
                <div className="mb-3">
                  <label style={{ fontSize: 24, fontFamily:'Playfair Display', fontWeight:'bold'}}>Reservation Before</label>
                  <Input id='reservationBefore' name='reservationBefore' style={{ height:45 }} className="d-block w-100 form-control" type="text" />
                </div>
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
                <Button type='submit' className="filled w-100" style={{ cursor: 'pointer', fontWeight:'bold' }}>Save Item</Button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </section>
  );
};

export default AddVehicle;


