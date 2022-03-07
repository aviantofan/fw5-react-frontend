import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import { FaChevronLeft } from 'react-icons/fa'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../redux/actions/auth';

const Forgotpasswordpage = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  // const navigate = useNavigate()

  const onForgot = (e) => {
    e.preventDefault()
    const email = e.target.elements['email'].value
    dispatch(forgotPassword(email))
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
                    <form onSubmit={onForgot}>
                      <div className='row justify-content-center'>
                        <div className='col-md-8'>
                          {auth.isError && auth.errorMsg && <div className='alert alert-danger'>{auth.errorMsg}</div>}
                          {!auth.isError && auth.errorMsg && <div className='alert alert-danger'>{auth.errorMsg}</div>}
                        </div>
                      </div>
                      <div className='row justify-content-center'>
                        <div className='col-md-6'>
                          <input placeholder="Enter your email address" name='email' type="email" className="forgotemail w-100" />
                        </div>
                      </div>
                      <div className='row justify-content-center mb-5'>
                        <div className='col-md-6'>
                          <Button type="submit" className="send w-100">Send Link</Button>
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

export default Forgotpasswordpage