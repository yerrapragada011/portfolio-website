import React from 'react'
import './Projects.css'

function Projects() {
  const projectList = [
    {
      title: 'Project One',
      description: 'Description for project one',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Description for project two',
      link: '#'
    }
  ]

  return (
    <section id='projects' className='projects'>
      <h2>My Projects</h2>
      <div className='project-grid'>
        {projectList.map((project, index) => (
          <div className='project-card' key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
