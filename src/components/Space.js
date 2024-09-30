import React, { useEffect } from 'react'
import './Space.css'

function Space() {
  useEffect(() => {
    const spaceContainer = document.querySelector('.space')
    const createStar = () => {
      const star = document.createElement('div')
      star.classList.add('star')

      star.style.top = `${Math.random() * 100}vh`
      star.style.left = `${Math.random() * 100}vw`

      star.style.animationDuration = `${Math.random() * 3 + 2}s`

      spaceContainer.appendChild(star)

      setTimeout(() => {
        star.remove()
      }, 5000)
    }

    const interval = setInterval(createStar, .001)

    return () => clearInterval(interval)
  }, [])

  return <div className='space'></div>
}

export default Space
