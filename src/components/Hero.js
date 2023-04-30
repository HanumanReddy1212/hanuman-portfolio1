import "./HeroStyles.css"
import React from 'react'
import {Link} from "react-router-dom"
import myphoto from "../assests/myphoto.jpeg"

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="my-img" src={myphoto} alt="My Photo" />
        <div className="introduction">
          <p>Hi, I'm Hanuman Reddy Solleti</p> 
        </div>
        <div className="buttons">
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
