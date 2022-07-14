import React from "react";
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DropdownMenu from './components/DropdownMenu';
import { CSSTransition } from 'react-transition-group';


function App() {
  return (
    <div className='test-1'>
      
      <Navbar>
        <NavItems icon='😊'>

        </NavItems>
        <NavItems icon='😊'/>
        <NavItems icon='😊'>
          <DropdownMenu></DropdownMenu>
        </NavItems>
      </Navbar>
    </div>
  );
}



export default App;