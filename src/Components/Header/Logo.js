import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/Logo.png"


export default function Logo() {
 
  return (
   
    <>
      <div className='head_logo'>
        <Link href='/'><picture>
            
               <img src={logo} alt='home'/>
            
            </picture></Link>
        
      </div>
    </>
  )
}
