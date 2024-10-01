import React from 'react'
import './Projects.css'

function Projects() {
  const projectList = [
    {
      title: 'Social Media App',
      description:
        'An application that allows users to register, login, or login with GitHub. Includes all CRUD operations for posts, comments, followers, and likes.',
      demoLink: 'https://social-media-six-kappa.vercel.app/',
      githubLink: 'https://github.com/yerrapragada011/social-media.git'
    },
    {
      title: 'Blog API',
      description:
        'An appliation that listens to two seperate frontends. A reader frontend that allows you register, login, view blog posts, and add comments. And an author frontend that allows CRUD operations for posts.',
      demoLink: 'https://blog-api-yr9v.vercel.app/',
      githubLink: 'https://github.com/yerrapragada011/blog-api.git'
    },
    {
      title: 'Messaging App',
      description:
        'An appliation that allows users to register, login, and view messages. Includes operations to send, recieve, and delete messages.',
      demoLink: 'https://messaging-app-mauve.vercel.app/',
      githubLink: 'https://github.com/yerrapragada011/messaging-app.git'
    },
    {
      title: `Where's Waldo?`,
      description:
        'A game application that allows users to select an area on a picture to find Waldo and his friends. Users who find all characters and beat the game, get added to the leaderboard.',
      demoLink: 'https://wheres-waldo-mu.vercel.app/',
      githubLink: 'https://github.com/yerrapragada011/wheres-waldo.git'
    },
    {
      title: 'Battleship',
      description: `A game application that allows users to play aganist a computer. Whoever sinks all the other user's ships first, wins!`,
      demoLink: 'https://yerrapragada011.github.io/battleship/',
      githubLink: 'https://github.com/yerrapragada011/battleship.git'
    },
    {
      title: 'Todo List',
      description:
        'An application that allows users to create todos, create projects, edit todos, delete todos, mark todos as completed, and clear completed todos.',
      demoLink: 'https://yerrapragada011.github.io/battleship/',
      githubLink: 'https://github.com/yerrapragada011/todo-list.git'
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
            <div className='project-links'>
            <button
                className='project-button'
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                View Project
              </button>
              <button
                className='project-button'
                onClick={() => window.open(project.githubLink, '_blank')}
              >
                View Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
