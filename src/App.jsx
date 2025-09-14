import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  const [theme, setTheme] = useState('light')
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
        <Header theme={theme} setTheme={setTheme} />
        <main className="pt-28">
          <div className='p-8'>
            <section id="home"><Home /></section>
          </div>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
