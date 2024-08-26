import React from 'react'
import "./About.css"
import myphoto from "../assets/about_image.jpeg"
// import html from "../assets/html-logo-png-3.png"
export default function About() {
  return (
    <div id='About'>
        <h1 className='heading'>About me</h1>
        <main className='main_section'>        
        
        
        <div className='info_section'>
          <h1>Hi, I'm Ankit Jaiswal  </h1>
          <h1>and i'm <sapn>Front end Developer</sapn></h1>

<p className='par_head'>My Journey into Frontend Development:</p>
<p className='par'>While my formal education is in engineering, I discovered a deep interest in web development, particularly in creating intuitive and responsive user interfaces. I’ve dedicated myself to learning and mastering frontend technologies such as HTML, CSS, JavaScript, and React. </p>
<p className='par_head'>Current Projects:</p>
<p className='par'>Currently, I’m working on an online course-selling website using React and the Gemini API. This project has given me the opportunity to delve into API integrations and create a seamless user experience. Additionally, I’ve developed a news website using HTML, CSS, and JavaScript, where I utilized an API to fetch and display real-time news updates.</p>
<p className='par_head'>Future Goals:</p>
<p className='par'>I’m eager to continue growing as a frontend developer by taking on more challenging projects and collaborating with other developers.</p>
<p className='par_head'>Personal Interests:</p>
<p className='par'>When I’m not coding, I enjoy  like music, playing sports, etc..

</p>
        </div>

        <div className='photo_section' data-aos="fade-left">
    <div className='imageHolder'>
      <img className='img_backgound' src={myphoto} alt="" />
      </div>
</div>
        </main>

    </div>
   
      

   

  )
}
