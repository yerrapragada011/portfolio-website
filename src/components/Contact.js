import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <section id='contact' className='contact roboto-regular'>
      <h2 className='roboto-regular'>Contact Me</h2>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        <strong>yerrapragada.agasthya@gmail.com</strong>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} />
        <a
          href='https://github.com/yerrapragada011'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} />
        <a
          href='https://www.linkedin.com/in/agasthya-yerrapragada/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </p>
    </section>
  )
}

export default Contact
