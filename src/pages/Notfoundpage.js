import React from 'react'
import Footer from '../components/Footer'
import NavLogin from '../components/NavLogin'

export const NotFound = () => {
  return (
    <>
      <NavLogin />
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <h1>404 | Not Found</h1>
      </div>
      <Footer />
    </>
  )
}

export default NotFound