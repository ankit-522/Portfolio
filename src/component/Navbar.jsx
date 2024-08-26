import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

import menu from "../assets/menu-regular-24.png"
import x_regular from "../assets/x-regular-24.png"

import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function Navbar(){
 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
     
    };
  
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    
    }
  return (
    <div>
     <div className="App">
      <button onClick={toggleSidebar} className='toggle'><img src={menu}/></button>
     
      
    <nav id="navbar">
    
      <h2 data-aos="fade-right">Protfolio</h2>
      
      <ul 

 className={isSidebarOpen ? 'active' : ''}
>
          <button id="closeBtn" onClick={closeSidebar}><img src={ x_regular}/></button>
          < AnchorLink  href='#Home'> <li>Home</li></ AnchorLink >
          < AnchorLink  href='#About'> <li>About</li></ AnchorLink >
          < AnchorLink  href='#Skills'> <li>Skills</li></ AnchorLink >
          < AnchorLink  href='#Projects'> <li>Projects</li></ AnchorLink >
          < AnchorLink  href='#Contact'> <li>Contact</li></ AnchorLink >
      </ul>

     
      </nav>
      </div>
    </div>
  )}
