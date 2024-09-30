import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <div>
        <p>
          <a href='#main'>
            <span class='material-symbols-outlined'>home</span>
          </a>
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <a href='#about' className='roboto-regular'>
              About
            </a>
          </li>
          <li>
            <a href='#projects' className='roboto-regular'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='roboto-regular'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
