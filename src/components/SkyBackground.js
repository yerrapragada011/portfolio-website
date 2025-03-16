import React, { useState, useEffect } from 'react'
import './SkyBackground.css'

const SkyBackground = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="sky">
      <div
        className="sky-layer sky-day"
        style={{ opacity: scrollY < 700 ? 1 : 0 }}
      ></div>
      <div
        className="sky-layer sky-sunset"
        style={{ opacity: scrollY >= 700 && scrollY < 3000 ? 1 : 0 }}
      ></div>
      <div
        className="sky-layer sky-night"
        style={{ opacity: scrollY >= 3000 ? 1 : 0 }}
      ></div>

      {scrollY < 700 && <div className="clouds"></div>}
      {scrollY >= 3000 && <div className="stars"></div>}

      <div className={`sun ${scrollY >= 700 ? 'hide' : ''}`}></div>
      <div className={`moon ${scrollY >= 3000 ? 'show' : ''}`}></div>
    </div>
  )
}

export default SkyBackground
