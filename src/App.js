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
// import Homepage from './pages/Homepage'
// import Vehicletypepage from './pages/Vehicletypepage'
// import Registerpage from './pages/Registerpage'
// import Loginpage from './pages/Loginpage'
import Forgotpasswordpage from './pages/Forgotpasswordpage'
export default class App extends Component {
  render() {
    return (
      <Forgotpasswordpage />
    )
  }
}