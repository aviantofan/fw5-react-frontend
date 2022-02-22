import React, { Component } from 'react'
import Footer from '../components/Footer'
import Google from '../assets/images/google.png'

export default class Loginpage extends Component {
  render() {
    return (
      <>
        <body>
          <header className="header-login">
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
                        <a href="#">
                          <button className="button-dark">Sign Up</button>
                        </a>
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
                        <input placeholder="Email" type="email" className="email w-100" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-2">
                        <input placeholder="Password" type="password" className="password w-100" />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="mb-5">
                        <a href="#">
                          <p className="forgot w-100">Forgot password?</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <button className="button-login w-100">Login</button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <button className="button-login-google w-100">
                          <img src={Google} alt="Logo" />
                          Login With Google
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
