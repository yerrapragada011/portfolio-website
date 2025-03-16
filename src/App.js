import React from 'react'
import './App.css'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Work from './components/Work'
import SkyBackground from './components/SkyBackground'

function App() {
  return (
    <div className="App">
      <SkyBackground />
      <Header />
      <Main />
      <main>
        <About />
        <Work />
        <Projects />
        <Contact />
        <Analytics />
      </main>
    </div>
  )
}

export default App
