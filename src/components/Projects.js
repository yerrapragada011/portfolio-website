import React from 'react'
import './Projects.css'

function Projects() {
  const projectList = [
    {
      title: 'Social Media App',
      description:
        'An application that allows users to register, login, or login with GitHub. Includes all CRUD operations for posts, comments, followers, and likes.',
      link: 'https://social-media-six-kappa.vercel.app/'
    },
    {
      title: 'Blog API',
      description:
        'An appliation that listens to two seperate frontends. A reader frontend that allows you register, login, view blog posts, and add comments. And an author frontend that allows CRUD operations for posts.',
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
