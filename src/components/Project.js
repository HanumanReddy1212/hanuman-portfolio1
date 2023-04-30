import React from 'react'
import EachProject from './EachProject';
import ProjectsData from './ProjectsData';

const Project = () => {
  return (
<div className="work-container">
  <h1 className="project-heading">Projects</h1>
  <div className="project-container">
    {ProjectsData.map((val, ind) => {
      return (
        <EachProject
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          codelink={val.codelink}
        />
      );
    })}
  </div>
</div>

  )
}

export default Project
