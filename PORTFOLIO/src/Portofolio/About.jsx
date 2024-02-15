import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

function About() {
   return (
      <div className='main'>
         <div className='about'>
            <div className='upper'>
               <h1>About Me</h1>
               <p>A final Year B. Tech student at Jaipur Engineering College,
                  aspiring to become a full stack web developer.
                  Having experience with programming languages such as c/c++ and JavaScript, as well as
                  web development frameworks or libraries like BootsTrape, jQuery and Node.js.</p>
            </div>
            <div className='skills'>
               <h1 className='skills-heading'>Skills</h1>
               <div className='skills-items'>

                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JavaScript</div>
                  <div>React</div>
                  <div>Node</div>
                  <div>MongoDB</div>
                  <div>MySQL</div>
                  <div>Express</div>
                  <div>Bootstrap</div>
                  <div>Tailwind Css</div>
                  <div>Git</div>
                  <div>Github</div>
                  <div>JQuery</div>
                  <div>C/C++</div>

               </div>
               <div className='btn'>
                  <Link to="https://drive.google.com/drive/u/0/folders/1r1b60LT-to-VL30alxARnpquqiI3JJWF" target='_blank'>
                  <button className='button'> Resume</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
