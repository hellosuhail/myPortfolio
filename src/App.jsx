import React from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import WhatsApp from './components/Whatsapp'

function App() {
 

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
      <WhatsApp/>
    </div>
  )
}

export default App
