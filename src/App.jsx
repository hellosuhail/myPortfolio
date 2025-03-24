import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#130335]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
    </div>
  )
}

export default App
