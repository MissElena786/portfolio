import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import "../mediaQuery.css"

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [hidden, setHidden] = useState(false);
    const toggle = ()=>{
      setHidden(!hidden)
      console.log(hidden)
    }
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width:840px)');
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      handleMediaQueryChange(mediaQuery);
        mediaQuery.addListener(handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []); 
  return (
    <div className={`navbar  ${isMobile ? 'mobile' : 'desktop'}`}> 
         <nav className={`header my-component nav-items `}>
          {isMobile ? 
            <i className="fa-solid fa-bars" onClick={toggle}></i>
            :
            ""
          }
          <div>  
            <img  className='logo' src={logo} alt="logo" />
          </div>
             <ul  className={`my-component nav-items ${hidden ? "nav-hidden" : ""} `}>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/projects">Projects</Link></li>
               <li><Link to="/education">Education</Link></li>
               <li><Link to="/contact">Contact</Link></li>
             </ul>
         </nav>
      
    </div>
  )
}

export default Header
