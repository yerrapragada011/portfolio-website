import React, { useState, useEffect } from 'react'
import './Main.css'

function Main() {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id='main' className='main'>
      <h1 className='roboto-regular'>Agasthya Yerrapragada</h1>
      <p className='roboto-regular'>Full-stack developer</p>
      <div
        className={`arrow ${showArrow ? 'fade-in' : ''}`}
        onClick={() =>
          document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
        }
      >
        <svg
          width='30'
          height='30'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 2L12 22'
            stroke='whitesmoke'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5 15L12 22L19 15'
            stroke='whitesmoke'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </section>
  )
}

export default Main
