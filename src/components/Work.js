import React from 'react'
import './Work.css'

function Work() {
  return (
    <section id="work" className="work-section roboto-regular">
      <h2 className="roboto-regular">Work Experience</h2>

      <div className="work-item">
        <h3>Founder & Full Stack Developer</h3>
        <div className="company-link">
          <a
            href="https://lefent.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            L. E. Fent LLC
          </a>
          <p>| January 2025 - Current</p>
        </div>
        <ul>
          <li>
            Developed a full-stack E-commerce website using React for the
            frontend, Express.js for the backend, and the Shopify GraphQL APIs.
          </li>
          <li>
            Designed and integrated a custom Shopify storefront to enhance user
            experience and optimize product displays.
          </li>
          <li>
            Built a scalable backend with Express.js, enabling seamless
            communication with Shopify GraphQL APIs.
          </li>
          <li>
            Managed product listings, inventory, and order processing through
            Shopify’s GraphQL APIs.
          </li>
          <li>
            Implemented real-time data fetching and dynamic UI updates for
            improved responsiveness.
          </li>
          <li>
            Developed a mobile-responsive and SEO-friendly UI to maximize
            engagement and visibility.
          </li>
          <li>
            Integrated secure payment processing and user authentication
            directly through Shopify to streamline transactions and enhance
            security.
          </li>
        </ul>
      </div>

      <div className="work-item">
        <h3>Systems Engineer Intern</h3>
        <p className="company">Health Grid | June 2019 - August 2019</p>
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
          <li>
            Performed SQL queries to extract relevant data from HL7 messages,
            ensuring seamless integration with hospital systems and improving
            data accessibility for ongoing projects.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Work
