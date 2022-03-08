import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import { FaChevronLeft } from 'react-icons/fa'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../redux/actions/auth';

const Changepassword = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()

  const onChangePassword = (e) => {
    e.preventDefault()
    const email = e.target.elements['email'].value
    const code = e.target.elements['code'].value
    const password = e.target.elements['password'].value
    const confirmPassword = e.target.elements['password'].value
    const data = { email, code, password, confirmPassword }
    dispatch(changePassword(data))
    // navigate('/login')
  }

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
                    <form onSubmit={onChangePassword}>
                      <div className='row justify-content-center'>
                        <div className='col-md-8 mb-3'>
                          <input placeholder="Enter your email address" name='email' type="email" className="forgotemail w-100" />
                        </div>
                      </div>
                      <div className='row justify-content-center'>
                        <div className='col-md-8 mb-3'>
                          <input placeholder="Enter your code reset" name='code' type="text" className="forgotemail w-100" />
                        </div>
                      </div>
                      <div className='row justify-content-center'>
                        <div className='col-md-8 mb-3'>
                          <input placeholder="Enter your password" name='password' type="password" className="forgotemail w-100" />
                        </div>
                      </div>
                      <div className='row justify-content-center'>
                        <div className='col-md-8 mb-3'>
                          <input placeholder="Confirmation your password" name='confirmPassword' type="password" className="forgotemail w-100" />
                        </div>
                      </div>
                      <div className='row justify-content-center mb-5'>
                        <div className='col-md-6'>
                          <Button type="submit" className="send w-100">Change Password</Button>
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

export default Changepassword