import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { Element } from 'react-scroll'
import Sidebar from './components/Sidebar'


export default function App(){
  const [theme, setTheme] = useState('light')
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
        <Header theme={theme} setTheme={setTheme} />
        {/* <Sidebar/> */}
        <main className="pt-16">
          <div className='p-8'>
            <section id="home"><Home /></section>
          </div>
          <Element name="about"><About /></Element>
          <Element name="services"><Services /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="contact"><Contact /></Element>
        </main>
        <Footer />
      </div>
    </div>
  )
}
