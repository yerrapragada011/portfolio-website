import React from 'react'
import './Projects.css'

function Projects() {
  const projectList = [
    {
      title: 'Social Media App',
      description: 'Description for project one',
      link: 'https://social-media-six-kappa.vercel.app/'
    },
    {
      title: 'Blog API',
      description: 'Description for project two',
      link: 'https://blog-api-yr9v.vercel.app/'
    }
  ]

  return (
    <section id='projects' className='projects roboto-regular'>
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
