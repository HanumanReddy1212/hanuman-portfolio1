import "./EachProjectStyles.css"
import React from 'react'
import { NavLink } from 'react-router-dom';

const EachProject = (props) => {
  console.log(props.text)
  console.log(props.codelink)
  return (
<div className="project-card">
  <img src={props.imgsrc} alt="image" />
  <h2 className="project-title">{props.title}</h2>
  <div className="pro-details">
    <p>{props.text}</p>
    <div className="pro-btns">
      <NavLink to={props.codelink} className="btn">
        Code
      </NavLink>
    </div>
  </div>
</div>

  )
}

export default EachProject
