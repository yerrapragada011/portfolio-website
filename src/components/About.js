import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <section id='about' className='about'>
      <h2 className='roboto-regular'>About Me</h2>
      <p className='roboto-regular'>
        I'm <strong>Agasthya Yerrapragada</strong>, a web developer based in
        Orlando, FL. My journey in software development began with a curiosity
        for how websites work, evolving into a passion for creating efficient,
        user-friendly applications.
      </p>
      <p className='roboto-regular'>
        I hold a Bachelor's from the{' '}
        <strong>University of Central Florida</strong> and specialize in HTML,
        CSS, JavaScript, Python, React, and Node.js. I thrive in collaborative
        environments and love learning new technologies.
      </p>
      <p className='roboto-regular'>
        I'm always exploring personal projects and improving my skills. Feel
        free to contact me at <strong>yerrapragada.agasthya@gmail.com</strong>{' '}
        or call me at <strong>+1 (407) 757-7715</strong>.
      </p>
      <div className='technologies'>
        <FontAwesomeIcon icon={faJs} size='2x' />
        <FontAwesomeIcon icon={faHtml5} size='2x' />
        <FontAwesomeIcon icon={faCss3Alt} size='2x' />
        <FontAwesomeIcon icon={faReact} size='2x' />
        <FontAwesomeIcon icon={faNodeJs} size='2x' />
        <FontAwesomeIcon icon={faDatabase} size='2x' />
      </div>
    </section>
  )
}

export default About
