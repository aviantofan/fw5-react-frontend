import React, { useEffect } from 'react'
import Homepage from './pages/Homepage'
import Homeloggedpage from './pages/Homeloggedpage'
import Vehicletypepage from './pages/Vehicletypepage'
import Registerpage from './pages/Registerpage'
import Loginpage from './pages/Loginpage'
import Forgotpasswordpage from './pages/Forgotpasswordpage'
import Vehicledetailpage from './pages/Vehicledetailpage'
import Paymentpage from './pages/Paymentpage'
import Historypage from './pages/Historypage'
import Profilepage from './pages/Profilepage'
import Reservationpage from './pages/Reservationpage'
import Vehiclelistpage from './pages/Vehiclelistpage'
import { useDispatch, useSelector } from 'react-redux'
import { unstable_HistoryRouter as HistoryRouter, /*BrowserRouter*/ Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { getDataUser } from './redux/actions/auth'

const App = () => {
  const auth = useSelector(state => state.auth)
  const history = createBrowserHistory({ window })
  const dispatch = useDispatch()
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            results: {
              token
            }
          }
        }
      })
      dispatch(getDataUser(token))
    }
  }, [dispatch, auth.token])
  return (
    <div>
      <HistoryRouter history={history}>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='homeLogged' element={<Homeloggedpage />} />
          <Route path='vehicleType' element={<Vehicletypepage />} />
          <Route path='vehicles' element={<Vehiclelistpage />} />
          <Route path='vehicles/:id' element={<Vehicledetailpage />} />
          <Route path='login' element={<Loginpage />} />
          <Route path='register' element={<Registerpage />} />
          <Route path='forgotPassword' element={<Forgotpasswordpage />} />
          <Route path='payment/:id' element={<Paymentpage />} />
          <Route path='profile' element={<Profilepage />} />
          <Route path='history' element={<Historypage />} />
          <Route path='reservation/:id' element={<Reservationpage />} />
        </Routes>
        {/* </BrowserRouter> */}
      </HistoryRouter>
    </div>
  )
}

export default App