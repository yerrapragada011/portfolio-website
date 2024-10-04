import React, { useEffect, useState, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './Projects.css'

function Projects() {
  const [projects, setProjects] = useState([])

  const projectList = useMemo(
    () => [
      {
        title: 'Social Media App',
        description:
          'An application that allows users to register, login, or login with GitHub. Includes all CRUD operations for posts, comments, followers, and likes.',
        demoLink: 'https://social-media-six-kappa.vercel.app/',
        githubLink: 'https://github.com/yerrapragada011/social-media.git',
        techStack: [faReact, faNodeJs, faDatabase]
      },
      {
        title: 'Blog API',
        description:
          'An application that listens to two separate frontends. A reader frontend that allows you to register, login, view blog posts, and add comments. And an author frontend that allows CRUD operations for posts.',
        demoLink: 'https://blog-api-yr9v.vercel.app/',
        githubLink: 'https://github.com/yerrapragada011/blog-api.git',
        techStack: [faReact, faNodeJs, faDatabase]
      },
      {
        title: 'Messaging App',
        description:
          'An application that allows users to register, login, and view messages. Includes operations to send, receive, and delete messages.',
        demoLink: 'https://messaging-app-mauve.vercel.app/',
        githubLink: 'https://github.com/yerrapragada011/messaging-app.git',
        techStack: [faReact, faNodeJs, faDatabase]
      },
      {
        title: `Where's Waldo?`,
        description:
          'A game application that allows users to select an area on a picture to find Waldo and his friends. Users who find all characters and beat the game get added to the leaderboard.',
        demoLink: 'https://wheres-waldo-mu.vercel.app/',
        githubLink: 'https://github.com/yerrapragada011/wheres-waldo.git',
        techStack: [faReact, faNodeJs, faDatabase]
      },
      {
        title: 'Battleship',
        description: `A game application that allows users to play against a computer. Whoever sinks all the other user's ships first wins!`,
        demoLink: 'https://yerrapragada011.github.io/battleship/',
        githubLink: 'https://github.com/yerrapragada011/battleship.git',
        techStack: [faHtml5, faCss3Alt, faJs]
      },
      {
        title: 'Todo List',
        description:
          'An application that allows users to create todos, create projects, edit todos, delete todos, mark todos as completed, and clear completed todos.',
        demoLink: 'https://yerrapragada011.github.io/todo-list/',
        githubLink: 'https://github.com/yerrapragada011/todo-list.git',
        techStack: [faHtml5, faCss3Alt, faJs]
      }
    ],
    []
  )

  const fetchScreenshot = async (url) => {
    const token = process.env.SCREENSHOT_TOKEN
    const apiUrl = `https://shot.screenshotapi.net/screenshot?token=${token}&url=${encodeURIComponent(
      url
    )}`

    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      return data.screenshot
    } catch (error) {
      console.error('Error fetching screenshot:', error)
      return 'default-screenshot-url.png'
    }
  }

  useEffect(() => {
    const fetchScreenshots = async () => {
      const updatedProjects = await Promise.all(
        projectList.map(async (project) => {
          const image = await fetchScreenshot(project.demoLink)
          return { ...project, image }
        })
      )
      setProjects(updatedProjects)
    }

    fetchScreenshots()
  }, [projectList])

  return (
    <section id='projects' className='projects roboto-regular'>
      <h2 className='roboto-regular'>My Projects</h2>
      <div className='project-grid'>
        {projects.map((project, index) => (
          <div className='project-card' key={index}>
            <div className='project-details'>
              <h3 className='roboto-regular'>{project.title}</h3>
              <p className='roboto-regular'>{project.description}</p>
              <div className='project-links'>
                <button
                  className='project-button'
                  onClick={() => window.open(project.demoLink, '_blank')}
                >
                  View Project
                  <FontAwesomeIcon icon={faExternalLinkAlt} className='icon' />
                </button>
                <button
                  className='project-button'
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  View Code
                  <FontAwesomeIcon icon={faGithub} className='icon' />
                </button>
              </div>
            </div>
            <div className='project-image-wrapper'>
              <a
                href={project.demoLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className='project-image'
                />
              </a>
              <div className='project-icons'>
                {project.techStack.map((icon, idx) => (
                  <FontAwesomeIcon
                    key={idx}
                    icon={icon}
                    className='project-icon'
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
