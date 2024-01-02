import { useState } from 'react'

import './App.css'
import "./index.css"
import Main from './Portofolio/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Portofolio/Header'
import About from './Portofolio/About'
import Projects from './Portofolio/Projects'
import Education from './Portofolio/Education'
import Contact from './Portofolio/Contact'
import Footer from './Portofolio/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
       <div>
        <BrowserRouter>
          <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/nav' element={<Header/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
   <Footer/>
         {/* <Main/> */}
       </div>
  )
}

export default App
