import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

export default function Nav() {

   

    const nav=[
        {id:1,item:"Workspace"},
        {id:2,item:"Company"},
        {id:3,item:"Packages"},
        {id:4,item:"Photo Gallery"},
        {id:5,item:"Our Blog"},
        {id:6,item:"Contact Us"},
    ]


   
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

            </ul>
       </div>

            
    </nav>
  )
}
