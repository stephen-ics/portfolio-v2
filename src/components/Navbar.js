import React from 'react'
import { Link } from 'react-router-dom'
import './component-styles/Navbar.css'

function Navbar(props) {
    return (
      <nav className='navbar'>
        <ul className='text-white flex justify-around text-3xl'>
          <li className='mx-10'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-10'>
            <Link to='/about'>About</Link>
          </li>
          <li className='mx-10'>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
        <ul className='navbar-nav'>
            <Link to='#'>{props.children}</Link>
        </ul>
      </nav>
    );
  }

  export default Navbar