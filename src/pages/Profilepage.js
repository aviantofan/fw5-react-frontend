import React, {useEffect, useRef, useState} from 'react';
import Footer from '../components/Footer';
// import Navlogin from '../components/NavLogin'
import noImage from '../assets/images/no-image.jpg';
import { FaPencilAlt } from 'react-icons/fa';
import Button from '../components/Button';
// import Input from '../components/Input';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { profile } from '../redux/actions/profile';
import  {getDataUser}  from '../redux/actions/auth';

const Profilepage = ({getDataUser}) => {
  const auth = useSelector(state => state.auth);
  const [updateProfile, setUpdateProfile] = useState({});
  const [gender, setGender] = useState('');
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();
  const {
    id, 
    image, 
    name, 
    email, 
    createdAt, 
    phone, 
    address, 
    birthdate,
  } = (auth.userData);

  const uploadFile = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const fileInputHandler = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];

    const profileImage = document.querySelector('#profile-image');
    reader.readAsDataURL(image);

    reader.onload = (e) => {
      profileImage.src = e.target.result;
    };    
    
    const data = {image};
    dispatch(profile(data, id));
  };

  const genderChange = (e) => {
    const isRadio = e.target.type === 'radio';

    if (isRadio) {
      setGender(e.target.id);
      if (gender === auth.userData.gender) {
        setUpdateProfile({
          ...updateProfile,
          gender: e.target.id
        });
      } else {
        setUpdateProfile({
          ...updateProfile,
          gender: ''
        });
      }
    }
  };

  useEffect(() => {
    if (auth.userData) {
      setGender(auth.userData.gender);
    }
  }, [auth.userData]);

  const update = (e) => {
    e.preventDefault();
    const gender = updateProfile.gender;
    const email= document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const data = {gender, email, address, phone, name, birthdate};
    dispatch(profile(data,id));
  };
  return (
    <>
      <section>
        <Navbar />
        <main className="container">
          <section className="profile">
            <h2 className="page-name">Profile</h2>
            <form>
              <div className="text-center mb-5">
                <div className="d-inline-block position-relative profile-pic">
                  <img src={image || noImage} className="img-rounded-circle" alt="profile-pic" />
                  <button className="edit-photo" onClick={(e) => uploadFile(e)}><FaPencilAlt /></button>
                  <input type="file"
                    ref={hiddenFileInput}
                    className='d-none'
                    name='image'
                    accept='profileImage'
                    onChange={(e) => fileInputHandler(e)}
                  />
                </div>
              </div>
              <div className="proile-name">
                <h2 className="username">{name || 'unknown'}</h2>
              </div>
              <div className="profile-desc">
                <p>{email}<br />{phone || 'Has No Number'}<br />{`Has been active since ${createdAt}`||'Has been active since unknown'}</p>
              </div>
            </form>
          </section>

          <section className="profile-edit">
            <div className="d-flex justify-content-center mb-5">
              <div className="me-5">
                <label className="radio-button" htmlFor="Male">
                  <input 
                    type="radio" 
                    name="gender" 
                    id="Male" 
                    onChange={genderChange} 
                    checked={gender === 'Male'}
                    value='Male'/>
                  <div className="checkmark"></div>
                  <div className="text">Male</div>
                </label>
              </div>
              <div>
                <label className="radio-button" htmlFor="Female">
                  <input 
                    type="radio"
                    name="gender" 
                    id="Female" 
                    onChange={genderChange} 
                    checked={gender === 'Female'}
                    value='Male'/>
                  <div className="checkmark"></div>
                  <div className="text">Female</div>
                </label>
              </div>
            </div>
          </section>

          <section className="contact">
            <div className="mb-3">
              <h5>Contact</h5>
            </div>
            <div className="mb-5">
              <label className="mb-2">Email: </label>
              <input id='email' className="d-block w-100 input-underline" type="email" defaultValue={email} />
            </div>
            <div className="mb-5">
              <label className="mb-2">Address: </label>
              <textarea id='address' className="d-block w-100 input-underline" defaultValue={address}></textarea>
            </div>
            <div className="mb-5">
              <label className="mb-2">Mobile Number: </label>
              <input id='phone' className="d-block w-100 input-underline" type="text" defaultValue={phone} />
            </div>
          </section>

          <section className="identity">
            <div className="mb-3">
              <h5>Indentity</h5>
            </div>
            <div className="row">
              <div className="col">
                <label className="mb-2">Display Name: </label>
                <input id='name' className="d-block w-100 input-underline" type="text" defaultValue={name} />
              </div>
              <div className="col">
                <label className="mb-2">DD/MM/YY: </label>
                {' '}
                <input id='birthdate' className="d-block w-100 input-underline" type="date" defaultValue={birthdate}/>
              </div>
            </div>
          </section>

          <section className="button">
            <div className="row mt-5 mb-4">
              <div className='col-md-4'>
                <Button className="filled mb-2 w-100" onClick={update}>Save Change</Button>
              </div>
              <div className='col-md-4'>
                <Button className="dark mb-2 w-100">Edit Password</Button>
              </div>
              <div className='col-md-4'>
                <Button className="gray w-100">Cancel</Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Profilepage;