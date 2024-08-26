import React from 'react'
import "./Home.css"
import mainphoto from "../assets/font photo.png"
import ankit from "../component/pdf/Ankit Cv.pdf"


export default function Home() {
  return (
    <div id="Home">
    <div className='img' data-aos="zoom-in-down">
      <img src={mainphoto} alt='Not Found' />
    </div>
      <div className='introduction_head'><h1>Welcome to My Portfolio</h1>
      <a href={ankit} download="Ankit Cv.pdf" className='download_btn'>Download Resume</a></div>
     <div className='introduction_para'> <p className='home_p'>Hello! I'm Ankit Jaiswal, a passionate and creative frontend developer with a keen eye for design and a love for coding. As a fresher in the world of web development, I am dedicated to building visually appealing, user-friendly, and responsive websites.</p>
     
      </div>
    </div>
  )
}
