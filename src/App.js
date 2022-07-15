import React from "react";
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DropdownMenu from './components/DropdownMenu';
import { CSSTransition } from 'react-transition-group';
import NavbarFinal from './components/NavbarFinal'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarFinal/>
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/about' exact element={<About/>}></Route>
            <Route path='/projects' exact element={<Projects></Projects>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
 
    </div>
  );
}



export default App;