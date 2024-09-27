import React from 'react'
import './About.css'

function About() {
  return (
    <section id='about' className='about'>
      <h2>About Me</h2>
      <p>
        Hello! I'm <strong>Agasthya Yerrapragada</strong>, a motivated and
        self-taught web developer based in Orlando, FL. My journey in software
        development began with a curiosity to understand how websites work, and
        it has evolved into a passionate career dedicated to creating efficient
        and user-friendly web applications.
      </p>
      <p>
        With a Bachelor's Degree from the{' '}
        <strong>University of Central Florida</strong>, I have developed a
        strong foundation in web technologies. I am proficient in HTML, CSS, and
        JavaScript, and I leverage frameworks like React and Node.js to build
        dynamic applications. I thrive in collaborative environments, where I
        can learn from others and share my knowledge.
      </p>
      <p>
        I recently completed an internship as a Systems Engineer at Health Grid,
        where I gained valuable experience analyzing HL7 message structures,
        conducting SQL queries on large databases, and collaborating on
        integration projects.
      </p>
      <p>
        In my spare time, I enjoy working on personal projects, such as a
        shopping cart application and a blog API, where I've implemented
        features that enhance user experience and optimize performance.
      </p>
      <p>
        I am always eager to learn new technologies and improve my skills, and I
        look forward to the opportunity to contribute to innovative projects in
        the web development field. Feel free to reach out to me at{' '}
        <strong>yerrapragada.agasthya@gmail.com</strong> or connect with me via
        my social media profiles!
      </p>
      <div className='contact-info'>
        <h3>Contact Information</h3>
        <p>📍 12073 White Wave Pt, Orlando, FL, 32828</p>
        <p>📧 yerrapragada.agasthya@gmail.com</p>
        <p>📞 407-757-7715</p>
      </div>
    </section>
  )
}

export default About
