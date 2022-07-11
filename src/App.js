import React from "react";
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <Navbar>
      <NavItems icon='A'/>
      <NavItems icon='B'/>
      <NavItems icon='C'/>
    </Navbar>
  );
}



export default App;