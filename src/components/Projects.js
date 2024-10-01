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
    },
    {
      title: 'Messaging App',
      description:
        'An appliation that allows users to register, login, and view messages. Includes operations to send, recieve, and delete messages.',
      link: 'https://messaging-app-mauve.vercel.app/'
    },
    {
      title: `Where's Waldo?`,
      description:
        'A game application that allows users to select an area on a picture to find Waldo and his friends. Users who find all characters and beat the game, get added to the leaderboard.',
      link: 'https://wheres-waldo-mu.vercel.app/'
    }
  ]

  return (
    <section id='projects' className='projects roboto-regular'>
      <h2 className='roboto-regular'>My Projects</h2>
      <div className='project-grid'>
        {projectList.map((project, index) => (
          <div className='project-card' key={index}>
            <h3 className='roboto-regular'>{project.title}</h3>
            <p className='roboto-regular'>{project.description}</p>
            <a
              className='roboto-regular'
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
