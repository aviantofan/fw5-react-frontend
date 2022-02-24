// import './App.css';
// import Button from './components/Button';
// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <Button sapa="Selamat Siang" />
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default  App

import React, { Component } from 'react'
import Homepage from './pages/Homepage'
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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='vehicleType' element={<Vehicletypepage />} />
          <Route path='vehicles' element={<Vehiclelistpage />} />
          <Route path='vehicleDetail' element={<Vehicledetailpage />} />
          <Route path='login' element={<Loginpage />} />
          <Route path='register' element={<Registerpage />} />
          <Route path='forgotPassword' element={<Forgotpasswordpage />} />
          <Route path='payment' element={<Paymentpage />} />
          <Route path='profile' element={<Profilepage />} />
          <Route path='history' element={<Historypage />} />
          <Route path='reservation' element={<Reservationpage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}