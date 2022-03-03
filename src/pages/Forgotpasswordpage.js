import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { FaChevronLeft } from 'react-icons/fa'


export default class Forgotpasswordpage extends Component {
  render() {
    return (
      <>
        <body>
          <header className="header-forgot">
            <div className="header-content">
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col pt-5'>
                    <section className="back">
                      <div>
                        <Link to="/login">
                          <FaChevronLeft />
                          <span>Back</span>
                        </Link>
                      </div>
                    </section>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <h1 className="heading">Don’t worry, we got your back!</h1>
                      <form>
                        <div className='row justify-content-center'>
                          <div className='col-md-6'>
                            <input placeholder="Enter your email address" type="email" className="forgotemail w-100" />
                          </div>
                        </div>
                        <div className='row justify-content-center mb-5'>
                          <div className='col-md-6'>
                            <button className="button-send w-100">Send Link</button>
                          </div>
                        </div>
                        <div className='row justify-content-center'>
                          <div className='col'>
                            <p className="text">
                              You will receive a link to reset your password.<br />
                              If you haven’t received any link, click <span>Resend Link</span>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Footer />
        </body>
      </>
    )
  }
}
