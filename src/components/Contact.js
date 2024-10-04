import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faDownload
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <section id='contact' className='contact roboto-regular'>
      <h2 className='roboto-regular'>Contact Me</h2>
      <p>
        <FontAwesomeIcon icon={faPhone} className='icon-contact' />
        <strong>+1 (407) 757-7715</strong>
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} className='icon-contact' />
        <strong>yerrapragada.agasthya@gmail.com</strong>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} className='icon-contact' />
        <a
          href='https://github.com/yerrapragada011'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} className='icon-contact' />
        <a
          href='https://www.linkedin.com/in/agasthya-yerrapragada/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a href='/Agasthya_Yerrapragada_Resume.pdf' download>
          <button className='download-cv-button'>
            <FontAwesomeIcon icon={faDownload} className='icon-download' />
            Download CV
          </button>
        </a>
      </p>
    </section>
  )
}

export default Contact
