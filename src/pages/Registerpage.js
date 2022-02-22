import React, { Component } from 'react'
import Footer from '../components/Footer'
import Google from '../assets/images/google.png'

export default class Registerpage extends Component {
  render() {
    return (
      <>
        <body>
          <header class="header-register">
            <div class="header-content">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <h1 class="heading w-100">Let’s Explore <br /> The World</h1>
                    </div>
                    <div class="mb-2">
                      <p>Don’t have account?</p>
                    </div>
                    <div>
                      <div class="col-md-9">
                        <a href="#">
                          <button class="button-dark">Login</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 accs">
                    <div class="align-items-center flex-column accs">
                      <div class="circle1"></div>
                      <div class="line1"></div>
                      <div class="circle2"></div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="col-md-12">
                      <div class="mb-4">
                        <input placeholder="Name" type="text" class="name w-100" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-4">
                        <input placeholder="Email" type="email" class="email w-100" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-4">
                        <input placeholder="Password" type="password" class="password w-100" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-4">
                        <button class="button-signup w-100">Sign Up</button>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div>
                        <button class="button-signup-google w-100">
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
