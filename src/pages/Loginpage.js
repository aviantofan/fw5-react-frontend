import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Google from '../assets/images/google.png'
import Button from '../components/Button'
import Input from '../components/Input'

export default class Loginpage extends Component {
  state = {
    email: '',
    password: '',
    isLogged: false
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }


  onLogin = (e) => {
    e.preventDefault()
    if (this.state.email === "admin@mail.com" && this.state.password === "1234") {
      this.setState({ isLogged: true })
      this.props.onLogin(true)
    } else {
      window.alert("Email atau password salah!")
      this.props.onLogin(false)
    }
  }
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
                  <div className="col-md-5">
                    <div className="col-md-12">
                      <div className="mb-4">
                        <Input onChange={this.handleEmailChange} placeholder="Email" type="email" className="email form-control w-100" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-2">
                        <Input onChange={this.handlePasswordChange} placeholder="Password" type="password" className="password form-control w-100" />
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
                        <Button onClick={this.onLogin} type='submit' className="login w-100">Login</Button>
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
