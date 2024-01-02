import React from 'react'
import logo from "../assets/logo.png"


function Footer() {

  const date = new Date()
    const year = date.getFullYear()
  return (
    <div className='footer-container'> 
              <footer class="footer">
            <div>
            <img  className='logo' src={logo} alt="logo" />
            </div>
            <div class="footer-content">
                <p> &copy; {year} By Gulnaz Bano</p>
            </div>
            <div class="footer-icon">
                <a href="https://github.com/MissElena786" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="https://www.linkedin.com/feed/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://instagram.com/elena_of_islam.786?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
                
        </footer>

    </div>
  )
}

export default Footer
