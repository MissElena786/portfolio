import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
import logo from "../assets/logo.png"

import "../app.css"

function Header() {
  return (
    <div>
      <header>
         <nav className='navbar'>
          <div>  
            <img  className='logo' src={logo} alt="logo" />
          </div>
             <ul className='nav-items'>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/projects">Projects</Link></li>
               <li><Link to="/education">Education</Link></li>
               <li><Link to="/contact">Contact</Link></li>
             </ul>
         </nav>
      </header>
      
    </div>
  )
}

export default Header
