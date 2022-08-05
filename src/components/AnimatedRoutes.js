import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Experiences from '../pages/Experiences'
import ErrorPage from '../pages/ErrorPage'
import ExperiencePage from '../pages/ExperiencePage'

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence 
        exitBeforeEnter
        initial={false}
    >
        <Routes location={location} key={location.pathname}>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/about' exact element={<About/>}></Route>
            <Route path='/projects' exact element={<Projects></Projects>}></Route>
            <Route path='/experiences' exact element={<Experiences></Experiences>}></Route>
            <Route path='/experiences/:id' exact element={<ExperiencePage></ExperiencePage>}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes