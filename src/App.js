

import React, { Component } from 'react'
import Homepage from './pages/Homepage'
// import Homeloggedpage from './pages/Homeloggedpage'
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
import { unstable_HistoryRouter as HistoryRouter, /*BrowserRouter*/ Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'
export default class App extends Component {
  // state = {
  //   isLogged: false,
  //   greetings: ''
  // }
  // toggle = () => {
  //   this.setState({ isLogged: !this.state.isLogged })
  // }
  // componentDidMount() {
  //   console.log(this.props)
  // }
  history = createBrowserHistory()
  render() {
    return (
      <div>
        <HistoryRouter history={this.history}>
          {/* {!this.state.isLogged && <Homepage onLogin={(value) => { this.setState({ isLogged: value }) }} />}
          {this.state.isLogged && <Homeloggedpage />} */}
          {/* <BrowserRouter> */}
          <Routes>
            <Route path='/' element={<Homepage />} />
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
}