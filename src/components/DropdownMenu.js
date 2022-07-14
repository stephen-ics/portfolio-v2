import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect, useRef } from 'react';
import {FaApple, FaArrowAltCircleLeft} from 'react-icons/fa'

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span  className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </a>
        )

    }
  return (
    <div className='dropdown' style={{ height:menuHeight }} ref={dropdownRef}>
        <CSSTransition 
        in={activeMenu === 'main'}  
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}>
            <div className='menu'>
                <DropdownItem
                leftIcon={<FaApple/>}
                >My Profile
                </DropdownItem>
                <DropdownItem
                leftIcon={<FaApple/>}
                goToMenu="settings">
                    Settings
                </DropdownItem>
            </div>
        </CSSTransition>
        
        <CSSTransition 
        in={activeMenu === 'settings'}  
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}>
            <div className='menu'>
                <DropdownItem leftIcon={<FaArrowAltCircleLeft/>}
                goToMenu="main">
                    S
                </DropdownItem>
                <DropdownItem>Hah</DropdownItem>
                <DropdownItem
                leftIcon="L4"
                rightIcon="R2">
                    Content
                </DropdownItem>
            </div>
        </CSSTransition>
    </div>
  )
}

export default DropdownMenu