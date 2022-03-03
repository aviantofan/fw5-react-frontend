import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navlogin from '../components/NavLogin'
import Profile from '../assets/images/profile-picture.png'
import { FaPencilAlt } from 'react-icons/fa'
import Button from '../components/Button'

export default class Profilepage extends Component {
  render() {
    return (
      <>
        <body>
          <Navlogin />
          <main className="container">
            <section className="profile">
              <h2 className="page-name">Profile</h2>
              <form>
                <div className="text-center mb-5">
                  <div className="d-inline-block position-relative profile-pic">
                    <img src={Profile} className="img-rounded-circle" alt="profile-pic" />
                    <button className="edit-photo"><FaPencilAlt /></button>
                  </div>
                </div>
                <div className="proile-name">
                  <h2 className="username">Samantha Doe</h2>
                </div>
                <div className="profile-desc">
                  <p>samanthadoe@mail.com<br />+62833467823<br />Has been active since 2013</p>
                </div>
              </form>
            </section>

            <section className="profile-edit">
              <div className="d-flex justify-content-center mb-5">
                <div className="me-5">
                  <label className="radio-button">
                    <input type="radio" name="gender" />
                    <div className="checkmark"></div>
                    <div className="text">Male</div>
                  </label>
                </div>
                <div>
                  <label className="radio-button">
                    <input type="radio" name="gender" />
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
                <input className="d-block w-100 input-underline" type="email" value="zulaikha17@gmail.com" />
              </div>
              <div className="mb-5">
                <label className="mb-2">Address: </label>
                <textarea className="d-block w-100 input-underline">Iskandar Street no. 67 Block A Near Bus Stop</textarea>
              </div>
              <div className="mb-5">
                <label className="mb-2">Mobile Number: </label>
                <input className="d-block w-100 input-underline" type="text" value="(+62)813456782" />
              </div>
            </section>

            <section className="identity">
              <div className="mb-3">
                <h5>Indentity</h5>
              </div>
              <div className="row">
                <div className="col">
                  <label className="mb-2">Display Name: </label>
                  <input className="d-block w-100 input-underline" type="text" value="Zulaikha" />
                </div>
                <div className="col">
                  <label className="mb-2">DD/MM/YY: </label>
                  <input className="d-block w-100 input-underline" type="date" value="03/09/2003" />
                </div>
              </div>
            </section>

            <section className="button">
              <div className="row mt-5 mb-4">
                <div className='col-md-4'>
                  <Button className="filled mb-2 w-100">Save Change</Button>
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
        </body>
      </>
    )
  }
}
