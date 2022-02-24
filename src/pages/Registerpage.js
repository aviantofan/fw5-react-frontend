import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Google from '../assets/images/google.png'

export default class Registerpage extends Component {
  render() {
    return (
      <>
        <body>
          <header className="header-register">
            <div className="header-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h1 className="heading w-100">Let’s Explore <br /> The World</h1>
                    </div>
                    <div className="mb-2">
                      <p>Don’t have account?</p>
                    </div>
                    <div>
                      <div className="col-md-9">
                        <Link to="/login">
                          <button className="button-dark">Login</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 accs">
                    <div className="align-items-center flex-column accs">
                      <div className="circle1"></div>
                      <div className="line1"></div>
                      <div className="circle2"></div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="col-md-12">
                      <div className="mb-4">
                        <input placeholder="Name" type="text" className="name w-100" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <input placeholder="Email" type="email" className="email w-100" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <input placeholder="Password" type="password" className="password w-100" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <button className="button-signup w-100">Sign Up</button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <button className="button-signup-google w-100">
                          <img src={Google} alt="Logo" />
                          Sign Up With Google
                        </button>
                      </div>
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
