import React, { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import { Helmet } from "react-helmet";


function App() {

  return (
    <div className=''>
      <Helmet>
        <title>Stephen Ni | Software Developer</title>
        <meta name="description" content="Hello! I'm Stephen! I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer."></meta>
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}



export default App;