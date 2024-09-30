import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <header className={`header ${showHeader ? 'fade-in' : ''}`}>
      <div>
        <p>
          <a href='#main'>
            <span className='material-symbols-outlined'>home</span>
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
