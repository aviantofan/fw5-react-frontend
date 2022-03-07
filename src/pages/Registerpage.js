import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Google from '../assets/images/google.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/auth';

const Registerpage = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const onRegister = (e) => {
    e.preventDefault()
    const name = e.target.elements['name'].value
    const email = e.target.elements['email'].value
    const password = e.target.elements['password'].value
    const data = { name, email, password }
    dispatch(register(data))
  }

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
                        <Button className="dark">Login</Button>
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
                  <form onSubmit={onRegister}>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <Input placeholder="Name" name="name" type="text" className="name w-100" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <Input placeholder="Email" name="email" type="email" className="email w-100" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <Input placeholder="Password" name="password" type="password" className="password w-100" />
                      </div>
                    </div>
                    <div className='col-md-10'>
                      <div>
                        {!auth.isError && auth.errorMsg && <div className='alert alert-success'>{auth.errorMsg}</div>}
                        {auth.isError && auth.errorMsg && <div className='alert alert-danger'>{auth.errorMsg}</div>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <Button type="submit" className="signup w-100">Sign Up</Button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <Button className="signup-google w-100">
                          <img src={Google} alt="Logo" />
                          Sign Up With Google
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

export default Registerpage