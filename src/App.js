
import React, { useState } from 'react';
import './App.css';


import Navbar from './components/Navbar';
import About from './components/About';
import Inputs from './components/inputs';
import SkyHigh from './components/SkyHigh';
import {
 Routes,
  Route,
  Link
} from "react-router-dom";



const App = () => {
  return (
    <>
    <div className="container">

  < Inputs/>
    </div>
    </>
  );
};

// function App() {
  
//   return (
// <>
//    <Router>
//       <Navbar />
//       <div className="contaoner">

    
//         <Switch>
//           <Route path="/about">  
//           <About/>
          
//           </Route>
//           <Route path="/" >
          
//            <SkyHigh/>

//           </Route>
//         </Switch>
//         </div >
       
//         </Router>
        
//         </>

//         );
// }

        export default App;
