import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="static inset-0 -z-10 min-h-screen w-full px-8 py-24 bg-[rgb(10,15,44)] ">
        <Navbar/>
        <Hero/>
        <About/>
        <Education/>
        <Skills/>
      </div>
  )
}

export default App
