import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl">Georgi Isaev</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#journey" className="hover:text-blue-700">Journey</a>
            <a href="#skills" className="hover:text-blue-700">Skills</a>
            <a href="#education" className="hover:text-blue-700">Education</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
            <a href="/test" className="px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Health</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Georgi Isaev. All rights reserved.
      </footer>
    </div>
  )
}
