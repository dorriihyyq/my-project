import React from 'react';

function ProjectCard(props) {
  return (
    <div className='project-card'>
      <img src={props.pic} id='project-pic'></img>
      <h2>Проект {props.number}</h2>
      <p>{props.info}</p>
    </div>

  )
}

export default ProjectCard