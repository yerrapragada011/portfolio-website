import React from 'react'
import './Work.css'

function Work() {
  return (
    <section id='work' className='work-section roboto-regular'>
      <h2 className='roboto-regular'>Work Experience</h2>

      <div className='work-item'>
        <h3>Systems Engineer Intern</h3>
        <p className='company'>Health Grid | June 2019 - August 2019</p>
        <ul>
          <li>
            Analyzed over 500 HL7 message structures and workflows to understand
            healthcare data exchange standards.
          </li>
          <li>
            Conducted SQL queries on large-scale hospital databases, handling
            datasets with up to 50,000 rows, supporting integration projects.
          </li>
          <li>
            Diagnosed and resolved 10+ HL7 message transmission issues,
            documenting troubleshooting steps.
          </li>
          <li>
            Created comprehensive documentation for HL7 message formats and
            database queries, used by a team of 6 engineers.
          </li>
          <li>
            Collaborated in 15 team meetings and knowledge-sharing sessions,
            contributing to the success of 3 major integration projects.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Work
