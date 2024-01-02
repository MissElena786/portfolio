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

function Projects() {
  return (
    <div className='main'>
       <div className='project-container' >
       <h1 className='heading'>Projects</h1>
       <div className='owl-carausel'>
       <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
      <img src={ecommerce} alt="img" />
      <div className='inner-item'>
        <h4>Ecommerce</h4>
        <p> ecommerce website which is build on MERN stack</p>
    </div>
    </div>
    <div class='item'>
    <img src={lms} alt="img" />
    <div className='inner-item'>

        <h4>Learning Management System</h4>
        <p> learning management system which is build on MERN stack</p>
    </div>
    </div>
    <div class='item'>
    <img src={movie} alt="img" />
    <div className='inner-item'>
        <h4>Movie Search App</h4>
        <p>movie search app you can search movie by the name</p>
        </div> 
    </div>
    <div class='item'>
    <img src={ecom_react} alt="img" />
    <div className='inner-item'>
        <h4>Ecommerce React frontend</h4>
        <p> ecommerce which is built on react, react-redux. </p>
        </div>    </div>
    <div class='item'>
    <img src={gallery} alt="img" />
    <div className='inner-item'>
        <h4>Gallery App</h4>
        <p> Gallery app the api. All photos fetching by the third Party api</p>
        </div>
    </div>
    <div class='item'>
    <img src={calcy} alt="img" />
    <div className='inner-item'>
        <h4>Calculator </h4>
        <p>this is a calculator. you can perform arithmatic oprations</p>
        </div>    </div>
    <div class='item'>
    <img src={quiz} alt="img" />
    <div className='inner-item'>
        <h4>Quiz App</h4>
        <p> quiz app, solve quiz and get score. dom manupulation project.</p>
        </div>
        
    </div>
    <div class='item'>
    <img src={landscap} alt="img" />
    <div className='inner-item'>
        <h4>Landscap Website</h4>
        <p> landscap website. built on HTML, Css , Javascript, and Node</p>
        </div>    </div>
    <div class='item'>
    <img src={dice} alt="img" />
    <div className='inner-item'>
        <h4>Dice Game</h4>
        <p>Dice game of the 2 players. dom manupulation project. </p>
        </div>    </div>
    <div class='item'>
    <img src={num_gassing} alt="img" />
    <div className='inner-item'>
        <h4>Number Gassing Game</h4>
        <p> number gassing game this is also a dom manupulation project.</p>
        </div>    </div>
    <div class='item'>
    <img src={ecom} alt="img" />
    <div className='inner-item'>
        <h4>Ecomerce website</h4>
        <p>ecommerce website, built on HTML, Css, JavaScript , JQuery etc. </p>
        </div>
    </div>
 
</OwlCarousel>
       </div>
       </div>
      
    </div>
  )
}

export default Projects
