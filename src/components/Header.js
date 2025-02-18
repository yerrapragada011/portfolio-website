import React, { useState, useEffect } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setShowHeader(true)
    }, 300)

    return () => clearTimeout(fadeInTimer)
  }, [])

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <header className={`header ${showHeader ? 'fade-in' : ''}`}>
        <div className="first-div">
          <p>
            <a href="#main">
              <span className="material-symbols-outlined">home</span>
            </a>
          </p>
        </div>
        <nav className="desktop-nav">
          <ul>
            <li>
              <a href="#about" className="roboto-regular">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="roboto-regular">
                Work
              </a>
            </li>
            <li>
              <a href="#projects" className="roboto-regular">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="roboto-regular">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="hamburger-icon" onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>

      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <button className="close-drawer" onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <nav className="drawer-nav">
          <ul>
            <li>
              <a
                href="#about"
                onClick={toggleDrawer}
                className="roboto-regular"
              >
                About
              </a>
            </li>
            <li>
              <a href="#work" onClick={toggleDrawer} className="roboto-regular">
                Work
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleDrawer}
                className="roboto-regular"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleDrawer}
                className="roboto-regular"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`drawer-backdrop ${isDrawerOpen ? 'show-backdrop' : ''}`}
        onClick={toggleDrawer}
      ></div>
    </>
  )
}

export default Header
