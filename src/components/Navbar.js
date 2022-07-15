import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
      <nav className='navbar'>
        <ul className='text-white flex justify-around text-3xl'>
          <li>
            LOL
          </li>
          <li>
            LOL2
          </li>
        </ul>
        <ul className='navbar-nav'>
            <Link to='#'>{props.children}</Link>
        </ul>
      </nav>
    );
  }

  export default Navbar