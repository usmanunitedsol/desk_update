import React,{useState,useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import ImageBlock from '../Global/ImageBlock';
import { Spin as Hamburger } from 'hamburger-react'


export default function Nav() {


 
  const [windowWidth,setWindowWidth]=useState(typeof window!=="undefined"?window.innerWidth:null);
  const [isNavVisible, setIsNavVisible] = useState(false);


  const toggleNav = () => {
    setIsNavVisible(!isNavVisible); // Toggle the visibility when the button is clicked
  };



  useEffect(() => {
    function handleResize()
    {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize",handleResize);

  
    return () => {
      window.removeEventListener("resize",handleResize);
    }
  }, [])
  

    const nav=[
        {id:1,item:"Workspace"},
        {id:2,item:"Company"},
        {id:3,item:"Packages"},
        {id:4,item:"Photo Gallery"},
        {id:5,item:"Our Blog"},
        {id:6,item:"Contact Us"},
    ]


    const menuIcon ='images/menu.png';
  return (
    <nav className="navigation">
      {windowWidth <= 1024 ? (
        <div className="menu_icon" onClick={toggleNav}>
        <Hamburger  />
        </div>
      ) : (
        ""
      )}

      <div className="nav">
        {windowWidth <= 1024 ? ( // Adjust the breakpoint (768) as needed
          // Render mobile navigation
          isNavVisible && (
            <div className="mobile-nav">
              <ul className="mobile-nav-bar">
                {nav.map((menu) => (
                  <li key={menu.id} className="mobile-nav-list">
                    <Link className="mobile-nav-item" href="">
                      {menu.item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        ) : (
          // Render desktop navigation
          <ul className="nav_bar">
            {nav.map((menu) => (
              <li key={menu.id} className="nav_list">
                <Link className="nav_item" href="">
                  {menu.item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
