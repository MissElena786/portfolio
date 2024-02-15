import React from 'react'
import "../index.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ecommerce from "../assets/ecommerce (2).png"
import lms from "../assets/lms (2).png"
import quiz from "../assets/quizApp.png"
import ecom from "../assets/ecom.png"
import ecom_react from "../assets/ecom-react.png"
import calcy from "../assets/calculator.png"
import dice from "../assets/dice-game.png"
import num_gassing from "../assets/number-gassing.png"
import movie from "../assets/movie-search (2).png"
import landscap from "../assets/landscap.png"
import gallery from "../assets/gallery.png"
import reciep from "../assets/reciep.png"
import { Link } from 'react-router-dom';

function Projects() {
    
  return (
    <div className='main'>
       <div className='project-container' >
       <h1 className='heading'>Projects</h1>
       <div className='owl-carausel'>
       <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
        <Link to="https://github.com/MissElena786/Ecomerce-website--MERN-"  target='_blank'>
      <img src={ecommerce} alt="img" />
      </Link>
      <div className='inner-item'>
        <h4>Ecommerce</h4>
        <p className='description'> ecommerce website which is build on MERN stack</p>
    </div>
    </div>
    <div className='item'>
        <Link to="https://github.com/MissElena786/LMS"  target='_blank'>
    <img src={lms} alt="img" />

        </Link>
    <div className='inner-item'>

        <h4>Learning Management System</h4>
        <p className='description'> learning management system which is build on MERN stack</p>
    </div>
    </div>
    <div className='item '>
    <Link to="https://movie-search-app-pi-eight.vercel.app/" target='_blank'>

    <img src={movie} alt="img" />
      </Link>
    <div className='inner-item '>
        <h4>Movie Search App</h4>
        <p className='description '>movie search app you can search movie by the name</p>
        </div> 
    </div>
    <div className='item'>
    <Link to="https://ecommerce-website-sand.vercel.app/" target='_blank'>
    <img src={ecom_react} alt="img" />
        </Link>
    <div className='inner-item'>

        <h4>Ecommerce React frontend</h4>
        <p className='description'> ecommerce which is built on react, react-redux. </p>
        </div> 
           </div>
    <div className='item'>
    <Link to="https://gallery-project-eight.vercel.app/" target='_blank'>
    <img src={gallery} alt="img" />
    </Link>
    <div className='inner-item'>
        <h4>Gallery App</h4>
        <p className='description'> Gallery app the api. All photos fetching by the third Party api</p>
        </div>
    </div>
    <div className='item'>
    <img src={calcy} alt="img" />
    <div className='inner-item'>
        <h4>Calculator </h4>
        <p className='description'>this is a calculator. you can perform arithmatic oprations</p>
        </div>  
          </div>
    <div className='item'>
        <Link to="https://github.com/MissElena786/mini-projects/blob/main/QuizApp.html"  target='_blank'>

    <img src={quiz} alt="img" />
        </Link>
    <div className='inner-item'>
        <h4>Quiz App</h4>
        <p className='description'> quiz app, solve quiz and get score. dom manupulation project.</p>
        </div>
        
    </div>
    <div className='item'>
        <Link to="https://github.com/MissElena786/assignment"  target='_blank'>
    <img src={landscap} alt="img" />
        </Link>

    <div className='inner-item'>
        <h4>Landscap Website</h4>
        <p className='description'> landscap website. built on HTML, Css , Javascript, and Node</p>
        </div>  
          </div>
    <div className='item'>
        <Link to="https://github.com/MissElena786/assignment"  target='_blank'>

    <img src ={dice} alt="img" />
        </Link>
    <div className='inner-item'>
        <h4>Dice Game</h4>
        <p className='description'>Dice game of the 2 players. dom manupulation project. </p>
        </div>    </div>
    <div className='item'>
        <Link to="https://github.com/MissElena786/assignment/blob/main/guess.html"  target='_blank'>
    <img src={num_gassing} alt="img" />
        </Link>
    <div className='inner-item'>
        <h4>Number Gassing Game</h4>
        <p className='description'> number gassing game this is also a dom manupulation project.</p>
        </div>    </div>
    <div className='item'>
        <Link to="https://vegetables-website-eight.vercel.app/" target='_blank'>
    <img src={ecom} alt="img" />
      </Link>
    <div className='inner-item'>
        <h4>Ecomerce website</h4>
        <p className='description'>ecommerce website, built on HTML, Css, JavaScript , JQuery etc. </p>
        </div>
    </div>
    <div className='item'>
        <Link to="https://recipe-app.vercel.app/" target='_blank'>
    <img src={reciep} alt="img" />
      </Link>
    <div className='inner-item'>
        <h4>Reciep website</h4>
        <p className='description'>Reciepe website, built on React by third party api. </p>
        </div>
    </div>
 
</OwlCarousel>
       </div>
       </div>
      
    </div>
  )
}

export default Projects
