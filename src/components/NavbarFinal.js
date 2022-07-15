import Navbar from './Navbar'
import NavItems from './NavItems'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu';
import { FaCog } from 'react-icons/fa'
import React from 'react'

const NavbarFinal = () => {
  return (
    <Navbar>
        <NavItems icon={<FaCog></FaCog>}>
            <DropdownMenu></DropdownMenu>
        </NavItems>
    </Navbar>
  )
}

export default NavbarFinal