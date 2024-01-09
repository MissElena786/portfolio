import React from 'react'
import "../App.css"



function Main() {
  return (
    <div className='main'>
      <div>
      

      </div>
      <div className='left'>
        <p className='hello'>Hello,</p>
        {/* <p className='name'>  My Name is  <b className='g'>G</b><b className='u'>u</b><b className='l'>l</b><b className='n'>n</b><b className='a'>a</b><b className='z'>z</b> <b className='b'>B</b><b className='a'>a</b><b className='n'>n</b><b className='o'>o</b></p> */}
        <p className='name'>  My Name is <b className='main-name'>Gulnaz Bano</b>  </p>
        <h1 className='developer'> <p>I'm a </p><span></span></h1>
        <p className='para'>
          My name is Gulnaz Bano, I am a Full Stack Web Developer. I have developed many types of projects like Ecommerce websites, Learning Management System, Quiz App, some websites, calculator App,  movie search App, gallery project and pokedex Project etc.
          I have good experience of the Full Stack Web Development by the learn and build, PW(Physics Wallah) Skills foundation.
        </p>

      </div>
      <div className='right'>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/female-developer-5359992-4492091.png?f=webp" alt="image" />
      </div>
    </div>
  )
}

export default Main
