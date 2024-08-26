import React from 'react'
import "./Contact.css"
import github from "../assets/github-logo-24.png"
import linkedin from "../assets/linkedin-square-logo-24.png"
import email from "../assets/envelope-solid-24.png"

export default function Contact() {
  return (
    <div id='Contact'>
      <h1>Contact me</h1>
      <main className='inco-box'>
      <div className='icon' data-aos="fade-up">
        <a href='https://github.com/ankit-522' target='_blank'><img src={github}/></a>
        <a href='https://www.linkedin.com/in/ankit-jaiswal-a02312280/' target='_blank'><img src={linkedin}/></a>
        <a href='mailto:ankit7878989@gmail.com' target='_blank' ><img src={email}/></a>
      </div>
      </main>
    </div>
  )
}
