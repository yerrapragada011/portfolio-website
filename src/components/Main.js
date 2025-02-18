import React, { useState, useEffect } from 'react'
import './Main.css'

function Main() {
  const [showArrow, setShowArrow] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 1500)

    const arrowTimer = setTimeout(() => {
      setShowArrow(true)
    }, 3000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(arrowTimer)
    }
  }, [])

  return (
    <section id="main" className="main">
      <h1 className="roboto-regular outlined-text">Agasthya Yerrapragada</h1>
      <p className={`roboto-regular opacity ${showText ? 'fade-in' : ''}`}>
        Full-stack developer
      </p>
      <div
        className={`arrow ${showArrow ? 'fade-in' : ''}`}
        onClick={() =>
          document
            .getElementById('about')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L12 22"
            stroke="darkorange"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.8}
          />
          <path
            d="M5 15L12 22L19 15"
            stroke="darkorange"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.8}
          />
        </svg>
      </div>
    </section>
  )
}

export default Main
