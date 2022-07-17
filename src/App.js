import React from "react";
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import { BrowserRouter } from 'react-router-dom';
import DropdownMenu from './components/DropdownMenu';
import { CSSTransition } from 'react-transition-group';

import NavbarFinal from './components/NavbarFinal'
import AnimatedRoutes from './components/AnimatedRoutes'



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarFinal/>
        <AnimatedRoutes/>
      </BrowserRouter>
    </div>
  );
}



export default App;