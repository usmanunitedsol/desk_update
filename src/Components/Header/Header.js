import React from 'react'
import "./Header.scss"

import logo from '../../../src/images/Logo.png'
import Logo from './Logo'
import Headerbuttons from './Headerbuttons'
import Nav from './Nav'
const Header = () => {
  return (
    <>
    <header>
         <div className='headerContainer'>
                   <div className='header'>
                    <div className='top_row'>
                         <Logo/>
                         <Headerbuttons/> 
                    </div>
                    <div className='nav_block'>
                        
                         <Nav/>
                    </div>
                   </div>
         </div>
    </header>
    </>
  )
}

export default Header
