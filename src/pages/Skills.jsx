import React,{useState} from 'react'
import "./Skills.css"


import html from '../assets/html-logo-png-3.png';
import css from '../assets/logo-css.png';
import bootstrap from '../assets/bootstrap-logo.png';
import tailwind from '../assets/Tailwind_CSS_Logo.svg.png';
import javaScript from '../assets/JavaScript-Emblem.png';
import react from '../assets/react-logo-1000-transparent.png';


export default function Skills() {
     const [skills, setSkills] = useState([
        {name: 'HTML', image: html},
        {name: 'CSS', image: css},
        {name: 'Bootstrap', image: bootstrap},
        {name: 'Talwind', image: tailwind},
        {name: 'JavaScript', image:javaScript },
        {name: 'React', image: react},
       
        
     ]);
  return (
    <div id='Skills'>
        <h1>Skills</h1>
    <div id='main' >
       {skills.map((e)=>(
       <div className='header' >
       
        <div  className='Skills_img'data-aos="flip-left">
          <img className='skill_img' src={e.image} alt='Not Found' />
        </div>
        <div className='Skills_Name'>
          <h2>{e.name}</h2>
        </div>
       
       
       </div>))}
    </div>
    </div>
  )
}
