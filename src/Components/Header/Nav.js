import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

export default function Nav() {

    const navRef=useRef();

    const nav=[
        {id:1,item:"Workspace"},
        {id:2,item:"Company"},
        {id:3,item:"Packages"},
        {id:4,item:"Photo Gallery"},
        {id:5,item:"Our Blog"},
        {id:6,item:"Contact Us"},
    ]


    const showMenu=()=>{

          navRef.current.classList.toggle("Responsive_nav")

    }
  return (
    <nav className='navigation'>
       <div ref={navRef} className="nav">
            <ul className="nav_bar">
                  {
                    nav.map((menu)=>
                      <li key={menu.id} className='nav_list'>
                        <Link className='nav_item' href="">
                           {menu.item}
                        </Link>
                      </li>
                    )
                  }

                <button className='nav-btn nav-close-btn' onClick={showMenu}>
                        <FaTimes/>
                </button>
            </ul>
       </div>

                <button className='nav-btn' onClick={showMenu}>
                    <FaBars/>
                </button>
    </nav>
  )
}
