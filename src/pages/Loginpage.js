import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Google from '../assets/images/google.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { connect } from 'react-redux'

export const Loginpage = ({ auth, dispatch }) => {

  useEffect(() => {
    console.log(auth);
  })

  const onLogin = (e) => {
    e.preventDefault()
    dispatch({
      type: 'LOGIN',
      payload: {
        email: e.target.elements['email'].value,
        password: e.target.elements['password'].value
      }
    })
  }

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
                      <Link to="/register">
                        <Button className="dark">Sign Up</Button>
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
                {auth.token !== null && <Navigate to="/homeLogged" />}
                <div className="col-md-5">
                  <form onSubmit={onLogin}>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <Input name="email" placeholder="Email" id="email" type="email" className="email form-control w-100" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-2">
                        <Input name="password" placeholder="Password" id="password" type="password" className="password form-control w-100" />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="mb-5">
                        <Link to="/forgotPassword">
                          <p className="forgot w-100">Forgot password?</p>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <Button type='submit' className="login w-100">Login</Button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <Button className="login-google w-100">
                          <img src={Google} alt="Logo" />
                          Login With Google
                        </Button>
                      </div>
                    </div>
                  </form>
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

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage)