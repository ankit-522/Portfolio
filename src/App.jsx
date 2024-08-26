
import React,{useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'

import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

import Navbar from "./component/Navbar"
export default function App() {

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])


  return (


    <div className='app-container '>

    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
   <Contact/>
    </div>
  )
}
