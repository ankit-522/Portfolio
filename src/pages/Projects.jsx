import React,{useState} from "react";
import "./Projects.css"
import Protfolio_img from "../assets/protfolio_img.png"
import lms_img from "../assets/lms_img.png"

export default function Projects() {

  let [project,setproject] = useState([
    {
      "project_img":Protfolio_img,
      "project_title":"My Protfolio",
      "project_detale":" This site itself is a testament to my skills and creativity. It showcases my work, provides insights into my skills, and offers a way to connect with me. Built using React, this portfolio highlights my ability to design and develop responsive and engaging user interfaces.",
      "project_view":"hi",
      "project_github":"hi",
    },
    {
      "project_img":lms_img,
      "project_title":"LMS (RISE UP)",
      "project_detale":"Created an online course-selling platform using React, focusing on delivering an engaging user experience. Integrated the Gemini API to provide AI-powered help and definitions, enhancing accessibility and usability.  Highlighted skills in building responsive, user-centric applications. Effectively utilized APIs to add advanced features.",
      "project_view":"https://ankit-lms-main.vercel.app/",
      "project_github":"https://github.com/ankit-522/ankit-lms-main",
    },
   
  ])

  

  return (
    <div id="Projects">
      <h1>Projects</h1>
      {
        project.map((e)=>(
          <div className="main_cart"  data-aos="fade-up">

      <div className="project_cart" data-aos="zoom-in-up">
        <img src={e.project_img} alt=""  />
        <section>
       <h2>{e.project_title}</h2> 
       <p> {e.project_detale}</p>
       </section>
        </div>


        <div className="btn_group">
        <a className="project_btn" href={e.project_view} target="_blank"> View Project</a>
        <a className="project_btn" href={e.project_github} target="_blank">View Code</a>
        </div>

      </div>
      ))
    }
          </div>
  );
}
