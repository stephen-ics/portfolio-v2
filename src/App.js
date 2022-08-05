import React from "react";
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import { BrowserRouter } from 'react-router-dom';
import DropdownMenu from './components/DropdownMenu';
import { CSSTransition } from 'react-transition-group';

import NavbarFinal from './components/NavbarFinal'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'


function App() {
  return (
    <div className='h-full'>
      <BrowserRouter>
        <NavbarFinal/>
        <AnimatedRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}



export default App;