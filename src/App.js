import React, { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import NavbarFinal from './components/NavbarFinal'
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'


function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}



export default App;