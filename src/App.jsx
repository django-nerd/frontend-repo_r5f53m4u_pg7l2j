import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
        <footer className="py-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} • Built with care — Available for freelance & consulting
        </footer>
      </main>
    </div>
  )
}

export default App
