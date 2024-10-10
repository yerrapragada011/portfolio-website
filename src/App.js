import React from 'react'
import './App.css'
import './components/Space.css'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Space from './components/Space'
import Work from './components/Work'

function App() {
  return (
    <div className='App'>
      <Space />
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
