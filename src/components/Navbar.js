import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../pictures/Logo.png'
import './component-styles/Navbar.css'

function Navbar(props) {
    return (
      <nav className='navbar'>
        <ul><Link to='/' className='flex items-center'><img src={Logo} className='w-12 rounded-full'/></Link></ul>
        <ul className='text-white flex w-full justify-center text-3xl'>
          <li className='nav-list'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-list'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-list'>
            <Link to='/experiences'>Experience</Link>
          </li>
          <li className='nav-list'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='nav-list'>
            <Link to='/whiteboard'>Whiteboard</Link>
          </li>
        </ul>
        <ul className='navbar-nav'>
            <Link to='#'>{props.children}</Link>
        </ul>
      </nav>
    );
  }

  export default Navbar